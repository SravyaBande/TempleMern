

const express = require('express');
const router = express.Router();
const Event = require('../models/event');
router.post('/', async(req,res) => {
    try{
        const event = new Event(req.body);
        const saved =await event.save();
        res.status(201).json(saved);
    }catch(err){
        res.status(400).json({message : err.message});

    }
});

router.get('/', async(req,res) => {
      try{
         const events= await Event.find();
         res.json(events);
      }catch(err){
        res.status(500).json({message: err.message});
      }
});


module.exports = router;