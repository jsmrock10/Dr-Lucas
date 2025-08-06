'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury bespoke suit craftsmanship"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-charcoal/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center rounded-full bg-gold-100 px-4 py-2 text-sm font-medium text-gold-800 ring-1 ring-inset ring-gold-600/20"
            >
              <span>Launching 2024</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
              >
                <span className="block">Wear Your</span>
                <span className="gradient-text">Story</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-luxury-platinum max-w-2xl text-balance"
              >
                Premium bespoke suits crafted with personal narratives woven into every detail. 
                Experience luxury tailoring that tells your unique story through hidden linings and bespoke design.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/collections" className="btn-primary">
                Explore Collections
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 text-white font-semibold text-lg transition-all duration-300 hover:text-gold-400">
                <PlayIcon className="mr-3 h-5 w-5" />
                Watch Our Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-700"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-luxury-platinum">Stories Told</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">48hr</div>
                <div className="text-sm text-luxury-platinum">Delivery</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-luxury-platinum">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-2xl blur-xl opacity-20 animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-display font-semibold text-white mb-4">
                  Design Your Story
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-gradient-gold" />
                    <span className="text-luxury-platinum">Choose Your Fabric</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent-500" />
                    <span className="text-luxury-platinum">Select Your Story</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-cream-500" />
                    <span className="text-luxury-platinum">Craft Your Lining</span>
                  </div>
                </div>
                <Link 
                  href="/configurator" 
                  className="inline-block mt-6 text-gold-400 font-semibold hover:text-gold-300 transition-colors"
                >
                  Start Designing →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}