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
line-height: 1.6;
display: inline-flex;
align-items: center;
justify-content: center;
gap: 12px;
transition: all .25s ease;
max-width: 95%;
word-break: break-word;
}

.footer-link:hover {
color: #d5a642;
transform: scale(1.04);
}

.footer-icon {
color: #d5a642;
font-size: 26px;
font-weight: 900;
flex-shrink: 0;
}

.call-btn {
background: #d5a642;
color: #062b18 !important;
text-decoration: none;
border-radius: 14px;
padding: 18px 52px;
font-size: 22px;
font-weight: 900;
display: inline-flex;
align-items: center;
justify-content: center;
gap: 14px;
transition: all .3s ease;
margin: 8px 0 28px;
min-width: 300px;
}

.call-btn:hover {
transform: translateY(-4px) scale(1.04);
box-shadow: 0 14px 30px rgba(0,0,0,.35);
}

@media (max-width: 768px) {
.footer-link {
font-size: 20px;
line-height: 1.5;
}

.call-btn {
width: 82%;
min-width: unset;
padding: 18px 20px;
font-size: 23px;
border-radius: 18px;
}

.footer-email {
font-size: 22px;
}

.footer-address {
font-size: 21px;
max-width: 92%;
}
}

@media (max-width: 420px) {
.footer-email {
font-size: 20px;
}

.footer-address {
font-size: 20px;
}
}
`}</style>

<footer style={styles.footer}>
<div style={styles.contact}>
<h3 style={styles.title}>Contact Us Today</h3>

<a href="tel:+19728343147" className="call-btn">
<span>☎</span>
Call Now
</a>

<br />

<a
href="mailto:CreekRanchInc@gmail.com"
className="footer-link footer-email"
>
<span className="footer-icon">✉</span>
CreekRanchInc@gmail.com
</a>

<br />

<a
href="https://maps.google.com/?q=413+CR+4781+Boyd+TX+76023"
target="_blank"
rel="noopener noreferrer"
className="footer-link footer-address"
>
<span className="footer-icon">⌖</span>
413 CR 4781, Boyd, TX 76023
</a>
</div>

<div style={styles.logoWrap}>
<img
src="/images/Logo.jpg"
alt="AL-MIZAN Halal Meat"
style={styles.logo}
/>
</div>

<div style={styles.line}>QUALITY • TRUST • PURITY</div>
</footer>
</>
);
}

const styles = {
footer: {
background: green,
color: "white",
textAlign: "center",
padding: "55px 20px 32px",
marginTop: 60,
borderTop: `5px solid ${gold}`,
},

contact: {
marginBottom: 30,
},

title: {
color: gold,
fontSize: 34,
marginBottom: 24,
},

logoWrap: {
display: "flex",
justifyContent: "center",
margin: "32px 0",
},

logo: {
width: 210,
maxWidth: "78%",
background: "white",
padding: 12,
borderRadius: 20,
border: `4px solid ${gold}`,
},

line: {
marginTop: 26,
color: gold,
letterSpacing: 6,
fontWeight: "bold",
fontSize: 22,
lineHeight: 1.5,
},
};