"use client"

import type * as React from "react"
import { Home, Users, Briefcase, Phone, ExternalLink } from "lucide-react"
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Home",
    url: "#home",
    icon: Home,
  },
  {
    title: "About Us",
    url: "#about",
    icon: Users,
  },
  {
    title: "B3 Project",
    url: "#b3",
    icon: ExternalLink,
  },
  {
    title: "Our Services",
    url: "#services",
    icon: Briefcase,
  },
  {
    title: "Contact",
    url: "#contact",
    icon: Phone,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-4 px-4 py-4">
          <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 p-2 shadow-lg">
            <Image src="/images/b9-logo-main.png" alt="B9TECH Logo" fill className="object-contain p-1" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-sidebar-foreground leading-tight">B9TECH</span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 leading-tight tracking-wide">
              CONSULTS
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
