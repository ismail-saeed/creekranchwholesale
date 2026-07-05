import React, { useState } from "react";

import certificates from "./certificatesData";
import TrustCard from "./TrustCard";
import CertificateModal from "./CertificateModal";

import { green, gold } from "../styles";

export default function TrustBadges() {
const [selected, setSelected] = useState(null);

return (
<>
<section style={styles.section}>
<div style={styles.header}>
<div style={styles.smallLabel}>AL-MIZAN QUALITY STANDARD</div>

<h2 style={styles.title}>Certifications & Trust</h2>

<p style={styles.subtitle}>
Our certifications reflect our commitment to halal integrity, food
safety, professional processing, and customer confidence.
</p>
</div>

<div style={styles.grid}>
{certificates.map((certificate) => (
<TrustCard
key={certificate.id}
certificate={certificate}
onOpen={setSelected}
/>
))}
</div>
</section>

<CertificateModal
certificate={selected}
onClose={() => setSelected(null)}
/>
</>
);
}

const styles = {
section: {
maxWidth: 1200,
margin: "70px auto",
padding: "0 22px",
},

header: {
textAlign: "center",
maxWidth: 850,
margin: "0 auto 42px",
},

smallLabel: {
color: gold,
fontWeight: "900",
letterSpacing: 2,
marginBottom: 10,
},

title: {
color: green,
fontSize: 42,
margin: "0 0 14px",
fontWeight: "900",
},

subtitle: {
color: "#4b4b4b",
fontSize: 18,
lineHeight: 1.7,
margin: 0,
},

grid: {
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
gap: 22,
},
};
