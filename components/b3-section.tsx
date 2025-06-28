"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Repeat, TrendingUp, Sparkles, Globe, Shield, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}</span>
}

export function B3Section() {
  return (
    <section id="b3" className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-emerald-900">
        <div className="absolute inset-0 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
            <div className="relative h-8 w-8">
              <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
            </div>
            <span className="text-white font-semibold">Flagship Innovation</span>
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            B3:{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              BringBackBarter
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our flagship platform revolutionizes traditional commerce through secure, AI-powered bartering technology.
            Experience the future of cashless trading.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Platform Showcase */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-md border-b border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16">
                    <Image src="/images/b3-logo.png" alt="B3 Logo" fill className="object-contain" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-white">BringBackBarter</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">Live Platform</Badge>
                      <Badge variant="outline" className="border-white/30 text-white">
                        AI-Powered
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-3">
                    <Users className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    <AnimatedCounter end={200} />+
                  </div>
                  <div className="text-sm text-slate-300">Active Traders</div>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-3">
                    <Repeat className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    <AnimatedCounter end={150} />+
                  </div>
                  <div className="text-sm text-slate-300">Successful Trades</div>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp className="h-8 w-8 text-amber-400" />
                  </div>
                  <div className="text-3xl font-bold text-white">₦0</div>
                  <div className="text-sm text-slate-300">Cash Required</div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="https://barternaija.com.ng" target="_blank" rel="noopener noreferrer">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Experience B3 Platform
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-center text-slate-400 text-sm">
                  Join the revolution • Trade without cash • Build community
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid gap-6">
            {[
              {
                icon: Shield,
                title: "AI-Powered Trust",
                description: "Advanced algorithms ensure secure, verified exchanges between community members",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: Globe,
                title: "Community Impact",
                description: "Empowering local economies through direct value exchange and skill sharing",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                icon: Zap,
                title: "Innovation Showcase",
                description:
                  "Demonstrating how ethical technology can preserve traditions while adding modern security",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
