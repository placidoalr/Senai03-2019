import { VpHttp } from './http/vphttp';
import {prompt} from 'inquirer';

export class Perguntas{
private dadosDoPedido : any;
private dadosDaEntrega : any;
private dataPizza : any[] = [];

    public question(){
        this.getSabores();
        this.makeAQuestion();
    }

    private makeAQuestion(){
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
                    choices: ['Pequena', 'Média', 'Grande'],
                    
                },
                {
                    name: 'sabor',
                    type: 'list',
                    message: 'Qual o sabor da pizza?',
                    choices: this.dataPizza
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
    private makeEntrega(){
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
    private report(){
        console.log('\n\nDados do cliente \nCliente: ' + this.dadosDoPedido.nome + '\nTelefone: ' + this.dadosDoPedido.telefone + '\n\nDados da Pizza \nTamanho:' + this.dadosDoPedido.tamanho + '\nSabor: ' + this.dadosDoPedido.sabor + '\nQuantidade: ' + this.dadosDoPedido.quantidade + '\nEntregar: ' + this.dadosDoPedido.entrega);
        if(this.dadosDoPedido.entrega == 'Sim'){
            console.log('\nDados da Entrega \nCidade: ' + this.dadosDaEntrega.cidade + '\nBairro: ' + this.dadosDaEntrega.bairro  + '\nRua: ' + this.dadosDaEntrega.rua + '\nNúmero: ' + this.dadosDaEntrega.numero + '\nComplemento:' + this.dadosDaEntrega.complemento);
        }
    }
    private getSabores(){
        let http = new VpHttp('http://5c649d5bc969210014a32ec7.mockapi.io/sabor');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    if(element.Disponivel == true){
                        this.dataPizza.push(element);
                    }
                    
                });
                
            },
            (error : any) => {
                console.log(error); 
            }
        )
    }
    
}