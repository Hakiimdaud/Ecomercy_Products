
const model_Product = require("../models/product_model")

const createProduct = async(req,res)=>{
    try {
        const {name ,price ,description,quantity}=req.body
        const newData = model_Product({
            name:name,
            price:price,
            description:description,
            quantity:quantity,
            PrImage:req.file.filename
        })
        await newData.save()
        if (newData) {
            res.send(newData)
        }
            
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
        

               
const read_post_product = async(req, res)=>{
    const getData = await model_Product.find()
    if (getData) {
        res.send(getData)
    }
}

const readSingle_product = async(req,res)=>{
    const readSingleData = await model_Product.find(
        {_id:req.params.id}
    )
    if (readSingleData) {
        res.send(readSingleData)
    }
}

const update_Post_product = async(req,res)=>{
    const putData = await model_Product.updateOne(
        {_id:req.params.id},
        {
            $set:{
                name: req.body.name,
                price: req.body.title,
                description: req.body.description,
                quantity: req.body.quantity,
                PrImage: req.file ? req.file.filename : undefined
            }
        }
    )
    if (putData) {
        res.send("Sucess update your already Updated")
    }
}

const delede_Post_product = async(req,res)=>{
    const deleteData = await model_Product.deleteOne(
        {_id : req.params.id}
    )
    if (deleteData) {
        res.send("Sucess to delete your already deleted")
    }
}

module.exports={createProduct , read_post_product , readSingle_product , update_Post_product , delede_Post_product}