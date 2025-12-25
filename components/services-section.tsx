"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Code, UserCheck, Brain, Globe, Lock, ArrowRight, Sparkles, Zap } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Brain,
    title: "AI Ethics & Strategy",
    description:
      "Comprehensive AI governance, ethical framework development, and responsible AI implementation strategies.",
    features: ["AI Audit & Assessment", "Ethics Framework Design", "Bias Detection & Mitigation", "AI Governance"],
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Lock,
    title: "Secure AI Systems",
    description: "Privacy-preserving AI architectures with advanced security measures and compliance frameworks.",
    features: ["Federated Learning", "Differential Privacy", "Secure Multi-party Computation", "AI Security Audits"],
    gradient: "from-red-500 to-orange-500",
    hoverGradient: "from-red-600 to-orange-600",
  },
  {
    icon: Globe,
    title: "AI-Powered Platforms",
    description: "End-to-end AI platform development with focus on community empowerment and social impact.",
    features: ["Machine Learning Platforms", "AI-Driven Analytics", "Intelligent Automation", "Community AI Tools"],
    gradient: "from-emerald-500 to-teal-500",
    hoverGradient: "from-emerald-600 to-teal-600",
  },
  {
    icon: Code,
    title: "Custom AI Development",
    description: "Bespoke AI solutions tailored to your specific needs with ethical design principles.",
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Integration"],
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: UserCheck,
    title: "AI Identity & Trust",
    description: "Advanced identity verification and trust systems powered by ethical AI technologies.",
    features: ["Biometric Authentication", "Behavioral Analysis", "Trust Scoring", "Identity Protection"],
    gradient: "from-amber-500 to-yellow-500",
    hoverGradient: "from-amber-600 to-yellow-600",
  },
  {
    icon: Shield,
    title: "AI Content Moderation",
    description: "Intelligent content moderation systems that balance safety with freedom of expression.",
    features: ["Real-time Moderation", "Context-Aware AI", "Multi-language Support", "Appeal Systems"],
    gradient: "from-indigo-500 to-purple-500",
    hoverGradient: "from-indigo-600 to-purple-600",
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;100&quot; height=&quot;100&quot; viewBox=&quot;0 0 100 100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z&quot; fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.05&quot; fillRule=&quot;evenodd&quot;/%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">AI-Powered Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent font-heading">
            Ethical AI Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We provide cutting-edge AI consulting and development services designed to help organizations harness the
            power of artificial intelligence while maintaining ethical standards and human-centered values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${hoveredCard === index ? service.hoverGradient : service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300 group-hover:scale-110 animate-glow`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors font-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="glass border-white/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            <CardContent className="relative z-10 p-16 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-glow">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">Ready to Transform with AI?</h3>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                Let's discuss how B9Tech can help your organization leverage ethical AI to solve complex challenges and
                create meaningful impact.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow"
              >
                <Sparkles className="mr-3 h-5 w-5" />
                Start Your AI Journey
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
