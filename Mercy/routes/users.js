var express = require('express');
var router = express.Router();
const userController=require('../controllers/user');
const symptomController=require('../controllers/symptom');

router.post('/login', userController.login);
router.post('/symptom', symptomController.send);

module.exports = router;
