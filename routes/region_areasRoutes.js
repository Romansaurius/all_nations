const express = require('express');
const router = express.Router();
const region_areasController = require('../controllers/region_areasController');

router.get('/getall', region_areasController.getAllRegion_areas);
router.post('/insert', region_areasController.insertRegion_areas);
router.put('/update/:id', region_areasController.updateRegion_areas);
router.delete('/delete/:id', region_areasController.deleteRegion_areas);

module.exports = router;
