const mongoose = require("mongoose");
const { isEmail } = require("validator"); // npm i validator
const bcrypt = require("bcrypt"); // npm i bcrypt

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      //validate: [(val) => { }, "Please enter a valid email"],
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [6, "Minimun password length is 6 characters"],
    },
  },
  { timestamps: true }
);

// #Lecture:7 - Hashing Passwords
// Fire a function before doc saved to DB
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// #Lecture:13 - Logging Users in 
// static method to login user
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if(user) {
    const auth = await bcrypt.compare(password, user.password);
    if(auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
}

const User = mongoose.model("user", userSchema);

module.exports = User;
