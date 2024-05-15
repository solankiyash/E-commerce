

export const uploadfile = async(req,res) => {
  console.log(req.file.filename)
  try {
    res.json({
        success:1,
        image_url:`http://localhost:${4000}/images/${req.file.filename}`
    })
  } catch (error) {
    res.status(500).json({message:"file is not found!!!"})
  }
    
}