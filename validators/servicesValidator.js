const { query } = require('express-validator');

exports.validateServiceQuery = [
  query('filter').optional().isString().withMessage('filter must be a string')
];
