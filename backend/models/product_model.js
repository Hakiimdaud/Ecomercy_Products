

const mongoose =  require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);


 const productSchema = mongoose.Schema({
    name :{type: String,required : true},
    price :{type: Number,required : true},
    description :{type: String,required : true},
    quantity :{type: String,required : true},
    PrImage :{type: String,required : true},
    status :{type: String, enum :["Available" , "Out of Stock"], default : "Available"}

 },
{timestamps: true}
)

productSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model("Product",productSchema)