const resMessage=require('../modules/responseMessage');
const util=require('../modules/util');
const statusCode=require('../modules/statusCode');
const userModel=require('../models/user');

const controllers={
    login : async (req, res)=>{
        const {id, password}=req.body;
        if(!id||!password){
            res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        }
        if(await userModel.signin(id,password)){
            res.status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.LOGIN_FAIL));
        }
        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, "Hello"));
    }
};

module.exports=controllers;