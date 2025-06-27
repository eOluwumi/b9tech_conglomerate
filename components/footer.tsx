"use client"

import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-emerald-900">
        <div className="absolute inset-0 opacity-50"></div>
      </div>

      <div className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
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

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-emerald-400/30">
              <span className="text-emerald-300 font-medium">Proudly Nigerian</span>
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
