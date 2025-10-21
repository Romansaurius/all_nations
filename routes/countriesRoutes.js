const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesController');

router.get('/getall', countriesController.getAllCountries);
router.post('/insert', countriesController.insertCountries);
router.put('/update/:id', countriesController.updateCountries);
router.delete('/delete/:id', countriesController.deleteCountries);

module.exports = router;
