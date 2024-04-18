

// ../controller/upload.js
export const uploadController = (req,res) => {
    console.log(req.file.filename)
    res.json({
        success:1,
        img_url:`http://localhost:${4000}/images/${req.file.filename}`
    })
}
