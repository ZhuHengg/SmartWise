"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bus } from "lucide-react"

const navItems = [
  { href: "/bus-stop", label: "Bus Stop" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/chatbox", label: "Chatbox" },
  { href: "/feedback", label: "Feedback" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/bus-stop" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Bus className="h-6 w-6" />
            <span>RideWise</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-slate-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
