// CRM System for Dr. Lucas Bespoke - Luxury Client Management

export interface Client {
  id: string
  personalInfo: {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth?: Date
    address: Address
    preferredContact: 'email' | 'phone' | 'text'
  }
  story: {
    narrative: string
    significance: string
    motifPreferences: string[]
    occasions: string[]
    personalSymbols: string[]
    colorPreferences: string[]
  }
  measurements: {
    chest: number
    waist: number
    shoulders: number
    sleeves: number
    inseam: number
    neck: number
    lastUpdated: Date
    notes: string
  }
  preferences: {
    fabricTypes: string[]
    stylePreferences: string[]
    fitPreference: 'slim' | 'regular' | 'relaxed'
    buttonPreference: string
    lapelStyle: string
    ventPreference: string
  }
  orders: Order[]
  consultations: Consultation[]
  communications: Communication[]
  lifetime: {
    totalSpent: number
    orderCount: number
    averageOrderValue: number
    lastPurchase: Date
    acquisitionDate: Date
    acquisitionChannel: string
    referralSource?: string
  }
  status: 'prospect' | 'active' | 'vip' | 'inactive'
  tags: string[]
  notes: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Order {
  id: string
  clientId: string
  orderDate: Date
  collection: 'ceremonial' | 'corporate' | 'travel'
  items: OrderItem[]
  customizations: {
    fabricChoice: string
    liningDesign: string
    motifDescription: string
    specialInstructions: string
  }
  pricing: {
    subtotal: number
    tax: number
    shipping: number
    discount: number
    total: number
  }
  timeline: {
    orderDate: Date
    designApproval: Date
    productionStart: Date
    firstFitting: Date
    secondFitting: Date
    finalFitting: Date
    deliveryDate: Date
    estimatedDelivery: Date
  }
  status: 'consultation' | 'design' | 'approved' | 'production' | 'fitting' | 'completed' | 'delivered'
  fittings: Fitting[]
  story: {
    narrative: string
    motifDescription: string
    significance: string
  }
}

export interface OrderItem {
  id: string
  type: 'suit' | 'shirt' | 'tie' | 'accessory'
  name: string
  price: number
  quantity: number
  specifications: Record<string, any>
}

export interface Consultation {
  id: string
  clientId: string
  date: Date
  duration: number // minutes
  type: 'initial' | 'design' | 'fitting' | 'followup'
  consultant: string
  location: string
  notes: string
  outcomes: string[]
  nextSteps: string[]
  storyElements: {
    discovered: string[]
    motifIdeas: string[]
    occasionPlanning: string[]
  }
}

export interface Fitting {
  id: string
  orderId: string
  date: Date
  type: 'basting' | 'forward' | 'final'
  tailor: string
  adjustments: Adjustment[]
  photos: string[]
  notes: string
  clientSatisfaction: number // 1-5 scale
  nextFittingDate?: Date
}

export interface Adjustment {
  area: string
  description: string
  measurement: number
  notes: string
}

export interface Communication {
  id: string
  clientId: string
  date: Date
  type: 'email' | 'phone' | 'text' | 'in-person'
  subject: string
  content: string
  direction: 'inbound' | 'outbound'
  staff: string
  followUpRequired: boolean
  followUpDate?: Date
}

// CRM Service Class
export class DrLucasCRM {
  private clients: Map<string, Client> = new Map()
  private orders: Map<string, Order> = new Map()

  // Client Management
  createClient(clientData: Omit<Client, 'id' | 'orders' | 'consultations' | 'communications' | 'lifetime'>): Client {
    const client: Client = {
      id: this.generateId(),
      ...clientData,
      orders: [],
      consultations: [],
      communications: [],
      lifetime: {
        totalSpent: 0,
        orderCount: 0,
        averageOrderValue: 0,
        lastPurchase: new Date(),
        acquisitionDate: new Date(),
        acquisitionChannel: 'direct'
      }
    }
    
    this.clients.set(client.id, client)
    return client
  }

  updateClient(clientId: string, updates: Partial<Client>): Client | null {
    const client = this.clients.get(clientId)
    if (!client) return null

    const updatedClient = { ...client, ...updates }
    this.clients.set(clientId, updatedClient)
    return updatedClient
  }

  getClient(clientId: string): Client | null {
    return this.clients.get(clientId) || null
  }

  searchClients(query: string): Client[] {
    return Array.from(this.clients.values()).filter(client => 
      client.personalInfo.firstName.toLowerCase().includes(query.toLowerCase()) ||
      client.personalInfo.lastName.toLowerCase().includes(query.toLowerCase()) ||
      client.personalInfo.email.toLowerCase().includes(query.toLowerCase()) ||
      client.story.narrative.toLowerCase().includes(query.toLowerCase())
    )
  }

  // Story & Consultation Management
  addConsultation(clientId: string, consultation: Omit<Consultation, 'id' | 'clientId'>): Consultation | null {
    const client = this.clients.get(clientId)
    if (!client) return null

    const newConsultation: Consultation = {
      id: this.generateId(),
      clientId,
      ...consultation
    }

    client.consultations.push(newConsultation)
    this.clients.set(clientId, client)
    return newConsultation
  }

  updateStory(clientId: string, storyUpdates: Partial<Client['story']>): boolean {
    const client = this.clients.get(clientId)
    if (!client) return false

    client.story = { ...client.story, ...storyUpdates }
    this.clients.set(clientId, client)
    return true
  }

  // Order Management
  createOrder(orderData: Omit<Order, 'id'>): Order {
    const order: Order = {
      id: this.generateId(),
      ...orderData
    }

    this.orders.set(order.id, order)
    
    // Update client order history
    const client = this.clients.get(order.clientId)
    if (client) {
      client.orders.push(order)
      this.updateClientLifetimeValue(client.id, order.pricing.total)
    }

    return order
  }

