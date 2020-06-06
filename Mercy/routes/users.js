var express = require('express');
var router = express.Router();
const userController=require('../controllers/user');
const symptomController=require('../controllers/symptom');
const medicineController=require('../controllers/medicine');

router.post('/login', userController.login);
router.post('/symptom', symptomController.send);
router.get('/medicine', medicineController.get);

module.exports = router;
