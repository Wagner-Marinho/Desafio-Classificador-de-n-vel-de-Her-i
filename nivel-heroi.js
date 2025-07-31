let nomeDoHeroi = " " // Insira o nome do seu Héroi entre aspa
let nivelDoHeroi = " " //Insira o seu level sem aspa.

    if(nivelDoHeroi <= 1000){//Ferro
         console.log("O herói de nome " + nomeDoHeroi + " está no nível de Ferro")
    }
    
    else if(nivelDoHeroi <= 2000){//Bronze
    	console.log("O herói de nome " + nomeDoHeroi + " está no nível de Bronze")
    }
    else if(nivelDoHeroi <= 5000){//Prata
    	console.log("O herói de nome " + nomeDoHeroi + " está no nível de Prata")
    }
    else if(nivelDoHeroi <= 7000){//Ouro
    	console.log("O herói de nome " + nomeDoHeroi + " está no nível de Ouro")
    }
    else if(nivelDoHeroi <= 8000){//Platina
    	console.log("O herói de nome " + nomeDoHeroi + " está no nível de Platina")
    }
    else if(nivelDoHeroi <= 9000){//Ancestral
    	console.log("O herói de nome " + nomeDoHeroi + " está no nível de Ancestral")
    }
    else if(nivelDoHeroi <= 10000){//Imortal
    	console.log("O herói de nome " + nomeDoHeroi + " está no nível de Imortal")
    }
    else if(nivelDoHeroi >= 10001){//Radiante
    	console.log("O herói de nome " + nomeDoHeroi + " está no nível de Radiante")
    }
    else{
    	console.log("O seu héroi " + nomeDoHeroi + " não está na nossa tabela de classificação")
    }
