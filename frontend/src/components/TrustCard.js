import React from "react";
import { green, gold } from "../styles";

export default function TrustCard({ certificate, onOpen }) {
return (
<>
<style>{`
.trust-card {
transition: all .35s ease;
}

.trust-card:hover {
transform: translateY(-7px);
box-shadow: 0 22px 50px rgba(0,0,0,.24) !important;
}

.trust-card img {
transition: transform .45s ease;
}

.trust-card:hover img {
transform: scale(1.035);
}

.trust-view-btn {
transition: all .3s ease;
}

.trust-view-btn:hover {
transform: scale(1.04);
box-shadow: 0 10px 24px rgba(0,0,0,.22);
}

@media (max-width: 768px) {
.trust-info {
padding: 18px 16px 20px !important;
}

.trust-title {
font-size: 22px !important;
}

.trust-subtitle {
font-size: 15px !important;
}
}
`}</style>

<article className="trust-card" style={styles.card}>
<div style={styles.imageWrap} onClick={() => onOpen(certificate)}>
<img
src={certificate.background}
alt={certificate.title}
style={styles.image}
/>
</div>

<div className="trust-info" style={styles.info}>
<h3 className="trust-title" style={styles.title}>
{certificate.title}
</h3>

<p className="trust-subtitle" style={styles.subtitle}>
{certificate.subtitle}
</p>

<button
className="trust-view-btn"
style={styles.button}
onClick={() => onOpen(certificate)}
>
View Certificate →
</button>
</div>
</article>
</>
);
}

const styles = {
card: {
width: "100%",
background: "#fff6dc",
border: `3px solid ${gold}`,
borderRadius: 24,
overflow: "hidden",
boxShadow: "0 12px 30px rgba(0,0,0,.15)",
},

imageWrap: {
overflow: "hidden",
cursor: "pointer",
},

image: {
width: "100%",
height: 230,
objectFit: "cover",
display: "block",
},

info: {
padding: "20px 18px 22px",
textAlign: "center",
},

title: {
color: green,
fontSize: 24,
margin: "0 0 8px",
fontWeight: "900",
},

subtitle: {
color: "#7c1d1d",
fontSize: 16,
fontWeight: "800",
margin: "0 0 18px",
},

button: {
background: green,
color: "white",
border: "none",
borderRadius: 14,
padding: "12px 22px",
fontWeight: "900",
cursor: "pointer",
},
};