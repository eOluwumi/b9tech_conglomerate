"use client"

import { useEffect } from "react"

export function NavigationHandler() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    // Handle initial hash on page load
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Handle clicks on anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const hash = target.getAttribute("href")
        if (hash) {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            // Update URL without triggering page reload
            window.history.pushState(null, "", hash)
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
