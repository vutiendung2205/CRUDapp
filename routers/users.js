const express = require('express');
const router = express.Router();

const User = require("../models/User");

// router.get( '/', (req,res)=>{
//     Course.find()
//     .exec()
//     .then( result =>{
//         res.status(200).json(result)
//     } )
//     .catch( err =>{
//         res.status(500).json({
//             message : err
//         });
//     } );
// } );
//  -----> GET   <------
router.get( "/", async ( req,res ) =>{
    try{
        const getUser = await User.find();
        res.status(200).json(getUser)
    } catch (err){
        res.status(500).json({
            message : err
        });
    }
} )


// router.get( '/1', (req,res)=>{
//     res.send("Hi, we are now at crouses 1")
// } );


//  -----> GET ID  <------
router.get( "/:id", async (req,res) =>{
    try{
        const id = req.params.id;
        const getUserById = await User.findById(id);
        if(user) {
            res.status(200).json(getUserById)
        } else {
            res.status(404).json({ message : "No valid entry found" })
        }
    } catch (err){
        res.status(500).json({ message : err })
    }
} )


// router.get( "/:courseId", (req, res) => {
//     const id = req.params.courseId;
//     Course.findById(id)
//     .exec()
//     .then( result =>{
//         if(result) {
//             res.status(200).json(result)
//         } else {
//             res.status(404).json({ message : "No valid entry found" })
//         }
//     } )
//     .catch (err){
//         res.status(500).json({ message : err })
//     }
// } )
//  -----> POST  <------
router.post( "/", async (req,res) =>{
    const postUser = new User({
        avatar : req.body.avatar,
        fistname : req.body.fistname,
        lastname : req.body.lastname,
        company : req.body.company,
        jobtitle : req.body.jobtitle,
        email : req.body.email,
        phone : req.body.phone
    })

    try{
        const saveUser = await postUser.save();
        res.status(200).json({
            message : "SUCCESS!",
            created: saveUser
        });
    } catch ( err ){
        res.status(500).json({ message: err });
    }
} )

// router.post( '/', (req,res) =>{
//     const mycourse = new Course({
//         course : req.body.course,
//         tag : req.body.tag
//     });

//     mycourse
//     .save()
//     .then( result =>{
//         res.status(200).json({
//             message : "SUCCESS!",
//             created: result
//         });
//     } )
//     .catch( err =>{
//         res.status(500).json({ message: err });
//     } );
// } );


//  -----> UPDATE  <------
router.patch( "/:id", async (req,res)=>{
    try{
        const id = req.params.id;
        const updateUser = req.body = {
            avatar: req.body.avatar,
            fistname:req.body.fistname,
            lastname:req.body.lastname,
            comapny:req.body.company,
            jobtitle:req.body.jobtitle,
            email:req.body.email,
            phone:req.body.phone,
        }
        const updated = await User.updateOne(
            { _id : id },
            { $set: updateUser }
        );
        res.status(200).json(updated)
    } catch (err){
        res.status(500).json({ message: err })
    }
} )
// DELETE
router.delete( "/:id", async (req,res)=>{
    try{
        const id = req.params.id;
        const removed = await User.remove({ _id : id });
        res.status(200).json(removed)
    } catch (err){
        res.status(500).json({ message: err })
    }
} )

module.exports = router;