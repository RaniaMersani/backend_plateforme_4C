

const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer')
var generator = require('generate-password');



  exports.addAdmin = (req, res) => {
    const email = req.body.email;
    const errors = validationResult(req);

  
    console.log("BODY OF REQUEST", req.body);
  
    if (!errors.isEmpty()) {
      console.log(errors);
      const firstError = errors.array().map((error) => error.msg)[0];
      return res.status(422).json({
        errors: firstError,
      });
    } else {
      User.findOne({
        email,
      }).exec((err, user) => {
        if (user) {
          console.log('Email is taken')
          return res.status(400).json({
            errors: "Email is taken",
          });
        } else {
          console.log("EMAIL NOT TAKEN");
       
              var password = generator.generate({
                length: 10,
                numbers: true
              })
              console.log("creating new user now");
        
             
              if(req.body.role == "admin")
              {
               var  user = new User({
                  username: req.body.username, 
                  email: req.body.email,
                  password: password,
                  role: req.body.role,
                  
                 
                });
  
              }
        
              console.log("SENT USER", user);
              user.save((err, user) => {
                if (err) {
                  console.log(err);
                  // console.log("Save error", errorHandler(err));
                  return res.status(401).json({
                    errors: err.message,
                  });
                } else {
                  var transporter = nodemailer.createTransport({
                       service: 'Gmail',
                       auth: {
                         user: '4cfsegtunis@gmail.com',
                         pass: '4CFSEGT2021'
                       }
                     }); 
                  // let transporter = nodemailer.createTransport({
                  //   host: 'ssl0.ovh.net',
                  //   port: 465,
                  //   secureConnection: true,
                  //   auth: {
                  //     user:'rania.mersani@etudiant-fsegt.utm.tn',
                  //     pass: '14501561'
                  //   }
                  // });
                     const message = {
                      from: '4cfsegtunis@gmail.com', // Sender address
                      to: req.body.email,         // List of recipients
                      subject: 'Mot de passe', // Subject line
                      text:`Hello ${req.body.username},
Bienvenue sur notre plateforme 4C ! Vous pouvez vous connecter en utilisant ces informations de connexion:
Votre adresse : ${req.body.email}
Mot de passe : ${password}

Cordialement`
              
                    };
                    transporter.sendMail(message, function(err, info) {
                      if (err) {
                        console.log(err)
                      } else {
                        console.log(info);
                      }
                  });
              
                   
                  return res.json({
                    success: true,
                    data: user,
                    message: "Signup success",
                  });
                }
              });
          
          
        }
      });
    }
  };
  
  exports.register = (req, res) => {
    const email = req.body.email;
    const errors = validationResult(req);

  
    console.log("BODY OF REQUEST", req.body);
  
    if (!errors.isEmpty()) {
      console.log(errors);
      const firstError = errors.array().map((error) => error.msg)[0];
      return res.status(422).json({
        errors: firstError,
      });
    } else {
      User.findOne({
        email,
      }).exec((err, user) => {
        if (user) {
          console.log('Email is taken')
          return res.status(400).json({
            errors: "Email is taken",
          });
        } else {
          console.log("EMAIL NOT TAKEN");
       
     
              console.log("creating new user now");
              if(req.body.role == 'user')
              {
                 var user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                candidature: req.body.candidature,
               
              });

              }
             
              if(req.body.role == "admin")
              {
               var  user = new User({
                  username: req.body.username, 
                  email: req.body.email,
                  password: req.body.password,
                  role: req.body.role,
                  
                 
                });
  
              }
        
              console.log("SENT USER", user);
              user.save((err, user) => {
                if (err) {
                  console.log(err);
                  // console.log("Save error", errorHandler(err));
                  return res.status(401).json({
                    errors: err.message,
                  });
                } else {
                  return res.json({
                    success: true,
                    data: user,
                    message: "Signup success",
                  });
                }
              });
          
          
        }
      });
    }
  };

 

