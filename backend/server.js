const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// ===============================
// API
// ===============================

// Test API
app.get("/api", (req, res) => {
res.json({
success: true,
message: "Creek Ranch Wholesale API Running"
});
});

// Customer Order
app.post("/api/orders", (req, res) => {

const order = req.body;

console.log("New Order:");
console.log(order);

// لاحقاً سنحفظ الطلب في قاعدة البيانات

res.json({
success: true,
message: "Order submitted successfully."
});

});

// Products
app.get("/api/products", (req, res) => {

const products = [

{
id: 1,
name: "Whole Lamb",
price: 0,
stock: 50
},

{
id: 2,
name: "Whole Goat",
price: 0,
stock: 30
},

{
id: 3,
name: "Whole Beef",
price: 0,
stock: 20
}

];

res.json(products);

});

// ===============================
// React Build
// ===============================

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res) => {
res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

console.log(`
=========================================
Creek Ranch Wholesale Server Started
Port : ${PORT}
=========================================
`);

});