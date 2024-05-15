import product from "../models/product.js";

export const products = async (req, res) => {
    let Product_Data = await product.find({})
    let id;
    if(Product_Data.length){
        let last_product_array = Product_Data.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1 
    }else{
        id = 1  
    }
     const addproduct = await new product({
         id: id,
         name: req.body.name,
         image: req.body.image,
         category: req.body.category,
         new_price: req.body.new_price,
         old_price: req.body.old_price
     });
     await addproduct.save();
     res.json({ 
         success: true,
         name: req.body.name
     });
    }

    export const removeproducts = async (req, res) => {
        try {
            const deletedProduct = await product.findOneAndDelete(req.body.id);

            if (!deletedProduct) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found"
                });
            }
            res.json({
                success: true,
                name: deletedProduct.name
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: "Internal server error"
            });
        }
    };

    export const  getallproduct = async (req,res) => {
        try {
            const getData = await product.find()
        if(getData){
         res.status(200).json(getData)   
        }else{
            res.status(401).json("Not Found Data!!!")
        }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    