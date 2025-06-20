const express = require("express");
 const Comment = require('../models/comment'); //accesses functions in review model file
 const router = express.Router();




 router

    .post('/create', async (req, res) => {
            try {
                const newComment = await Comment.createComment(req.body.comment_text, req.body.review_id, req.body.user_id);
                res.send(newComment);
            } catch (error) {
                res.status(500).send({ message: error.message });
            }
        })


    .post('/fetch', async (req, res) => {
            try {
                const comments = await Comment.getCommentsByReview(req.body.review_id);        
                res.send(comments);
            } catch (error) {
                res.status(500).send({ message: error.message });
            }
        })


    .put('/update', async (req, res) => {
            try {
                console.log(req.body.id)
                const updatedComment = await Comment.updateComment(req.body.id, req.body.comment_text);
                res.send(updatedComment);
            } catch (error) {
                res.status(500).send({ message: error.message });
            }
        })

    .delete('/delete', async (req, res) => {
            try {
                //console.log("Delete Comment ID:", id);
                await Comment.deleteComment(req.body.id);
                res.send({ success: "Comment deleted" });
            } catch (error) {
                res.status(500).send({ message: error.message });

            }
        });
 module.exports = router;