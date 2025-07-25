// 1. import mongoose
const mongoose = require("mongoose");
const bcrypt= require('bcryptjs');

// 2. create schema for entity
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  followers: [String],
  following: [String],
  recipesID: [Number],
  commentsID: [Number]
})
//Recipes stores the recipe ID. Also have comments.

// 3. create model of schema
const User = mongoose.model("User", userSchema);




// 4. create CRUD functions on model
//CREATE a user
async function register(username, password) {
  const user = await getUser(username);
  if(user) throw Error('Username already in use');


  const salt = await bcrypt.genSalt(10);
  hash= await bcrypt.hash(password, salt);


  const newUser = await User.create({
    username: username,
    password: hash
  });
  //console.log("New user created:", newUser);

  return newUser;
}

// READ a user
async function login(username, password) {
  const user = await getUser(username);
  if(!user) throw Error('User not found');



  const matches = await bcrypt.compare(password, user.password);
  if(!matches) throw Error("Wrong Password") ;

  console.log("User logged in:", user.username, user.password);
  return user;
}

// UPDATE
async function updatePassword(id, password) {
  const user = await User.updateOne({"_id": id}, {$set: { password: password}});
  return user;
}

//DELETE
async function deleteUser(id) {
  await User.deleteOne({"_id": id});
};

// utility functions
async function getUser(username) {
  return await User.findOne({ "username": username});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteUser 
};