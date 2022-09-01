var express = require('express');
var router = express.Router();
const {insertItem, getAllItems, getItemById, updateItem} = require('../controllers/crud');



router.post('/insert', async (req, res) => {
    const item = req.body;
    var response = await insertItem(item);
    res.send(response);
})

router.get('/select', async (req, res)=>{
    var response = await getAllItems();
    res.send(response);
})

router.get('/select/:id', async (req,res)=>{
    var response = await getItemById(req.params.id);
    res.send(response);
})

router.put('/update/:id', async (req, res)=>{ 
    try{
        var response = await updateItem(req.params.id, req.body);
        res.json(JSON.parse(response));
    }catch(e){
        res.send(e);
    }
})


module.exports = router;
