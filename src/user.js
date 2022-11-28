const mongoose= require("mongoose");
const employe = new mongoose.Schema({
    firstname:{
        type : String,
        require:true
    },
    middlename:{
        type : String,
        require:true
    },
    lastname:{
        type : String,
        require:true
    },
    gender:{
        type : String,
        require:true
    },
    countrycode :{
        type : Number,
        require:true
    },
    phone :{
        type : Number,
        require:true,
        unique : true
    },
    email:{
        type : String,
        require:true,
        unique: true
    },
    psw:{
        type:String,
        require:true
    },
    pswrepeat:{
        type:String,
        require:true
    }
})

const Register = new mongoose.model("Register",employe);
module.exports = Register;
