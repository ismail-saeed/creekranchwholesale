import React from "react";

const sections = [
{
image: "/images/p3.png",
title: "Premium Halal Meat",
text: "Fresh halal meat prepared with care, quality, and professional standards."
},
{
image: "/images/p4.png",
title: "Fast & Reliable Delivery",
text: "Orders are handled quickly and delivered safely to stores, restaurants, and customers."
},
{
image: "/images/p5.png",
title: "Delivered To You",
text: "From our ranch to your table, every order is delivered with trust and quality."
}
];

export default function Story() {
return (
<section style={styles.section}>
<h2 style={styles.heading}>Why Customers Choose AL-MIZAN</h2>

<p style={styles.subheading}>
Professional halal meat service from processing to delivery.
</p>

<div style={styles.grid}>
{sections.map((item, index) => (
<div key={index} style={styles.card}>
<img src={item.image} alt={item.title} style={styles.image} />

<div style={styles.content}>
<h3 style={styles.title}>{item.title}</h3>
<p style={styles.text}>{item.text}</p>
</div>
</div>
))}
</div>
</section>
);
}

const styles = {
section: {
maxWidth: "1250px",
margin: "55px auto",
padding: "0 25px",
},

heading: {
textAlign: "center",
fontSize: "38px",
color: "#062b18",
marginBottom: "10px",
},

subheading: {
textAlign: "center",
color: "#555",
fontSize: "18px",
marginBottom: "35px",
},

grid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
gap: "28px",
},

card: {
background: "#fff",
borderRadius: "22px",
overflow: "hidden",
border: "2px solid #d5a642",
boxShadow: "0 10px 28px rgba(0,0,0,.14)",
},

image: {
width: "100%",
height: "260px",
objectFit: "cover",
display: "block",
},

content: {
padding: "24px",
textAlign: "center",
},

title: {
color: "#062b18",
fontSize: "24px",
marginBottom: "10px",
},

text: {
color: "#444",
fontSize: "16px",
lineHeight: 1.6,
},
};



