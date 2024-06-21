async function getAsync(req,res){
    res.json(Object.assign({},{msg:"成功",code:0},{data:null}))
}
const wrap = fn => (...args) => fn(...args).catch(e=>{console.log(e)})
let get = wrap(getAsync);