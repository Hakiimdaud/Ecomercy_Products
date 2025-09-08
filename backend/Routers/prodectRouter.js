
const express = require("express")
const cotrol_model = require("../controller/prodect")
const uploadpicture = require("../middleware/uploadImg")

const router = express.Router()

router.post("/create/product",uploadpicture.single("img"),cotrol_model.createProduct)
router.get("/read/product",cotrol_model.read_post_product)
router.get("/readsingle/product/:id",cotrol_model.readSingle_product)
router.put("/update/product/:id",uploadpicture.single("img"),cotrol_model.updateProduct)
router.delete("/delede/product/:id",cotrol_model.deleteProduct)

module.exports = router