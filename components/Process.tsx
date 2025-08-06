'use client'

import { motion } from 'framer-motion'
import { UserIcon, SwatchIcon, ScissorsIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/outline'

const processSteps = [
  {
    step: 1,
    title: 'Personal Consultation',
    description: 'Share your story and vision with our master tailors during a 90-minute private consultation.',
    duration: '90 minutes',
    icon: UserIcon,
    details: [
      'Story discovery session',
      'Style preferences discussion',
      'Occasion planning',
      'Initial measurements'
    ]
  },
  {
    step: 2,
    title: 'Fabric & Design Selection',
    description: 'Choose from premium European fabrics and design your unique hidden lining motif.',
    duration: '2-3 days',
    icon: SwatchIcon,
    details: [
      'Premium fabric selection',
      'Lining motif design',
      'Button & hardware choices',
      'Final design approval'
    ]
  },
  {
    step: 3,
    title: 'Precision Crafting',
    description: 'Our artisans handcraft your suit using traditional techniques and modern precision.',
    duration: '4-6 weeks',
    icon: ScissorsIcon,
    details: [
      'Pattern creation',
      'Hand-cut fabrics',
      'Canvassed construction',
      'Lining integration'
    ]
  },
  {
    step: 4,
    title: 'Fitting & Refinement',
    description: 'Multiple fittings ensure perfect silhouette and comfort for your unique physique.',
    duration: '3 sessions',
    icon: SparklesIcon,
    details: [
      'Initial basting fitting',
      'Forward fitting',
      'Final fitting',
      'Detail refinements'
    ]
  },
  {
    step: 5,
    title: 'Delivery & Care',
    description: 'Receive your completed suit with personalized care instructions and lifetime support.',
    duration: 'Same day',
    icon: TruckIcon,
    details: [
      'White-glove delivery',
      'Care instruction guide',
      'Lifetime alterations',
      'Story documentation'
    ]
  }
]

export default function Process() {
  return (
    <section className="section-padding bg-luxury-pearl">
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
            The <span className="gradient-text">Bespoke</span> Journey
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto text-balance">
            From first consultation to final delivery, experience the meticulous craftsmanship 
            and personal attention that transforms your story into a masterpiece.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 hidden lg:block" />

          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="card-luxury max-w-lg mx-auto lg:mx-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gold-600">Step {step.step}</div>
                          <h3 className="text-xl font-display font-bold text-luxury-charcoal">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-primary-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gold-500" />
                            <span className="text-sm text-primary-600">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 bg-gold-50 px-4 py-2 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-gold-500" />
                        <span className="text-sm font-medium text-gold-700">Duration: {step.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 hidden lg:block">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-gold-400 flex items-center justify-center shadow-luxury">
                      <span className="text-2xl font-bold text-gold-600">{step.step}</span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-luxury rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-xl text-luxury-platinum mb-8 max-w-2xl mx-auto">
              Schedule your complimentary consultation and take the first step toward owning a suit that truly tells your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Consultation
              </button>
              <button className="btn-outline !border-white !text-white hover:!bg-white hover:!text-luxury-charcoal">
                View Portfolio
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">6-8</div>
                <div className="text-sm text-luxury-platinum">Weeks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-luxury-platinum">Handmade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm text-luxury-platinum">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}