// Business Configuration for Dr. Lucas Bespoke

export const BUSINESS_CONFIG = {
  // Revenue Goals
  revenue: {
    annualTarget: 1000000, // $1M target
    monthlyTarget: 83333, // $83.3K monthly
    averageOrderValue: 2500, // $2,500 AOV
    requiredOrders: {
      annual: 400, // suits per year
      monthly: 34, // suits per month
    }
  },

  // Collections & Pricing
  collections: {
    ceremonial: {
      name: 'Ceremonial Collection',
      tagline: 'Moments That Matter',
      priceRange: { min: 2500, max: 3500 },
      averagePrice: 3000,
      targetUnits: 200, // annual
      grossMargin: 0.65,
      features: [
        'Italian Fresco Weaves',
        'Commemorative Linings',
        'Hand-Stitched Details',
        'Premium Silk Linings',
        'Custom Motif Design'
      ],
      occasions: ['Wedding', 'Graduation', 'Prom', 'Anniversary', 'Special Events'],
      leadTime: '6-8 weeks'
    },
    corporate: {
      name: 'Corporate Line',
      tagline: 'Power & Prestige',
      priceRange: { min: 1800, max: 2500 },
      averagePrice: 2200,
      targetUnits: 120, // annual
      grossMargin: 0.62,
      features: [
        'Power-Play Linings',
        'Executive Silhouettes',
        'Performance Fabrics',
        'Reinforced Construction',
        'Professional Styling'
      ],
      occasions: ['Board Meetings', 'Executive Events', 'Business Travel', 'Conferences'],
      leadTime: '4-6 weeks'
    },
    travel: {
      name: 'Travel Tailoring',
      tagline: 'Global Sophistication',
      priceRange: { min: 1500, max: 2200 },
      averagePrice: 1850,
      targetUnits: 80, // annual
      grossMargin: 0.60,
      features: [
        'Wrinkle-Resistant Fabrics',
        'Hidden Travel Pockets',
        'Wash-and-Wear Properties',
        'Lightweight Construction',
        'Quick-Dry Linings'
      ],
      occasions: ['Business Travel', 'International Meetings', 'Conferences', 'Client Dinners'],
      leadTime: '3-4 weeks'
    }
  },

  // Custom Accessories (Revenue Booster)
  accessories: {
    shirts: {
      name: 'Custom Shirts',
      priceRange: { min: 150, max: 250 },
      averagePrice: 200,
      attachRate: 0.30, // 30% of suit buyers
      grossMargin: 0.70
    },
    ties: {
      name: 'Silk Ties',
      priceRange: { min: 75, max: 150 },
      averagePrice: 100,
      attachRate: 0.25,
      grossMargin: 0.75
    },
    accessories: {
      name: 'Leather Goods',
      priceRange: { min: 100, max: 400 },
      averagePrice: 200,
      attachRate: 0.20,
      grossMargin: 0.65
    }
  },

  // Operational Parameters
  operations: {
    productionPartners: {
      bespoke: {
        name: 'Local Master Atelier',
        location: 'Chicago, IL',
        capacity: 25, // suits per month
        specialties: ['Hand-canvassed construction', 'Custom linings', 'Premium finishes']
      },
      travel: {
        name: 'European Mill Partner',
        location: 'Milan, Italy',
        capacity: 40, // suits per month
        specialties: ['Performance fabrics', 'Travel features', 'Quick turnaround']
      }
    },
    leadTimes: {
      bespoke: '6-8 weeks',
      corporate: '4-6 weeks',
      travel: '3-4 weeks',
      accessories: '2-3 weeks'
    },
    qualityControl: {
      inspectionRate: 1.0, // 100% inspection
      returnRate: 0.02, // 2% return rate target
      satisfactionTarget: 0.98 // 98% satisfaction
    }
  },

  // Customer Acquisition
  marketing: {
    channels: {
      digital: {
        facebook: { budget: 3000, cac: 120, conversion: 0.03 },
        google: { budget: 4000, cac: 150, conversion: 0.04 },
        instagram: { budget: 2000, cac: 100, conversion: 0.025 }
      },
      partnerships: {
        boutiques: { commission: 0.50, expectedOrders: 60 },
        weddingPlanners: { commission: 0.15, expectedOrders: 80 },
        corporatePrograms: { discount: 0.10, expectedOrders: 40 }
      }
    },
    targetCAC: 150, // Customer Acquisition Cost
    ltv: 3500, // Customer Lifetime Value
    referralRate: 0.25, // 25% referral rate
    repeatPurchaseRate: 0.30 // 30% repeat within 2 years
  },

  // Geographic Markets
  markets: {
    primary: {
      chicago: { population: 2700000, targetPenetration: 0.0001 },
      newYork: { population: 8400000, targetPenetration: 0.00008 },
      sanFrancisco: { population: 875000, targetPenetration: 0.00015 }
    },
    secondary: {
      london: { population: 9000000, targetPenetration: 0.00005 },
      losAngeles: { population: 4000000, targetPenetration: 0.00006 },
      miami: { population: 470000, targetPenetration: 0.0001 }
    }
  },

  // Financial Projections
  financials: {
    year1: {
      revenue: {
        ceremonial: 600000, // 200 units × $3,000
        corporate: 264000,  // 120 units × $2,200
        travel: 148000,     // 80 units × $1,850
        accessories: 80000, // Attach sales
        total: 1092000
      },
      costs: {
        cogs: 436800,      // 40% of revenue
        marketing: 109200,  // 10% of revenue
        operations: 87360,  // 8% of revenue
        overhead: 54600,    // 5% of revenue
        total: 687960
      },
      grossProfit: 655200,  // 60% gross margin
      netProfit: 404040     // 37% net margin
    }
  },

  // Key Performance Indicators
  kpis: {
    financial: {
      monthlyRevenue: 91000,
      grossMargin: 0.60,
      netMargin: 0.37,
      cac: 150,
      ltv: 3500,
      ltvCacRatio: 23.3
    },
    operational: {
      monthlyOrders: 34,
      averageOrderValue: 2500,
      productionCapacity: 65, // suits per month
      utilizationRate: 0.52,  // 52% capacity utilization
      onTimeDelivery: 0.95,   // 95% on-time delivery
      qualityScore: 0.98      // 98% quality score
    },
    customer: {
      satisfactionScore: 4.8, // out of 5
      nps: 75,                // Net Promoter Score
      repeatRate: 0.30,       // 30% repeat customers
      referralRate: 0.25,     // 25% referral rate
      churnRate: 0.05         // 5% annual churn
    }
  },

  // Scaling Milestones
  milestones: {
    month3: {
      revenue: 150000,
      orders: 60,
      customers: 50
    },
    month6: {
      revenue: 400000,
      orders: 160,
      customers: 140
    },
    month12: {
      revenue: 1000000,
      orders: 400,
      customers: 320
    }
  }
}

