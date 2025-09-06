"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Send, Sparkles, MessageCircle } from "lucide-react"
import Image from "next/image"
import { ContactFormHandler } from "@/components/contact-form-handler"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-blue-900">
        <div className="absolute inset-0 opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8">
            <MessageCircle className="h-5 w-5 text-emerald-400" />
            <span className="text-white font-semibold">Let's Connect</span>
            <Sparkles className="h-4 w-4 text-emerald-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Start Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              AI Journey
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your organization with ethical AI? Let's discuss how we can help bring your vision to
            life with cutting-edge technology and human-centered design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-md border-b border-white/20">
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Send className="h-6 w-6 text-emerald-400" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <ContactFormHandler />
            </CardContent>
          </Card>

          {/* Contact Info & Founder */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Phone className="h-5 w-5 text-emerald-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-300">info@b9techafrica.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-300">+234 812 848 1777</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-slate-300">Lagos, Nigeria 🇳🇬</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Card */}
            <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center gap-6 p-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-emerald-400/50">
                    <Image
                      src="/images/enoch-portrait.jpg"
                      alt="Enoch Oluwumi"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">Enoch Oluwumi</h3>
                    <p className="text-emerald-400 font-medium mb-2">Founder & Chief Executive Officer</p>
                    <p className="text-slate-300 text-sm">Building ethical AI for Africa and the world</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/enoch-oluwumi-62aa34382/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose B9Tech */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-md border border-emerald-400/30">
              <CardContent className="p-8">
                <h4 className="font-bold text-emerald-300 mb-4 text-lg">Why Choose B9Tech?</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Nigerian expertise with global AI standards
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Ethical AI development at our core
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Proven track record with B3 platform
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    Human-centered AI solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
