"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    route: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Feedback submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", route: "", message: "" })
    }, 3000)
  }

  if (submitted) {
    return (
      <Card className="border-gray-200">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Thank You!</h3>
          <p className="text-slate-600">Your feedback has been submitted successfully.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-gray-200">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-slate-700">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-slate-700">
              Email (Optional)
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="route" className="text-slate-700">
              Route
            </Label>
            <Select value={formData.route} onValueChange={(value) => setFormData({ ...formData, route: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a route" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AB">Route AB</SelectItem>
                <SelectItem value="BA">Route BA</SelectItem>
                <SelectItem value="C">Route C</SelectItem>
                <SelectItem value="D">Route D</SelectItem>
                <SelectItem value="E">Route E</SelectItem>
                <SelectItem value="13">Route 13</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-slate-700">
              Feedback Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Share your experience or suggestions..."
              rows={5}
              required
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Submit Feedback
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
