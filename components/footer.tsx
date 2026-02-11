"use client"

import React from "react"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Mail, Phone, Sparkles, Twitter, Github, Youtube, Instagram, Send, Heart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/b9tech", label: "Company LinkedIn", color: "hover:text-blue-400 hover:bg-blue-500/20" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400 hover:bg-sky-500/20" },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300 hover:bg-gray-500/20" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400 hover:bg-red-500/20" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400 hover:bg-pink-500/20" },
  ]

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2 animate-float">
                  <Image src="/images/b9-logo-main.png" alt="B9TECH Logo" fill className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">B9TECH CONSULTS</h3>
                  <p className="text-blue-400 font-medium">Ethical AI Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
                Pioneering ethical AI development and secure systems that empower communities and restore trust in technology.
              </p>

              <div className="flex items-center gap-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110 animate-pulse-glow`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <div className="glass p-6 rounded-xl">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-400" />
                  Stay Updated
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Get weekly AI insights and updates delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 glass border-white/20 text-white placeholder-slate-400 focus:ring-blue-400 h-10"
                    required
                  />
                  <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 h-10">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                {isSubscribed && (
                  <p className="text-green-400 text-sm mt-2 animate-fade-in">
                    ✓ Thanks for subscribing!
                  </p>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400 animate-spin-slow" />
                AI Services
              </h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">AI Ethics & Strategy</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Secure AI Systems</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">AI-Powered Platforms</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Custom AI Development</a></li>
                <li><a href="#newsletter" className="hover:text-blue-400 transition-colors">Daily AI Insights Newsletter</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6">Contact</h4>
              <div className="space-y-4 text-slate-400">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  info@b9techafrica.com
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  +234 812 848 1777
                </p>
                <p>Lagos, Nigeria 🇳🇬</p>

                <div className="mt-6 pt-4 border-t border-white/20 space-y-4">
                  <div>
                    <a href="https://www.linkedin.com/company/b9tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group">
                      <Linkedin className="h-4 w-4 group-hover:animate-pulse" />
                      Follow on LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-blue-400 animate-pulse-glow">
                      <Image src="/images/enoch-ceo.jpg" alt="Enoch Oluwumi" fill className="object-cover object-center" style={{ objectPosition: "50% 30%" }} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Enoch Oluwumi</p>
                      <p className="text-blue-400 text-xs">Co-founder & CEO</p>
                    </div>
                  </div>
                  <a href="https://www.linkedin.com/in/enoch-oluwumi-b075a2386/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-white/20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © 2026 B9TECH CONSULTS. Made with <Heart className="inline h-4 w-4 text-red-400 animate-pulse" /> in Nigeria.
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm">
              <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-conditions" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-400/30 animate-float">
              <span className="text-blue-300 font-medium">Proudly Nigerian</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">Building Technology for Good</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">#BarterNaija #BarterisBackandBetter</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
