'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Marcus Thompson',
    title: 'CEO, Thompson Industries',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The hidden soccer ball lining in my executive suit tells the story of my journey from the pitch to the boardroom. Every time I wear it, I\'m reminded of the passion that drives my success.',
    collection: 'Corporate Line',
    location: 'Chicago, IL'
  },
  {
    id: 2,
    name: 'Sarah & James Mitchell',
    title: 'Wedding Clients',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The boomerang pattern in James\'s wedding suit jacket perfectly captured our love story - how we found our way back to each other. It made our special day even more meaningful.',
    collection: 'Ceremonial Collection',
    location: 'New York, NY'
  },
  {
    id: 3,
    name: 'David Chen',
    title: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The tech innovation glyphs woven into my suit\'s lining celebrate my patent breakthrough. Dr. Lucas created something truly unique that I can wear to investor meetings with pride.',
    collection: 'Corporate Line',
    location: 'San Francisco, CA'
  },
  {
    id: 4,
    name: 'Robert Harrison',
    title: 'Global Consultant',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote: 'The travel collection is a game-changer. Wrinkle-resistant, hidden pockets for documents, and a lining that tells my family\'s story. Perfect for my international lifestyle.',
    collection: 'Travel Tailoring',
    location: 'London, UK'
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
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
            Stories from Our <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto text-balance">
            Discover how Dr. Lucas Bespoke has transformed the wardrobes and confidence of discerning clients worldwide.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-luxury"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-primary-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-luxury-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-primary-600">{testimonial.title}</div>
                  <div className="text-xs text-primary-500">{testimonial.location}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gold-600">{testimonial.collection}</div>
                  <div className="text-xs text-primary-500">Collection</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-luxury rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold mb-4">
              Trusted by Discerning Clients Worldwide
            </h3>
            <p className="text-xl text-luxury-platinum max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have discovered the power of wearing their story.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-luxury-platinum">Stories Told</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-luxury-platinum">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-luxury-platinum">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-luxury-platinum">Lifetime Support</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              Read More Stories
            </button>
          </div>
        </motion.div>

        {/* Video Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-luxury-charcoal mb-8">
            Behind the Stitch: Client Stories
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-primary-100 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Behind the Stitch video preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-luxury-black/40 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                  <div className="w-0 h-0 border-l-[12px] border-l-luxury-charcoal border-y-[8px] border-y-transparent ml-1" />
                </button>
              </div>
            </div>
            <p className="text-primary-600 mt-4">
              Watch Marcus share how his soccer-themed lining connects his past passion with his present success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}