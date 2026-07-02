const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// ======================================
// Temporary In-Memory Products
// ======================================

let products = [

{
id:1,
name:"Whole Lamb",
size_type:"Medium",
weight_range:"35 - 45 lb",
price:8.99,
quantity:50,
image:"/images/whole-lamb.jpg"
},

{
id:2,
name:"Whole Goat",
size_type:"Large",
weight_range:"45 - 65 lb",
price:9.49,
quantity:35,
image:"/images/whole-goat.jpg"
},

{
id:3,
name:"Whole Beef",
size_type:"Full",
weight_range:"500+ lb",
price:6.99,
quantity:12,
image:"/images/whole-beef.jpg"
}

];

// ======================================
// Home API
// ======================================

app.get("/api",(req,res)=>{

res.json({

success:true,

message:"Creek Ranch Wholesale API Running"

});

});

// ======================================
// Products
// ======================================

app.get("/api/products",(req,res)=>{

res.json(products);

});

// ======================================
// Update Product
// ======================================

app.put("/api/products/:id",(req,res)=>{

const id=Number(req.params.id);

const product=products.find(p=>p.id===id);

if(!product){

return res.status(404).json({

success:false,

message:"Product not found"

});

}

if(req.body.price!==undefined){

product.price=Number(req.body.price);

}

if(req.body.quantity!==undefined){

product.quantity=Number(req.body.quantity);

}

res.json({

success:true,

message:"Product updated",

product

});

});

// ======================================
// Orders
// ======================================

app.post("/api/orders",(req,res)=>{

const order=req.body;

console.log("");

console.log("====================================");

console.log("NEW ORDER RECEIVED");

console.log(order);

console.log("====================================");

console.log("");

res.json({

success:true,

message:"Order submitted successfully."

});

});

// ======================================
// Health Check
// ======================================

app.get("/health",(req,res)=>{

res.send("OK");

});

// ======================================
// React Build
// ======================================

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res) => {
res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ======================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("");
console.log("====================================");
console.log(" Creek Ranch Server Running ");
console.log(` Port : ${PORT}`);
console.log("====================================");
console.log("");
});