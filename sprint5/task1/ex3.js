const students=[
    {name:'Alice',score:85},
    {name:'Bob',score:92},
    {name:'Charlie',score:78}
  ];
  function findd(students){
  const targetName='Bob';
  const result=students.find(studentttt=>studentttt.name===targetName);
  if(result){
    console.log(result.score);  
  }
  else{
    console.log("Student not found");
  }
}
findd(students);
  