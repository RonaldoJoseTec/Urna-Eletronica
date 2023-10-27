function dataFim (){
    const data = new Date();
    return data ;
}

function urnaeletronica() {
    //zona das variáveis
    let opcaoDeVoto = 0;
    let contadorDeVotos = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let candidato4 = 0;
    let candidato5 = 0;
    let branco = 0;
    let nulo = 0;
    let senha;
    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;
    let encerrarVotacao;
    let confirmacaoDeVoto = false;
    //const AudioConfirmacao = Audio();
    const dataInicio = new Date();
    const matrizCandidato = [
        ['Nº 17','Candidato: Alfa'],
        ['Nº 23', 'Candidato: Beta'],
        ['Nº 35', 'Candidato: Charlie'],
        ['Nº 41', 'Candidato: Dom'],
        ['Nº 52', 'Candidato: Esquiel']
    ];
    let nome1 = matrizCandidato[0] ;
    let nome2 = matrizCandidato[1] ;
    let nome3 = matrizCandidato[2] ;
    let nome4 = matrizCandidato[3] ;
    let nome5 = matrizCandidato[4] ;
      
    console.log('Iniciando o programa às: ' + dataInicio.toLocaleString());

   // console.clear();
    console.log(' *** Iniciando as configurações da URNA *** ' );

    senha = parseInt(prompt('Digite a senha de segurança'));

    
    do {
        //for (i=0; i<=4; i++) {
            //for (j=0; j<=4; j++) {}
                //console.log('Candidaturas: ' + matrizCandidato[i]);
           // }
        
        //nome1 = prompt('Digite o nome do candidato 1');
        //nome2 = prompt('Digite o nome do candidato 2');
        //nome3 = prompt('Digite o nome do candidato 3');

        console.log('>>> Nomes dos Candidatos <<<');
        console.log('|1| Candidato 1: ' + nome1);
        console.log('|2| Candidato 2: ' + nome2);
        console.log('|3| Candidato 3: ' + nome3);
        console.log('|4| Candidato 4: ' + nome4);
        console.log('|5| Candidato 5: ' + nome5);

    } while (!confirm('Se os nomes dos candidatos estiverem corretos, clique em "Ok" para iniciar a votação ou "Cancelar" para corrigir as candidaturas'));

    do {
        opcaoDeVoto = parseInt(prompt('digite sua opção \n'
            + '|1| ---  ' + nome1 + '\n'
            + '|2| ---  ' + nome2 + '\n'
            + '|3| ---  ' + nome3 + '\n'
            + '|4| ---  ' + nome4 + '\n'
            + '|5| ---  ' + nome5 + '\n'
            + '|8| ---  Branco \n'
        ));

        console.log('linha de instrução');
        contadorDeVotos++;

        if (opcaoDeVoto === 1) {
            confirmacaoDeVoto = confirm('Confirme seu voto em: ' + nome1);
            if (confirmacaoDeVoto) {
            candidato1++;
            console.log('você votou no candidato1: ' +nome1);
            alert('voto computado com sucesso para ' +nome1);
            } else {
                contadorDeVotos--;
            }

        } else if (opcaoDeVoto === 2) {
            confirmacaoDeVoto = confirm('Confirme seu voto em: ' + nome2);
            if (confirmacaoDeVoto) {
            candidato2++;
            console.log('você votou no candidato2: ' +nome2);
            alert('voto computado com sucesso para ' +nome2);
            } else {
                contadorDeVotos--;
            }

        } else if (opcaoDeVoto === 3) {
            confirmacaoDeVoto = confirm('Confirme seu voto em: ' + nome3);
            if (confirmacaoDeVoto) {
            candidato3++;
            console.log('você votou no candidato3: ' +nome3);
            alert('voto computado com sucesso para ' +nome3);
            } else {
                contadorDeVotos--;
            }
        } else if (opcaoDeVoto === 4) {
            confirmacaoDeVoto = confirm('Confirme seu voto em: ' + nome4);
            if (confirmacaoDeVoto) {
            candidato4++;
            console.log('você votou no candidato3: ' +nome4);
            alert('voto computado com sucesso para ' +nome4);
            } else {
                contadorDeVotos--;
            }
        } else if (opcaoDeVoto === 5) {
            confirmacaoDeVoto = confirm('Confirme seu voto em: ' + nome5);
            if (confirmacaoDeVoto) {
            candidato5++
            console.log('você votou no candidato3: ' +nome5);
            alert('voto computado com sucesso para ' +nome5);
            } else {
                contadorDeVotos--;
            }

        } else if (opcaoDeVoto === 8) {
            confirmacaoDeVoto = confirm('Confirme seu voto Branco');
            if (confirmacaoDeVoto) {
            branco++;
             console.log('você votou em branco');
             alert('voto computado com sucesso !');
            } else {
                contadorDeVotos--;
            }

        } else if (opcaoDeVoto === 0) {
            return;
        } else if (opcaoDeVoto === senha) {

            //solicitação para encerrar
            encerrarVotacao = prompt('AVISO: deseja encerrar a votação ? Digite [S] para Sim ou [N] para Não').toUpperCase();

            if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
                alert('Opcão inválida');
            }

            contadorDeVotos--;

        } else {

            if (confirm('ATENÇÃO: o seu voto será ANULADO. Deseja prosseguir?')) {
                nulo++;
            } else {
                contadorDeVotos--;
            }
        }

    } while (encerrarVotacao !== 'S');

    // Saída para o usuário: boletim de urna
    console.clear();
    console.log('Programa iniciado às: ' + dataInicio.toLocaleString());
    console.log('>>> BOLETIM DE URNA <<<');
    console.log('contagem total dos votos', contadorDeVotos);

    // se houver votação
    if (contadorDeVotos > 0) {

        console.log('relação do candidato', nome1, candidato1);
        console.log('percentual de votos do candidato1', ((candidato1 / contadorDeVotos * 100).toFixed(2)) + '%');
        console.log('relação do candidato', nome2, candidato2);
        console.log('percentual de votos do candidato2', ((candidato2 / contadorDeVotos * 100).toFixed(2)) + '%');
        console.log('relação do candidato', nome3, candidato3);
        console.log('percentual de votos do candidato3', ((candidato3 / contadorDeVotos * 100).toFixed(2)) + '%');
        console.log('relação de votos em branco', branco);
        console.log('percentual de votos do candidato4', ((candidato4 / contadorDeVotos * 100).toFixed(2)) + '%');
        console.log('relação do candidato', nome4, candidato4);
        console.log('percentual de votos do candidato5', ((candidato5 / contadorDeVotos * 100).toFixed(2)) + '%');
        console.log('relação do candidato', nome5, candidato5);
        console.log('percentual de votos em branco ', ((branco / contadorDeVotos * 100).toFixed(2)) + '%');
        console.log('relação de votos nulos', nulo);
        console.log('percentual de votos nulos', ((nulo / contadorDeVotos * 100).toFixed(2)) + '%');

        //determinando o ganhador
        if (candidato1 > candidato2 && candidato1 > candidato3 && candidato1 > candidato4 && candidato1 > candidato5) {
            nomeGanhador = nome1;
            votosGanhador = candidato1 + branco;
        } else if (candidato2 > candidato3 && candidato2 > candidato1 && candidato2 > candidato4 && candidato2 > candidato5) {
            nomeGanhador = nome2;
            votosGanhador = candidato2 + branco;
        } else if (candidato3 > candidato2 && candidato3 > candidato1 && candidato3 > candidato4 && candidato3 > candidato5) {
            nomeGanhador = nome3;
            votosGanhador = candidato3 + branco;
        } else if (candidato4 > candidato2 && candidato4 > candidato1 && candidato4 > candidato3 && candidato4 > candidato5) {
            nomeGanhador = nome4;
            votosGanhador = candidato3 + branco;
        } else if (candidato5 > candidato2 && candidato5 > candidato1 && candidato5 > candidato4 && candidato5 > candidato3) {
            nomeGanhador = nome5;
            votosGanhador = candidato3 + branco;
        } else {
            ganhador = false;
        }

        //declarando o ganhador
        if (ganhador) {
            console.log('O ganhador desta urna foi ' + nomeGanhador + ' com ' + votosGanhador + ' votos (' + (votosGanhador / contadorDeVotos * 100).toFixed(2) + '%)');
        } else {
            console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos)');
        }

    } else {
        console.log('Não houve votação  nesta urna');
    }

    console.log('Apuração total das candidaturas');
    console.log('total de votos para ', nome1[1], candidato1);
    console.log('total de votos para ', nome2[1], candidato2);
    console.log('total de votos para ', nome3[1], candidato3);
    console.log('total de votos para ', nome4[1], candidato4);
    console.log('total de votos para ', nome5[1], candidato5);
    console.log('total de votos brancos', branco);
    console.log('total de votos nulos ', nulo);

    console.log('Finalizando o programa às: ' + dataFim().toLocaleString());
    
}
urnaeletronica()