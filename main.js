//TASK1//
function getFirst(a,b) {
a=a.slice(0, b);

return a;
}
console.log(getFirst([1, 73, 99, 20],3))

//TASK2//
function join(a,b){
  a=  a.join( b );

    return a;
}
console.log(join([1, 73, 99, 20], "/"))


//TASK3//

var str = 'saLamNecesen';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));


//TASK4//
array=[]
function clear(a){
    let array=[...new Set(a)]
    return array;
}
console.log(clear([0, 1, false, 2, undefined, '', 3, null]))




//TASK5//
let array2=[]
function clearDuplicate(a){
for (let i = 0; i < a.length; i++) {
        if(!array2.includes(a[i])){
          array2.push(a[i])
        }
    }
    return array2;
    }
console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));


//TASK6//

let array1=[]
function isEqual(a,b){
for (let i = 0; i < b.length; i++) {
   
        if(!a.includes(b[i]))
        array1.push(b[i])
        // console.log(false)
        
    }
    if(a.values==b.values){
    console.log(true)}
    else{
        // console.log(false)
    }
    return array1
    }

 
    
console.log(isEqual([1, 2, false], [1, 8,9,2,false]));


//TASK7//
function task7(a,b){
    let sum=-1
for (let i = 0; i < a.length; i++) {
   
    if(a[i]==b){
        if(sum==-1){
            sum=i;
        }
        else{
            sum+=i;
        }
    }
    
}
return sum;
}
console.log(task7("salam","a"))


//TASK9//

function task9(a,b,c){
    for (let i = 0; i < b.length; i++) {
        a.push(b[i])
        
    }
    a=  a.join( c );
    return a;
}
console.log(task9([1, 73, 99, 20],[9, 73, 99, 27], "$"))
