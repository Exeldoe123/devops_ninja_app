const express = require('express');
const { validationResult } = require('express-validator');
const { validateServiceQuery } = require('../validators/servicesValidator');

const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ status: 'ok' });
});

router.get('/services', validateServiceQuery, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const services = [
    { id: 1, name: 'Kubernetes Consulting' },
    { id: 2, name: 'Cloud Migration' },
    { id: 3, name: 'DevSecOps Audit' }
  ];

  res.json(services);
});

module.exports = router;
