function array(data){
    if(Array.isArray(data))
        return true;
    else
        return false;
    }
console.log(array([1,2,3]));
console.log(array('hello'));