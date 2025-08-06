'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CalendarDaysIcon, PhoneIcon, ChatBubbleLeftRightIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-luxury text-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Wear Your <span className="gradient-text">Story</span>?
              </h2>
              <p className="text-xl text-luxury-platinum leading-relaxed">
                Begin your bespoke journey with a complimentary consultation. 
                Our master tailors will help you craft a suit that tells your unique story through exceptional craftsmanship and personalized details.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span className="text-luxury-platinum">90-minute personal consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span className="text-luxury-platinum">Custom story & lining design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span className="text-luxury-platinum">Premium fabric selection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span className="text-luxury-platinum">No obligation - completely free</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation" className="btn-primary">
                <CalendarDaysIcon className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Link>
              <Link 
                href="/collections" 
                className="btn-outline !border-white !text-white hover:!bg-white hover:!text-luxury-charcoal"
              >
                View Collections
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold mb-8">
              Get Started Today
            </h3>

            <div className="grid gap-6">
              {/* Phone */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Direct</h4>
                    <p className="text-luxury-platinum text-sm">Speak with a master tailor</p>
                  </div>
                </div>
                <Link 
                  href="tel:+1-555-BESPOKE" 
                  className="text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                >
                  +1 (555) BESPOKE
                </Link>
              </div>

              {/* Consultation */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center">
                    <CalendarDaysIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Book Online</h4>
                    <p className="text-luxury-platinum text-sm">Schedule your consultation</p>
                  </div>
                </div>
                <Link 
                  href="/consultation" 
                  className="text-accent-400 font-semibold hover:text-accent-300 transition-colors"
                >
                  Available This Week →
                </Link>
              </div>

              {/* Chat */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Live Chat</h4>
                    <p className="text-luxury-platinum text-sm">Get instant answers</p>
                  </div>
                </div>
                <button className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                  Start Conversation
                </button>
              </div>

              {/* Location */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cream-600 flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Our Atelier</h4>
                    <p className="text-luxury-platinum text-sm">Chicago • New York • London</p>
                  </div>
                </div>
                <Link 
                  href="/locations" 
                  className="text-cream-400 font-semibold hover:text-cream-300 transition-colors"
                >
                  Find Locations →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-display font-semibold mb-4">
              Limited Time: Founding Members Program
            </h3>
            <p className="text-luxury-platinum mb-6 max-w-2xl mx-auto">
              Join our exclusive founding members program and receive priority booking, 
              special pricing, and lifetime benefits. Limited to first 100 clients.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span>20% off first suit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span>Priority scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-400" />
                <span>Exclusive events</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}