  updateOrderStatus(orderId: string, status: Order['status']): boolean {
    const order = this.orders.get(orderId)
    if (!order) return false

    order.status = status
    this.orders.set(orderId, order)
    return true
  }

  addFitting(orderId: string, fitting: Omit<Fitting, 'id' | 'orderId'>): Fitting | null {
    const order = this.orders.get(orderId)
    if (!order) return null

    const newFitting: Fitting = {
      id: this.generateId(),
      orderId,
      ...fitting
    }

    order.fittings.push(newFitting)
    this.orders.set(orderId, order)
    return newFitting
  }

  // Analytics & Reporting
  getClientLifetimeValue(clientId: string): number {
    const client = this.clients.get(clientId)
    return client?.lifetime.totalSpent || 0
  }

  getTopClients(limit: number = 10): Client[] {
    return Array.from(this.clients.values())
      .sort((a, b) => b.lifetime.totalSpent - a.lifetime.totalSpent)
      .slice(0, limit)
  }

  getOrdersByStatus(status: Order['status']): Order[] {
    return Array.from(this.orders.values()).filter(order => order.status === status)
  }

  getMonthlyStats(year: number, month: number) {
    const orders = Array.from(this.orders.values()).filter(order => {
      const orderDate = new Date(order.orderDate)
      return orderDate.getFullYear() === year && orderDate.getMonth() === month - 1
    })

    return {
      orderCount: orders.length,
      totalRevenue: orders.reduce((sum, order) => sum + order.pricing.total, 0),
      averageOrderValue: orders.length > 0 ? orders.reduce((sum, order) => sum + order.pricing.total, 0) / orders.length : 0,
      collectionBreakdown: this.getCollectionBreakdown(orders)
    }
  }

  // Client Segmentation
  segmentClients(): { vip: Client[], active: Client[], prospects: Client[], inactive: Client[] } {
    const clients = Array.from(this.clients.values())
    
    return {
      vip: clients.filter(c => c.status === 'vip' || c.lifetime.totalSpent > 10000),
      active: clients.filter(c => c.status === 'active' && c.lifetime.totalSpent <= 10000),
      prospects: clients.filter(c => c.status === 'prospect'),
      inactive: clients.filter(c => c.status === 'inactive')
    }
  }

  // Communication Tracking
  addCommunication(clientId: string, communication: Omit<Communication, 'id' | 'clientId'>): Communication | null {
    const client = this.clients.get(clientId)
    if (!client) return null

    const newCommunication: Communication = {
      id: this.generateId(),
      clientId,
      ...communication
    }

    client.communications.push(newCommunication)
    this.clients.set(clientId, client)
    return newCommunication
  }

  getUpcomingFollowUps(): Communication[] {
    const allCommunications = Array.from(this.clients.values())
      .flatMap(client => client.communications)
      .filter(comm => comm.followUpRequired && comm.followUpDate)
      .sort((a, b) => (a.followUpDate?.getTime() || 0) - (b.followUpDate?.getTime() || 0))

    return allCommunications
  }

  // Private helper methods
  private generateId(): string {
    return `dl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private updateClientLifetimeValue(clientId: string, orderValue: number): void {
    const client = this.clients.get(clientId)
    if (!client) return

    client.lifetime.totalSpent += orderValue
    client.lifetime.orderCount += 1
    client.lifetime.averageOrderValue = client.lifetime.totalSpent / client.lifetime.orderCount
    client.lifetime.lastPurchase = new Date()

    // Update status based on spending
    if (client.lifetime.totalSpent > 10000) {
      client.status = 'vip'
    } else if (client.lifetime.orderCount > 0) {
      client.status = 'active'
    }

    this.clients.set(clientId, client)
  }

  private getCollectionBreakdown(orders: Order[]) {
    const breakdown = { ceremonial: 0, corporate: 0, travel: 0 }
    orders.forEach(order => {
      breakdown[order.collection] += order.pricing.total
    })
    return breakdown
  }
}

// Sample data for testing
export const createSampleClient = (): Omit<Client, 'id' | 'orders' | 'consultations' | 'communications' | 'lifetime'> => ({
  personalInfo: {
    firstName: 'Marcus',
    lastName: 'Thompson',
    email: 'marcus.thompson@example.com',
    phone: '+1-555-0123',
    address: {
      street: '123 Michigan Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      country: 'USA'
    },
    preferredContact: 'email'
  },
  story: {
    narrative: 'Former professional soccer player turned CEO who wants to honor his athletic journey',
    significance: 'Soccer represents teamwork, dedication, and the pursuit of excellence that drives his business philosophy',
    motifPreferences: ['soccer ball', 'team colors', 'victory symbols'],
    occasions: ['board meetings', 'investor presentations', 'award ceremonies'],
    personalSymbols: ['soccer ball', 'championship trophy', 'team crest'],
    colorPreferences: ['navy', 'charcoal', 'gold accents']
  },
  measurements: {
    chest: 42,
    waist: 34,
    shoulders: 18,
    sleeves: 25,
    inseam: 32,
    neck: 16,
    lastUpdated: new Date(),
    notes: 'Athletic build, prefers slightly relaxed fit through chest'
  },
  preferences: {
    fabricTypes: ['wool', 'wool-silk blend'],
    stylePreferences: ['modern cut', 'subtle patterns'],
    fitPreference: 'regular',
    buttonPreference: 'horn',
    lapelStyle: 'notch',
    ventPreference: 'double'
  },
  status: 'active',
  tags: ['CEO', 'former athlete', 'high-value', 'referral source'],
  notes: 'Excellent referral source, very active on social media, prefers morning appointments'
})