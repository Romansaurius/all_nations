const express = require('express');
const router = express.Router();
const regionsController = require('../controllers/regionsController');

router.get('/getall', regionsController.getAllRegions);
router.post('/insert', regionsController.insertRegions);
router.put('/update/:id', regionsController.updateRegions);
router.delete('/delete/:id', regionsController.deleteRegions);

module.exports = router;
