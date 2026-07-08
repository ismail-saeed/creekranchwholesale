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
transform: translateY(-8px);
box-shadow: 0 18px 45px rgba(0,0,0,.25);
}

.trust-btn {
transition: .25s;
}

.trust-btn:hover {
transform: scale(1.04);
}

@media (max-width: 768px) {
.trust-card {
min-height: 340px !important;
padding: 24px 18px 22px !important;
}

.trust-circle {
width: 70px !important;
height: 70px !important;
}

.trust-title {
font-size: 19px !important;
}

.trust-description {
min-height: auto !important;
font-size: 15px !important;
}
}
`}</style>

<article
className="trust-card"
style={{
...styles.card,
backgroundImage: certificate.background
? `url("${certificate.background}")`
: "none",
}}
>
<div style={styles.overlay}></div>
<div style={styles.top}></div>

<div style={styles.content}>
<div className="trust-circle" style={styles.circle}>
<span style={styles.circleText}>
{certificate.status === "available" ? "CERTIFIED" : "COMING SOON"}
</span>
</div>

<h3 className="trust-title" style={styles.title}>
{certificate.title}
</h3>

<p style={styles.subtitle}>{certificate.subtitle}</p>

<p className="trust-description" style={styles.description}>
{certificate.description}
</p>

<button
className="trust-btn"
style={styles.button}
onClick={() => onOpen(certificate)}
>
View Certificate
</button>
</div>
</article>
</>
);
}

const styles = {
card: {
position: "relative",
minHeight: 390,
backgroundColor: "#f8f1d9",
backgroundSize: "cover",
backgroundPosition: "center",
border: `2px solid ${gold}`,
borderRadius: 22,
padding: "30px 22px 24px",
textAlign: "center",
overflow: "hidden",
boxShadow: "0 12px 28px rgba(0,0,0,.12)",
},

overlay: {
position: "absolute",
inset: 0,
background:
"linear-gradient(rgba(248,241,217,.45), rgba(248,241,217,.40))",
zIndex: 1,
},

top: {
position: "absolute",
top: 0,
left: 0,
right: 0,
height: 7,
background: `linear-gradient(90deg, ${green}, ${gold}, ${green})`,
zIndex: 4,
},

content: {
position: "relative",
zIndex: 3,
},

circle: {
width: 78,
height: 78,
borderRadius: "50%",
border: `3px solid ${gold}`,
background: "white",
display: "flex",
alignItems: "center",
justifyContent: "center",
margin: "0 auto 16px",
boxShadow: "0 8px 18px rgba(0,0,0,.15)",
},

circleText: {
color: green,
fontSize: 10,
fontWeight: "900",
textAlign: "center",
},

title: {
color: green,
fontSize: 20,
marginBottom: 10,
fontWeight: "900",
},

subtitle: {
color: "#8b1f1f",
fontWeight: "bold",
marginBottom: 12,
},

description: {
color: "#333",
lineHeight: 1.65,
minHeight: 80,
},

button: {
width: "100%",
marginTop: 16,
background: gold,
color: green,
border: "none",
borderRadius: 12,
padding: "11px",
fontWeight: "900",
cursor: "pointer",
},
};