

// // "use client"

// // import { useState } from "react"
// // import Link from "next/link"
// // import { Send, Phone } from "lucide-react"
// // import { useLanguage } from "@/contexts/language-context"
// // import AboutUsSection from "@/components/about-us-section"
// // import LanguageSelector from "@/components/language-selector"
// // import ServiceCard from "@/components/service-card"
// // import ServiceForm from "@/components/service-form"
// // import { Button } from "@/components/ui/button"
// // import { servicesList } from "@/lib/data"
// // import { useToast } from "@/hooks/use-toast"

// // export default function Home() {
// //   const [selectedService, setSelectedService] = useState<string | null>(null)
// //   const { t } = useLanguage()
// //   const { toast } = useToast()

// //   const handleServiceSelect = (serviceId: string) => {
// //     setSelectedService(serviceId)
// //     document.getElementById("service-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
// //   }

// //   const handleCall = () => {
// //     window.location.href = "tel:+998881015199"
// //   }

// //   const handleTelegram = () => {
// //     window.open("https://t.me/Bkk5199", "_blank")
// //   }

// //   return (
// //     <main className="min-h-screen">
// //       {/* Header */}
// //       <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
// //         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
// //           <div className="flex items-center gap-2">
// //             <img src="/images/about-us.png" alt="AL-ANSOR STROY" className="h-8 w-auto" />
// //             <h1 className="text-lg font-bold">24/7 Service</h1>
// //           </div>
// //           <nav className="flex items-center gap-6">
// //             <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
// //               {t("services")}
// //             </Link>
// //             <Link href="#about-us" className="text-sm font-medium hover:text-primary transition-colors">
// //               {t("aboutUs")}
// //             </Link>
// //             <Link href="#service-form" className="text-sm font-medium hover:text-primary transition-colors">
// //               {t("requestService")}
// //             </Link>
// //             <LanguageSelector />
// //           </nav>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden pt-16">
// //         <div
// //           className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70 mix-blend-multiply"
// //           style={{
// //             backgroundImage: "url('/images/backround.jpg')",
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //             backgroundRepeat: "no-repeat",
// //           }}
// //         />
// //         <div className="container relative z-10 mx-auto px-4 text-center">
// //           <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in">{t("heroTitle")}</h1>
// //           <p className="text-xl md:text-2xl text-blue/90 mb-8 max-w-2xl mx-auto">{t("heroSubtitle")}</p>
// //           {/* Telefon, Markaziy tugma, Telegram */}
// //           <div className="flex items-center justify-center gap-4 mt-6">
// //             <Button variant="outline" size="icon" onClick={handleCall} className="rounded-full">
// //               <Phone className="w-5 h-5" />
// //             </Button>
// //             <Button
// //               size="lg"
// //               className="animate-bounce-slow"
// //               onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
// //             >
// //               {t("exploreServices")}
// //             </Button>
// //             <Button variant="outline" size="icon" onClick={handleTelegram} className="rounded-full">
// //               <Send className="w-5 h-5" />
// //             </Button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section id="services" className="py-16 bg-muted/30">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("ourServices")}</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {servicesList.map((service) => (
// //               <ServiceCard
// //                 key={service.id}
// //                 service={service}
// //                 onSelect={() => handleServiceSelect(service.id)}
// //                 isSelected={selectedService === service.id}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* About Us Section */}
// //       <AboutUsSection />

// //       {/* Service Form Section */}
// //       <section id="service-form" className="py-16 bg-background">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("requestService")}</h2>
// //           {selectedService ? (
// //             <ServiceForm
// //               serviceId={selectedService}
// //               onSubmitSuccess={() => {
// //                 setSelectedService(null)
// //                 toast({
// //                   title: t("requestSubmitted"),
// //                   description: t("requestSuccess"),
// //                 })
// //               }}
// //             />
// //           ) : (
// //             <div className="text-center max-w-md mx-auto p-8 border border-border rounded-lg shadow-sm">
// //               <h3 className="text-xl font-medium mb-4">{t("selectService")}</h3>
// //               <p className="text-muted-foreground mb-6">{t("pleaseSelect")}</p>
// //               <Button
// //                 variant="outline"
// //                 onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
// //               >
// //                 {t("viewServices")}
// //               </Button>
// //             </div>
// //           )}
// //         </div>
// //       </section>

