import React from "react";
import { styles } from "../styles";

export default function Products({ products }) {
return (
<section style={styles.card}>

<h2 style={styles.title}>
Wholesale Products
</h2>

<p
style={{
textAlign: "center",
marginBottom: 25,
color: "#666"
}}
>
Updated Daily Inventory
</p>

<div style={{ overflowX: "auto" }}>

<table style={styles.table}>

<thead>

<tr>

<th style={styles.th}>Photo</th>

<th style={styles.th}>Product</th>

<th style={styles.th}>Size</th>

<th style={styles.th}>Weight</th>

<th style={styles.th}>Price / lb</th>

<th style={styles.th}>Available</th>

</tr>

</thead>

<tbody>

{products.map((item) => (

<tr key={item.id}>

<td style={styles.td}>

<img
src={
item.image ||
"/images/meat-placeholder.png"
}
alt={item.name}
style={{
width: 90,
height: 70,
objectFit: "cover",
borderRadius: 10
}}
/>

</td>

<td style={styles.td}>
<strong>{item.name}</strong>
</td>

<td style={styles.td}>
{item.size_type || "-"}
</td>

<td style={styles.td}>
{item.weight_range || "-"}
</td>

<td
style={{
...styles.price,
color: "#c0392b",
fontWeight: "bold",
fontSize: 18
}}
>
${item.price}
</td>

<td style={styles.td}>

<span
style={{
background:
(item.quantity ?? item.stock) > 10
? "#27ae60"
: "#e67e22",

color: "white",

padding: "6px 12px",

borderRadius: 8,

fontWeight: "bold"
}}
>
{item.quantity ?? item.stock}
</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

</section>
);
}