// Utility functions for business calculations
export const calculateMonthlyTargets = (month: number) => {
  const rampUp = Math.min(month / 6, 1) // 6-month ramp-up period
  return {
    revenue: BUSINESS_CONFIG.revenue.monthlyTarget * rampUp,
    orders: BUSINESS_CONFIG.revenue.requiredOrders.monthly * rampUp,
    marketing: BUSINESS_CONFIG.revenue.monthlyTarget * 0.10 * rampUp
  }
}

export const calculateCollectionMix = () => {
  const total = BUSINESS_CONFIG.collections.ceremonial.targetUnits + 
                BUSINESS_CONFIG.collections.corporate.targetUnits + 
                BUSINESS_CONFIG.collections.travel.targetUnits
  
  return {
    ceremonial: BUSINESS_CONFIG.collections.ceremonial.targetUnits / total,
    corporate: BUSINESS_CONFIG.collections.corporate.targetUnits / total,
    travel: BUSINESS_CONFIG.collections.travel.targetUnits / total
  }
}

export const calculateAccessoryRevenue = (suitSales: number) => {
  const shirtRevenue = suitSales * BUSINESS_CONFIG.accessories.shirts.attachRate * 
                      BUSINESS_CONFIG.accessories.shirts.averagePrice
  const tieRevenue = suitSales * BUSINESS_CONFIG.accessories.ties.attachRate * 
                    BUSINESS_CONFIG.accessories.ties.averagePrice
  const accessoryRevenue = suitSales * BUSINESS_CONFIG.accessories.accessories.attachRate * 
                          BUSINESS_CONFIG.accessories.accessories.averagePrice
  
  return shirtRevenue + tieRevenue + accessoryRevenue
}