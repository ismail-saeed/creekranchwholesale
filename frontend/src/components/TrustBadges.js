import React, { useState } from "react";
import { green, gold, cream } from "../styles";

const badges = [
{
title: "HMS Halal Certified",
icon: "🕌",
short: "Halal certification documentation.",
image: "/images/certificates/hms-certificate.jpg",
},
{
title: "USDA Inspected",
icon: "✅",
short: "USDA inspection and compliance details.",
image: "/images/certificates/usda-certificate.jpg",
},
{
title: "Professional Service",
icon: "👨‍🍳",
short: "Professional processing and customer service standards.",
image: "/images/certificates/professional-service.jpg",
},
{
title: "Fast Turnaround",
icon: "🚚",
short: "Fast preparation and delivery process.",
image: "/images/certificates/fast-turnaround.jpg",
},
{
title: "Quality Guaranteed",
icon: "⭐",
short: "Quality control, freshness, and packaging standards.",
image: "/images/certificates/quality-certificate.jpg",
},
];

export default function TrustBadges() {
const [selected, setSelected] = useState(null);

return (
<>
<section style={styles.section}>
<h2 style={styles.title}>Certifications & Trust</h2>
<p style={styles.subtitle}>
Certificates and supporting documents can be uploaded here later.
</p>

<div style={styles.grid}>
{badges.map((item) => (
<div key={item.title} style={styles.card}>
<div style={styles.icon}>{item.icon}</div>
<h3 style={styles.cardTitle}>{item.title}</h3>
<p style={styles.text}>{item.short}</p>

<button style={styles.button} onClick={() => setSelected(item)}>
View Details
</button>
</div>
))}
</div>
</section>

{selected && (
<div style={styles.modalBg} onClick={() => setSelected(null)}>
<div style={styles.modal} onClick={(e) => e.stopPropagation()}>
<button style={styles.close} onClick={() => setSelected(null)}>
×
</button>

<h2 style={styles.modalTitle}>{selected.title}</h2>
<p style={styles.text}>{selected.short}</p>

<div style={styles.placeholder}>
<p style={{ margin: 0 }}>
Upload certificate image later at:
</p>
<strong>{selected.image}</strong>
</div>

<img
src={selected.image}
alt={selected.title}
style={styles.certImage}
onError={(e) => {
e.currentTarget.style.display = "none";
}}
/>
</div>
</div>
)}
</>
);
}

const styles = {
section: {
maxWidth: 1200,
margin: "60px auto",
padding: "0 22px",
},

title: {
textAlign: "center",
color: green,
fontSize: 38,
marginBottom: 10,
},

subtitle: {
textAlign: "center",
color: "#555",
fontSize: 18,
marginBottom: 35,
},

grid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
gap: 18,
},

card: {
background: cream,
border: `2px solid ${gold}`,
borderRadius: 18,
padding: 22,
textAlign: "center",
boxShadow: "0 10px 25px rgba(0,0,0,.12)",
},

icon: {
fontSize: 42,
marginBottom: 10,
},

cardTitle: {
color: green,
fontSize: 20,
margin: "8px 0",
},

text: {
color: "#333",
lineHeight: 1.6,
},

button: {
marginTop: 14,
background: gold,
color: green,
border: "none",
borderRadius: 10,
padding: "11px 18px",
fontWeight: "900",
cursor: "pointer",
},

modalBg: {
position: "fixed",
inset: 0,
background: "rgba(0,0,0,.72)",
zIndex: 2000,
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: 20,
},

modal: {
background: "white",
maxWidth: 720,
width: "100%",
borderRadius: 20,
padding: 25,
position: "relative",
border: `3px solid ${gold}`,
},

close: {
position: "absolute",
right: 15,
top: 10,
background: green,
color: "white",
border: "none",
borderRadius: "50%",
width: 36,
height: 36,
fontSize: 24,
cursor: "pointer",
},

modalTitle: {
color: green,
marginTop: 0,
},

placeholder: {
background: "#fff6dc",
border: `2px dashed ${gold}`,
borderRadius: 14,
padding: 18,
marginTop: 15,
textAlign: "center",
color: green,
},

certImage: {
width: "100%",
marginTop: 18,
borderRadius: 12,
border: `2px solid ${gold}`,
},
};
