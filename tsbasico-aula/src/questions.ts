import { VpHttp } from './http/vphttp';
import {prompt} from 'inquirer';

export class Perguntas{
private dadosDoPedido : any;
private dadosDaEntrega : any;
private dadosDaFimEntrega : any;
private dataTamanho : any[] = [];
private dataPizza : any[] = [];
private dataCidade : any[] = [];
private dataBairro : any[] = [];

    public question(){
        this.getTamanho();
        
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
                    choices: this.dataTamanho
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
                    type: 'list',
                    message: 'Qual a Cidade do seu endereço?\n',
                    choices: this.dataCidade
                }
            ]
        ).then(
            (answers : any) =>{
                this.dadosDaEntrega = answers;
                this.getBairros();
            }
        );
    }
    private makeFimEntrega(){
        prompt
        (
        [
                {
                    name: 'bairro',
                    type: 'list',
                    message: 'Qual o Bairro do seu endereço?\n',
                    choices: this.dataBairro
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
                }
            ]
        ).then(
            (answers : any) =>{
                this.dadosDaFimEntrega = answers;
                this.report();
            }
        );
    }
    private report(){
        console.log('\n\nDados do cliente \nCliente: ' + this.dadosDoPedido.nome + '\nTelefone: ' + this.dadosDoPedido.telefone + '\n\nDados da Pizza \nTamanho:' + this.dadosDoPedido.tamanho + '\nSabor: ' + this.dadosDoPedido.sabor + '\nQuantidade: ' + this.dadosDoPedido.quantidade + '\nEntregar: ' + this.dadosDoPedido.entrega);
        if(this.dadosDoPedido.entrega == 'Sim'){
            console.log('\nDados da Entrega \nCidade: ' + this.dadosDaEntrega.cidade + '\nBairro: ' + this.dadosDaFimEntrega.bairro  + '\nRua: ' + this.dadosDaFimEntrega.rua + '\nNúmero: ' + this.dadosDaFimEntrega.numero + '\nComplemento:' + this.dadosDaFimEntrega.complemento);
        }
    }
    private getSabores(){
        let http = new VpHttp('http://5c649d5bc969210014a32ec7.mockapi.io/sabor');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    if(element.Disponivel == true){
                        this.dataPizza.push(element.Sabor);
                    }
                    
                });
                this.getCidades();
            },
            (error : any) => {
                console.log(error); 
            }
        )
    }
    private getTamanho(){
        let http = new VpHttp('http://5c649d5bc969210014a32ec7.mockapi.io/tamanho');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                        this.dataTamanho.push(element.Nome);
                
                });
                this.getSabores();
            },
            (error : any) => {
                console.log(error); 
            }
        )
    }
    private getCidades(){
        let http = new VpHttp('http://5c649d5bc969210014a32ec7.mockapi.io/cidade');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                        this.dataCidade.push(element.Cidade);
                });
                this.makeAQuestion();
            },
            (error : any) => {
                console.log(error); 
            }
        )
    }
    private getBairros(){
        let http = new VpHttp('http://5c649d5bc969210014a32ec7.mockapi.io/bairro');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                    if(element.Cidade == this.dadosDaEntrega.cidade){
                        this.dataBairro.push(element.Nome);
                    }
                }
            );
                this.makeFimEntrega();
            },
            (error : any) => {
                console.log(error); 
            }
        )
   };
}