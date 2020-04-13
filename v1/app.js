var express = require("express");
var app =express();

app.set("view engine","ejs");


app.get("/",function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    var campgrounds=[
        {name: "SalmonCreek", image: "https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},
        {name: "Baywatch", image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},
        {name: "justpetter", image: "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"}

    ]
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(3000, function() { 
  console.log("YelpCamp has started"); 
});