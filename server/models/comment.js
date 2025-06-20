// 1. import mongoose
const mongoose = require("mongoose");

 // 2. create schema for entity
const commentSchema = new mongoose.Schema({
  comment_text: { type: String, required: true},
  review_id: { type: String, required: true }, // Assuming review_id is a string, change to ObjectId if needed
  user_id: { type: String, required: true }, // Assuming user_id is a string, change to ObjectId if needed
})

const Comment = mongoose.model("Comment", commentSchema);


//to test: CRUD: Create, Read, Update, Delete
async function createComment(comment_text, review_id, user_id) {
    const newComment = await Comment.create({
        comment_text: comment_text,
        review_id: review_id,
        user_id: user_id
    });
    return newComment;
}

async function getCommentsByReview(review_id) {
    const comment = await Comment.find({ "review_id": review_id });
    //console.log("User reviews:", reviews);
    //probably an array
     return comment;
}


async function updateComment(comment_id, comment_text) {
  console.log("Updating comment with ID:", comment_id, "to text:", comment_text);
    const newComment = await Comment.updateOne({"_id": comment_id}, {$set: { comment_text: comment_text}});
    return newComment;
}


async function deleteComment(comment_id) {
  await Comment.deleteOne({ _id: comment_id });
}

module.exports = { 
  createComment, getCommentsByReview, updateComment, deleteComment
};