//Escolher 
    var posicaoAleatoria = 1 + Math.floor(Math.random() * 5);
	

    var parte1 = posicaoAleatoria;
    var parte2 = parte1+1;
    var parte3 = parte2 +1;

var jogada;
var atingidas = 0;
var totalJogadas = 0;

var foiAfundado = false;

//implementação do ciclo até o navio ser afundado
while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 30:");

   //definição das hipóteses de jogo
   if (jogada < 1 || jogada > 30) {

		alert("Jogada inválida. Tenta de novo!");

   } else {

      totalJogadas = totalJogadas + 1;
//se o jogador acertar nas respostas certas, ociclo é interrompido e o utilizador é informado de que afundou o navio
      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;
		 //quando o número de respotas certas for igual a 3 on ciclo termina
         if (atingidas == 3) {

            foiAfundado = true;

			//aviso ao utlizador de que afundou o navio e ganhou o jogo
            alert("Navio totalmente afundado!");

         }

      } else {

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " +
							"o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);
