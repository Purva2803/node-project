const express = require("express");

const path = require("path");
const app = express();
const hbs =  require("hbs");
const Register = require("./user");
require("./db/connection");


const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
});
app.post("",async(req,res)=>{
  try{
    const password = req.body.psw;
    const cpassword=req.body.confirmpsw;

        const registerstudent = new Register({
             firstname : req.body.firstname,
             lastname : req.body.lastname,
             email: req.body.email,
             middlename : req.body.middlename,
             gender: req.body.gender,
             countrycode: req.body.countrycode,
             phone : req.body.phone,
             email : req.body.email,
             psw : req.body.psw,
             confirmpsw : req.body.confirmpsw,
             
        })
     const registered =  await registerstudent.save();
     res.status(201).render(index);
     console.log(registerstudent);

    
  } catch(error){
    res.status(400).send(error);
  }
})
app.listen(port , ()=>{
    console.log(`server is running at ${port}`);
});
