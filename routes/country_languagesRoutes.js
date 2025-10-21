const express = require('express');
const router = express.Router();
const country_languagesController = require('../controllers/country_languagesController');

router.get('/getall', country_languagesController.getAllCountry_languages);
router.post('/insert', country_languagesController.insertCountry_languages);
router.put('/update/:id', country_languagesController.updateCountry_languages);
router.delete('/delete/:id', country_languagesController.deleteCountry_languages);

module.exports = router;
