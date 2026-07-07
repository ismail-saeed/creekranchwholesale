import React from "react";
import { green, gold } from "../styles";

export default function Footer() {
return (
<>
<style>{`
.footer-link {
color: white;
text-decoration: none;
font-size: 22px;
line-height: 2;
display: inline-block;
transition: all .25s ease;
}

.footer-link:hover {
color: #d5a642;
transform: scale(1.08);
}

.call-link {
background: #d5a642;
color: #062b18 !important;
padding: 12px 24px;
border-radius: 50px;
font-weight: 900;
margin-bottom: 18px;
animation: callPulse 1.8s infinite;
}

@keyframes callPulse {
0% { transform: scale(1); }
50% { transform: scale(1.05); }
100% { transform: scale(1); }
}
`}</style>

<footer style={styles.footer}>
<div style={styles.contact}>
<h3 style={styles.title}>Contact Us Today</h3>

<a href="tel:+19728343147" className="footer-link call-link">
📞 Call Now: +1 (972) 834-3147
</a>

<br />

<a
href="mailto:CreekRanchInc@gmail.com"
className="footer-link"
>
✉️ CreekRanchInc@gmail.com
</a>

<br />

<a
href="https://maps.google.com/?q=413+CR+4781+Boyd+TX+76023"
target="_blank"
rel="noopener noreferrer"
className="footer-link"
>
📍 413 CR 4781, Boyd, TX 76023
</a>
</div>

<div style={styles.logoWrap}>
<img
src="/images/Logo.jpg"
alt="AL-MIZAN Halal Meat"
style={styles.logo}
/>
</div>

<div style={styles.line}>
QUALITY • TRUST • PURITY
</div>
</footer>
</>
);
}

const styles = {
footer: {
background: green,
color: "white",
textAlign: "center",
padding: "45px 20px 25px",
marginTop: 60,
borderTop: `5px solid ${gold}`,
},

contact: {
marginBottom: 25,
},

title: {
color: gold,
fontSize: 28,
marginBottom: 20,
},

logoWrap: {
display: "flex",
justifyContent: "center",
margin: "25px 0",
},

logo: {
width: 170,
maxWidth: "80%",
background: "white",
padding: 10,
borderRadius: 18,
border: `3px solid ${gold}`,
},

line: {
marginTop: 20,
color: gold,
letterSpacing: 5,
fontWeight: "bold",
fontSize: 18,
},
};