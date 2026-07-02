import React from "react";
import { green, gold } from "../styles";

export default function Footer() {
return (
<footer style={styles.footer}>
<div style={styles.contact}>
<h3 style={styles.title}>Contact Us Today</h3>

<p>+1 (972) 834-3147</p>
<p>CreekRanchInc@gmail.com</p>
<p>CreekRanchInc.com</p>
<p>413 CR 4781, Boyd, TX 76023</p>
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
marginBottom: 15,
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
