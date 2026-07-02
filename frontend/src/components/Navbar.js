import React, { useState } from "react";
import { green, gold } from "../styles";

export default function Navbar({ view, setView, onScan }) {
const [open, setOpen] = useState(false);

const goTo = (page) => {
setView(page);
setOpen(false);
window.scrollTo({ top: 0, behavior: "smooth" });
};

const items = [
["home", "Home"],
["order", "Order"],
["products", "Products"],
["services", "Services"],
["login", "Owner Access"],
];

return (
<>
<style>{`
* { box-sizing: border-box; }
body { margin: 0; overflow-x: hidden; }

.desktop-menu { display: flex; }
.menu-btn { display: none; }

@media (max-width: 768px) {
.desktop-menu { display: none !important; }
.menu-btn { display: block !important; }
.brand-text { font-size: 22px !important; }
.sub-brand { font-size: 14px !important; }
.logo-img { width: 70px !important; height: 70px !important; }
}
`}</style>

<header style={styles.header}>
<div style={styles.inner}>
<div style={styles.logoArea} onClick={() => goTo("home")}>
<img
className="logo-img"
src="/images/Logo.jpg"
alt="AL-MIZAN"
style={styles.logo}
/>

<div>
<div className="brand-text" style={styles.brand}>AL-MIZAN</div>
<div className="sub-brand" style={styles.subBrand}>HALAL MEAT</div>
</div>
</div>

<nav className="desktop-menu" style={styles.desktopMenu}>
{items.map(([page, title]) => (
<button
key={page}
onClick={() => goTo(page)}
style={{
...styles.navBtn,
...(view === page ? styles.active : {}),
}}
>
{title}
</button>
))}

<button onClick={onScan} style={styles.scanBtn}>
⛶ Scan to Order
</button>
</nav>

<button
className="menu-btn"
style={styles.menuBtn}
onClick={() => setOpen(!open)}
>
☰
</button>
</div>

{open && (
<div style={styles.mobileMenu}>
{items.map(([page, title]) => (
<button key={page} onClick={() => goTo(page)} style={styles.mobileBtn}>
{title}
</button>
))}

<button onClick={onScan} style={styles.mobileScan}>
⛶ Scan to Order
</button>
</div>
)}
</header>
</>
);
}

const styles = {
header: {
background: green,
borderBottom: `3px solid ${gold}`,
position: "sticky",
top: 0,
zIndex: 1000,
width: "100%",
overflowX: "hidden",
},

inner: {
maxWidth: 1250,
margin: "0 auto",
padding: "12px 16px",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
width: "100%",
},

logoArea: {
display: "flex",
alignItems: "center",
gap: 12,
cursor: "pointer",
},

logo: {
width: 58,
height: 58,
objectFit: "contain",
background: "white",
},

brand: {
color: "white",
fontSize: 24,
fontWeight: "900",
lineHeight: 1,
},

subBrand: {
color: gold,
fontSize: 14,
fontWeight: "bold",
letterSpacing: 2,
marginTop: 5,
},

desktopMenu: {
alignItems: "center",
gap: 28,
},

navBtn: {
background: "transparent",
color: "white",
border: "none",
padding: "8px 0",
fontWeight: "900",
fontSize: 15,
cursor: "pointer",
},

active: {
color: gold,
borderBottom: `3px solid ${gold}`,
},

scanBtn: {
background: gold,
color: green,
border: "none",
borderRadius: 8,
padding: "12px 22px",
fontWeight: "900",
cursor: "pointer",
},

menuBtn: {
background: gold,
color: green,
border: "none",
borderRadius: 8,
fontSize: 28,
padding: "6px 12px",
cursor: "pointer",
},

mobileMenu: {
display: "flex",
flexDirection: "column",
gap: 8,
padding: 14,
background: "#08351f",
},

mobileBtn: {
background: "transparent",
color: "white",
border: "none",
borderBottom: `1px solid rgba(213,166,66,.35)`,
padding: "13px",
textAlign: "left",
fontSize: 17,
fontWeight: "900",
},

mobileScan: {
background: gold,
color: green,
border: "none",
borderRadius: 8,
padding: "14px",
fontWeight: "900",
fontSize: 17,
},
};
