'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, SparklesIcon, BriefcaseIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const collections = [
  {
    id: 'ceremonial',
    name: 'Ceremonial Collection',
    tagline: 'Moments That Matter',
    description: 'Wedding, prom, and graduation suits featuring special-occasion fabrics and commemorative linings that capture life\'s most precious moments.',
    price: 'From $2,500',
    features: ['Italian Fresco Weaves', 'Commemorative Linings', 'Hand-Stitched Details', '6-8 Week Delivery'],
    image: 'https://images.unsplash.com/photo-1594736797933-d0dd59a4b7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: SparklesIcon,
    color: 'gold',
  },
  {
    id: 'corporate',
    name: 'Corporate Line',
    tagline: 'Power & Prestige',
    description: 'Executive suiting with subtle power-play linings and precision tailoring designed for the modern business leader.',
    price: 'From $2,000',
    features: ['Power-Play Linings', 'Executive Silhouettes', 'Performance Fabrics', '4-6 Week Delivery'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: BriefcaseIcon,
    color: 'accent',
  },
  {
    id: 'travel',
    name: 'Travel Tailoring',
    tagline: 'Global Sophistication',
    description: 'Wrinkle-resistant blends with hidden passport pockets and wash-and-wear properties for the discerning traveler.',
    price: 'From $1,800',
    features: ['Wrinkle-Resistant', 'Hidden Pockets', 'Travel-Ready', '3-4 Week Delivery'],
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: GlobeAltIcon,
    color: 'primary',
  },
]

export default function Collections() {
  return (
    <section className="section-padding bg-luxury-pearl">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-luxury-charcoal mb-6">
            Our <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto text-balance">
            Three distinct lines, each crafted to tell your story through exceptional tailoring and personalized details.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => {
            const Icon = collection.icon
            return (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="card-luxury h-full">
                  {/* Image */}
                  <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 rounded-full bg-${collection.color}-500 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium opacity-90">{collection.tagline}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-luxury-charcoal mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-primary-600 leading-relaxed">
                        {collection.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-luxury-charcoal mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {collection.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-primary-600">
                            <div className={`w-2 h-2 rounded-full bg-${collection.color}-500 mr-3`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-primary-100">
                      <div className="text-2xl font-bold text-luxury-charcoal">
                        {collection.price}
                      </div>
                      <Link
                        href={`/collections/${collection.id}`}
                        className={`inline-flex items-center text-${collection.color}-600 font-semibold hover:text-${collection.color}-700 transition-colors`}
                      >
                        Explore
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-luxury rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              Can't Decide? Let Us Help
            </h3>
            <p className="text-luxury-platinum mb-6 max-w-2xl mx-auto">
              Schedule a personal consultation with our master tailors to discover which collection best tells your story.
            </p>
            <Link href="/consultation" className="btn-primary">
              Book Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}