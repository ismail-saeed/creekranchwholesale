import React from "react";
import { styles } from "../styles";

export default function Order({
order,
setOrder,
products,
selectedProduct,
submitOrder,
loading,
}) {
return (
<section style={styles.card}>
<h2 style={styles.title}>Place Your Order</h2>

<form onSubmit={submitOrder}>

<label style={styles.label}>
Store / Referral Partner
</label>

<input
style={styles.input}
value={order.store_name}
onChange={(e)=>
setOrder({
...order,
store_name:e.target.value
})
}
required
/>

<label style={styles.label}>
Customer Name
</label>

<input
style={styles.input}
value={order.customer_name}
onChange={(e)=>
setOrder({
...order,
customer_name:e.target.value
})
}
required
/>

<label style={styles.label}>
Phone Number
</label>

<input
style={styles.input}
value={order.phone}
onChange={(e)=>
setOrder({
...order,
phone:e.target.value
})
}
required
/>

<label style={styles.label}>
Product
</label>

<select
style={styles.input}
value={order.product_id}
onChange={(e)=>
setOrder({
...order,
product_id:e.target.value
})
}
>

{products.map((item)=>(

<option
key={item.id}
value={item.id}
>

{item.name}

{" | "}

{item.weight_range}

{" | $"}

{item.price}

/lb

</option>

))}

</select>

<label style={styles.label}>
Quantity
</label>

<input
type="number"
min="1"
style={styles.input}
value={order.quantity}
onChange={(e)=>
setOrder({
...order,
quantity:Number(e.target.value)
})
}
/>

<label style={styles.label}>
Cut Type
</label>

<select
style={styles.input}
value={order.cut_type}
onChange={(e)=>
setOrder({
...order,
cut_type:e.target.value
})
}
>

<option>Whole</option>

<option>Custom Cut</option>

<option>Restaurant Cut</option>

<option>Vacuum Packed</option>

<option>Cut & Boxed</option>

<option>Cut & Packed in Bags</option>

</select>

<label style={styles.label}>
Notes
</label>

<textarea
style={styles.textarea}
value={order.notes}
onChange={(e)=>
setOrder({
...order,
notes:e.target.value
})
}
/>

{selectedProduct && (

<div style={styles.summaryBox}>

<strong>
Selected Product
</strong>

<br />

{selectedProduct.name}

<br />

${selectedProduct.price}/lb

</div>

)}

<button
style={{
...styles.goldBtn,
width:"100%"
}}
>

{loading
? "Submitting..."
: "Submit Order"}

</button>

</form>

</section>
);
}