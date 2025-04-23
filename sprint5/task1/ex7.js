function findfirstandlastindex(arr,target){
    const first=arr.indexOf(target);
    const last=arr.lastIndexOf(target);
    return{firstindex:first,lastindex:last};
  }
  const numbers=[1,2,3,2,4,2,5];
  const result=findfirstandlastindex(numbers,2);
  console.log(result); 
  