"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, CheckCircle, Sparkles, TrendingUp, Zap } from "lucide-react"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
        setTimeout(() => setIsSubscribed(false), 5000)
      } else {
        alert('Subscription failed. Please try again.')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      alert('Subscription failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const digestFeatures = [
    { icon: TrendingUp, label: "Latest AI News", description: "Breaking developments in artificial intelligence" },
    { icon: Zap, label: "Daily Updates", description: "Delivered every morning at 7 AM UTC" },
    { icon: Sparkles, label: "Curated Insights", description: "Hand-picked stories from trusted sources" },
  ]

  return (
    <section id="newsletter" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Mail className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 font-medium">B9TECH Daily Digest</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Your Daily <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Intelligence</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay informed with the B9TECH Daily Digest. Curated AI news, industry breakthroughs, and emerging trends delivered to your inbox. Perfect for innovators, developers, and tech enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {digestFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="glass border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center animate-pulse">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.label}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="glass border border-white/20 max-w-2xl mx-auto shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-white text-2xl">Subscribe to B9TECH Daily Digest</CardTitle>
            <p className="text-slate-300 text-sm mt-2">2026 Edition - Powered by AI Intelligence</p>
          </CardHeader>
          <CardContent>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-slate-300 text-sm font-medium">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-500 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3"
                >
                  {isLoading ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Get Daily AI News
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <CheckCircle className="h-16 w-16 text-green-400 mx-auto animate-bounce" />
                <div>
                  <p className="text-white font-semibold text-lg">Welcome to B9TECH Daily Digest!</p>
                  <p className="text-slate-300 text-sm mt-1">Check your inbox for AI news starting tomorrow.</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center space-y-2">
          <p className="text-slate-400 text-sm">We respect your privacy. Unsubscribe anytime with one click.</p>
          <p className="text-slate-500 text-xs">© 2026 B9TECH CONSULTS. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
