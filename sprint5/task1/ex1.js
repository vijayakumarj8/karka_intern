var arr=[1,2,3,4,5];

function traditional_square(inputarr){
    var arr2=[];
    for(i=0;i<inputarr.length;i++){
        a=inputarr[i]*inputarr[i];
        arr2.push(a);
    }
    console.log(arr2)
}

 arrow_square =(input_arrow_arr)=>{
    var arrow_arr2=[];
    for(i=0;i<input_arrow_arr.length;i++){
        arrow_arr2.push(input_arrow_arr[i]*input_arrow_arr[i])
    }
    console.log(arrow_arr2)

 }
 traditional_square(arr);
arrow_square(arr);
