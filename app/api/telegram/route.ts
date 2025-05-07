

import { NextResponse } from "next/server";

// Telegram bot credentials
const BOT_TOKEN = "7956435122:AAGI_xrtZGTN-pGDa1h3PZjVLi5eQWaxwx8";
const CHAT_ID = "1822569746";

// Markdown uchun maxsus belgilarni escape qilish funksiyasi
const escapeMarkdown = (text) =>
  text.replace(/([_*[\]()~`>#+=|{}.!-])/g, "\\$1");

export async function POST(request) {
  try {
    const data = await request.json();

    // Location ma'lumotlarini boshqarish
    let locationText = data.address ? escapeMarkdown(data.address) : "Location not provided";
    let googleMapsLink = "";

    // Koordinatalarni tekshirish va Google Maps havolasini yaratish
    if (data.location && data.location.includes("(") && data.location.includes(")")) {
      // Koordinatalarni ajratish uchun regex
      const coordsMatch = data.location.match(/\((-?\d+\.\d+),\s*(-?\d+\.\d+)\)/);

      if (coordsMatch && coordsMatch.length === 3) {
        const latitude = parseFloat(coordsMatch[1]);
        const longitude = parseFloat(coordsMatch[2]);

        // Koordinatalarni validatsiya qilish
        if (
          !isNaN(latitude) &&
          !isNaN(longitude) &&
          latitude >= -90 &&
          latitude <= 90 &&
          longitude >= -180 &&
          longitude <= 180
        ) {
          // Google Maps havolasini yaratish
          googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
          // Koordinatalarni locationText ga qo'shish
          locationText += `\n${escapeMarkdown(data.location)}`;
        } else {
          console.warn("Invalid coordinates:", data.location);
        }
      } else {
        console.warn("Could not parse coordinates:", data.location);
      }
    }

    // Telegram uchun xabarni formatlash
    const message = `
🆕 *New Service Request*

*Service:* ${escapeMarkdown(data.serviceName || "Not provided")}
*Customer:* ${escapeMarkdown(data.name || "Not provided")}
*Phone:* ${escapeMarkdown(data.phone || "Not provided")}
*Location:* ${locationText}${googleMapsLink ? `\n[Google Maps](${googleMapsLink})` : ""}
*Preferred Time:* ${escapeMarkdown(data.serviceTime || "Not provided")}

*Additional Information:*
${escapeMarkdown(data.additionalInfo || "None provided")}
    `.trim();

    // Telegramga yuborish
    const telegramResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramData.ok) {
      console.error("Telegram API error:", telegramData);
      return NextResponse.json(
        { success: false, message: "Failed to send message to Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}