let arr=[1,2,2,3,4,4,5]
 function duplicate(arr)
{
let dup=[...new Set(arr)]
return dup;
}
console.log(duplicate(arr));