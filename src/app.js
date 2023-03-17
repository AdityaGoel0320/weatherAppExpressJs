let express = require("express")
let app = express();
let port = process.env.PORT || 8000;
let path = require("path")
let hbs = require("hbs")



let static_webpage_path = path.join(__dirname  ,  "../public")
app.use(express.static(static_webpage_path))


// setting template engine hbs 
app.set("view engine" , "hbs")
// setting cusotm views filder as to use partials
let path_tempaltes = path.join(__dirname  , "../templates/views")
app.set("views" , path_tempaltes)



// now registering hbs 
let path_partials = path.join(__dirname , "../templates/partials")
console.log(path_partials)
hbs.registerPartials(path_partials)





// routing using hbs
app.get("/", (req, res) => {
    res.render("index")

})

app.get("/about", (req, res) => {
    res.render("about")


})

app.get("/weather", (req, res) => {
    res.render("weather")


})

app.get("*", (req, res) => {
    res.render("404error" , {
        errorMsg : "oops page not found"
    })

})

app.listen(port, () => {
    console.log(`listening to port number :- ${port}`)
}); 


// normal routing