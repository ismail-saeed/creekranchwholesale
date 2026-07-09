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
box-shadow: 0 22px 50px rgba(0,0,0,.25) !important;
}

.trust-btn {
transition: all .3s ease;
}

.trust-btn:hover {
transform: scale(1.04);
box-shadow: 0 10px 24px rgba(0,0,0,.25);
}

@media (max-width: 768px) {
.trust-card {
min-height: 430px !important;
}

.trust-title {
font-size: 25px !important;
}

.trust-subtitle {
font-size: 16px !important;
}
}
`}</style>

<article
className="trust-card"
style={{
...styles.card,
backgroundImage: `url("${certificate.background}")`,
}}
>
<div style={styles.overlay}></div>

<div style={styles.content}>
<h3 className="trust-title" style={styles.title}>
{certificate.title}
</h3>

<p className="trust-subtitle" style={styles.subtitle}>
{certificate.subtitle}
</p>

<p style={styles.description}>
{certificate.description}
</p>

<button
className="trust-btn"
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
position: "relative",
minHeight: 500,
backgroundSize: "cover",
backgroundPosition: "center",
border: `3px solid ${gold}`,
borderRadius: 24,
overflow: "hidden",
boxShadow: "0 12px 32px rgba(0,0,0,.16)",
display: "flex",
alignItems: "flex-end",
},

overlay: {
position: "absolute",
inset: 0,
background:
"linear-gradient(to bottom, rgba(255,246,220,.08), rgba(255,246,220,.58), rgba(255,246,220,.94))",
zIndex: 1,
},

content: {
position: "relative",
zIndex: 2,
width: "100%",
padding: "26px 22px 28px",
textAlign: "center",
},

title: {
color: green,
fontSize: 30,
margin: "0 0 10px",
fontWeight: "900",
lineHeight: 1.15,
},

subtitle: {
color: "#7c1d1d",
fontSize: 18,
fontWeight: "900",
margin: "0 0 12px",
},

description: {
color: "#222",
fontSize: 15,
lineHeight: 1.55,
margin: "0 0 20px",
fontWeight: "600",
},

button: {
background: green,
color: "white",
border: `2px solid ${gold}`,
borderRadius: 14,
padding: "13px 26px",
fontWeight: "900",
fontSize: 15,
cursor: "pointer",
},
};