import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const navigation = {
  collections: [
    { name: 'Ceremonial Collection', href: '/collections/ceremonial' },
    { name: 'Corporate Line', href: '/collections/corporate' },
    { name: 'Travel Tailoring', href: '/collections/travel' },
    { name: 'Custom Accessories', href: '/collections/accessories' },
  ],
  company: [
    { name: 'About Dr. Lucas', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Atelier Locations', href: '/locations' },
    { name: 'Client Stories', href: '/stories' },
  ],
  support: [
    { name: 'Book Consultation', href: '/consultation' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'Alterations', href: '/alterations' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Shipping Info', href: '/shipping' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/drlucasbespoke',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.926 3.708 13.775 3.708 12.478s.49-2.448 1.418-3.323c.928-.875 2.079-1.365 3.323-1.365s2.448.49 3.323 1.365c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.213c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.404c-.49 0-.928-.438-.928-.928s.438-.928.928-.928.928.438.928.928-.438.928-.928.928zm-3.323 9.404c-1.297 0-2.448-.49-3.323-1.297-.928-.807-1.418-1.958-1.418-3.213s.49-2.448 1.418-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.213c-.875.807-2.026 1.297-3.323 1.297z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/drlucasbespoke',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/drlucasbespoke',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@drlucasbespoke',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-luxury-platinum">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="section-padding border-b border-primary-700">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-display">DL</span>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Dr. Lucas Bespoke
                  </h3>
                  <p className="text-xs text-gold-400 font-medium tracking-wider uppercase">
                    Wear Your Story
                  </p>
                </div>
              </div>
              
              <p className="text-luxury-platinum leading-relaxed">
                Premium bespoke suits crafted with personal narratives woven into every detail. 
                Experience luxury tailoring that tells your unique story.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-gold-400" />
                  <Link href="tel:+1-555-BESPOKE" className="hover:text-gold-400 transition-colors">
                    +1 (555) BESPOKE
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-gold-400" />
                  <Link href="mailto:hello@drlucasbespoke.com" className="hover:text-gold-400 transition-colors">
                    hello@drlucasbespoke.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-5 h-5 text-gold-400" />
                  <span>Chicago • New York • London</span>
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h4 className="text-white font-semibold mb-4">Collections</h4>
              <ul className="space-y-3">
                {navigation.collections.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-gold-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="section-padding border-b border-primary-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Behind the Stitch Newsletter
            </h3>
            <p className="text-luxury-platinum mb-6">
              Get exclusive access to client stories, craftsmanship insights, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-800 border border-primary-600 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-primary-400 text-sm">
              © 2024 Dr. Lucas Bespoke. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-400 hover:text-gold-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4 text-xs text-primary-400">
              <span>Master Tailors Guild</span>
              <span>•</span>
              <span>Luxury Goods Association</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}