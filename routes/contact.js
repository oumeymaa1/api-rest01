// 1 
const express = require ("express");
const Contact = require ("../models/Contact");

// 2
const router = express.Router();

// 4 test route 
router.get("/test",(req,res) => {
    res.send("test route");
});
// Add contact
router.post ("/add",async (req,res) => {
    try{
        const {name, email, phone} = req.body;
        const newContact = new contact({
            name,email,phone});
        await newContact.save();
        res.status(200).send({message: "Contact added", newContact});
        }
        catch(error){
            res.status(400).send({message:" Can not add contact !!!", error: error});
        }     
        
    });
// Get all contacts
router.get("/all",async (req,res) => {
    try{
        const listContacts = await Contact.find();
        res
        .status(200)
        .send({message: "Contact list ...", listContacts});
    } catch (error){
        res
        .status (400)
        .send ({message:"Can not get contact list"} , error);
    }
    });
//Get one contact 
    router.get("/:id",async (req,res) => {
        try{
            const contact = await Contact.findOne({_id:req.params.id});
            res.status(200).send({message: "Contact found...", contact});
        }
        catch(error){
                    res
                    .status(400)
                    .send({message:"Can not get contact !!! ", error});
                }
    });
    
     //delete contact 

    router.delete("/:_id", async (req,res)=>{
        try{
            const {_id} = req.params;
            await Contact.findOneAndDelete({_id});
            res.status(200).send({message: "Contact deleted ..."});
        }catch(error){
            res
                .status(400)
                .send({message:"Can not delete contact !!! ", error});
        }
    });

     //edit contact
     router.put("/:_id",async (req,res) => {
        try{
            const { _id } = req.params;
            const result = await Contact.updateOne({_id}, { $set:{...req.body} });
            res.status(200).send({message:"Contact updated !!!"});
        
        } catch (error) {
            res 
                .status (400)
                .send({message:"Can not edit contact !!!", error});
    
        }
        });
// 3
module.exports = router;