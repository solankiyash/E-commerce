import {cloudinary} from '../middelwere/cloudinory.js'; // Adjust path as per your project structure

export const uploadfile = async (req, res) => {
  console.log("")
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Return Cloudinary response
    res.json({
      success: 1,
      image_url: result.secure_url, // or use result.url for non-secure version
    });
  } catch (error) {
    console.error('Error uploading file to Cloudinary:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
