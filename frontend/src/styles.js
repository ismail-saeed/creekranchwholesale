const green = "#062b18";
const gold = "#d5a642";
const cream = "#fff6dc";

export const styles = {

page:{
margin:0,
fontFamily:"Arial, sans-serif",
background:"#f5edd6",
color:"#102818",
minHeight:"100vh"
},

section:{
maxWidth:1200,
margin:"40px auto",
padding:25
},

card:{
maxWidth:1000,
margin:"40px auto",
padding:30,
background:cream,
borderRadius:20,
border:`2px solid ${gold}`,
boxShadow:"0 8px 25px rgba(0,0,0,.15)"
},

title:{
fontSize:34,
color:green,
marginBottom:20,
textAlign:"center"
},

text:{
fontSize:18,
lineHeight:1.7,
color:"#333"
},

goldBtn:{
background:gold,
color:green,
border:"none",
padding:"15px 30px",
borderRadius:12,
cursor:"pointer",
fontWeight:"bold",
fontSize:17,
transition:"0.3s"
},

input:{
width:"100%",
padding:14,
marginBottom:18,
borderRadius:10,
border:"1px solid #ccc",
fontSize:16,
boxSizing:"border-box"
},

textarea:{
width:"100%",
padding:14,
minHeight:120,
marginBottom:18,
borderRadius:10,
border:"1px solid #ccc",
fontSize:16,
boxSizing:"border-box"
},

label:{
display:"block",
fontWeight:"bold",
marginBottom:8,
color:green
},

summaryBox:{
background:"#fff",
padding:18,
borderRadius:12,
border:`2px solid ${gold}`,
marginBottom:20
},

table:{
width:"100%",
borderCollapse:"collapse",
background:"white"
},

th:{
background:green,
color:"white",
padding:14,
textAlign:"left"
},

td:{
padding:12,
borderBottom:"1px solid #ddd"
},

smallInput:{
width:80,
padding:8,
borderRadius:8
},

saveBtn:{
background:green,
color:"white",
padding:"10px 18px",
border:"none",
borderRadius:8,
cursor:"pointer"
}

};

export {green,gold,cream};
