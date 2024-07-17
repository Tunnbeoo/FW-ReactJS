var express = require('express');
var router = express.Router();

//Imort model
const connectDb=require('../model/db');
const { ObjectId } = require('mongodb');

//Lấy tất cả sản phẩm dạng json
router.get('/products', async(req, res, next)=> {
  const db=await connectDb();
  const productCollection=db.collection('products');
  const products=await productCollection.find().toArray();
  if(products){
    res.status(200).json(products);
  }else{
    res.status(404).json({message : "Không tìm thấy"})
  }
});
//Lấy danh sách sản phẩm theo idcate
router.get('/productbycate/:idcate', async(req, res, next)=> {
  const db=await connectDb();
  const productCollection=db.collection('products');
  const products=await productCollection.find({categoryId:req.params.idcate}).toArray();
  if(products){
    res.status(200).json(products);
  }else{
    res.status(404).json({message : "Không tìm thấy"})
  }
}
);
//Tìm kiếm theo sản phẩm
router.get('/search/:keyword', async(req, res, next)=> {
  const db=await connectDb();
  const productCollection=db.collection('products');
  const products=await productCollection.find({name: new RegExp(req.params.keyword, 'i')}).toArray();
  if(products){
    res.status(200).json(products);
  }else{
    res.status(404).json({message : "Không tìm thấy"})
  }
}
);
//lấy chi tiết 1 sản phẩm
router.get('/productdetail/:id', async(req, res, next)=> {
  let id = new ObjectId(req.params.id);
  const db=await connectDb();
  const productCollection=db.collection('products');
  const product=await productCollection.findOne({_id:id});
  if(product){
    res.status(200).json(product);
  }else{
    res.status(404).json({message : "Không tìm thấy"})
  }
}
);
//Tìm kiếm theo sản phẩm


module.exports = router;