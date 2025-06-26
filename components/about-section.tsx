"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, MapPin, Briefcase, Award, Users, Target } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 dark:from-slate-900 dark:via-emerald-950 dark:to-blue-950">
        <div className="absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-emerald-600" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">About B9Tech Consults</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent dark:from-white dark:to-emerald-400">
            Pioneering Ethical AI
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are Nigeria's leading technology consulting firm, specializing in ethical AI development and secure
            systems that prioritize human welfare and community empowerment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  content:
                    "To engineer innovation that restores trust in technology by building systems that are transparent, accountable, and designed with human dignity at their core.",
                  gradient: "from-emerald-500 to-teal-500",
                },
                {
                  icon: Award,
                  title: "Benign Technology Philosophy",
                  content:
                    "We champion 'Benign Technology' - solutions that are inherently safe, ethical, and designed to protect rather than exploit. Every system we create prioritizes user safety and community benefit.",
                  gradient: "from-blue-500 to-purple-500",
                },
                {
                  icon: Users,
                  title: "Why Choose B9Tech?",
                  content:
                    "We combine deep technical expertise with strong ethical foundations, delivering world-class solutions that are culturally relevant and globally competitive.",
                  gradient: "from-amber-500 to-orange-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Founder Showcase */}
          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-emerald-50 dark:from-slate-800 dark:to-emerald-950 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10"></div>
              <CardContent className="relative z-10 p-0">
                {/* Hero Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/images/enoch-creative.jpg"
                    alt="Enoch Oluwumi - CEO"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">Enoch Oluwumi</h3>
                    <p className="text-emerald-300 font-medium">Founder & Chief Executive Officer</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span>Lagos, Nigeria</span>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      "Technology should be a tool for liberation, not oppression. At B9Tech, we're building the future
                      of ethical AI right here in Nigeria, for the world."
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                      <Briefcase className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm">+234 812 848 1777</span>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/enoch-oluwumi-b54695120/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
