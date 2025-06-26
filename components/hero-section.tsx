"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Brain, Zap, Shield, Globe } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const FloatingIcon = ({ icon: Icon, delay = 0, className = "" }: { icon: any; delay?: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`absolute transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  )
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Ethical", "Intelligent", "Secure", "Human-Centered"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Floating AI Icons */}
        <FloatingIcon icon={Brain} delay={0} className="top-20 left-20" />
        <FloatingIcon icon={Sparkles} delay={500} className="top-32 right-32" />
        <FloatingIcon icon={Zap} delay={1000} className="bottom-40 left-16" />
        <FloatingIcon icon={Shield} delay={1500} className="bottom-20 right-20" />
        <FloatingIcon icon={Globe} delay={2000} className="top-1/2 left-8" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
        {/* Prominent B9 Logo & Branding */}
        <div className="mb-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-32 h-32 mx-auto transform hover:scale-110 transition-transform duration-300">
              <Image src="/images/b9-logo-main.png" alt="B9Tech Logo" fill className="object-contain drop-shadow-2xl" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  B9TECH CONSULTS
                </span>
              </h1>
              <p className="text-emerald-300 font-semibold text-lg">Ethical AI Solutions</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-300 font-medium">🇳🇬 Nigerian AI Innovation</span>
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>

          {/* Dynamic Title */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="relative">
                <span
                  key={currentWord}
                  className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse"
                >
                  {words[currentWord]}
                </span>
              </span>
              <br />
              AI Solutions
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              B9TECH CONSULTS pioneers <span className="text-emerald-400 font-semibold">Benign Technology</span> - AI
              systems that protect, empower, and serve humanity in our rapidly evolving digital world.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("services")}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="mr-3 h-5 w-5" />
            Explore AI Solutions
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="px-10 py-6 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all duration-300"
          >
            Meet Our CEO
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {[
            {
              icon: Brain,
              title: "AI Ethics",
              desc: "Responsible AI development",
              color: "from-purple-500 to-pink-500",
              section: "services",
            },
            {
              icon: Shield,
              title: "Secure Systems",
              desc: "Privacy-first architecture",
              color: "from-emerald-500 to-teal-500",
              section: "services",
            },
            {
              icon: Zap,
              title: "Innovation",
              desc: "Cutting-edge solutions",
              color: "from-blue-500 to-cyan-500",
              section: "b3",
            },
            {
              icon: Globe,
              title: "Global Impact",
              desc: "Local expertise, worldwide reach",
              color: "from-amber-500 to-orange-500",
              section: "about",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              onClick={() => scrollToSection(feature.section)}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
