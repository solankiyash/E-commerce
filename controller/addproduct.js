import product from "../models/product.js";


export const addproduct = async (req,res) => {
    let products = await product.find({})
    let id;

    if(products.length > 0){
        let last_product_length = products.slice(-1)
        let last_product = last_product_length[0]
        id = last_product.id+1

    }else{
        id = 1
    }
    const saveproduct = new product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(saveproduct)
    await saveproduct.save()
    res.json({
        success:true,
        name:req.body.name
    })

}

export const deleteproduct = async(req,res) => {
    await product.findOneAndDelete({id:req.body.id})
    res.json({
        success:true,
        name:req.body.name
    })
}

export const getallproducts = async(req,res) => {
    let products = await product.find({})
    res.send(products)
}