import React from "react";
import { green, gold } from "../styles";

export default function Footer({ setView }) {
const goTo = (page) => {
setView(page);
window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
<>
<style>{`
.footer-logo {
animation: footerFloat 3s ease-in-out infinite;
}

@keyframes footerFloat {
0% { transform: translateY(0); }
50% { transform: translateY(-6px); }
100% { transform: translateY(0); }
}

.footer-social {
width: 52px;
height: 52px;
border: 2px solid #d5a642;
border-radius: 50%;
display: inline-flex;
align-items: center;
justify-content: center;
color: white;
background: rgba(255,255,255,.08);
text-decoration: none;
transition: .3s;
}

.footer-social svg {
width: 24px;
height: 24px;
fill: currentColor;
}

.footer-social:hover {
background: #d5a642;
color: #062b18;
transform: translateY(-5px) scale(1.08);
}

.footer-link {
color: white;
text-decoration: none;
cursor: pointer;
transition: .25s;
font-weight: 800;
}

.footer-link:hover {
color: #d5a642;
}

@media (max-width: 768px) {
.footer-links {
gap: 18px !important;
}

.footer-social {
width: 48px;
height: 48px;
}

.footer-copy {
font-size: 15px !important;
}
}
`}</style>

<footer style={styles.footer}>
<img
className="footer-logo"
src="/images/Logo.jpg"
alt="AL-MIZAN"
style={styles.logo}
/>

<h3 style={styles.follow}>Follow Us</h3>

<div style={styles.socials}>
<a href="#" className="footer-social" aria-label="Facebook">
<FacebookIcon />
</a>

<a href="#" className="footer-social" aria-label="Instagram">
<InstagramIcon />
</a>

<a href="#" className="footer-social" aria-label="X">
<XIcon />
</a>

<a href="#" className="footer-social" aria-label="LinkedIn">
<LinkedInIcon />
</a>
</div>

<div style={styles.divider}></div>

<div className="footer-links" style={styles.links}>
<span className="footer-link" onClick={() => goTo("home")}>Home</span>
<span className="footer-link" onClick={() => goTo("about")}>About</span>
<span className="footer-link" onClick={() => goTo("products")}>Products</span>
<span className="footer-link" onClick={() => goTo("services")}>Services</span>
<span className="footer-link" onClick={() => goTo("careers")}>Careers</span>
<span className="footer-link" onClick={() => goTo("order")}>Order</span>
</div>

<div style={styles.badges}>
USDA Inspected • HMS Halal Certified
</div>

<div className="footer-copy" style={styles.copy}>
© 2026 AL-MIZAN HALAL MEAT
<br />
All Rights Reserved.
</div>
</footer>
</>
);
}

function FacebookIcon() {
return (
<svg viewBox="0 0 24 24">
<path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.91h2.78l-.44 2.91h-2.34V22c4.79-.75 8.45-4.91 8.45-9.93z" />
</svg>
);
}

function InstagramIcon() {
return (
<svg viewBox="0 0 24 24">
<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.75 6.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
</svg>
);
}

function XIcon() {
return (
<svg viewBox="0 0 24 24">
<path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.4L6.3 22H3.2l7.3-8.4L2.8 2h6.5l4.4 6.7L18.9 2zm-1.1 17.8h1.7L8.4 4.1H6.6l11.2 15.7z" />
</svg>
);
}

function LinkedInIcon() {
return (
<svg viewBox="0 0 24 24">
<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.16V23H8V8z" />
</svg>
);
}

const styles = {
footer: {
background: green,
color: "white",
textAlign: "center",
padding: "55px 20px 35px",
},

logo: {
width: 175,
background: "white",
padding: 10,
borderRadius: 18,
border: `3px solid ${gold}`,
marginBottom: 25,
},

follow: {
color: gold,
fontSize: 28,
marginBottom: 22,
},

socials: {
display: "flex",
justifyContent: "center",
gap: 16,
marginBottom: 32,
flexWrap: "wrap",
},

divider: {
width: "80%",
maxWidth: 700,
height: 1,
background: "rgba(213,166,66,.55)",
margin: "0 auto 30px",
},

links: {
display: "flex",
justifyContent: "center",
gap: 28,
flexWrap: "wrap",
marginBottom: 32,
fontSize: 18,
},

badges: {
color: gold,
fontWeight: "900",
letterSpacing: 2,
marginBottom: 20,
},

copy: {
color: "#d8d8d8",
lineHeight: 1.7,
fontSize: 16,
},
};