"use client"

import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail, Phone, Sparkles } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-purple-900">
        <div className="absolute inset-0 opacity-50"></div>
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2">
                  <Image src="/images/b9-logo-main.png" alt="B9TECH Logo" fill className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">B9TECH CONSULTS</h3>
                  <p className="text-blue-400 font-medium">Ethical AI Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
                Pioneering ethical AI development and secure systems that empower communities and restore trust in
                technology. Building the future of responsible AI from Nigeria to the world.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="mailto:info@b9techafrica.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oluwumi-zion-6a4aaa2a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                AI Services
              </h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    AI Ethics & Strategy
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    Secure AI Systems
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    AI-Powered Platforms
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-emerald-400 transition-colors">
                    Custom AI Development
                  </a>
                </li>
                <li>
                  <a href="#newsletter" className="hover:text-blue-400 transition-colors">
                    Daily AI Insights Newsletter
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & CEO */}
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

                {/* CEO Section with New Photo */}
                <div className="mt-6 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-blue-400">
                      <Image
                        src="/images/enoch-footer.jpg"
                        alt="Enoch Oluwumi"
                        fill
                        className="object-cover object-center"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Enoch Oluwumi</p>
                      <p className="text-blue-400 text-xs">Co-founder & CEO</p>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/oluwumi-zion-6a4aaa2a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
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
              <p className="text-slate-400 text-sm">© 2025 B9TECH CONSULTS. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-slate-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-400/30">
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
