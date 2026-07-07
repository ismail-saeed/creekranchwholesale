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
<div style={styles.circle}>
<span style={styles.circleText}>
{certificate.status === "available" ? "CERTIFIED" : "COMING SOON"}
</span>
</div>

<h3 style={styles.title}>{certificate.title}</h3>

<p style={styles.subtitle}>{certificate.subtitle}</p>

<p style={styles.description}>{certificate.description}</p>

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
minHeight: 430,
backgroundColor: "#f8f1d9",
backgroundSize: "cover",
backgroundPosition: "center",
border: `2px solid ${gold}`,
borderRadius: 22,
padding: "34px 24px 28px",
textAlign: "center",
overflow: "hidden",
boxShadow: "0 12px 28px rgba(0,0,0,.12)",
},

overlay: {
position: "absolute",
inset: 0,
background:
"linear-gradient(rgba(248,241,217,.90), rgba(248,241,217,.88))",
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
width: 88,
height: 88,
borderRadius: "50%",
border: `3px solid ${gold}`,
background: "white",
display: "flex",
alignItems: "center",
justifyContent: "center",
margin: "0 auto 18px",
boxShadow: "0 8px 18px rgba(0,0,0,.15)",
},

circleText: {
color: green,
fontSize: 11,
fontWeight: "900",
textAlign: "center",
},

title: {
color: green,
fontSize: 22,
marginBottom: 10,
fontWeight: "900",
},

subtitle: {
color: "#8b1f1f",
fontWeight: "bold",
marginBottom: 12,
},

description: {
color: "#444",
lineHeight: 1.7,
minHeight: 95,
},
