const pool=require('../modules/pool');
const table="symtom";

const models={
    selectDrug: async(symptomIdx)=>{
        const query=`SELECT * FROM ${table} where symptomIdx=${symptomIdx};`;
            try{
                return await pool.queryParam(query);
            }catch(err){
                throw err;
            }
    }
}

module.exports=models;