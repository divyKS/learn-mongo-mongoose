const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dbURI = "mongodb+srv://username:password@<cluster>.mongodb.net/collection";

mongoose.connect(dbURI)
    .then(() => {
        console.log("Successfully connected to the databse");
        app.listen(3000);
    })
    .catch((err)=>{console.log(err)});

// First we create a schema then a model. The model allows us to communicate with database collections.

// calling the constructor os Schema, ans passing in an object to define the strcutre of our schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
}, {timestamps: true});

// the blog will automatically be plularised and it will look for Blogs in our database
const Blog = mongoose.model('Blog', blogSchema);

// create a new instance using the model that you just created
const newEntry = new Blog({
    title: "Blog 2",
    description: "Contents 2"
});

// use the instance and call a method on it. This is async function
// newEntry.save()
//     .then((result)=>{console.log(result)});

// to retrieve, we do not have to create an instance of the model, we can use the model directly
// Blog.find()
//     .then((result)=>{console.log(result)});

Blog.findById("64a6a26560fca2425d73a47d")
    .then((result)=>console.log(result));