import {prompt} from 'inquirer';

export class Perguntas{
private dadosDoPedido : any;
private dadosDaEntrega : any;
    public makeAQuestion(){
        prompt(
            [
                {
                    name: 'nome',
                    type: 'input',
                    message: 'Qual o seu nome?\n',
                },
                {
                    name: 'telefone',
                    type: 'input',
                    message: 'Qual o seu telefone?\n',
                },
                {
                    name: 'tamanho',
                    type: 'list',
                    message: 'Qual o tamanho da pizza?',
                    choices: ['1.Pequena', '2.Média', '3.Grande'],
                    
                },
                {
                    name: 'sabor',
                    type: 'list',
                    message: 'Qual o sabor da pizza?',
                    choices: ['Mussarela','Calabresa','Margherita','Basca','Mafiosa','Cappuccino']
                },
                {
                    name: 'quantidade',
                    type: 'input',
                    message: 'Quantas pizzas?\n',
                },
                {
                    name: 'entrega',
                    type: 'list',
                    message: 'Seria para entregar?',
                    choices: ['Sim','Não']
                }
            ]
        ).then(
            (answers : any) =>{
                this.dadosDoPedido = answers;
                if(answers.entrega == 'Sim'){
                   this.makeEntrega();
                    
                } else if (answers.entrega == 'Não'){
                    this.report();
                    
                }
            }
        );
    }
    public makeEntrega(){
        prompt
        (
            [
                {
                    name: 'cidade',
                    type: 'input',
                    message: 'Qual a Cidade do seu endereço?\n',
                },
                {
                    name: 'bairro',
                    type: 'input',
                    message: 'Qual o Bairro do seu endereço?\n',
                },
                {
                    name: 'rua',
                    type: 'input',
                    message: 'Qual a sua rua?\n',
                },
                {
                    name: 'numero',
                    type: 'input',
                    message: 'Qual o número do seu endereço?\n',
                },
                {
                    name: 'complemento',
                    type: 'input',
                    message: 'Complemento?\n',
                },
            ]
        ).then(
            (answers : any) =>{
                this.dadosDaEntrega = answers;
                this.report();
            }
        );
    }
    public report(){
        console.log(JSON.stringify(this.dadosDoPedido));
        console.log(this.dadosDoPedido.nome + ' ' + this.dadosDoPedido.telefone);
        //console.log(`Relatório\n${this.dadosDoPedido}`);
    }
    
}