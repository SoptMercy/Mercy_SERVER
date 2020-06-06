const resMessage=require('../modules/responseMessage');
const util=require('../modules/util');
const statusCode=require('../modules/statusCode');
const userModel=require('../models/user');
const jwt=require('../modules/jwt');
const TOKEN_EXPIRED=-3;
const TOKEN_INVALID=-2;

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
        const profile=await userModel.getUserById(id);
        const {token, _}=await jwt.sign(profile[0]);
        res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LOGIN_SUCCESS, {accessToken:token}));
    }
};

module.exports=controllers;