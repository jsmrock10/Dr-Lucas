const express = require('express');
const data = require('../data/veriData');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'veri-api' });
});

router.get('/overview', (_req, res) => {
  res.json({ vision: data.productVision, modules: data.modules, kpis: data.kpis });
});

router.get('/personas', (_req, res) => {
  res.json(data.personas);
});

router.get('/budget', (_req, res) => {
  res.json(data.sampleBudget);
});

router.get('/timeline', (_req, res) => {
  res.json(data.sampleTimeline);
});

router.get('/marketplace/matches', (_req, res) => {
  res.json(data.marketplaceMatches);
});

module.exports = router;
