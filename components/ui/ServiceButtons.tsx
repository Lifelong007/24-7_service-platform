// components/ServiceButtons.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Send, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ServiceButtons() {
  const { t } = useLanguage()

  const handleCall = () => {
    window.location.href = "tel:+998901234567"
  }

  const handleTelegram = () => {
    window.open("https://t.me/your_username", "_blank")
  }

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {/* Telefon tugmasi */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleCall}
        className="rounded-full"
      >
        <Phone className="w-5 h-5" />
      </Button>

      {/* Asosiy tugma */}
      <Button
        size="lg"
        className="animate-bounce-slow"
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        {t("exploreServices")}
      </Button>

      {/* Telegram tugmasi */}
      <Button
        variant="outline"
        size="icon"
        onClick={handleTelegram}
        className="rounded-full"
      >
        <Send className="w-5 h-5" />
      </Button>
    </div>
  )
}
