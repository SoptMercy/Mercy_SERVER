const resMessage=require('../modules/responseMessage');
const util=require('../modules/util');
const statusCode=require('../modules/statusCode');
const symptomModel=require('../models/symptom');

const controllers={
    send : async (req, res)=>{
        const {symptomIdx}=req.body;
        const result=await symptomModel.selectDrug(symptomIdx);
        var temp=[];
        var temp2={
            "symptomName":result[0].symptomName
        };
        temp.push(temp2);
        temp2={
            "name":result[0].drugName1,
            "image":result[0].drugImage1,
            "price":result[0].drugPrice1,
            "content":result[0].drugContent1
        };
        temp.push(temp2);
        temp2={
            "name":result[0].drugName2,
            "image":result[0].drugImage2,
            "price":result[0].drugPrice2,
            "content":result[0].drugContent2
        };
        temp.push(temp2);

        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.OK_DRUG,temp));
    }
};

module.exports=controllers;