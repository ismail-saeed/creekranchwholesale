import React from "react";
import { gold } from "../styles";

export default function TrustCard({ certificate, onOpen }) {
return (
<>
<style>{`
.trust-card {
transition: all .35s ease;
}

.trust-card:hover {
transform: translateY(-8px);
box-shadow: 0 20px 45px rgba(0,0,0,.28);
}

.trust-image {
transition: all .35s ease;
}

.trust-card:hover .trust-image {
transform: scale(1.03);
}

@media (max-width: 768px) {
.trust-card {
border-radius: 20px !important;
}
}
`}</style>

<article
className="trust-card"
style={styles.card}
onClick={() => onOpen(certificate)}
>
<img
className="trust-image"
src={certificate.background}
alt={certificate.title}
style={styles.image}
/>
</article>
</>
);
}

const styles = {
card: {
width: "100%",
background: "#f8f1d9",
border: `2px solid ${gold}`,
borderRadius: 22,
overflow: "hidden",
cursor: "pointer",
boxShadow: "0 12px 28px rgba(0,0,0,.14)",
},

image: {
width: "100%",
display: "block",
},
};
