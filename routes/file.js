

var express = require('express');

const multer = require('multer');
const formModel = require("../models/formModel");
const form3Model = require("../models/form3Model");
const EquipeModel = require("../models/EquipeModel");

var app = express();

var router = express.Router();


const storage = multer.diskStorage({
    destination : (req , file, callBack) => {
     callBack(null, './public/images')
     
    
   },
     filename: (req, file , callBack) => {
      callBack(null,  file.originalname )
       }
   })
   
  var upload = multer({ storage: storage })
  

  
router.post('/fileUser/:id/:image', upload.single('file'), async (req,res,next) => {
  try {
    
    const file = req.file;

    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    

        var content = await formModel.update(
          { _id : req.params.id },
          {
          $set : { image: req.params.image}
          }
        )
     
      return res.status(200).json({
        status: 200,
        data: content,
        message: "Files Succesfully updated",
      });  
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: "erreur update",
      });
    }
    
  })



  router.post('/fileMembreEquipe/:id/:image', upload.single('file'), async (req,res,next) => {
    try {
      
      const file = req.file;
  
      if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
      }
      
  
          var content = await EquipeModel.update( 
            { _id : req.params.id },
            {
            $set : {
               image: req.params.image 
              }
            }
          )
       
        return res.status(200).json({
          status: 200,
          data: content,
          message: "Files Succesfully updated",
        });  
      } catch (e) {
        return res.status(400).json({
          status: 400,
          message: "erreur update",
        });
      }
      
    })
 

 


  router.post('/fileQuestCV/:id/:CV', upload.single('file'), async (req,res,next) => {
    try {
      const file = req.file
     
      if (!file) { 
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400 
        return next(error)
      }
      
  
          var content = await formModel.update(
            { _id : req.params.id },
            {
            $set : { CV: req.params.CV}
            }
          )
       
        return res.status(200).json({
          status: 200,
          data: content,
          message: "Files Succesfully updated",
        });  
      } catch (e) {
        return res.status(400).json({
          status: 400,
          message: "erreur update",
        });
      }
      
    })
   
    router.post('/fileQuestVideo/:id/:Video', upload.single('file'), async (req,res,next) => {
      try {
        const file = req.file
       
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
        
    
            var content = await formModel.update(
              { _id : req.params.id },
              {
              $set : { Video: req.params.Video}
              }
            )
          
          return res.status(200).json({
            status: 200, 
            data: content,
            message: "Files Succesfully updated",
          });  
        } catch (e) {
          return res.status(400).json({
            status: 400,
            message: "erreur update",
          });
        }
        
      })
     
const files = [];
      router.post('/fileQuest3/:id', upload.single('file'), async (req,res,next) => {
    try {  
        const file = req.file;

        files[files.length] =file.filename;
        
        console.log('filename', files);

         
        var content = await form3Model.update(
          { _id : req.params.id },
         {
           $set : {
            Files : files
          } 
         }
        )          
         
         console.log('Files2',files);
 
          if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next(error)
          }

         
       
        return res.status(200).json({
          status: 200,
          data: content,
          message: "Files Succesfully updated",
        });  
      } catch (e) {
        return res.status(400).json({
          status: 400,
          message: "erreur update",
        });
      }
          
        })


 router.post('/fileQuest3Video/:id/:Video', upload.single('file'), async (req,res,next) => {
          try {
            const file = req.file
           
            if (!file) {
              const error = new Error('Please upload a file')
              error.httpStatusCode = 400
              return next(error)
            }
            
        
                var content = await form3Model.update(
                  { _id : req.params.id },
                  {
                  $set : { Video: req.params.Video}
                  }
                )
             
              return res.status(200).json({
                status: 200,
                data: content,
                message: "Files Succesfully updated",
              });  
            } catch (e) {
              return res.status(400).json({
                status: 400,
                message: "erreur update",
              });
            }
            
          })
  

  module.exports = app;

module.exports = router;