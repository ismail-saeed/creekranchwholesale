import React, { useEffect, useMemo, useState } from "react";

const API = "https://creekranchwholesale.onrender.com/api";
const OWNER_PIN = "1234"; // غيره لاحقاً

export default function App() {
const [view, setView] = useState("home");
const [products, setProducts] = useState([]);
const [pin, setPin] = useState("");
const [ownerLoggedIn, setOwnerLoggedIn] = useState(false);
const [loading, setLoading] = useState(false);

const params = new URLSearchParams(window.location.search);
const referralStore = params.get("store") || "";

const [order, setOrder] = useState({
store_name: referralStore,
customer_name: "",
phone: "",
product_id: "",
quantity: 1,
cut_type: "Custom Cut",
notes: "",
});

useEffect(() => {
loadProducts();
}, []);

const loadProducts = async () => {
try {
const res = await fetch(`${API}/products`);
const data = await res.json();
setProducts(data);
if (data.length > 0) {
setOrder((o) => ({ ...o, product_id: data[0].id }));
}
} catch {
alert("Cannot connect to server. Make sure server.js is running.");
}
};

const selectedProduct = useMemo(() => {
return products.find((p) => Number(p.id) === Number(order.product_id));
}, [products, order.product_id]);

const submitOrder = async (e) => {
e.preventDefault();
setLoading(true);

try {
const res = await fetch(`${API}/orders`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(order),
});

if (!res.ok) throw new Error();

alert("Order submitted successfully. Thank you!");

setOrder({
store_name: referralStore,
customer_name: "",
phone: "",
product_id: products[0]?.id || "",
quantity: 1,
cut_type: "Custom Cut",
notes: "",
});
} catch {
alert("Order failed. Please try again.");
}

setLoading(false);
};

const ownerLogin = () => {
if (pin === OWNER_PIN) {
setOwnerLoggedIn(true);
setView("owner");
} else {
alert("Wrong PIN");
}
};

const updateProductLocal = (id, field, value) => {
setProducts((prev) =>
prev.map((p) =>
p.id === id
? {
...p,
[field]:
field === "price" || field === "quantity"
? Number(value)
: value,
}
: p
)
);
};

const saveProduct = async (product) => {
try {
const res = await fetch(`${API}/products/${product.id}`, {
method: "PUT",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
price: product.price,
quantity: product.quantity,
}),
});

if (!res.ok) throw new Error();
alert("Saved successfully");
loadProducts();
} catch {
alert("Save failed");
}
};

