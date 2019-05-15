const mongoose = require ('mongoose')

const Article = require('./database/models/Article')

mongoose.connect('mongodb://localhost:27017/blog-test');



Article.findByIdAndUpdate("5ccab758d827904f4bcc9417", 
{    title: 'Superman'}, (error, post) => {

console.log(error, post);

})



// Article.findById("5ccab758d827904f4bcc9417",(error, articles) => {
//     console.log(error,articles);
    
// })



// Article.find({

//     // title: 'SuperMan'

//     intro: "test d'introduction" 

// }, (error, articles) => {

//     console.log(error, articles);
    

// })




// Article.create({
//     title: "SuperMan",
//     intro: "test d'introduction",
//     content: "Critique sur le film Superman",

// }, (error,post) => {
// console.log(error,post);


// }




// )