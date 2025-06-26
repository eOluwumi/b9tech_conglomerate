"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, Sparkles, CheckCircle } from "lucide-react"

export function ContactFormHandler() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-slate-200">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-emerald-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-slate-200">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-emerald-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-200">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@company.com"
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-emerald-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-slate-200">
          Company/Organization
        </Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your Company Name"
          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-emerald-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="text-slate-200">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="AI Consulting Inquiry"
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-emerald-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-200">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your AI project, challenges, or how we can help transform your organization..."
          required
          className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-emerald-400"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
            <Sparkles className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
