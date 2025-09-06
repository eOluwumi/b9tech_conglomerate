"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Sparkles, Brain, Shield, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fillOpacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">About Our Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Pioneering <span className="text-emerald-600 dark:text-emerald-400">Ethical AI</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Meet the visionary leader driving B9TECH CONSULTS' mission to create AI that serves humanity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Photo Section */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-500 to-blue-600 p-1">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/images/enoch-professional.jpg"
                  alt="Enoch Oluwumi - Co-founder & CEO"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: "50% 15%" }}
                />
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Enoch Oluwumi</h3>
              <p className="text-xl text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                Co-founder & Chief Executive Officer
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Building ethical AI for Africa and the world
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Enoch Oluwumi is a visionary leader in ethical AI development, dedicated to creating technology that
                empowers communities rather than exploiting them. With a deep understanding of both cutting-edge AI
                capabilities and the social responsibility that comes with them, he leads B9TECH CONSULTS in pioneering
                Benign Technology.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Under his leadership, B9TECH CONSULTS has become a trusted partner for organizations seeking to
                implement AI solutions that prioritize privacy, security, and human dignity. His commitment to ethical
                innovation has positioned the company at the forefront of responsible AI development in Africa and
                beyond.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Ethical Focus</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/enoch-oluwumi-62aa34382/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  "At B9TECH CONSULTS, we believe technology should serve humanity, not the other way around. Our
                  mission is to develop AI solutions that respect privacy, promote transparency, and empower communities
                  to thrive in the digital age. We're not just building software – we're building a better future."
                </p>
                <div className="mt-6">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">— Enoch Oluwumi, CEO</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
