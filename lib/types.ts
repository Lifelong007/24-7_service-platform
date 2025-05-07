import type { Language } from "@/contexts/language-context"

export interface ServiceType {
  id: string
  name: Record<Language, string>
  description: Record<Language, string>
  price: Record<Language, string>
  image: string
}

export interface LocationData {
  latitude: number
  longitude: number
  address?: string
}
