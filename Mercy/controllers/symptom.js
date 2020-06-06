const resMessage=require('../modules/responseMessage');
const util=require('../modules/util');
const statusCode=require('../modules/statusCode');
const symptomModel=require('../models/symptom');

const controllers={
    send : async (req, res)=>{
        const {symptomIdx}=req.body;
        const result=await symptomModel.selectDrug(symptomIdx);
        if(result){
            res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_DRUG));
        }
        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.OK_DRUG, `message:${result}`));
    }
};

module.exports=controllers;