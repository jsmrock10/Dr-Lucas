'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  ShoppingBagIcon,
  TrendingUpIcon,
  CalendarDaysIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { BUSINESS_CONFIG } from '@/lib/business-config'

interface DashboardData {
  revenue: {
    monthly: number
    annual: number
    target: number
    growth: number
  }
  orders: {
    monthly: number
    pending: number
    completed: number
    target: number
  }
  clients: {
    total: number
    active: number
    vip: number
    newThisMonth: number
  }
  collections: {
    ceremonial: { orders: number, revenue: number }
    corporate: { orders: number, revenue: number }
    travel: { orders: number, revenue: number }
  }
  kpis: {
    aov: number
    cac: number
    ltv: number
    satisfaction: number
    nps: number
    onTimeDelivery: number
  }
  production: {
    capacity: number
    utilization: number
    inProduction: number
    readyForFitting: number
  }
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData>({
    revenue: {
      monthly: 87500,
      annual: 425000,
      target: 1000000,
      growth: 15.3
    },
    orders: {
      monthly: 35,
      pending: 12,
      completed: 156,
      target: 34
    },
    clients: {
      total: 124,
      active: 89,
      vip: 15,
      newThisMonth: 23
    },
    collections: {
      ceremonial: { orders: 18, revenue: 54000 },
      corporate: { orders: 12, revenue: 26400 },
      travel: { orders: 5, revenue: 9250 }
    },
    kpis: {
      aov: 2500,
      cac: 145,
      ltv: 3500,
      satisfaction: 4.8,
      nps: 76,
      onTimeDelivery: 96
    },
    production: {
      capacity: 65,
      utilization: 54,
      inProduction: 28,
      readyForFitting: 8
    }
  })

