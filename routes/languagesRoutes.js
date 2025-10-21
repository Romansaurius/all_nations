const express = require('express');
const router = express.Router();
const languagesController = require('../controllers/languagesController');

router.get('/getall', languagesController.getAllLanguages);
router.post('/insert', languagesController.insertLanguages);
router.put('/update/:id', languagesController.updateLanguages);
router.delete('/delete/:id', languagesController.deleteLanguages);

module.exports = router;
