var d=new Date("1/14/2001");var m=Date.now()-d.getTime();var a=new Date(m);var y=a.getUTCFullYear();var v=Math.abs(y-1970);document.getElementById("age").innerHTML=v;