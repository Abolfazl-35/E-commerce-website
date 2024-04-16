const { Password } = require("@mui/icons-material");
const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Firstname: { 
    type: String, 
    require: true, 
    minlength: 3, 
    maxlength: 30 },
Lastname:{
  type: String,
  required: false,

},
DateOfBirth:{
  type: Date,
  required: true,

},
PrivecyPolicyCheck:{
  type: Boolean,
  required: true,
},
Select:{
  type: String,
  require: true,
},

  email: { 
    type: String, 
    required: true,
    minlength: 3, 
    maxlength: 30,
    unique:true },
  password:{
    type: String,
    required: true,
    minlength: 3,
    maxlength: 1024,
  },
isVerified:{
  type: Boolean,
  default: false,
},
emailToken:{type: String, },



},{timestamps:true});

const userModel=mongoose.model("User",userSchema);

module.exports=userModel