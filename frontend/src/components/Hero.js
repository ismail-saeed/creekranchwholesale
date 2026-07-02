import React from "react";

export default function Hero({ setView }) {
return (
<>
<style>{`
.hero-bg {
animation: heroZoom 12s ease-in-out infinite alternate;
}

@keyframes heroZoom {
from { transform: scale(1); }
to { transform: scale(1.06); }
}

.hero-content {
animation: fadeUp .9s ease forwards;
}

@keyframes fadeUp {
from { opacity: 0; transform: translateY(30px); }
to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
.hero-section {
min-height: 520px !important;
}

.hero-title {
font-size: 36px !important;
}

.hero-subtitle {
font-size: 19px !important;
}

.hero-buttons {
flex-direction: column !important;
}

.hero-badge-row {
gap: 8px !important;
}
}
`}</style>

<section className="hero-section" style={styles.hero}>
<div className="hero-bg" style={styles.bg}></div>
<div style={styles.darkOverlay}></div>

<div className="hero-content" style={styles.content}>
<h1 className="hero-title" style={styles.title}>
AL-MIZAN HALAL MEAT
</h1>

<p className="hero-subtitle" style={styles.subtitle}>
Premium Halal Meat From Our Ranch To Your Table
</p>

<div className="hero-badge-row" style={styles.badges}>
<span style={styles.badge}>HMS Halal Certified</span>
<span style={styles.badge}>USDA Inspected</span>
<span style={styles.badge}>Fast Delivery</span>
</div>

<div className="hero-buttons" style={styles.buttons}>
<button style={styles.orderBtn} onClick={() => setView("order")}>
Order Now
</button>

<button style={styles.aboutBtn} onClick={() => setView("about")}>
About Us
</button>
</div>
</div>
</section>
</>
);
}

const styles = {
hero: {
position: "relative",
minHeight: "680px",
overflow: "hidden",
display: "flex",
alignItems: "center",
justifyContent: "center",
textAlign: "center",
color: "white",
},

bg: {
position: "absolute",
inset: 0,
backgroundImage: `url("/images/p1.png")`,
backgroundSize: "cover",
backgroundPosition: "center",
zIndex: 1,
},

darkOverlay: {
position: "absolute",
inset: 0,
background:
"linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.35), rgba(0,0,0,.65))",
zIndex: 2,
},

content: {
position: "relative",
zIndex: 3,
maxWidth: "950px",
padding: "30px",
},

title: {
fontSize: "62px",
fontWeight: "900",
letterSpacing: "3px",
marginBottom: "15px",
color: "#d5a642",
textShadow: "0 4px 15px rgba(0,0,0,.6)",
},

subtitle: {
fontSize: "26px",
lineHeight: 1.5,
marginBottom: "28px",
textShadow: "0 3px 12px rgba(0,0,0,.7)",
},

badges: {
display: "flex",
justifyContent: "center",
flexWrap: "wrap",
gap: "12px",
marginBottom: "35px",
},

badge: {
background: "rgba(6,43,24,.88)",
border: "2px solid #d5a642",
borderRadius: "50px",
padding: "10px 18px",
fontWeight: "bold",
color: "white",
},

buttons: {
display: "flex",
justifyContent: "center",
gap: "16px",
flexWrap: "wrap",
},

orderBtn: {
background: "#d5a642",
color: "#062b18",
border: "none",
borderRadius: "12px",
padding: "16px 34px",
fontSize: "18px",
fontWeight: "900",
cursor: "pointer",
},

aboutBtn: {
background: "rgba(255,255,255,.15)",
color: "white",
border: "2px solid #d5a642",
borderRadius: "12px",
padding: "14px 34px",
fontSize: "18px",
fontWeight: "900",
cursor: "pointer",
},
};
