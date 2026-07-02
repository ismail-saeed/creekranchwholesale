import React from "react";
import { styles } from "../styles";

export default function Owner({
pin,
setPin,
ownerLoggedIn,
ownerLogin,
products,
updateProductLocal,
saveProduct,
}) {
if (!ownerLoggedIn) {
return (
<section style={styles.card}>
<h2 style={styles.title}>Owner Access</h2>

<p style={styles.text}>
Owners can update prices and available quantities only.
</p>

<input
style={styles.input}
type="password"
value={pin}
onChange={(e) => setPin(e.target.value)}
placeholder="Enter owner PIN"
/>

<button
style={{
...styles.goldBtn,
width: "100%",
}}
onClick={ownerLogin}
>
Login
</button>
</section>
);
}

return (
<section style={styles.card}>
<h2 style={styles.title}>Owner Dashboard</h2>

<p style={styles.text}>
Update price and quantity only. All other website content is managed by
the admin.
</p>

<div style={{ overflowX: "auto" }}>
<table style={styles.table}>
<thead>
<tr>
<th style={styles.th}>Product</th>
<th style={styles.th}>Weight</th>
<th style={styles.th}>Price / lb</th>
<th style={styles.th}>Quantity</th>
<th style={styles.th}>Action</th>
</tr>
</thead>

<tbody>
{products.map((item) => (
<tr key={item.id}>
<td style={styles.td}>
<strong>{item.name}</strong>
</td>

<td style={styles.td}>{item.weight_range || "-"}</td>

<td style={styles.td}>
<input
style={styles.smallInput}
type="number"
step="0.01"
value={item.price}
onChange={(e) =>
updateProductLocal(item.id, "price", e.target.value)
}
/>
</td>

<td style={styles.td}>
<input
style={styles.smallInput}
type="number"
value={item.quantity ?? item.stock ?? 0}
onChange={(e) =>
updateProductLocal(item.id, "quantity", e.target.value)
}
/>
</td>

<td style={styles.td}>
<button
style={styles.saveBtn}
onClick={() => saveProduct(item)}
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
);
}