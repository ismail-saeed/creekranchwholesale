import React, { useState } from "react";
import { green, gold } from "../styles";

export default function Navbar({ view, setView, onScan }) {
const [open, setOpen] = useState(false);

const goTo = (page) => {
setView(page);
setOpen(false);
window.scrollTo({ top: 0, behavior: "smooth" });
};

const navItems = [
{ title: "Home", page: "home" },
{ title: "Order", page: "order" },
{ title: "Products", page: "products" },
{ title: "Services", page: "services" },
{ title: "Owner Access", page: "login" },
];

return (
<header style={styles.header}>
<div style={styles.inner}>
<div style={styles.logoArea} onClick={() => goTo("home")}>
<img
src="/images/Logo.jpg"
alt="AL-MIZAN Halal Meat"
style={styles.logo}
/>

<div>
<div style={styles.brand}>AL-MIZAN</div>
<div style={styles.subBrand}>HALAL MEAT</div>
</div>
</div>

<nav style={styles.desktopMenu}>
{navItems.map((item) => (
<button
key={item.page}
onClick={() => goTo(item.page)}
style={{
...styles.navButton,
...(view === item.page ? styles.activeButton : {}),
}}
>
{item.title}
</button>
))}

<button onClick={onScan} style={styles.scanButton}>
⛶ Scan to Order
</button>
</nav>

<button style={styles.menuButton} onClick={() => setOpen(!open)}>
☰
</button>
</div>

{open && (
<div style={styles.mobileMenu}>
{navItems.map((item) => (
<button
key={item.page}
onClick={() => goTo(item.page)}
style={styles.mobileButton}
>
{item.title}
</button>
))}

<button onClick={onScan} style={styles.mobileScan}>
⛶ Scan to Order
</button>
</div>
)}
</header>
);
}

const styles = {
header: {
position: "sticky",
top: 0,
zIndex: 1000,
background: green,
borderBottom: `2px solid ${gold}`,
},

inner: {
maxWidth: 1250,
margin: "0 auto",
padding: "12px 22px",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
gap: 18,
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
},

brand: {
color: "#fff",
fontSize: 22,
fontWeight: "900",
letterSpacing: 1.5,
lineHeight: 1,
},

subBrand: {
color: gold,
fontSize: 13,
fontWeight: "bold",
letterSpacing: 2,
marginTop: 5,
},

desktopMenu: {
display: "flex",
alignItems: "center",
gap: 34,
justifyContent: "flex-end",
},

navButton: {
background: "transparent",
color: "#fff",
border: "none",
borderRadius: 0,
padding: "8px 0",
fontWeight: "800",
cursor: "pointer",
fontSize: 16,
},

activeButton: {
color: gold,
borderBottom: `3px solid ${gold}`,
},

scanButton: {
background: gold,
color: green,
border: "none",
borderRadius: 8,
padding: "12px 22px",
fontWeight: "900",
cursor: "pointer",
fontSize: 16,
},

menuButton: {
background: "transparent",
color: "#fff",
border: "none",
fontSize: 34,
fontWeight: "bold",
cursor: "pointer",
},

mobileMenu: {
background: "#08351f",
padding: 16,
display: "flex",
flexDirection: "column",
gap: 10,
borderTop: `1px solid ${gold}`,
},

mobileButton: {
background: "transparent",
color: "#fff",
border: "none",
borderBottom: `1px solid rgba(213,166,66,.4)`,
padding: "13px",
fontWeight: "900",
fontSize: 16,
textAlign: "left",
},

mobileScan: {
background: gold,
color: green,
border: "none",
borderRadius: 8,
padding: "13px",
fontWeight: "900",
fontSize: 16,
},
};