const pool = require('../modules/pool');
const table ='user';
const crypto=require('crypto');

const user={
    signin: async (id, password) => {
        const query = `select * from ${table} where id="${id}";`; 
        try{
            const result=await pool.queryParam(query);
            if(result.length===0){
                //id fail
                return true;
            } else{
                //맞는 id는 존재
                const pw=result[0].password;
                const hashed=(await crypto.pbkdf2Sync(password,result[0].salt,1,32,'sha512')).toString('hex');
                if(hashed==pw){
                    return false;
                } else{
                    return true;
                }
            }
        } catch(err){
            throw err;
        }   
    },
    getUserById: async (id) =>{ //id로 사용자 정보 가져오기
        const query=`select * from ${table} where id="${id}";`;
        try{
            return await pool.queryParam(query);
        } catch(err){
            console.log('ERROR : ',err);
            throw err;
        }
    }
}

module.exports=user;