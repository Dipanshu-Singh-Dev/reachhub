const model = require('../models/player');
const router = require('express').Router();
router.get('/',async (req, res) => {
try{
    const players = await model.find();
    console.log(players)
    res.send(players);
}catch(err){
    console.error(err)
    res.status(500).send({message:"Failed to fetch players"});
}
})
module.exports = router;