import multer from "multer"

const storage = multer.diskStorage({
     destination : "./upload/images",
     filename:(req,file,cb) => {
         return cb(null,`${file.originalname}_${Date.now()}${file.originalname}`)
     }

    })
 
   export const uplodmiddlewere = multer({storage:storage})

