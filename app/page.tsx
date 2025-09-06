"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { B3Section } from "@/components/b3-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { NavigationHandler } from "@/components/navigation-handler"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <SidebarProvider>
      <NavigationHandler />
      <AppSidebar />
      <SidebarInset>
        <header
          className={`sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b transition-all duration-300 px-4 ${
            isScrolled
              ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg"
              : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          }`}
        >
          <SidebarTrigger className="-ml-1" />

          {/* Sticky Logo */}
          <div
            className={`flex items-center gap-4 ml-4 transition-all duration-300 ${
              isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500 p-2 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
              <Image
                src="/images/b9-logo-main.png"
                alt="B9TECH Logo"
                fill
                className="object-contain p-1 drop-shadow-sm"
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex flex-col">
                <span className="text-xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
                  B9TECH
                </span>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 via-emerald-600 to-blue-600 dark:from-purple-400 dark:via-emerald-400 dark:to-blue-400 bg-clip-text text-transparent tracking-wide hover:scale-105 transition-transform duration-300 cursor-default -mt-1">
                  CONSULTS
                </span>
              </div>
            </div>
          </div>

          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1">
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="b3">
            <B3Section />
          </section>
          <section id="services">
            <ServicesSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
          <Footer />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