// //       {/* Contact Section */}
// //       <section className="py-16 bg-primary text-white">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("needHelp")}</h2>
// //           <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">{t("supportTeam")}</p>
// //           <a href="https://t.me/Lifelong007" target="_blank" rel="noopener noreferrer">
// //             <Button variant="secondary" size="lg" className="group">
// //               {t("contactUs")} <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
// //             </Button>
// //           </a>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="py-8 bg-secondary-foreground text-white">
// //         <div className="container mx-auto px-4">
// //           <div className="flex flex-col md:flex-row justify-between items-center">
// //             <div className="mb-4 md:mb-0">
// //               <h3 className="text-xl font-bold">{t("heroTitle")}</h3>
// //               <p className="text-white/70">
// //                 © {new Date().getFullYear()} {t("allRightsReserved")}
// //               </p>
// //             </div>
// //             <div className="flex space-x-4">
// //               <Link href="#" className="hover:text-white/80 transition-colors">
// //                 {t("terms")}
// //               </Link>
// //               <Link href="#" className="hover:text-white/80 transition-colors">
// //                 {t("privacy")}
// //               </Link>
// //               <Link href="#" className="hover:text-white/80 transition-colors">
// //                 {t("faq")}
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </main>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Send, Phone, Instagram, Youtube, Twitter, Facebook } from "lucide-react"
// import { useLanguage } from "@/contexts/language-context"
// import AboutUsSection from "@/components/about-us-section"
// import LanguageSelector from "@/components/language-selector"
// import ServiceCard from "@/components/service-card"
// import ServiceForm from "@/components/service-form"
// import { Button } from "@/components/ui/button"
// import { servicesList } from "@/lib/data"
// import { useToast } from "@/hooks/use-toast"

// export default function Home() {
//   const [selectedService, setSelectedService] = useState<string | null>(null)
//   const { t } = useLanguage()
//   const { toast } = useToast()

//   const handleServiceSelect = (serviceId: string) => {
//     setSelectedService(serviceId)
//     document.getElementById("service-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
//   }

//   const handleCall = () => {
//     window.location.href = "tel:+998881015199"
//   }

//   const handleTelegram = () => {
//     window.open("https://t.me/Bkk5199", "_blank")
//   }

//   return (
//     <main className="min-h-screen">
//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
//         <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <img src="/images/about-us.png" alt="AL-ANSOR STROY" className="h-8 w-auto" />
//             <h1 className="text-lg font-bold">24/7 Service</h1>
//           </div>
//           <nav className="flex items-center gap-6">
//             <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
//               {t("services")}
//             </Link>
//             <Link href="#about-us" className="text-sm font-medium hover:text-primary transition-colors">
//               {t("aboutUs")}
//             </Link>
//             <Link href="#service-form" className="text-sm font-medium hover:text-primary transition-colors">
//               {t("requestService")}
//             </Link>
//             <LanguageSelector />
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden pt-16">
//         <div
//           className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70 mix-blend-multiply"
//           style={{
//             backgroundImage: "url('/images/backround.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />
//         <div className="container relative z-10 mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in">{t("heroTitle")}</h1>
//           <p className="text-xl md:text-2xl text-blue/90 mb-8 max-w-2xl mx-auto">{t("heroSubtitle")}</p>
//           {/* Telefon, Markaziy tugma, Telegram */}
//           <div className="flex items-center justify-center gap-4 mt-6">
//             <Button variant="outline" size="icon" onClick={handleCall} className="rounded-full">
//               <Phone className="w-5 h-5" />
//             </Button>
//             <Button
//               size="lg"
//               className="animate-bounce-slow"
//               onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
//             >
//               {t("exploreServices")}
//             </Button>
//             <Button variant="outline" size="icon" onClick={handleTelegram} className="rounded-full">
//               <Send className="w-5 h-5" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("ourServices")}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {servicesList.map((service) => (
//               <ServiceCard
//                 key={service.id}
//                 service={service}
//                 onSelect={() => handleServiceSelect(service.id)}
//                 isSelected={selectedService === service.id}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <AboutUsSection />

