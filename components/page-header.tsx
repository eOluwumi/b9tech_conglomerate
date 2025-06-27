"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  showBackButton?: boolean
  badgeText?: string
  badgeIcon?: React.ReactNode
  gradientColors?: string
}

export function PageHeader({
  title,
  subtitle,
  description,
  showBackButton = true,
  badgeText,
  badgeIcon,
  gradientColors = "from-slate-900 to-emerald-600 dark:from-white dark:to-emerald-400",
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      {showBackButton && (
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      )}

      <div className="text-center mb-12">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="relative w-20 h-20">
            <Image src="/images/b9-logo-main.png" alt="B9TECH Logo" fill className="object-contain" />
          </div>
          <div className="text-center">
            <h2 className={`text-2xl font-bold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}>
              B9TECH CONSULTS
            </h2>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">Ethical AI Solutions</p>
          </div>
        </div>

        {badgeText && (
          <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
            {badgeIcon}
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">{badgeText}</span>
          </div>
        )}

        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent`}
        >
          {title}
        </h1>

        {subtitle && <p className="text-xl text-slate-600 dark:text-slate-300">{subtitle}</p>}

        {description && <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{description}</p>}
      </div>
    </div>
  )
}
