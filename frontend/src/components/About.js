import React from "react";
import { green, gold, cream } from "../styles";

export default function About({ setView }) {
return (
<section style={styles.page}>
<div style={styles.hero}>
<div style={styles.heroText}>
<h1 style={styles.title}>About AL-MIZAN Halal Meat</h1>

<p style={styles.text}>
From our ranch to your table, we provide premium halal meat with
honesty, quality, and professional USDA-inspected processing.
</p>

<button style={styles.button} onClick={() => setView("order")}>
Scan to Order / Place Order
</button>
</div>

<img
src="/images/p1.png"
alt="AL-MIZAN Ranch"
style={styles.heroImage}
/>
</div>

<div style={styles.card}>
<h2 style={styles.sectionTitle}>Our Story</h2>

<p style={styles.paragraph}>
AL-MIZAN Halal Meat by Creek Ranch was created to serve families,
restaurants, stores, and wholesale partners with clean, fresh, and
trusted halal meat.
</p>

<p style={styles.paragraph}>
We focus on quality, respect, cleanliness, and customer satisfaction.
Every order is handled with care from processing to delivery.
</p>
</div>

<div style={styles.valuesGrid}>
<Value title="HMS Halal Certified" />
<Value title="USDA Inspected" />
<Value title="Professional Service" />
<Value title="Fast Delivery" />
<Value title="Quality Guaranteed" />
</div>

<div style={styles.mission}>
<h2>Our Mission</h2>
<p>
To deliver trusted halal meat with integrity, quality, and respect for
every customer.
</p>
</div>
</section>
);
}

function Value({ title }) {
return <div style={styles.value}>{title}</div>;
}

const styles = {
page: {
background: "#f5edd6",
paddingBottom: 50,
},

hero: {
maxWidth: 1200,
margin: "40px auto",
padding: 25,
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
gap: 30,
alignItems: "center",
},

heroText: {
padding: 20,
},

title: {
color: green,
fontSize: 44,
marginBottom: 18,
},

text: {
fontSize: 19,
lineHeight: 1.7,
color: "#333",
},

button: {
marginTop: 20,
background: gold,
color: green,
border: "none",
borderRadius: 12,
padding: "15px 25px",
fontWeight: "900",
fontSize: 17,
cursor: "pointer",
},

heroImage: {
width: "100%",
borderRadius: 22,
border: `3px solid ${gold}`,
boxShadow: "0 10px 30px rgba(0,0,0,.2)",
},

card: {
maxWidth: 1000,
margin: "30px auto",
background: cream,
padding: 30,
borderRadius: 20,
border: `2px solid ${gold}`,
boxShadow: "0 8px 25px rgba(0,0,0,.12)",
},

sectionTitle: {
color: green,
fontSize: 32,
},

paragraph: {
fontSize: 18,
lineHeight: 1.7,
color: "#333",
},

valuesGrid: {
maxWidth: 1100,
margin: "35px auto",
padding: "0 25px",
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
gap: 16,
},

value: {
background: green,
color: "white",
border: `2px solid ${gold}`,
borderRadius: 14,
padding: 18,
textAlign: "center",
fontWeight: "900",
},

mission: {
maxWidth: 900,
margin: "35px auto",
background: green,
color: "white",
padding: 30,
borderRadius: 20,
textAlign: "center",
border: `3px solid ${gold}`,
},
};