//       {/* Service Form Section */}
//       <section id="service-form" className="py-16 bg-background">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("requestService")}</h2>
//           {selectedService ? (
//             <ServiceForm
//               serviceId={selectedService}
//               onSubmitSuccess={() => {
//                 setSelectedService(null)
//                 toast({
//                   title: t("requestSubmitted"),
//                   description: t("requestSuccess"),
//                 })
//               }}
//             />
//           ) : (
//             <div className="text-center max-w-md mx-auto p-8 border border-border rounded-lg shadow-sm">
//               <h3 className="text-xl font-medium mb-4">{t("selectService")}</h3>
//               <p className="text-muted-foreground mb-6">{t("pleaseSelect")}</p>
//               <Button
//                 variant="outline"
//                 onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 {t("viewServices")}
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-16 bg-primary text-white relative">
//         <div className="absolute top-4 left-4 flex gap-4">
//           <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
//               <Send className="w-5 h-5" />
//             </Button>
//           </a>
//           <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
//               <Instagram className="w-5 h-5" />
//             </Button>
//           </a>
//           <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
//               <Youtube className="w-5 h-5" />
//             </Button>
//           </a>
//           <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer">
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
//               <Twitter className="w-5 h-5" />
//             </Button>
//           </a>
//           <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
//             <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
//               <Facebook className="w-5 h-5" />
//             </Button>
//           </a>
//         </div>
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("needHelp")}</h2>
//           <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">{t("supportTeam")}</p>
//           <a href="https://t.me/Lifelong007" target="_blank" rel="noopener noreferrer">
//             <Button variant="secondary" size="lg" className="group">
//               {t("contactUs")} <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-secondary-foreground text-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h3 className="text-xl font-bold">{t("heroTitle")}</h3>
//               <p className="text-white/70">
//                 © {new Date().getFullYear()} {t("allRightsReserved")}
//               </p>
//             </div>
//             <div className="flex space-x-4">
//               <Link href="#" className="hover:text-white/80 transition-colors">
//                 {t("terms")}
//               </Link>
//               <Link href="#" className="hover:text-white/80 transition-colors">
//                 {t("privacy")}
//               </Link>
//               <Link href="#" className="hover:text-white/80 transition-colors">
//                 {t("faq")}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </main>
//   )
// }



"use client"

import { useState } from "react"
import Link from "next/link"
import { Send, Phone, Instagram, Youtube, Twitter, Facebook } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import AboutUsSection from "@/components/about-us-section"
import LanguageSelector from "@/components/language-selector"
import ServiceCard from "@/components/service-card"
import ServiceForm from "@/components/service-form"
import { Button } from "@/components/ui/button"
import { servicesList } from "@/lib/data"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const { t } = useLanguage()
  const { toast } = useToast()

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    document.getElementById("service-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleCall = () => {
    window.location.href = "tel:+998881015199"
  }

  const handleTelegram = () => {
    window.open("https://t.me/Bkk5199", "_blank")
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/about-us.png" alt="AL-ANSOR STROY" className="h-8 w-auto" />
            <h1 className="text-lg font-bold">24/7 Service</h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              {t("services")}
            </Link>
            <Link href="#about-us" className="text-sm font-medium hover:text-primary transition-colors">
              {t("aboutUs")}
            </Link>
            <Link href="#service-form" className="text-sm font-medium hover:text-primary transition-colors">
              {t("requestService")}
            </Link>
            <LanguageSelector />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70 mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/backround.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in">{t("heroTitle")}</h1>
          <p className="text-xl md:text-2xl text-blue/90 mb-8 max-w-2xl mx-auto">{t("heroSubtitle")}</p>
          {/* Telefon, Markaziy tugma, Telegram */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={handleCall} className="rounded-full">
              <Phone className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="animate-bounce-slow"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("exploreServices")}
            </Button>
            <Button variant="outline" size="icon" onClick={handleTelegram} className="rounded-full">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("ourServices")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={() => handleServiceSelect(service.id)}
                isSelected={selectedService === service.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Service Form Section */}
      <section id="service-form" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("requestService")}</h2>
          {selectedService ? (
            <ServiceForm
              serviceId={selectedService}
              onSubmitSuccess={() => {
                setSelectedService(null)
                toast({
                  title: t("requestSubmitted"),
                  description: t("requestSuccess"),
                })
              }}
            />
          ) : (
            <div className="text-center max-w-md mx-auto p-8 border border-border rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4">{t("selectService")}</h3>
              <p className="text-muted-foreground mb-6">{t("pleaseSelect")}</p>
              <Button
                variant="outline"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("viewServices")}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white relative">
        <div className="absolute top-4 left-4 flex gap-4">
          <a href="https://t.me/Bkk5199" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Send className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://instagram.com/behzodk5199" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Instagram className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://youtube.com/@BehxozKarimov" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Youtube className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://x.com/behzodk5199" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Twitter className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://facebook.com/AlAnsorStroy" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Facebook className="w-5 h-5" />
            </Button>
          </a>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("needHelp")}</h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">{t("supportTeam")}</p>
          <a href="https://t.me/Lifelong007" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="group">
              {t("contactUs")} <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">{t("heroTitle")}</h3>
              <p className="text-white/70">
                © {new Date().getFullYear()} {t("allRightsReserved")}
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80 transition-colors">
                {t("terms")}
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                {t("privacy")}
              </Link>
              <Link href="#" className="hover:text-white/80 transition-colors">
                {t("faq")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}