"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUsSection() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const values = [
    { name: t("qualityValue"), icon: "./images/quality_icon.jpg" },
    { name: t("reliabilityValue"), icon: "/images/relibility_icon.jpg" },
    { name: t("integrityValue"), icon: "/images/integrity_icon.png" },
    { name: t("customerServiceValue"), icon: "/images/customer_service_icon.png" },
  ]

  return (
    <section id="about-us" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
            {t("aboutUsTitle")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl font-medium text-primary mb-2">
            {t("aboutUsSubtitle")}
          </motion.p>
        </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <Image src="/images/about-us.png" alt="About Our Service" fill className="object-contain bg-[#0e2b3d]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg mb-6">{t("aboutUsDescription")}</p>

            <h3 className="text-2xl font-semibold mb-3">{t("ourMission")}</h3>
            <p className="mb-6">{t("missionDescription")}</p>

            <h3 className="text-2xl font-semibold mb-4">{t("ourValues")}</h3>
            <div className="gridgrid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 mx-auto mb-3 relative">
                        <Image
                          src={value.icon || "/placeholder.svg"}
                          alt={value.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="font-medium">{value.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">{t("ourProjects")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/projects-residential.png" alt="Residential Projects" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{t("residentialProjects")}</span>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/projects-commercial.png" alt="Commercial Projects" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{t("commercialProjects")}</span>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/images/projects-villas.png" alt="Luxury Villas" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{t("luxuryVillas")}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
