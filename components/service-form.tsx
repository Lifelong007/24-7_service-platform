"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { servicesList } from "@/lib/data"
import type { LocationData } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

interface ServiceFormProps {
  serviceId: string
  onSubmitSuccess: () => void
}

export default function ServiceForm({ serviceId, onSubmitSuccess }: ServiceFormProps) {
  const { language, t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [locationMethod, setLocationMethod] = useState<"current" | "manual">("manual")
  const [locationData, setLocationData] = useState<LocationData | null>(null)
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const { toast } = useToast()

  // Get service details
  const selectedService = servicesList.find((service) => service.id === serviceId)

  // Form schema
  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(6, "Please enter a valid phone number"),
    address: z.string().min(5, "Please enter your full address"),
    serviceTime: z.enum(["morning", "afternoon", "evening"]),
    additionalInfo: z.string().optional(),
  })

  type FormValues = z.infer<typeof formSchema>

  // Form definition
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      serviceTime: "morning",
      additionalInfo: "",
    },
  })

  // Get current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: t("locationAccess"),
        description: t("locationError"),
        variant: "destructive",
      })
      return
    }

    setIsGettingLocation(true)
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        setLocationData({ latitude, longitude })

        // Try to get address from coordinates using reverse geocoding
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
          )
          const data = await response.json()

          if (data && data.display_name) {
            const address = data.display_name
            setLocationData({ latitude, longitude, address })
            form.setValue("address", address)
          }
        } catch (error) {
          console.error("Error getting address:", error)
        }

        setIsGettingLocation(false)
      },
      (error) => {
        console.error("Error getting location:", error)
        toast({
          title: t("locationAccess"),
          description: t("locationAccessDenied"),
          variant: "destructive",
        })
        setIsGettingLocation(false)
        setLocationMethod("manual")
      },
    )
  }

  // Effect to get location when method changes
  useEffect(() => {
    if (locationMethod === "current") {
      getCurrentLocation()
    }
  }, [locationMethod])

  if (!selectedService) {
    return <div>{t("serviceNotFound")}</div>
  }

  // Submit handler
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      // Prepare data for Telegram
      const formData = {
        ...data,
        serviceId,
        // serviceName: selectedService.name[language],
        location: locationData
          ? `${locationData.address || ""} (${locationData.latitude}, ${locationData.longitude})`
          : data.address,
      }

      // Send to Telegram API route
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: t("requestSubmitted"),
          description: t("requestSuccess"),
        })
        onSubmitSuccess()
      } else {
        throw new Error(result.message || "Failed to submit request")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit request",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          {t("services")}: {selectedService.name[language]}
        </h3>
        <p className="text-muted-foreground">{t("pleaseSelect")}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("fullName")}</FormLabel>
                  <FormControl>
                    <Input placeholder="Ismingizni kiriting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("phoneNumber")}</FormLabel>
                  <FormControl>
                    <Input placeholder="+998 98 123 45 67" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-3">
            <FormLabel>{t("location")}</FormLabel>
            <Tabs value={locationMethod} onValueChange={(v) => setLocationMethod(v as "current" | "manual")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="current">{t("useCurrentLocation")}</TabsTrigger>
                <TabsTrigger value="manual">{t("enterManually")}</TabsTrigger>
              </TabsList>
              <TabsContent value="current" className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {isGettingLocation ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{t("processing")}</span>
                    </div>
                  ) : locationData?.address ? (
                    <span>{locationData.address}</span>
                  ) : locationData ? (
                    <span>
                      {locationData.latitude.toFixed(6)}, {locationData.longitude.toFixed(6)}
                    </span>
                  ) : (
                    <Button type="button" variant="outline" size="sm" onClick={getCurrentLocation}>
                      {t("useCurrentLocation")}
                    </Button>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="manual">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={t("address")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>
          </div>

          <FormField
            control={form.control}
            name="serviceTime"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>{t("preferredTime")}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="morning" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t("morning")}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="afternoon" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t("afternoon")}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="evening" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">{t("evening")}</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("additionalInfo")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("additionalInfoPlaceholder")} className="resize-none h-24" {...field} />
                </FormControl>
                <FormDescription>{t("specialRequirements")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("processing")}
              </>
            ) : (
              t("submit")
            )}
          </Button>
        </form>
      </Form>
    </Card>
  )
}
