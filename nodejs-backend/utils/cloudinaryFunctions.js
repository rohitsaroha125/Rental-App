const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD, 
  api_key: process.env.CLOUDINARY_API, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadToCloudinary = async (imageLink) => {
    // Use the uploaded file's name as the asset's public ID and 
      // allow overwriting the asset with new versions
      const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      };
  
      try {
        // Upload the image
        const result = await cloudinary.uploader.upload(imageLink, options);
        console.log(result);
        return result;
      } catch (error) {
        console.error(error);
      }
  }

module.exports = { uploadToCloudinary }