'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeartIcon, SparklesIcon, GiftIcon, TrophyIcon } from '@heroicons/react/24/outline'

const stories = [
  {
    icon: HeartIcon,
    title: 'Wedding Day Magic',
    story: 'A boomerang pattern hidden in the lining - representing the journey that brought Sarah and James back to each other after years apart.',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    motif: 'Boomerang',
    color: 'gold',
  },
  {
    icon: TrophyIcon,
    title: 'Championship Victory',
    story: 'Soccer ball embroidery celebrating Marcus\'s journey from amateur player to professional coach, woven into his executive suit.',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    motif: 'Soccer Icon',
    color: 'accent',
  },
  {
    icon: SparklesIcon,
    title: 'Innovation Pioneer',
    story: 'Tech-innovation glyphs honoring David\'s breakthrough patent, subtly integrated into his board meeting attire.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    motif: 'Tech Glyph',
    color: 'primary',
  },
  {
    icon: GiftIcon,
    title: 'Legacy of Love',
    story: 'LLS ribbon pattern commemorating Lisa\'s mother, creating a lasting tribute that travels with him to every important meeting.',
    image: 'https://images.unsplash.com/photo-1594736797933-d0dd59a4b7e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    motif: 'LLS Ribbon',
    color: 'cream',
  },
]

export default function Storytelling() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-luxury-charcoal mb-6">
            Every Suit Tells a <span className="gradient-text">Story</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-4xl mx-auto text-balance leading-relaxed">
            Our signature hidden linings transform personal milestones into wearable art. 
            Discover how our clients carry their most meaningful moments with them, elegantly concealed yet powerfully present.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Image */}
                  <div className="relative w-full lg:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-10 h-10 rounded-full bg-${story.color}-500 flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-xs font-medium opacity-90">Hidden Motif</div>
                      <div className="text-sm font-semibold">{story.motif}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-display font-bold text-luxury-charcoal">
                      {story.title}
                    </h3>
                    <p className="text-primary-600 leading-relaxed text-lg">
                      {story.story}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary-500">
                      <div className={`w-2 h-2 rounded-full bg-${story.color}-500`} />
                      <span>Custom Lining Design</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Interactive Lining Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-cream rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-luxury-charcoal">
                Design Your Hidden Story
              </h3>
              <p className="text-lg text-primary-700 leading-relaxed">
                Our master artisans work with you to create custom motifs that represent your personal journey. 
                From family crests to meaningful symbols, your story becomes part of the suit's DNA.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-sm">1</div>
                  <span className="font-semibold text-luxury-charcoal">Share Your Story</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-sm">2</div>
                  <span className="font-semibold text-luxury-charcoal">Design Your Motif</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-sm">3</div>
                  <span className="font-semibold text-luxury-charcoal">Wear Your Legacy</span>
                </div>
              </div>

              <button className="btn-primary">
                Start Your Story
              </button>
            </div>

            {/* Lining Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-luxury">
                <h4 className="text-xl font-display font-semibold text-luxury-charcoal mb-6 text-center">
                  Lining Options
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-24 rounded-lg overflow-hidden border-2 border-gold-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-gold-200" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HeartIcon className="w-8 h-8 text-gold-600" />
                    </div>
                    <div className="absolute bottom-1 left-1 text-xs font-medium text-gold-700">Wedding</div>
                  </div>
                  <div className="relative h-24 rounded-lg overflow-hidden border-2 border-accent-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-100 to-accent-200" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrophyIcon className="w-8 h-8 text-accent-600" />
                    </div>
                    <div className="absolute bottom-1 left-1 text-xs font-medium text-accent-700">Victory</div>
                  </div>
                  <div className="relative h-24 rounded-lg overflow-hidden border-2 border-primary-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <SparklesIcon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="absolute bottom-1 left-1 text-xs font-medium text-primary-700">Innovation</div>
                  </div>
                  <div className="relative h-24 rounded-lg overflow-hidden border-2 border-cream-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cream-100 to-cream-200" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GiftIcon className="w-8 h-8 text-cream-700" />
                    </div>
                    <div className="absolute bottom-1 left-1 text-xs font-medium text-cream-800">Legacy</div>
                  </div>
                </div>
                <p className="text-sm text-primary-500 text-center mt-4">
                  + Hundreds of custom designs available
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}