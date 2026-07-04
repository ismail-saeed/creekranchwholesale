import React, { useEffect, useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Products from "./components/Products";
import About from "./components/About";
import Order from "./components/Order";
import Services from "./components/Services";
import Owner from "./components/Owner";
import Careers from "./components/Careers";
import TrustBadges from "./components/TrustBadges";
import Footer from "./components/Footer";

import { styles } from "./styles";
import { apiCreateOrder, apiGetProducts, apiUpdateProduct } from "./api";

const OWNER_PIN = "1234";

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
const data = await apiGetProducts();
setProducts(data);

if (data.length > 0) {
setOrder((o) => ({ ...o, product_id: data[0].id }));
}
} catch {
alert("Cannot connect to server. Make sure backend is running.");
}
};

const selectedProduct = useMemo(() => {
return products.find((p) => Number(p.id) === Number(order.product_id));
}, [products, order.product_id]);

const submitOrder = async (e) => {
e.preventDefault();
setLoading(true);

try {
await apiCreateOrder(order);
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
await apiUpdateProduct(product);
alert("Saved successfully");
loadProducts();
} catch {
alert("Save failed");
}
};

return (
<div style={styles.page}>
<Navbar view={view} setView={setView} />

{view === "home" && (
<>
<Hero setView={setView} />
<Story />

<section style={styles.section}>
<h2 style={styles.title}>
Your Trusted Halal Processing Partner in DFW
</h2>

<p style={styles.text}>
Professional halal slaughter and processing services for sheep,
goats, cattle, stores, restaurants, and wholesale partners.
</p>

<TrustBadges />

<button
style={{ ...styles.goldBtn, width: "100%" }}
onClick={() => setView("order")}
>
Place Order
</button>
</section>
</>
)}

{view === "about" && <About setView={setView} />}

{view === "careers" && <Careers setView={setView} />}

{view === "order" && (
<Order
order={order}
setOrder={setOrder}
products={products}
selectedProduct={selectedProduct}
submitOrder={submitOrder}
loading={loading}
/>
)}

{view === "products" && <Products products={products} />}

{view === "services" && <Services />}

{view === "login" && (
<Owner
pin={pin}
setPin={setPin}
ownerLoggedIn={ownerLoggedIn}
ownerLogin={ownerLogin}
products={products}
updateProductLocal={updateProductLocal}
saveProduct={saveProduct}
/>
)}

{view === "owner" && (
<Owner
pin={pin}
setPin={setPin}
ownerLoggedIn={ownerLoggedIn}
ownerLogin={ownerLogin}
products={products}
updateProductLocal={updateProductLocal}
saveProduct={saveProduct}
/>
)}

<Footer />
</div>
);
}

