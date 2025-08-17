"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"

interface ProfileData {
  age: string
  weight: string
  height: string
  gender: string
}

export function ProfileForm() {
  const { t } = useLanguage()
  const { user, updateUserProfile } = useAuth()
  const router = useRouter()
  const [profileData, setProfileData] = useState<ProfileData>({
    age: "",
    weight: "",
    height: "",
    gender: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!profileData.age || !profileData.weight || !profileData.height || !profileData.gender) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Update user profile with the new data
      const updatedProfile = {
        ...user,
        age: parseInt(profileData.age),
        weight: parseInt(profileData.weight),
        height: parseInt(profileData.height),
        gender: profileData.gender,
        profileComplete: true,
      }
      
      await updateUserProfile(updatedProfile)
      router.push("/dashboard")
    } catch (error) {
      console.error("Error updating profile:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{t("profile.title")}</CardTitle>
          <CardDescription>{t("profile.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age">{t("profile.age")}</Label>
              <Input
                id="age"
                type="number"
                min="13"
                max="120"
                value={profileData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                placeholder="25"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="weight">{t("profile.weight")}</Label>
              <Input
                id="weight"
                type="number"
                min="30"
                max="300"
                value={profileData.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
                placeholder="70"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="height">{t("profile.height")}</Label>
              <Input
                id="height"
                type="number"
                min="100"
                max="250"
                value={profileData.height}
                onChange={(e) => handleInputChange("height", e.target.value)}
                placeholder="175"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">{t("profile.gender")}</Label>
              <Select value={profileData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                <SelectTrigger>
                  <SelectValue placeholder={t("profile.gender")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">{t("profile.gender.male")}</SelectItem>
                  <SelectItem value="female">{t("profile.gender.female")}</SelectItem>
                  <SelectItem value="other">{t("profile.gender.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting || !profileData.age || !profileData.weight || !profileData.height || !profileData.gender}
            >
              {isSubmitting ? t("common.loading") : t("profile.submit")}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
