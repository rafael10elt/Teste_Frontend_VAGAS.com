
//A Função countUp serve para adicionar a quantidade de sticker.

function countUp() { 
  var num = parseInt(document.getElementById('valor').value);
  if (num >= 0) {
    num += 1;
  } else {
    num = 0;
  }
  document.getElementById('valor').value = num;  
  // console.log(num);
}

//A Função countDown serve para reduzir a quantidade de sticker.
function countDown() {
  var num = parseInt(document.getElementById('valor').value);
  if (num > 0) {
    num -= 1;
  } else {
    num = 0;
  }
  document.getElementById('valor').value = num;  
  // console.log(num);
}

//A Função validarForm serve para verificar se foi marcado algum tipo de sticker e se a quantidade de sticker é maior do que ZERO, caso ambas as situações estejam satisfeitas, o pedido é "Enviado" e os campos resetados.
function validarForm(){

  if (!(document.getElementById('cbReact').checked) && !(document.getElementById('cbVue').checked) && !(document.getElementById('cbAngular').checked)){
    alert("Por favor, marque no mínimo um tipo de sticker!");
  }else if (document.getElementById('valor').value == 0 ){
    alert("Por favor, indique a quantidade de stickers!")
  }
  else{
    //  Enviar pedido e limpar campos.
    alert("Pedido realizado com sucesso,Obrigado!")
    document.getElementById('valor').value = 0;
    document.getElementById('texto').value = " ";
    document.getElementById('cbReact').checked = false;
    document.getElementById('cbVue').checked = false;
    document.getElementById('cbAngular').checked = false;

  }
}
