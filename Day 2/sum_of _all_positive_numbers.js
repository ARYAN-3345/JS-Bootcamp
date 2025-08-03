a=[3,4,-5,-6,7]
console.log(a.reduce((a,x)=>{if(x>=0){return a+x}else return a}));