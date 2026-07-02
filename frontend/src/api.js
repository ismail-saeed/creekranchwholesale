export const API_BASE = "https://creekranchwholesale.onrender.com/api";

export async function apiGetProducts() {
const response = await fetch(`${API_BASE}/products`);

if (!response.ok) {
throw new Error("Failed to load products");
}

return response.json();
}

export async function apiCreateOrder(order) {
const response = await fetch(`${API_BASE}/orders`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(order),
});

if (!response.ok) {
throw new Error("Failed to submit order");
}

return response.json();
}

export async function apiUpdateProduct(product) {
const response = await fetch(`${API_BASE}/products/${product.id}`, {
method: "PUT",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
price: product.price,
quantity: product.quantity,
}),
});

if (!response.ok) {
throw new Error("Failed to update product");
}

return response.json();
}
