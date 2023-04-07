const prompt = require("prompt-read")

let cliente = {
    nome:"Eduardo",
    senha: 1234,
    saldo: 4500
}

let i = 1

while (i != 0){

    let login = prompt("Digite sua senha(Digite zero se quiser finalizar): ")

    if (login == 0){
        i = 0
        console.clear()
    }

    if (login == cliente.senha){
    
    console.clear()

    console.log("Bom dia!")
    console.log("")
    console.log("1 - Extrato")
    console.log("2 - Saque")
    console.log("3 - Deposito")
    console.log("4 - Empréstimo")
    console.log("")

    let escolha = parseInt(prompt("Qual operação você deseja? "))

    console.clear()

    switch(escolha){
        
        case(1):{
            
            console.log("Seu saldo é de",cliente.saldo)
            
            break
        }
        
        case(2):{
            
            let saque = parseInt(prompt("Qual será o valor do saque?"))
            
            if (saque > cliente.saldo){
                
                console.log("Saldo insuficiente!")
                
                break
            }else{

                console.clear()
                
                let confirmacao = parseInt(prompt("Digite sua senha novamente: "))

                if (confirmacao == cliente.senha){
                    
                    console.clear()
                
                    let saldoAtual = parseInt(cliente.saldo) - saque
                
                    cliente.saldo = saldoAtual
                
                    console.log("Saque concluído! Seu saldo agora é de",cliente.saldo)
                
                    break
                }else{
                    
                    console.clear()
                    
                    console.log("Senha incorreta!")
                }
            }
        }

        case(3):{

            let deposito = parseInt(prompt("Qual será o valor do deposito? "))

            console.clear()

            let confirmacao = parseInt(prompt("Digite sua senha novamente: "))

            console.clear()

            if (confirmacao == cliente.senha){
            
                let saldoAtual = parseInt(cliente.saldo) + deposito
            
                cliente.saldo = saldoAtual
            
                console.log("Deposito concluído! Seu saldo agora é de",cliente.saldo)
            
            break
            
            }else{
                console.log("Senha incorreta!")
            }

        }

        case(4):{

            console.log("O juro mensal do empréstimo é de 10%.")
            
            console.log("")
            
            let emprestimo = parseInt(prompt("Qual o valor do emprestimo? "))

            console.clear()

            let confirmacao = parseInt(prompt("Digite sua senha novamento: "))

            if(confirmacao == cliente.senha){
            
                console.clear()
                
                let juros = (emprestimo / 10)
            
                let saldoAtual = emprestimo + parseInt(cliente.saldo)
            
                cliente.saldo = saldoAtual
            
                console.clear()
            
                console.log("Empréstimo concluído! Seu saldo agora é de",cliente.saldo,"e os juros mensais ficaram no valor de", juros,"!")
            }else{
                console.clear()

                console.log("Senha incorreta!")
            }
        }
    
    
    
    
    
    
    
    
    
    
    }
}else if (i==0){
    console.clear()
    console.log("Finalizado!")
}else{
    console.log("Senha incorreta!")
}
}