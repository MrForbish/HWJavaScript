let input = document.getElementById("inp");

input.onclick = () => {
    input.value = "+";
}

let countLength = 0;

input.onkeydown = () => {
    let currentLength = input.value.length;
    
    if (currentLength < countLength){
      countLength--;
      return;
      }
    
    if (currentLength == 2) 
    	input.value = input.value + "(";
      
    if (currentLength == 6)
    	input.value = input.value + ")-";
      
     if (currentLength == 11)
    	input.value = input.value + "-"; 
      
     if (currentLength == 14)
    	input.value = input.value + "-";  
      
     if (currentLength > 16)
    	input.value = input.value.substring(0, input.value.length - 1);
      
     countLength++;
}