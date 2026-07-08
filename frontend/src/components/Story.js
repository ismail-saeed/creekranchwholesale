import React, { useState } from "react";

const steps = [
{
image: "/images/journey-1.png",
title: "Professional Halal Processing",
subtitle: "USDA & HMS Certified",
text: "Every order starts with clean, respectful, USDA-inspected and HMS halal-certified processing.",
details: [
"USDA inspected facility",
"HMS halal certified process",
"Professional hand slaughter service",
"Clean and respectful processing",
"Handled by trained staff",
],
},
{
image: "/images/journey-2.png",
title: "Fresh Cutting & Packing",
subtitle: "Fresh • Vacuum Sealed",
text: "Every order is carefully cut, packed, and prepared to preserve freshness and quality.",
details: [
"Custom cuts available",
"Vacuum sealed packaging",
"Fresh daily processing",
"Restaurant and wholesale orders",
"Ready for freezing or delivery",
],
},
{
image: "/images/journey-3.png",
title: "Cold Storage & Safe Handling",
subtitle: "Fresh • Temperature Controlled",
text: "Products are stored under proper temperature control to maintain freshness and food safety.",
details: [
"Temperature monitored",
"Food safety standards",
"Hygienic storage",
"Continuous cold chain",
"Maximum freshness",
],
},
{
image: "/images/journey-4.png",
title: "Fast Delivery & Customer Service",
subtitle: "On Time • Reliable",
text: "We deliver fresh halal products with professional service and reliable customer support.",
details: [
"Fast local delivery",
"Restaurant and store orders",
"Scheduled pickup available",
"Friendly customer support",
"Reliable service every time",
],
},
];

export default function Story() {
const [openIndex, setOpenIndex] = useState(null);

return (
<>
<style>{`
.journey-card {
transition: all .35s ease;
}

.journey-card:hover {
transform: translateY(-6px);
box-shadow: 0 22px 50px rgba(0,0,0,.22) !important;
}

.journey-img {
transition: transform .55s ease;
}

.journey-card:hover .journey-img {
transform: scale(1.025);
}

.details-box {
max-height: 0;
overflow: hidden;
opacity: 0;
transition: all .35s ease;
}

.details-box.open {
max-height: 520px;
opacity: 1;
margin-top: 18px;
}

@media (max-width: 850px) {
.journey-title {
font-size: 36px !important;
}

.journey-img {
height: auto !important;
}

.journey-content {
padding: 22px 20px 26px !important;
}

.journey-card-title {
font-size: 24px !important;
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

<div style={styles.grid}>
{steps.map((step, index) => {
const isOpen = openIndex === index;

return (
<div key={step.title} className="journey-card" style={styles.card}>
<div style={styles.imageWrap}>
<img
className="journey-img"
src={step.image}
alt={step.title}
style={styles.image}
/>
</div>

<div className="journey-content" style={styles.content}>
<h3 className="journey-card-title" style={styles.title}>
{step.title}
</h3>

<p style={styles.subtitle}>{step.subtitle}</p>

<button
style={styles.learnBtn}
onClick={() => setOpenIndex(isOpen ? null : index)}
>
{isOpen ? "Show Less ▲" : "Learn More ▼"}
</button>

<div className={`details-box ${isOpen ? "open" : ""}`}>
<ul style={styles.list}>
{step.details.map((item) => (
<li key={item} style={styles.item}>
✓ {item}
</li>
))}
</ul>

<p style={styles.text}>{step.text}</p>
</div>
</div>
</div>
);
})}
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
marginBottom: "38px",
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

grid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
gap: "28px",
},

card: {
background: "#fff6dc",
border: "3px solid #d5a642",
borderRadius: "26px",
overflow: "hidden",
boxShadow: "0 12px 32px rgba(0,0,0,.14)",
},

imageWrap: {
overflow: "hidden",
background: "#fff6dc",
},

image: {
width: "100%",
height: "auto",
display: "block",
},

content: {
padding: "26px 24px 30px",
textAlign: "center",
},

title: {
color: "#062b18",
fontSize: "28px",
margin: "0 0 8px",
lineHeight: 1.15,
},

subtitle: {
color: "#666",
fontSize: "16px",
fontWeight: "800",
marginBottom: "20px",
},

learnBtn: {
background: "#062b18",
color: "white",
border: "none",
borderRadius: "14px",
padding: "13px 26px",
fontWeight: "900",
fontSize: "16px",
cursor: "pointer",
},

list: {
listStyle: "none",
padding: 0,
margin: "0 0 18px",
textAlign: "left",
},

item: {
color: "#062b18",
fontWeight: "800",
marginBottom: "9px",
fontSize: "15px",
},

text: {
color: "#333",
fontSize: "16px",
lineHeight: 1.65,
margin: 0,
},
};



