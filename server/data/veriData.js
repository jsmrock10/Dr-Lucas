const productVision = {
  name: 'VERI',
  tagline: 'AI Wedding Operating System',
  thesis:
    'VERI is structurally aligned with couples by never accepting paid vendor placement and making every recommendation transparent.',
  northStars: [
    'Couple-First Always',
    'Radical Transparency',
    'Dual-User by Design',
    "Reduce Decisions, Don't Add Them",
    'Data Stays Private'
  ]
};

const personas = [
  {
    id: 'maya',
    name: 'Maya Chen',
    role: 'Bride',
    age: 29,
    quote: "I just want someone to tell me I'm on the right track without trying to sell me something.",
    goals: ['Protect budget', 'Maintain vision fidelity', 'Lower stress']
  },
  {
    id: 'marcus',
    name: 'Marcus Thompson',
    role: 'Groom',
    age: 31,
    quote: "Tell me what I own and I'll own it.",
    goals: ['Clear ownership', 'Budget visibility', 'Meaningful involvement']
  },
  {
    id: 'sofia',
    name: 'Sofia Morales',
    role: 'Pro-Am Planner',
    age: 34,
    quote: 'If I could have one place where every client lives, I would pay for it forever.',
    goals: ['Multi-client dashboard', 'Repeatable workflows', 'Vendor accountability']
  }
];

const modules = [
  { id: 'FM-01', name: 'Onboarding & Profile', phase: 'MVP', priority: 'P0', status: 'implemented' },
  { id: 'FM-02', name: 'Budget Guardian', phase: 'MVP', priority: 'P0', status: 'implemented' },
  { id: 'FM-03', name: 'Vision Translator', phase: 'MVP', priority: 'P0', status: 'implemented' },
  { id: 'FM-04', name: 'Smart Planning Timeline', phase: 'MVP', priority: 'P0', status: 'implemented' },
  { id: 'FM-05', name: 'Conflict-Free Vendor Marketplace', phase: 'MVP', priority: 'P0', status: 'implemented' },
  { id: 'FM-06', name: 'Contract Scanner', phase: 'MVP', priority: 'P0', status: 'implemented' },
  { id: 'FM-07', name: 'Guest Manager', phase: 'Phase 2', priority: 'P1', status: 'planned' },
  { id: 'FM-08', name: 'Partner Sync', phase: 'MVP', priority: 'P1', status: 'implemented' },
  { id: 'FM-09', name: 'Day-Of Command Center', phase: 'Phase 2', priority: 'P1', status: 'planned' },
  { id: 'FM-10', name: 'Decision Coach', phase: 'Phase 2', priority: 'P1', status: 'planned' },
  { id: 'FM-11', name: 'Vendor Comms Hub', phase: 'Phase 2', priority: 'P2', status: 'planned' },
  { id: 'FM-12', name: 'Post-Wedding Suite', phase: 'Phase 3', priority: 'P2', status: 'planned' }
];

const kpis = [
  { name: 'Budget overage rate', baseline: '74%', target: '<15%' },
  { name: 'Vendor alignment score', baseline: 'Not measured', target: '>82% yes' },
  { name: 'Groom engagement', baseline: '~20%', target: '>60%' },
  { name: 'Contract risk awareness', baseline: '~5%', target: '>85%' }
];

const sampleBudget = {
  totalBudget: 28000,
  committedSpend: 18350,
  projectedFinalCost: 29480,
  hiddenFeesFound: 1520,
  categories: [
    { name: 'Venue', allocated: 7000, projected: 7600 },
    { name: 'Photography', allocated: 3200, projected: 3900 },
    { name: 'Catering', allocated: 8400, projected: 8800 },
    { name: 'Decor + Florals', allocated: 2800, projected: 3100 }
  ]
};

const sampleTimeline = [
  { title: 'Book Venue', owner: 'joint', dueInDays: 14, critical: true },
  { title: 'Finalize Vision Brief v1', owner: 'maya', dueInDays: 10, critical: true },
  { title: 'Select Catering Shortlist', owner: 'marcus', dueInDays: 18, critical: false },
  { title: 'Upload first contract for scan', owner: 'joint', dueInDays: 7, critical: true }
];

const marketplaceMatches = [
  { vendor: 'Golden Hour Studios', category: 'Photography', styleMatch: 94, deliveryScore: 9.2, budgetFit: 'within' },
  { vendor: 'Oak & Linen Events', category: 'Decor', styleMatch: 90, deliveryScore: 8.9, budgetFit: 'within' },
  { vendor: 'Salt + Ember Catering', category: 'Catering', styleMatch: 87, deliveryScore: 9.1, budgetFit: 'slightly above' }
];

module.exports = {
  productVision,
  personas,
  modules,
  kpis,
  sampleBudget,
  sampleTimeline,
  marketplaceMatches
};
