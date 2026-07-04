import React from "react";
import { green, gold, cream } from "../styles";

const jobs = [
{
title: "Delivery Driver",
type: "Full-time / Part-time",
text: "Responsible for delivering halal meat orders safely and on time across DFW.",
},
{
title: "Packaging Operator",
type: "Full-time",
text: "Prepare, pack, label, and organize customer and wholesale orders.",
},
{
title: "Processing Team Member",
type: "Full-time",
text: "Assist with meat processing, cutting, cleaning, and production workflow.",
},
{
title: "Customer Service",
type: "Part-time",
text: "Help customers with orders, calls, pickup coordination, and follow-ups.",
},
];

export default function Careers({ setView }) {
return (
<section style={styles.page}>
<div style={styles.hero}>
<h1 style={styles.title}>Careers at AL-MIZAN</h1>
<p style={styles.subtitle}>
Join our halal meat processing, packaging, delivery, and customer service team.
</p>
</div>

<div style={styles.grid}>
{jobs.map((job) => (
<div key={job.title} style={styles.card}>
<h3 style={styles.jobTitle}>{job.title}</h3>
<p style={styles.type}>{job.type}</p>
<p style={styles.text}>{job.text}</p>
<button style={styles.button}>Apply Now</button>
</div>
))}
</div>

<div style={styles.note}>
<h2>Don’t see the right position?</h2>
<p>
You can still contact us and share your experience for future opportunities.
</p>
<button style={styles.contactBtn} onClick={() => setView("about")}>
Learn More About Us
</button>
</div>
</section>
);
}

const styles = {
page: {
background: "#f5edd6",
paddingBottom: 60,
},

hero: {
background: green,
color: "white",
textAlign: "center",
padding: "70px 20px",
borderBottom: `5px solid ${gold}`,
},

title: {
fontSize: 46,
color: gold,
marginBottom: 12,
},

subtitle: {
fontSize: 19,
maxWidth: 800,
margin: "0 auto",
lineHeight: 1.6,
},

grid: {
maxWidth: 1150,
margin: "45px auto",
padding: "0 22px",
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
gap: 22,
},

card: {
background: cream,
border: `2px solid ${gold}`,
borderRadius: 18,
padding: 24,
boxShadow: "0 10px 28px rgba(0,0,0,.13)",
},

jobTitle: {
color: green,
fontSize: 24,
marginTop: 0,
},

type: {
color: "#9b1c1c",
fontWeight: "900",
},

text: {
lineHeight: 1.6,
color: "#333",
},

button: {
background: gold,
color: green,
border: "none",
borderRadius: 10,
padding: "12px 18px",
fontWeight: "900",
cursor: "pointer",
},

note: {
maxWidth: 850,
margin: "35px auto",
background: "white",
border: `2px solid ${gold}`,
borderRadius: 18,
padding: 28,
textAlign: "center",
},

contactBtn: {
background: green,
color: "white",
border: "none",
borderRadius: 10,
padding: "13px 22px",
fontWeight: "900",
cursor: "pointer",
},
};