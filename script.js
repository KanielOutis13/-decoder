

function encryption () {

  //Declarando variaveis de captação de tecla e inputs.
  var input = document.querySelector('.input1').value.split('');
  const mensage = document.querySelector('.result');
 
// regra da criptografia
  for(i = 0; i <= input.length; i++){
    if(input[i] == 'e'){
      input[i] = 'enter'  
    }
    if (input[i]== 'i'){
      input[i] = 'imes';
    }
    if(input[i] == 'a'){
      input[i] = 'ai'
    }
    if(input[i]=='o'){
      input[i] = 'ober'
    }
    if(input[i] == 'u'){
      input[i] ='ufat'
    }
  }

  //inserindo o valor da critografia no input do resultado.
  mensage.value = input.join('')

  console.log(input);
}

function decryption () {

  var input = document.querySelector('.input1').value.split('');
  const mensage = document.querySelector('.result'); 
  var length = input.length;

  for (var i = 0; i < length; i++){
    if(input !=' '){
    if(input[i] == 'e' && input[i + 1] == 'n' && input[i + 2] == 't' && input[i + 3] == 'e' && input[i + 4] == 'r'){
      input[i] = 'e';
      input.splice(i + 1, 4)
    }if(input[i]== 'i' && input[i +1] == 'm' && input[i + 2] == 'e' && input[i + 3] == 's'){
          input[i] = 'i'
          input.splice(i + 1, 3)
    }if(input[i]== 'a' && input[i + 1] == 'i'){
      input[i] = 'a'
      input.splice(i+1,2)
    }if(input[i]== 'o' && input[i+1] == 'b' && input[i + 2]== 'e' && input[i+3] == 'r'){
      input[i] = 'o'
      input.splice(i + 1, 3)
    }if(input[i]== 'u' && input[i+1] == 'f' && input[i + 2]== 'a' && input[i+3] == 't'){
      input[i] = 'u'
      input.splice(i + 1, 3)
    }
  }

  
    console.log(input)
    mensage.value = input.join('')



  }


  // teste













}









