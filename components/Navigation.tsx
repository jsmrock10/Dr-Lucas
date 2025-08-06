'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Collections', href: '/collections' },
  { name: 'Bespoke Process', href: '/process' },
  { name: 'Stories', href: '/stories' },
  { name: 'Atelier', href: '/atelier' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-luxury' 
        : 'bg-transparent'
    }`}>
      <nav className="container-max section-padding py-4" aria-label="Global">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dr. Lucas Bespoke</span>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-display">DL</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-display font-bold text-luxury-charcoal">
                    Dr. Lucas Bespoke
                  </h1>
                  <p className="text-xs text-primary-600 font-medium tracking-wider uppercase">
                    Wear Your Story
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-luxury-charcoal"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-gold-600'
                    : 'text-luxury-charcoal hover:text-gold-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-luxury-charcoal hover:text-gold-600 transition-colors"
            >
              <CalendarDaysIcon className="h-4 w-4" />
              Book Consultation
            </Link>
            <Link
              href="tel:+1-555-BESPOKE"
              className="inline-flex items-center gap-x-2 text-sm font-semibold leading-6 text-luxury-charcoal hover:text-gold-600 transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50"
            >
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <span className="sr-only">Dr. Lucas Bespoke</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm font-display">DL</span>
                      </div>
                      <div>
                        <h1 className="text-lg font-display font-bold text-luxury-charcoal">
                          Dr. Lucas Bespoke
                        </h1>
                      </div>
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-luxury-charcoal"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-primary-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                            pathname === item.href
                              ? 'bg-primary-50 text-gold-600'
                              : 'text-luxury-charcoal hover:bg-primary-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6 space-y-4">
                      <Link
                        href="/consultation"
                        className="btn-primary w-full text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Book Consultation
                      </Link>
                      <Link
                        href="tel:+1-555-BESPOKE"
                        className="btn-outline w-full text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Call Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}