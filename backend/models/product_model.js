

const mongoose =  require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);


 const productSchema = mongoose.Schema({
    name :{type: String,required : true},
    price :{type: Number,required : true},
    quantity :{type: String,required : true},
    description :{type: String,required : true},
    PrImage :{type: String,required : true},
    status :{type: String, enum :["Available" , "Out of Stock"], default : "Available"}

 },
{timestamps: true}
)

productSchema.pre("save",function(next){
   this.status = this.quantity > 0 ? "Available" : "Out of Stock"
   next()
})

productSchema.pre("updateOne",function(next){
   const update = this.getUpdate()
   const quantity = update.$set?.quantity
   if(quantity !== undefined){
      update.$set.status = quantity > 0 ? "Available" : "Out of Stock"
   }
   next()
})

productSchema.plugin(AutoIncrement, { inc_field: 'id' });

module.exports = mongoose.model("Product",productSchema)