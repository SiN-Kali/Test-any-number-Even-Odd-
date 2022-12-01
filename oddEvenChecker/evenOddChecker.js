function isOdd(number) {

    let num = document.getElementById("number").value; 

    if (num % 2 === 0)  {
       alert(`This number : ${num} is an even number`); 
       return (false);
     } else {
       alert(`This number : ${num} is an odd number`);
       return (true);
    };
   };
