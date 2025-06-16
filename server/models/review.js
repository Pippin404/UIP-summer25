// 1. import mongoose
const mongoose = require("mongoose");


/**
    user_id INT NOT NULL,
    title VARCHAR(100),
    rating INT NOT NULL,
    review_text VARCHAR(500),
    FOREIGN KEY (user_id) REFERENCES wdp_users(id) ON DELETE CASCADE)
 **/


 // 2. create schema for entity
const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true},
  rating: { type: Number, required: true},
  review_text: { type: String, required: true},
  user_id: { type: String, required: true }, // Assuming user_id is a string, change to ObjectId if needed
})

const Review = mongoose.model("Review", reviewSchema);




// 4. create CRUD functions on model
//CREATE a Review
async function createReview(title, rating, review_text, user_id) {
  
    const newReview = await Review.create({
        title: title,
        rating: rating,
        review_text: review_text,
        user_id: user_id
    });

  return newReview;
}

async function getUserReviews(user_id) {
  const reviews = await Review.find({ "user_id": user_id });
  console.log("User reviews:", reviews);
  //probably an array
  return reviews;
}

// UPDATE
async function updateReview(id, title, rating, review_text) {
  const review = await Review.updateOne({"_id": id}, {$set: { title: title, rating: rating, review_text: review_text}});
  return review;    
}

//DELETE
async function deleteReview(id) {
  await Review.deleteOne({"_id": id});
};



// 5. export all functions we want to access in route files
module.exports = { 
  createReview, getUserReviews, updateReview, deleteReview
};