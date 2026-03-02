const express = require('express');
const cors = require('cors');
const path = require('path');
const veriRoutes = require('./routes/veriRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'web')));

app.use('/api', veriRoutes);

app.get('/healthz', (_req, res) => {
  res.json({ ok: true, service: 'veri-platform' });
});

app.listen(PORT, () => {
  console.log(`VERI API listening on port ${PORT}`);
});
