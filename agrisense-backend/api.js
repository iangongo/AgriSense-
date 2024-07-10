const express = require('express');
const router = express.Router();
const farmController = require('../controllers/farmController');
const fieldController = require('../controllers/fieldController');
const cropHealthDataController = require('../controllers/cropHealthDataController');

router.get('/farms', farmController.getFarms);
router.post('/farms', farmController.createFarm);

router.get('/fields', fieldController.getFields);
router.post('/fields', fieldController.createField);

router.get('/crop_health_data', cropHealthDataController.getCropHealthData);
router.post('/crop_health_data', cropHealthDataController.createCropHealthData);

module.exports = router;

