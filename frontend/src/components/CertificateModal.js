import React, { useState } from "react";
import { green, gold } from "../styles";

export default function CertificateModal({ certificate, onClose }) {
const [imageFailed, setImageFailed] = useState(false);

if (!certificate) {
return null;
}

const showImage =
certificate.status === "available" && !imageFailed;

return (
<>
<style>{`
.cert-modal{
animation:modalIn .25s ease forwards;
}

@keyframes modalIn{
from{
opacity:0;
transform:translateY(25px) scale(.96);
}
to{
opacity:1;
transform:translateY(0) scale(1);
}
}

@media(max-width:768px){
.cert-modal{
max-height:88vh;
overflow-y:auto;
}

.cert-title{
font-size:28px !important;
}
}
`}</style>

<div style={styles.overlay} onClick={onClose}>
<div
className="cert-modal"
style={styles.modal}
onClick={(e) => e.stopPropagation()}
>
<button style={styles.close} onClick={onClose}>
×
</button>

<div style={styles.header}>
<div style={styles.label}>
{certificate.status === "available"
? "CERTIFIED"
: "COMING SOON"}
</div>

<h2 className="cert-title" style={styles.title}>
{certificate.title}
</h2>

<p style={styles.subtitle}>
{certificate.subtitle}
</p>
</div>

<p style={styles.description}>
{certificate.description}
</p>

{showImage ? (
<div style={styles.imageFrame}>
<img
src={certificate.image}
alt={certificate.title}
style={styles.image}
onError={() => setImageFailed(true)}
/>
</div>
) : (
<div style={styles.comingSoon}>
<h3 style={styles.comingSoonTitle}>
Certificate Coming Soon
</h3>

<p style={styles.comingSoonText}>
This certificate or supporting document will appear here once it
is uploaded by the AL-MIZAN team.
</p>
</div>
)}

<div style={styles.footer}>
<button style={styles.footerBtn} onClick={onClose}>
Close
</button>
</div>
</div>
</div>
</>
);
}

const styles = {
overlay: {
position: "fixed",
inset: 0,
background: "rgba(0,0,0,.76)",
zIndex: 3000,
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: 20,
},

modal: {
background: "white",
maxWidth: 900,
width: "100%",
borderRadius: 24,
padding: 32,
position: "relative",
border: `4px solid ${gold}`,
boxShadow: "0 20px 70px rgba(0,0,0,.45)",
},

close: {
position: "absolute",
right: 16,
top: 14,
background: green,
color: "white",
border: "none",
borderRadius: "50%",
width: 40,
height: 40,
fontSize: 26,
cursor: "pointer",
},

header: {
textAlign: "center",
marginBottom: 18,
},

label: {
display: "inline-block",
background: green,
color: gold,
border: `2px solid ${gold}`,
borderRadius: 50,
padding: "8px 18px",
fontWeight: "900",
letterSpacing: 1,
marginBottom: 14,
},

title: {
color: green,
fontSize: 34,
margin: "0 0 8px",
fontWeight: "900",
},

subtitle: {
color: "#9b1c1c",
fontSize: 18,
fontWeight: "900",
margin: 0,
},

description: {
color: "#333",
lineHeight: 1.75,
fontSize: 17,
textAlign: "center",
maxWidth: 760,
margin: "0 auto 24px",
},

imageFrame: {
background: "#fff6dc",
border: `2px solid ${gold}`,
borderRadius: 18,
padding: 14,
},

image: {
width: "100%",
maxHeight: 650,
objectFit: "contain",
borderRadius: 14,
display: "block",
background: "white",
},

comingSoon: {
background: "#fff6dc",
border: `2px dashed ${gold}`,
borderRadius: 18,
padding: "45px 22px",
textAlign: "center",
},

comingSoonTitle: {
color: green,
fontSize: 26,
margin: "0 0 10px",
},

comingSoonText: {
color: "#444",
lineHeight: 1.7,
maxWidth: 560,
margin: "0 auto",
},

footer: {
display: "flex",
justifyContent: "center",
marginTop: 24,
},

footerBtn: {
background: green,
color: "white",
border: "none",
borderRadius: 12,
padding: "13px 28px",
fontWeight: "900",
cursor: "pointer",
},
};
