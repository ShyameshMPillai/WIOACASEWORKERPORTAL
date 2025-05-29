"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {}
    let isValid = true

    if (!email) {
      newErrors.email = "Email address is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!password) {
      newErrors.password = "Password is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check for the specific email addresses
      if (email === "arkansasworkforcecenteradmin@awc.gov" || email === "littlerockservicecenter@awc.gov") {
        // Determine user role
        const role = email === "arkansasworkforcecenteradmin@awc.gov" ? "Admin" : "Caseworker"

        // Set success message
        setErrors({})

        // Show success alert before redirecting
        alert(`Login successful! Welcome, ${role}. Redirecting to dashboard...`)

        // In a real application, you would redirect to the dashboard or home page
        // For this demo, we'll just reset the form
        setEmail("")
        setPassword("")
      } else {
        // Show error for other email addresses
        setErrors({ form: "Invalid credentials. Please use an authorized email address." })
      }
    } catch (error) {
      setErrors({ form: "An error occurred. Please try again later." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <img
            src="/wioa-logo.png"
            alt="WIOA - Workforce Innovation and Opportunity Act"
            className="mx-auto mb-4"
            width={280}
            height={140}
          />
          <h1 className="text-xl font-semibold text-blue-900">Arkansas WorkForce Center</h1>
        </div>

        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-blue-900">Secure Login</CardTitle>
            <CardDescription className="text-center">
              Access the workforce case management system with your assigned credentials.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {errors.form && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{errors.form}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.gov"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={errors.email ? "border-red-500" : ""}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
                {!errors.email && (
                  <p className="text-xs text-gray-500 mt-1">
                    Valid logins: arkansasworkforcecenteradmin@awc.gov (Admin) or littlerockservicecenter@awc.gov
                    (Caseworker)
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className="text-sm text-red-500" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col">
            <p className="text-xs text-center text-gray-600 mt-4">
              This is a U.S. Government system for authorized use only.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
