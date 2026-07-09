import React from "react";

export default function WhatsAppButton() {
const phone = "19728343147"; // ضع رقم الواتساب هنا
const message =
"Hello AL-MIZAN, I'm interested in your halal meat products.";

const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

return (
<>
<style>{`
.whatsapp-float{
position:fixed;
right:22px;
bottom:22px;
z-index:9999;
display:flex;
align-items:center;
gap:10px;
background:#25D366;
color:white;
padding:14px 18px;
border-radius:50px;
text-decoration:none;
font-weight:800;
font-size:17px;
box-shadow:0 12px 30px rgba(0,0,0,.28);
transition:.3s;
}

.whatsapp-float:hover{
transform:translateY(-4px) scale(1.05);
box-shadow:0 18px 35px rgba(0,0,0,.35);
}

.whatsapp-icon{
width:28px;
height:28px;
fill:white;
}

@media(max-width:768px){

.whatsapp-float{
right:16px;
bottom:18px;
padding:14px;
border-radius:50%;
}

.whatsapp-text{
display:none;
}

.whatsapp-icon{
width:30px;
height:30px;
}
}
`}</style>

<a
href={url}
target="_blank"
rel="noopener noreferrer"
className="whatsapp-float"
>
<svg
className="whatsapp-icon"
viewBox="0 0 32 32"
>
<path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L.3 31.7l8.1-2.1c2.3 1.2 4.9 1.8 7.6 1.8 8.6 0 15.6-6.9 15.6-15.5C31.6 7.3 24.6.4 16 .4zm0 28.2c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2-1.9-4.3-1.9-6.7C3.1 8.8 8.8 3.1 16 3.1c7.2 0 12.9 5.7 12.9 12.8S23.2 28.6 16 28.6zm7.1-9.7c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.9.2-.2.3-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.5-.5-2.8-1.7-1-1-1.7-2.1-1.9-2.5-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.3 3.6c.2.2 2.4 3.8 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.5.2 2 .1.6-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"/>
</svg>

<span className="whatsapp-text">
WhatsApp
</span>
</a>
</>
);
}