exports.getUsers = async function (req, res, next) {

  try {
    var users = await User.find();
    return res.status(200).json(users);
    // return res.status(200).json({
    //   status: 200,
    //   data: users,
    //   message: "Succesfully users Retrieved",
    // });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};



exports.removeUser = async function (req, res, next) {
  try {
    var content = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: 200,
      data: content,
      message: "Succesfully deleted",
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

exports.getUserById = async function (req, res, next) {
  try {
      var content = await User.find({"_id": req.params.id});
    return res.status(200).json({
      status: 200,
      data: content,
      message: "Succesfully found",
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

exports.updateUser= async function (req, res, next) {
  try {
    console.log('password',req.body.password);
    var user=await User.findById(req.params.id)
    console.log('user', user);
    // user.updateOne({
    //   username: req.body.username,
    //   email:req.body.email,
    //   password: req.body.password,
    // }).then(()=>{
    //   return res.status(200).json({
    //     status: 200,
    //     message: "Succesfully updated",
    //   });
    // })

      // var content =await User.findByIdAndUpdate(req.params.id,{
      //     username: req.body.username,
      //     email:req.body.email,
      //     password: req.body.password,
      //   });

      user.password=req.body.password;
      user.email=req.body.email;
      // user.username=req.body.username;
      user.save((error, updatedUser)=>{
        if(error){
          console.log("errrr", error)
          return res.status(400).json({
            status: 400,
            message: "failed",
          });
        }
        return res.status(200).json({
          status: 200,
          message: "Succesfully updated",
        });
      })

    // return res.status(200).json({
    //   status: 200,
    //   data: content,
    //   message: "Succesfully updated",
    // });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};
exports.updateAdmin= async function (req, res, next) {
  try {
    console.log('password',req.body.password);
    var user=await User.findById(req.params.id)
    console.log('user', user);
  console.log("hedhi hia")

      user.password=req.body.password;
      user.email=req.body.email;
      // user.username=req.body.username;
      user.save((error, updatedUser)=>{
        if(error){
          console.log("errrr", error)
          return res.status(400).json({
            status: 400,
            message: "failed",
          });
        }
          console.log("ffffff")
          var transporter = nodemailer.createTransport({
               service: 'Gmail',
               auth: {
                 user: '4cfsegtunis@gmail.com',
                 pass: '4CFSEGT2021'
               }
             });
             const message = {
              from: '4cfsegtunis@gmail.com', // Sender address
              to: req.body.email,         // List of recipients
              subject: 'Mot de passe', // Subject line
              text:`Hello ,
Vous pouvez vous connecter à nouveau sur notre plateforme 4C avec :
Votre adresse : ${req.body.email}
Mot de passe : ${req.body.password}

Cordialement`
           
            };
            transporter.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
      
           
        return res.status(200).json({
          status: 200,
          message: "Succesfully updated",
        });
        
        // return res.status(200).json({
        //   status: 200,
        //   message: "Succesfully updated",
        // });
      })

 
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};

exports.Update= async function (req, res, next) {
  
  
  try {
    
    var content =await User.update(
      {
        _id : req.params.id
      },
      {
      $set : {
        Admin : req.params.val
        
      
}
      }
    )
  return res.status(200).json({
    status: 200,
    data: content,
    message: "Succesfully updated",
  });
} catch (e) {
  return res.status(400).json({
    status: 400,
    message: e.message,
  });
}
   
};
exports.UpdateScore= async function (req, res, next) {
  
  console.log('dataaaa',req.body.score)
  try {
    var content =await User.update(
      {
        _id : req.params.id
      },
      {
      $set : {
        Score : req.body.score
      
}
      }
    )
  return res.status(200).json({
    status: 200,
    data: content,
    message: "Succesfully updated",
  });
} catch (e) {
  console.log(e)
  return res.status(400).json({
    status: 400,
    message: e.message,
  });
}
   
};



exports.login = (req, res) => {
  console.log('req',req.body);
  const { email, password, tokenDevice } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      errors: firstError,
    });
  } else {
    // check if user exist
    User.findOne({
      email,
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          errors: "User with that email does not exist. Please signup",
        });

      }
       
      
      // authenticate
      if (!user.authenticate(password)) {
        return res.status(400).json({
          errors: "Email and password do not match",
        });

      } 
    
      
      // generate a token and send to client
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const { id, email, username} = user;
      return res.json(
        (token),
        // user: {
        //   id,
        //   email,
        //   username
          
        // },
      );
      

    

    });
  }
 
};
exports.resetPassword = async function (req, res, next)  {
  try {
    const email = req.body.email
    var user=await User.findOne({ 
      email,}).exec((err, user) => {
        if (err || !user) {
        return res.status(400).json({
          errors: "User with that email does not exist. Please signup",
        });}
    console.log('user', user);
    console.log("user existant")

      var password = generator.generate({
        length: 10,
        numbers: true
      })
      user.password = password;
      user.save((error, updatedUser)=>{
        if(error){
          console.log("errrr", error)
          return res.status(400).json({
            status: 400,
            message: "failed",
          });
        }
          console.log("ffffff")
          var transporter = nodemailer.createTransport({
               service: 'gmail',
               auth: {
                 user: '4cfsegtunis@gmail.com',
                 pass: '4CFSEGT2021'
               }
             });
             const message = {
              from: '4cfsegtunis@gmail.com', // Sender address
              to: req.body.email,         // List of recipients
              subject: 'Mot de passe', // Subject line
              text:`Hello ,
Vous pouvez vous connecter à nouveau sur notre plateforme 4C avec :
Votre adresse : ${req.body.email}
Mot de passe : ${password}

Cordialement`
           
            };
            transporter.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
      
           
        return res.status(200).json({
          status: 200,
          message: "Succesfully updated",
        });
        
        // return res.status(200).json({
        //   status: 200,
        //   message: "Succesfully updated",
        // });
      })

 
  });
} catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
};
 