  const [timeframe, setTimeframe] = useState<'month' | 'quarter' | 'year'>('month')

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        revenue: {
          ...prev.revenue,
          monthly: prev.revenue.monthly + Math.random() * 1000 - 500
        }
      }))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const StatCard = ({ title, value, subtitle, icon: Icon, trend, color = 'gold' }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card-luxury"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUpIcon className={`w-4 h-4 ${trend < 0 ? 'rotate-180' : ''}`} />
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-luxury-charcoal">{value}</h3>
        <p className="text-sm text-primary-600">{title}</p>
        {subtitle && <p className="text-xs text-primary-500">{subtitle}</p>}
      </div>
    </motion.div>
  )

  const ProgressBar = ({ label, current, target, color = 'gold' }: any) => {
    const percentage = Math.min((current / target) * 100, 100)
    
    return (
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-luxury-charcoal font-medium">{label}</span>
          <span className="text-primary-600">{current.toLocaleString()} / {target.toLocaleString()}</span>
        </div>
        <div className="w-full bg-primary-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`bg-${color}-500 h-2 rounded-full`}
          />
        </div>
        <div className="text-xs text-primary-500">
          {percentage.toFixed(1)}% of target
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-pearl p-6">
      <div className="container-max">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-display font-bold text-luxury-charcoal">
                Business Dashboard
              </h1>
              <p className="text-primary-600">Dr. Lucas Bespoke - Real-time Analytics</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value as any)}
                className="px-4 py-2 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <div className="text-sm text-primary-600">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Monthly Revenue"
            value={`$${data.revenue.monthly.toLocaleString()}`}
            subtitle={`${data.revenue.growth}% vs last month`}
            icon={CurrencyDollarIcon}
            trend={data.revenue.growth}
            color="gold"
          />
          <StatCard
            title="Monthly Orders"
            value={data.orders.monthly}
            subtitle={`Target: ${data.orders.target}/month`}
            icon={ShoppingBagIcon}
            trend={8.5}
            color="accent"
          />
          <StatCard
            title="Total Clients"
            value={data.clients.total}
            subtitle={`${data.clients.newThisMonth} new this month`}
            icon={UserGroupIcon}
            trend={12.3}
            color="primary"
          />
          <StatCard
            title="Average Order Value"
            value={`$${data.kpis.aov.toLocaleString()}`}
            subtitle="Above industry average"
            icon={ChartBarIcon}
            trend={5.2}
            color="cream"
          />
        </div>

        {/* Progress Tracking */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-luxury"
          >
            <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-6">
              Annual Targets Progress
            </h3>
            <div className="space-y-6">
              <ProgressBar
                label="Annual Revenue"
                current={data.revenue.annual}
                target={BUSINESS_CONFIG.revenue.annualTarget}
                color="gold"
              />
              <ProgressBar
                label="Total Orders"
                current={data.orders.completed}
                target={400}
                color="accent"
              />
              <ProgressBar
                label="Client Acquisition"
                current={data.clients.total}
                target={320}
                color="primary"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-luxury"
          >
            <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-6">
              Collection Performance
            </h3>
            <div className="space-y-4">
              {Object.entries(data.collections).map(([key, collection]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-luxury-charcoal capitalize">
                      {key} Collection
                    </h4>
                    <p className="text-sm text-primary-600">
                      {collection.orders} orders this month
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-luxury-charcoal">
                      ${collection.revenue.toLocaleString()}
                    </div>
                    <div className="text-xs text-primary-500">Revenue</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Operational Metrics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-luxury"
          >
            <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-6">
              Production Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary-600">Capacity Utilization</span>
                <span className="font-semibold text-luxury-charcoal">
                  {data.production.utilization}%
                </span>
              </div>
              <div className="w-full bg-primary-200 rounded-full h-2">
                <div 
                  className="bg-accent-500 h-2 rounded-full"
                  style={{ width: `${data.production.utilization}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-primary-50 rounded-lg">
                  <div className="text-lg font-bold text-luxury-charcoal">
                    {data.production.inProduction}
                  </div>
                  <div className="text-xs text-primary-600">In Production</div>
                </div>
                <div className="text-center p-3 bg-gold-50 rounded-lg">
                  <div className="text-lg font-bold text-luxury-charcoal">
                    {data.production.readyForFitting}
                  </div>
                  <div className="text-xs text-primary-600">Ready for Fitting</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-luxury"
          >
            <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-6">
              Customer Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 text-gold-500" />
                  <span className="text-primary-600">Satisfaction</span>
                </div>
                <span className="font-semibold text-luxury-charcoal">
                  {data.kpis.satisfaction}/5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-600">Net Promoter Score</span>
                <span className="font-semibold text-luxury-charcoal">{data.kpis.nps}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-600">On-Time Delivery</span>
                <span className="font-semibold text-luxury-charcoal">
                  {data.kpis.onTimeDelivery}%
                </span>
              </div>
              <div className="pt-4 border-t border-primary-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary-600">Client Breakdown</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>VIP Clients</span>
                    <span className="font-medium">{data.clients.vip}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Clients</span>
                    <span className="font-medium">{data.clients.active}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-luxury"
          >
            <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-6">
              Financial Health
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-primary-600">Customer Acquisition Cost</span>
                <span className="font-semibold text-luxury-charcoal">
                  ${data.kpis.cac}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-600">Lifetime Value</span>
                <span className="font-semibold text-luxury-charcoal">
                  ${data.kpis.ltv.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-primary-600">LTV:CAC Ratio</span>
                <span className="font-semibold text-luxury-charcoal">
                  {(data.kpis.ltv / data.kpis.cac).toFixed(1)}:1
                </span>
              </div>
              <div className="pt-4 border-t border-primary-200">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-700">
                    ${((data.revenue.annual / 12) * 12 * 0.37).toLocaleString()}
                  </div>
                  <div className="text-xs text-green-600">Projected Annual Profit</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card-luxury"
        >
          <h3 className="text-xl font-display font-semibold text-luxury-charcoal mb-6">
            Quick Actions
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <button className="btn-primary text-center">
              <CalendarDaysIcon className="w-5 h-5 mx-auto mb-2" />
              Schedule Consultation
            </button>
            <button className="btn-secondary text-center">
              <UserGroupIcon className="w-5 h-5 mx-auto mb-2" />
              View Clients
            </button>
            <button className="btn-outline text-center">
              <ShoppingBagIcon className="w-5 h-5 mx-auto mb-2" />
              Manage Orders
            </button>
            <button className="btn-outline text-center">
              <ClockIcon className="w-5 h-5 mx-auto mb-2" />
              Production Queue
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}