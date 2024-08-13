
function number(num) {
  output.value += num;
}

function equals(){
    output.value = eval(output.value)
}

function Clear(){
    output.value="";
}

function removelastItem(){
    output.value = output.value.slice(0, -1);
}

  