return (
<div style={styles.page}>
<Hero />

<nav style={styles.nav}>
<button style={styles.navBtn} onClick={() => setView("home")}>
Home
</button>
<button style={styles.navBtn} onClick={() => setView("order")}>
Order
</button>
<button style={styles.navBtn} onClick={() => setView("products")}>
Products
</button>
<button style={styles.navBtn} onClick={() => setView("services")}>
Services
</button>
<button style={styles.navBtn} onClick={() => setView("login")}>
Owner Access
</button>
</nav>

{view === "home" && (
<section style={styles.section}>
<h2 style={styles.title}>Your Trusted Halal Processing Partner in DFW</h2>
<p style={styles.text}>
Professional halal slaughter and processing services for sheep,
goats, cattle, stores, restaurants, and wholesale partners.
</p>

<div style={styles.badgeGrid}>
<Badge title="HMS Halal Certified" />
<Badge title="USDA Inspected" />
<Badge title="Professional Service" />
<Badge title="Fast Turnaround" />
<Badge title="Quality Guaranteed" />
</div>

<button style={styles.goldBtn} onClick={() => setView("order")}>
Scan to Order / Place Order
</button>
</section>
)}

{view === "order" && (
<section style={styles.card}>
<h2 style={styles.title}>Place Your Order</h2>

<form onSubmit={submitOrder}>
<label style={styles.label}>Store / Referral Partner</label>
<input
style={styles.input}
value={order.store_name}
onChange={(e) =>
setOrder({ ...order, store_name: e.target.value })
}
placeholder="Store name"
required
/>

<label style={styles.label}>Customer Name</label>
<input
style={styles.input}
value={order.customer_name}
onChange={(e) =>
setOrder({ ...order, customer_name: e.target.value })
}
placeholder="Customer name"
required
/>

<label style={styles.label}>Phone Number</label>
<input
style={styles.input}
value={order.phone}
onChange={(e) => setOrder({ ...order, phone: e.target.value })}
placeholder="Phone number"
required
/>

<label style={styles.label}>Product</label>
<select
style={styles.input}
value={order.product_id}
onChange={(e) =>
setOrder({ ...order, product_id: e.target.value })
}
>
{products.map((p) => (
<option key={p.id} value={p.id}>
{p.name} | {p.weight_range} | ${p.price}/lb | Available:{" "}
{p.quantity}
</option>
))}
</select>

<label style={styles.label}>Quantity</label>
<input
style={styles.input}
type="number"
min="1"
value={order.quantity}
onChange={(e) =>
setOrder({ ...order, quantity: Number(e.target.value) })
}
required
/>

<label style={styles.label}>Cut / Packing Type</label>
<select
style={styles.input}
value={order.cut_type}
onChange={(e) =>
setOrder({ ...order, cut_type: e.target.value })
}
>
<option>Custom Cut</option>
<option>Whole</option>
<option>Cut & Packed in Bags</option>
<option>Cut & Boxed</option>
<option>Vacuum Packed</option>
<option>Restaurant Cut</option>
</select>

<label style={styles.label}>Notes</label>
<textarea
style={styles.textarea}
value={order.notes}
onChange={(e) => setOrder({ ...order, notes: e.target.value })}
placeholder="Special instructions"
/>

{selectedProduct && (
<div style={styles.summaryBox}>
Selected: <b>{selectedProduct.name}</b> — $
{selectedProduct.price}/lb
</div>
)}

<button style={styles.goldBtn} disabled={loading}>
{loading ? "Submitting..." : "Submit Order"}
</button>
</form>
</section>
)}

{view === "products" && (
<section style={styles.card}>
<h2 style={styles.title}>Wholesale Products</h2>
<ProductTable products={products} />
</section>
)}

{view === "services" && (
<section style={styles.section}>
<h2 style={styles.title}>Our Services</h2>
<div style={styles.serviceGrid}>
<Service title="Halal Slaughter" text="Hand slaughtered according to Islamic principles." />
<Service title="Processing Services" text="Complete processing for sheep, goats, and cattle." />
<Service title="Custom Cutting" text="Cut to your preference and specifications." />
<Service title="Vacuum Packaging" text="Sealed for freshness, quality, and longer shelf life." />
<Service title="Cold Storage" text="Safe and reliable storage to maintain quality." />
<Service title="Wholesale Services" text="Bulk processing for stores, restaurants, and distributors." />
</div>
</section>
)}

{view === "login" && (
<section style={styles.card}>
<h2 style={styles.title}>Owner Access</h2>
<p style={styles.text}>
Owners can update prices and quantities only.
</p>
<input
style={styles.input}
type="password"
value={pin}
onChange={(e) => setPin(e.target.value)}
placeholder="Enter owner PIN"
/>
<button style={styles.goldBtn} onClick={ownerLogin}>
Login
</button>
</section>
)}

{view === "owner" && ownerLoggedIn && (
<section style={styles.card}>
<h2 style={styles.title}>Owner Dashboard</h2>
<p style={styles.text}>
Update price and available quantity only.
</p>

<div style={{ overflowX: "auto" }}>
<table style={styles.table}>
<thead>
<tr>
<th style={styles.th}>Product</th>
<th style={styles.th}>Weight</th>
<th style={styles.th}>Price/lb</th>
<th style={styles.th}>Quantity</th>
<th style={styles.th}>Save</th>
</tr>
</thead>
<tbody>
{products.map((p) => (
<tr key={p.id}>
<td style={styles.td}>{p.name}</td>
<td style={styles.td}>{p.weight_range}</td>
<td style={styles.td}>
<input
style={styles.smallInput}
type="number"
step="0.01"
value={p.price}
onChange={(e) =>
updateProductLocal(p.id, "price", e.target.value)
}
/>
</td>
<td style={styles.td}>
<input
style={styles.smallInput}
type="number"
value={p.quantity}
onChange={(e) =>
updateProductLocal(p.id, "quantity", e.target.value)
}
/>
</td>
<td style={styles.td}>
<button
style={styles.saveBtn}
onClick={() => saveProduct(p)}
>
Save
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
</section>
)}

<Footer />
</div>
);
}

function Hero() {
return (
<header style={styles.hero}>
<div style={styles.heroContent}>
<div style={styles.logoBox}>
<div style={styles.scale}>⚖️</div>
<h1 style={styles.brand}>AL-MIZAN</h1>
<h3 style={styles.subBrand}>HALAL MEAT</h3>
<p style={styles.by}>By Creek Ranch</p>
</div>

<h2 style={styles.heroTitle}>Wholesale Halal Meat Orders</h2>
<p style={styles.heroText}>From Our Ranch To Your Table</p>

<div style={styles.heroBadges}>
<span>HMS Halal Certified</span>
<span>USDA Inspected</span>
<span>Daily Delivery</span>
</div>
</div>
</header>
);
}

function Badge({ title }) {
return <div style={styles.badge}>{title}</div>;
}

function Service({ title, text }) {
return (
<div style={styles.service}>
<h3>{title}</h3>
<p>{text}</p>
</div>
);
}

function ProductTable({ products }) {
return (
<div style={{ overflowX: "auto" }}>
<table style={styles.table}>
<thead>
<tr>
<th style={styles.th}>Product</th>
<th style={styles.th}>Size</th>
<th style={styles.th}>Weight Range</th>
<th style={styles.th}>Price/lb</th>
<th style={styles.th}>Available</th>
</tr>
</thead>
<tbody>
{products.map((p) => (
<tr key={p.id}>
<td style={styles.td}>{p.name}</td>
<td style={styles.td}>{p.size_type}</td>
<td style={styles.td}>{p.weight_range}</td>
<td style={styles.price}>${p.price}</td>
<td style={styles.td}>{p.quantity}</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

function Footer() {
return (
<footer style={styles.footer}>
<h3>Contact Us Today</h3>
<p>+1 (972) 834-3147</p>
<p>CreekRanchInc@gmail.com</p>
<p>CreekRanchInc.com</p>
<p>413 CR 4781, Boyd, TX 76023</p>
<div style={styles.footerLine}>QUALITY • TRUST • PURITY</div>
</footer>
);
}

const green = "#062b18";
const gold = "#d5a642";
const cream = "#fff6dc";

const styles = {
page: {
margin: 0,
fontFamily: "Arial, sans-serif",
background: "#f5edd6",
color: "#102818",
minHeight: "100vh",
},

hero: {
minHeight: 420,
background:
"linear-gradient(135deg, #061f13 0%, #0b3d25 45%, #d5a642 100%)",
color: "white",
display: "flex",
alignItems: "center",
justifyContent: "center",
textAlign: "center",
padding: 25,
borderBottom: `5px solid ${gold}`,
},

heroContent: {
maxWidth: 1000,
},

logoBox: {
background: "rgba(255,255,255,0.92)",
color: green,
display: "inline-block",
padding: "18px 45px",
borderRadius: 18,
marginBottom: 20,
border: `3px solid ${gold}`,
},

scale: {
fontSize: 42,
},

brand: {
margin: 0,
fontSize: 42,
letterSpacing: 4,
color: green,
},

subBrand: {
margin: "6px 0",
letterSpacing: 4,
fontSize: 24,
},

by: {
margin: 0,
fontWeight: "bold",
fontStyle: "italic",
},

heroTitle: {
fontSize: 38,
color: gold,
margin: "15px 0 5px",
textTransform: "uppercase",
},

heroText: {
fontSize: 26,
fontStyle: "italic",
},

heroBadges: {
display: "flex",
justifyContent: "center",
gap: 12,
flexWrap: "wrap",
},

nav: {
background: green,
padding: 14,
display: "flex",
gap: 10,
justifyContent: "center",
flexWrap: "wrap",
position: "sticky",
top: 0,
zIndex: 10,
},

navBtn: {
background: gold,
color: green,
border: "none",
borderRadius: 8,
padding: "12px 18px",
fontWeight: "bold",
cursor: "pointer",
},

section: {
maxWidth: 1000,
margin: "28px auto",
padding: 24,
},

card: {
maxWidth: 900,
margin: "28px auto",
background: cream,
padding: 26,
borderRadius: 16,
border: `2px solid ${gold}`,
boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
},

title: {
color: green,
fontSize: 30,
marginTop: 0,
},

text: {
fontSize: 17,
lineHeight: 1.6,
},

badgeGrid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
gap: 14,
margin: "25px 0",
},

badge: {
background: green,
color: "white",
border: `2px solid ${gold}`,
borderRadius: 14,
padding: 18,
textAlign: "center",
fontWeight: "bold",
},

serviceGrid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
gap: 16,
},

service: {
background: cream,
border: `2px solid ${gold}`,
borderRadius: 14,
padding: 20,
boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
},

input: {
width: "100%",
padding: 13,
margin: "8px 0 16px",
borderRadius: 8,
border: "1px solid #b9a05f",
boxSizing: "border-box",
fontSize: 16,
},

textarea: {
width: "100%",
padding: 13,
margin: "8px 0 16px",
borderRadius: 8,
border: "1px solid #b9a05f",
minHeight: 90,
boxSizing: "border-box",
fontSize: 16,
},

label: {
fontWeight: "bold",
color: green,
},

goldBtn: {
background: gold,
color: green,
border: "none",
borderRadius: 10,
padding: "14px 22px",
fontWeight: "bold",
fontSize: 16,
cursor: "pointer",
width: "100%",
},

saveBtn: {
background: green,
color: "white",
border: "none",
borderRadius: 8,
padding: "8px 12px",
cursor: "pointer",
},

summaryBox: {
background: "#fff",
border: `1px solid ${gold}`,
borderRadius: 10,
padding: 14,
marginBottom: 16,
},

table: {
width: "100%",
borderCollapse: "collapse",
background: "white",
},

th: {
background: green,
color: "white",
padding: 10,
border: "1px solid #aaa",
textAlign: "left",
},

td: {
padding: 10,
border: "1px solid #ccc",
},

price: {
padding: 10,
border: "1px solid #ccc",
color: "#9b1c1c",
fontWeight: "bold",
},

smallInput: {
width: 90,
padding: 8,
borderRadius: 6,
border: "1px solid #999",
},

footer: {
background: green,
color: "white",
textAlign: "center",
padding: 28,
marginTop: 35,
borderTop: `5px solid ${gold}`,
},

footerLine: {
marginTop: 15,
color: gold,
letterSpacing: 4,
fontWeight: "bold",
},
};