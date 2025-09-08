const model_Product = require("../models/product_model")

// Create Product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, quantity } = req.body
    const newData = new model_Product({
      name: name,
      price: price,
      description: description,
      quantity: quantity,
      PrImage: req.file ? req.file.filename : null
    })
    await newData.save()
    if (newData) {
      res.send(newData)
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server error" })
  }
}

// Read All
const read_post_product = async (req, res) => {
  const getData = await model_Product.find()
  if (getData) {
    res.send(getData)
  }
}


// Read Single
const readSingle_product = async (req, res) => {
  try {
    const getData = await model_Product.find({ _id: req.params.id })
    if (getData) {
      res.send(getData)
    }
  } catch (error) {
    res.status(400).json({ message: error.message })

  }
}


// Update Product
const updateProduct = async(req,res) => {
    try{
        const { name, price, description, quantity } = req.body
        const updateData = await model_Product.updateOne(
            {_id: req.params.id},
            {$set: {
                name: name,
                price: price,
                quantity: quantity,
                description: description,
                prImage: req.file ? req.file.filename : undefined

            }}
        )
        if(updateData){
            res.send("succes update")
        }
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

// delete

const deleteProduct = async(req,res) => {
    try{
        const deleteData = await model_Product.deleteOne({_id:req.params.id})
        if(deleteData){
            res.send("succes delete")
        }
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

module.exports = { createProduct, read_post_product, readSingle_product, updateProduct, deleteProduct }
