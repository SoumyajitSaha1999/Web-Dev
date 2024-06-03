const User = require("../models/user");
const jwt = require("jsonwebtoken"); // npm i jsonwebtoken

// #Lecture:5 - Mongoose Validation
// Handle errors
const handleError = (err) => {
  console.log(err.message, err.code); // err.message control all type error and err.code control only unique error
  const ERR = { email: "", password: "" };

  // incorrect email
  if(err.message === "incorrect email") {
    ERR.email = "that email is not registered";
  }    

  // incorrect password
  if(err.message === "incorrect password") {
    ERR.password = "that password is incorrect";
  }

  // Duplicate error code
  if (err.code === 11000) {
    ERR.email = "that email is already registered";
    return ERR;
  }

  // Validation errors
                          // user validation failed
  if (err.message.includes("user validation failed")) {
    // 1st: console.log(err);
    // 2nd: console.log(Object.values(err.errors));
    /* 3rd: Object.values(err.errors).forEach((error) => {
                console.log(error.properties);
            }); */
    // 4th:
    Object.values(err.errors).forEach(({ properties }) => {
      ERR[properties.path] = properties.message;
    });
  }
  return ERR;
};

// #Lecture:11 - New User Signup
const maxAge = 3*24*60*60
const createToken = (id) => {
  return jwt.sign({ id }, "net ninja secret", {
    expiresIn: maxAge,
  })
}

module.exports.signup_get = (req, res) => {
  res.render("signup"); // This is path name(views/signup.ejs)
};

module.exports.login_get = (req, res) => {
  res.render("login"); // This is path name(views/login.ejs)
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    // #Lecture:11 - New User Signup
    const token = createToken(user._id);
    res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge*1000 });
    return res.status(201).json({ user: user._id });
  } catch (err) {
    // console.log(err);
    const errors = handleError(err);
    // 4th:
    return res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  // #Lecture:13 - Logging Users in
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge*1000 });
    res.status(200).json({ user: user._id })
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
}

/* POSTMAN --> Body --> raw --> JSON
{
  "email": "abc",
  "password": "123"
} */   

/*  1st: user validation failed: email: Please enter a valid email, password: Minimun 
    password length is 6 characters undefined 
    ......................
    ......................
   
    errors: {
    email: ValidatorError: Please enter a valid email
    ......................
    ......................
    {
      properties: [Object],
      kind: 'user defined',
      path: 'email',
      value: 'rsss',
      reason: undefined,
      [Symbol(mongoose#validatorError)]: true
    },
     password: ValidatorError: Minimun password length is 6 characters 
    ......................
    ......................  
    {
      properties: [Object],
      kind: 'minlength',
      path: 'password',
      value: '123',
      reason: undefined,
      [Symbol(mongoose#validatorError)]: true
    }
  }, */

/* 2nd:  {
    properties: {
      message: 'Please enter a valid email',
      type: 'user defined',
      validator: [Function],
      path: 'email',
      fullPath: undefined,
      value: 'rsss'
    },
    kind: 'user defined',
    path: 'email',
    value: 'rsss',
    reason: undefined,
    [Symbol(mongoose#validatorError)]: true
  },
  
  {
    properties: {
      validator: [Function (anonymous)],
      message: 'Minimun password length is 6 characters',
      type: 'minlength',
      minlength: 6,
      path: 'password',
      fullPath: undefined,
      value: '123'
    },
    kind: 'minlength',
    path: 'password',
    value: '123',
    reason: undefined,
    [Symbol(mongoose#validatorError)]: true
  } */

/* 3rd: {
  message: 'Please enter a valid email',
  type: 'user defined',
  validator: <ref *1> [Function: isEmail] { default: [Circular *1] },        
  path: 'email',
  fullPath: undefined,
  value: 'rsss'
}

{
  validator: [Function (anonymous)],
  message: 'Minimun password length is 6 characters',
  type: 'minlength',
  minlength: 6,
  path: 'password',
  fullPath: undefined,
  value: '123'
} */

/* 4th: {
    "errors": {
        "email": "Please enter a valid email",
        "password": "Minimun password length is 6 characters"
    }
} */
