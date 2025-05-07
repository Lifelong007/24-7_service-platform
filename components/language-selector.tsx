"use client"

import { useState } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"
import { useLanguage, type Language } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languageNames: Record<Language, string> = {
  en: "English",
  ru: "Русский",
  uz: "O'zbek",
}

const languageFlags: Record<Language, string> = {
  en: "🇺🇸",
  ru: "🇷🇺",
  uz: "🇺🇿",
}

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languageNames[language]}</span>
          <span className="inline sm:hidden">{languageFlags[language]}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => {
              setLanguage(code as Language)
              setIsOpen(false)
            }}
            className="flex items-center gap-2"
          >
            <span className="mr-1">{languageFlags[code as Language]}</span>
            {name}
            {language === code && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
