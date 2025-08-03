let array = [];
let sum=0;
for(let i =0 ; i<100; i++)
{
    array[i]= i+1
}
for(let i=0; i<100; i++)
{
    let triple = array[i]*3;
    if (triple % 5 == 0)
    {
        sum = sum + triple;
    }
}
console.log(`Sum = ${sum}`);


// for(let i =0; i<100; i++)
// {
//     array[i]=array[i]*3;
// }
// for(let i =0; i<100; i++)
// {
//     if (array[i]%5==0)
//     {
//         sum = sum+array[i];
//     }
// }
// console.log(`Sum = ${sum}`);

// pro way:
// for(let i =1; i<=100; i++)a.push(i)//Suppose array hai [2,3,4,5,6]
// array.map(x=>x*3).filter(x=>x%5==0).reduce((a,x)=>a+x)// map function filter mein x*3 ke values array mein store karta hai and the reduce mein store karta hai divisible by 5 ke values
// a accumulator hota hai and by default 0 hai
// function abc(x){return x*3}