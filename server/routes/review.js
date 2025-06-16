 // 1. import any needed libraries
 const express = require("express");
 const User = require('../models/review'); //accesses functions in review model file
 const router = express.Router();




 router 
    .post('/create', async (req, res) => {
        try {
            
            const newReview = await User.createReview(req.body.title, req.body.rating, req.body.review_text, req.body.user_id);
            console.log("New Review Routes:", newReview);
            res.send(newReview);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    })



    .put('/update', async (req, res) => {
        //uhhhhhhhhhhhhh idk if this will work
        try {
            const updatedReview = await User.updateReview(req.body.id, req.body.title, req.body.rating, req.body.review_text);
            console.log("Updated Review Routes:", updatedReview);
            res.send(updatedReview);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    })


    .delete('/delete', async (req, res) => {
        try {
            const id = req.body.user_id;
            console.log("Delete Review ID:", id);
            await User.deleteReview(id);
            res.send({ success: "Review deleted" });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    })



    .post('/fetch', async (req, res) => {
        try {
            const user_id = await req.body.user_id; // Assuming user_id is passed in the request body
            console.log("Fetched Reviews for User ID:", user_id); 
            const reviews = await User.getUserReviews(user_id);

            console.log("Fetched Reviews for User ID:", user_id);   
            res.send(reviews);
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    });


























 // 3. export router for use in index.js
module.exports = router;