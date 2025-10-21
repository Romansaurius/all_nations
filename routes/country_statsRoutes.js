const express = require('express');
const router = express.Router();
const country_statsController = require('../controllers/country_statsController');

router.get('/getall', country_statsController.getAllCountry_stats);
router.post('/insert', country_statsController.insertCountry_stats);
router.put('/update/:id', country_statsController.updateCountry_stats);
router.delete('/delete/:id', country_statsController.deleteCountry_stats);

module.exports = router;
