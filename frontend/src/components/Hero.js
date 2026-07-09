import React from "react";

export default function Hero({ setView }) {
return (
<>
<style>{`
.hero-bg {
animation: heroZoom 14s ease-in-out infinite alternate;
}

@keyframes heroZoom {
from { transform: scale(1); }
to { transform: scale(1.07); }
}

.hero-content {
animation: fadeUp .9s ease forwards;
}

@keyframes fadeUp {
from { opacity: 0; transform: translateY(35px); }
to { opacity: 1; transform: translateY(0); }
}

.hero-btn {
transition: all .3s ease;
}

.hero-btn:hover {
transform: translateY(-4px) scale(1.04);
box-shadow: 0 14px 30px rgba(0,0,0,.35);
}

@media (max-width: 768px) {
.hero-section {
min-height: 610px !important;
}

.hero-title {
font-size: 42px !important;
letter-spacing: 1px !important;
}

.hero-subtitle {
font-size: 21px !important;
}

.hero-small {
font-size: 16px !important;
}

.hero-buttons {
flex-direction: column !important;
width: 100%;
}

.hero-btn {
width: 100% !important;
}
}
`}</style>

<section className="hero-section" style={styles.hero}>
<div className="hero-bg" style={styles.bg}></div>
<div style={styles.overlay}></div>

<div className="hero-content" style={styles.content}>
<div style={styles.kicker}>From Our Ranch To Your Table</div>

<h1 className="hero-title" style={styles.title}>
AL-MIZAN HALAL MEAT
</h1>

<p className="hero-subtitle" style={styles.subtitle}>
Premium USDA Inspected Halal Processing
</p>

<p className="hero-small" style={styles.smallText}>
Serving restaurants, stores, wholesale partners, and families across DFW.
</p>

<div className="hero-buttons" style={styles.buttons}>
<button
className="hero-btn"
style={styles.orderBtn}
onClick={() => setView("order")}
>
Order Now
</button>

<button
className="hero-btn"
style={styles.secondaryBtn}
onClick={() => setView("about")}
>
About Us
</button>

<button
className="hero-btn"
style={styles.secondaryBtn}
onClick={() => setView("careers")}
>
Careers
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
borderBottom: "5px solid #d5a642",
},

bg: {
position: "absolute",
inset: 0,
backgroundImage: `url("/images/p1.png")`,
backgroundSize: "cover",
backgroundPosition: "center",
zIndex: 1,
},

overlay: {
position: "absolute",
inset: 0,
background:
"linear-gradient(90deg, rgba(6,43,24,.92), rgba(0,0,0,.55), rgba(0,0,0,.35)), linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.65))",
zIndex: 2,
},

content: {
position: "relative",
zIndex: 3,
maxWidth: "1050px",
padding: "35px",
},

kicker: {
color: "#d5a642",
fontSize: "24px",
fontFamily: "Georgia, serif",
fontStyle: "italic",
marginBottom: "12px",
textShadow: "0 3px 12px rgba(0,0,0,.7)",
},

title: {
fontSize: "68px",
fontWeight: "900",
letterSpacing: "3px",
margin: "0 0 16px",
color: "#d5a642",
textShadow: "0 5px 18px rgba(0,0,0,.75)",
},

subtitle: {
fontSize: "28px",
lineHeight: 1.45,
margin: "0 0 12px",
fontWeight: "800",
textShadow: "0 3px 12px rgba(0,0,0,.8)",
},

smallText: {
fontSize: "19px",
lineHeight: 1.6,
maxWidth: "800px",
margin: "0 auto 34px",
color: "#f5f0df",
textShadow: "0 3px 12px rgba(0,0,0,.75)",
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
borderRadius: "14px",
padding: "17px 38px",
fontSize: "18px",
fontWeight: "900",
cursor: "pointer",
},

secondaryBtn: {
background: "rgba(255,255,255,.14)",
color: "white",
border: "2px solid #d5a642",
borderRadius: "14px",
padding: "15px 36px",
fontSize: "18px",
fontWeight: "900",
cursor: "pointer",
backdropFilter: "blur(6px)",
},
};
