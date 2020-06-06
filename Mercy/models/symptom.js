const pool=require('../modules/pool');
const table="symtom";

const models={
    selectDrug: async(symptomIdx)=>{
        const query=`SELECT * FROM ${table} where symptomIdx=${symptomIdx};`;
            try{
                const result=await pool.queryParam(query);
                if(result.length===0){
                    return true;//fail
                }else{
                    return result;
                }
            }catch(err){
                throw err;
            }
    }
}

module.exports=models;