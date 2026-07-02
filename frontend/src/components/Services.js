import React from "react";
import { green, gold, cream } from "../styles";

const services = [

{
title:"Halal Slaughter",
icon:"🐄",
text:"Hand slaughtered according to Islamic principles."
},

{
title:"Custom Cutting",
icon:"🥩",
text:"Professional cutting exactly as requested."
},

{
title:"Vacuum Packing",
icon:"📦",
text:"Vacuum sealed for freshness and longer shelf life."
},

{
title:"Wholesale Orders",
icon:"🏪",
text:"Restaurants, grocery stores and distributors."
},

{
title:"Cold Storage",
icon:"❄️",
text:"Fresh meat stored at USDA approved temperatures."
},

{
title:"Fast Delivery",
icon:"🚚",
text:"Quick delivery across the Dallas–Fort Worth area."
}

];

export default function Services(){

return(

<section style={styles.section}>

<h2 style={styles.heading}>
Our Services
</h2>

<p style={styles.subHeading}>
Professional Halal Processing Services
</p>

<div style={styles.grid}>

{services.map((item)=>(

<div
key={item.title}
style={styles.card}
>

<div style={styles.icon}>
{item.icon}
</div>

<h3 style={styles.title}>
{item.title}
</h3>

<p style={styles.text}>
{item.text}
</p>

</div>

))}

</div>

</section>

);

}

const styles={

section:{

maxWidth:1200,

margin:"60px auto",

padding:25

},

heading:{

fontSize:38,

textAlign:"center",

color:green,

marginBottom:10

},

subHeading:{

textAlign:"center",

marginBottom:40,

fontSize:18,

color:"#666"

},

grid:{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",

gap:25

},

card:{

background:cream,

border:`2px solid ${gold}`,

borderRadius:20,

padding:30,

textAlign:"center",

boxShadow:"0 8px 20px rgba(0,0,0,.12)",

transition:".35s"

},

icon:{

fontSize:55,

marginBottom:15

},

title:{

color:green,

marginBottom:15

},

text:{

lineHeight:1.6,

color:"#444"

}

};