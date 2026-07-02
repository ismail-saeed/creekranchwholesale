import React from "react";

const steps = [
{
image: "/images/p2.png",
title: "Professional Halal Processing",
text: "Every order starts with clean, respectful, HMS halal-certified and USDA-inspected processing.",
reverse: false,
},
{
image: "/images/p3.png",
title: "Fresh Cutting & Packing",
text: "Fresh meat is cut, packed, and prepared carefully for stores, restaurants, and wholesale customers.",
reverse: true,
},
{
image: "/images/p4.png",
title: "Fast & Reliable Delivery",
text: "Our delivery team moves quickly and seriously to make sure your order arrives on time.",
reverse: false,
},
{
image: "/images/p5.png",
title: "Delivered To You",
text: "From our ranch to your table, every order is delivered with trust, quality, and professionalism.",
reverse: true,
},
];

export default function Story() {
return (
<>
<style>{`
.journey-card {
transition: all .35s ease;
}

.journey-card:hover {
transform: translateY(-8px);
box-shadow: 0 22px 50px rgba(0,0,0,.22) !important;
}

.journey-card img {
transition: transform .6s ease;
}

.journey-card:hover img {
transform: scale(1.06);
}

@media (max-width: 850px) {
.journey-card {
grid-template-columns: 1fr !important;
}

.journey-card.reverse {
direction: ltr !important;
}

.journey-title {
font-size: 34px !important;
}

.journey-img {
height: 260px !important;
}

.journey-content {
padding: 26px !important;
text-align: center !important;
}
}
`}</style>

<section style={styles.section}>
<div style={styles.header}>
<h2 className="journey-title" style={styles.heading}>
From Ranch To Customer
</h2>

<p style={styles.subheading}>
A clean, trusted, and professional halal meat journey.
</p>
</div>

<div style={styles.list}>
{steps.map((step, index) => (
<div
key={step.title}
className={`journey-card ${step.reverse ? "reverse" : ""}`}
style={{
...styles.card,
direction: step.reverse ? "rtl" : "ltr",
}}
>
<div style={styles.imageWrap}>
<img
className="journey-img"
src={step.image}
alt={step.title}
style={styles.image}
/>
</div>

<div className="journey-content" style={styles.content}>
<div style={styles.number}>0{index + 1}</div>

<h3 style={styles.title}>{step.title}</h3>

<p style={styles.text}>{step.text}</p>

<button style={styles.learnBtn}>Learn More →</button>
</div>
</div>
))}
</div>
</section>
</>
);
}

const styles = {
section: {
maxWidth: "1250px",
margin: "70px auto",
padding: "0 22px",
},

header: {
textAlign: "center",
marginBottom: "45px",
},

heading: {
color: "#062b18",
fontSize: "46px",
marginBottom: "10px",
fontWeight: "900",
},

subheading: {
color: "#555",
fontSize: "19px",
margin: 0,
},

list: {
display: "flex",
flexDirection: "column",
gap: "34px",
},

card: {
display: "grid",
gridTemplateColumns: "1.05fr .95fr",
background: "#fff6dc",
border: "3px solid #d5a642",
borderRadius: "26px",
overflow: "hidden",
boxShadow: "0 12px 32px rgba(0,0,0,.14)",
},

imageWrap: {
overflow: "hidden",
minHeight: "100%",
},

image: {
width: "100%",
height: "100%",
minHeight: "360px",
objectFit: "cover",
display: "block",
},

content: {
padding: "48px",
display: "flex",
flexDirection: "column",
justifyContent: "center",
direction: "ltr",
},

number: {
color: "#d5a642",
fontSize: "22px",
fontWeight: "900",
marginBottom: "10px",
},

title: {
color: "#062b18",
fontSize: "34px",
margin: "0 0 16px",
lineHeight: 1.15,
},

text: {
color: "#333",
fontSize: "18px",
lineHeight: 1.7,
marginBottom: "24px",
},

learnBtn: {
alignSelf: "flex-start",
background: "#062b18",
color: "white",
border: "none",
borderRadius: "12px",
padding: "13px 22px",
fontWeight: "900",
cursor: "pointer",
},
};



