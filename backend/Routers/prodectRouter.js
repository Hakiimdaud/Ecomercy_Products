
const express = require("express")
const cotrol_model = require("../controller/prodect")
const uploadpicture = require("../middleware/uploadImg")

const router = express.Router()

router.post("/create/product",uploadpicture.single("img"),cotrol_model.createProduct)
router.get("/read/product",cotrol_model.read_post_product)
router.get("/readsingle/product/:id",cotrol_model.readSingle_product)
router.put("/create/product/:id",uploadpicture.single("img"),cotrol_model.update_Post_product)
router.delete("/delede/product/id",cotrol_model.delede_Post_product)

module.exports = router