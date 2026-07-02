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
["about", "About Us"],
["order", "Order"],
["products", "Products"],
["services", "Services"],
["login", "Owner Access"],
];

return (
<>
<style>{`
.nav-header {
background: ${green};
border-bottom: 3px solid ${gold};
position: sticky;
top: 0;
z-index: 1000;
width: 100%;
}

.nav-inner {
max-width: 1250px;
margin: 0 auto;
padding: 12px 16px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 15px;
}

.nav-logo-area {
display: flex;
align-items: center;
gap: 12px;
cursor: pointer;
}

.nav-logo {
width: 58px;
height: 58px;
object-fit: contain;
background: white;
}

.nav-brand {
color: white;
font-size: 24px;
font-weight: 900;
line-height: 1;
}

.nav-sub {
color: ${gold};
font-size: 14px;
font-weight: bold;
letter-spacing: 2px;
margin-top: 5px;
}

.desktop-menu {
display: flex;
align-items: center;
gap: 24px;
}

.nav-btn {
background: transparent;
color: white;
border: none;
padding: 8px 0;
font-weight: 900;
font-size: 15px;
cursor: pointer;
white-space: nowrap;
}

.nav-btn.active {
color: ${gold};
border-bottom: 3px solid ${gold};
}

.scan-btn {
background: ${gold};
color: ${green};
border: none;
border-radius: 8px;
padding: 12px 18px;
font-weight: 900;
cursor: pointer;
white-space: nowrap;
}

.menu-btn {
display: none;
background: ${gold};
color: ${green};
border: none;
border-radius: 8px;
font-size: 28px;
padding: 6px 12px;
cursor: pointer;
}

.mobile-menu {
display: none;
}

@media (max-width: 900px) {
.desktop-menu {
display: none;
}

.menu-btn {
display: block;
}

.mobile-menu {
display: flex;
flex-direction: column;
gap: 8px;
padding: 14px;
background: #08351f;
}

.mobile-btn {
background: transparent;
color: white;
border: none;
border-bottom: 1px solid rgba(213,166,66,.35);
padding: 13px;
text-align: left;
font-size: 17px;
font-weight: 900;
}

.mobile-scan {
background: ${gold};
color: ${green};
border: none;
border-radius: 8px;
padding: 14px;
font-weight: 900;
font-size: 17px;
}

.nav-logo {
width: 60px;
height: 60px;
}

.nav-brand {
font-size: 22px;
}

.nav-sub {
font-size: 13px;
}
}
`}</style>

<header className="nav-header">
<div className="nav-inner">
<div className="nav-logo-area" onClick={() => goTo("home")}>
<img className="nav-logo" src="/images/Logo.jpg" alt="AL-MIZAN" />
<div>
<div className="nav-brand">AL-MIZAN</div>
<div className="nav-sub">HALAL MEAT</div>
</div>
</div>

<nav className="desktop-menu">
{items.map(([page, title]) => (
<button
key={page}
onClick={() => goTo(page)}
className={`nav-btn ${view === page ? "active" : ""}`}
>
{title}
</button>
))}

<button onClick={onScan} className="scan-btn">
⛶ Scan to Order
</button>
</nav>

<button className="menu-btn" onClick={() => setOpen(!open)}>
☰
</button>
</div>

{open && (
<div className="mobile-menu">
{items.map(([page, title]) => (
<button
key={page}
onClick={() => goTo(page)}
className="mobile-btn"
>
{title}
</button>
))}

<button onClick={onScan} className="mobile-scan">
⛶ Scan to Order
</button>
</div>
)}
</header>
</>
);
}