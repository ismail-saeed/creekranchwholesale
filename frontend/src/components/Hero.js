import React from "react";

export default function Hero() {
return (
<section style={styles.hero}>
<img
src="/images/p1.png"
alt="AL-MIZAN Halal Meat"
style={styles.image}
/>
</section>
);
}

const styles = {
hero: {
width: "100%",
background: "#f8f6ef",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "0",
margin: "0",
},

image: {
width: "100%",
maxWidth: "1600px",
display: "block",
objectFit: "cover",
},
};
