"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import type { ServiceType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  service: ServiceType
  onSelect: () => void
  isSelected: boolean
}

export default function ServiceCard({ service, onSelect, isSelected }: ServiceCardProps) {
  const { language, t } = useLanguage()

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" whileHover="hover" variants={cardVariants}>
      <Card className={cn("overflow-hidden transition-all duration-300", isSelected && "ring-2 ring-primary")}>
        <div className="relative h-48 w-full">
          <Image src={service.image || "/placeholder.svg"} alt={service.name[language]} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="flex justify-between items-center">
            <span>{service.name[language]}</span>
            <span className="text-sm font-normal text-muted-foreground">{service.price[language]}</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">{service.description[language]}</p>
        </CardContent>

        <CardFooter>
          <Button onClick={onSelect} className="w-full" variant={isSelected ? "secondary" : "default"}>
            {isSelected ? t("selected") : t("selectService")}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
