import React from "react";
import { green, gold } from "../styles";

export default function ContactUs() {
return (
<>
<style>{`
.contact-action {
transition: all .3s ease;
}

.contact-action:hover {
transform: translateY(-4px) scale(1.04);
box-shadow: 0 14px 30px rgba(0,0,0,.35);
}

.contact-link {
color: white;
text-decoration: none;
display: inline-flex;
align-items: center;
justify-content: center;
gap: 12px;
font-size: 22px;
line-height: 1.6;
transition: all .25s ease;
max-width: 95%;
word-break: break-word;
}

.contact-link:hover {
color: #d5a642;
transform: scale(1.04);
}

@media (max-width: 768px) {
.contact-title {
font-size: 38px !important;
}

.contact-actions {
flex-direction: column !important;
align-items: center !important;
}

.contact-action {
width: 85% !important;
}

.contact-link {
font-size: 20px !important;
}
}
`}</style>

<section style={styles.section}>
<h2 className="contact-title" style={styles.title}>
Contact Us Today
</h2>

<div className="contact-actions" style={styles.actions}>
<a href="tel:+19728343147" className="contact-action" style={styles.callBtn}>
<PhoneIcon />
Call Now
</a>

<a
href="https://wa.me/19728343147?text=Hello%20AL-MIZAN%2C%20I%27m%20interested%20in%20your%20halal%20meat%20products."
target="_blank"
rel="noopener noreferrer"
className="contact-action"
style={styles.whatsappBtn}
>
<WhatsAppIcon />
WhatsApp
</a>
</div>

<div style={styles.info}>
<a href="mailto:CreekRanchInc@gmail.com" className="contact-link">
<span style={styles.goldIcon}>✉</span>
CreekRanchInc@gmail.com
</a>

<a
href="https://maps.google.com/?q=413+CR+4781+Boyd+TX+76023"
target="_blank"
rel="noopener noreferrer"
className="contact-link"
>
<span style={styles.goldIcon}>⌖</span>
413 CR 4781, Boyd, TX 76023
</a>
</div>
</section>
</>
);
}

function PhoneIcon() {
return (
<svg style={styles.iconSvg} viewBox="0 0 24 24">
<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
</svg>
);
}

function WhatsAppIcon() {
return (
<svg style={styles.iconSvg} viewBox="0 0 32 32">
<path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L.3 31.7l8.1-2.1c2.3 1.2 4.9 1.8 7.6 1.8 8.6 0 15.6-6.9 15.6-15.5C31.6 7.3 24.6.4 16 .4zm0 28.2c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2-1.9-4.3-1.9-6.7C3.1 8.8 8.8 3.1 16 3.1c7.2 0 12.9 5.7 12.9 12.8S23.2 28.6 16 28.6zm7.1-9.7c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.9.2-.2.3-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.5-.5-2.8-1.7-1-1-1.7-2.1-1.9-2.5-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.3 3.6c.2.2 2.4 3.8 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.5.2 2 .1.6-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
</svg>
);
}

const styles = {
section: {
background: green,
color: "white",
textAlign: "center",
padding: "65px 20px 55px",
borderTop: `5px solid ${gold}`,
},

title: {
color: gold,
fontSize: 46,
margin: "0 0 28px",
fontWeight: "900",
},

actions: {
display: "flex",
justifyContent: "center",
gap: 18,
flexWrap: "wrap",
marginBottom: 32,
},

callBtn: {
background: gold,
color: green,
textDecoration: "none",
borderRadius: 16,
padding: "17px 44px",
fontSize: 22,
fontWeight: "900",
display: "inline-flex",
alignItems: "center",
justifyContent: "center",
gap: 12,
minWidth: 230,
},

whatsappBtn: {
background: "#25D366",
color: "white",
textDecoration: "none",
borderRadius: 16,
padding: "17px 44px",
fontSize: 22,
fontWeight: "900",
display: "inline-flex",
alignItems: "center",
justifyContent: "center",
gap: 12,
minWidth: 230,
},

iconSvg: {
width: 26,
height: 26,
fill: "currentColor",
flexShrink: 0,
},

info: {
display: "flex",
flexDirection: "column",
gap: 14,
alignItems: "center",
},

goldIcon: {
color: gold,
fontSize: 26,
fontWeight: "900",
flexShrink: 0,
},
};
