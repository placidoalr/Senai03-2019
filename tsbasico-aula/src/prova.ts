import { VpHttp } from './http/vphttp';
import {prompt} from 'inquirer';

export class Prova{
private dataCategoria : any[] = [];
private dataProduto: any[] = [];
private dadosCategoria : any;
private dadoProduto : any;
private dadoSaldo: any

    public iniciar(){
        this.getCategoria();
    }

    private run1(){
        prompt
        (
            [
                {
                    name: 'categoria',
                    type: 'list',
                    message: 'Escolha uma categoria\n',
                    choices: this.dataCategoria
                }
            ]
        ).then(
            (answers : any) =>{
                this.dadosCategoria = answers;
                this.report();
            }
        );
    }
    private report(){
        console.log('\n\nCategoria:'+this.dadosCategoria.categoria);

        this.dataProduto.forEach((element:any) => {

            if(element.categoria == this.dadosCategoria.categoria){
                this.dadoProduto = element.nome;
                this.dadoSaldo = element.saldo;

                 console.log('Produto:'+ this.dadoProduto +'|||| Estoque:'+this.dadoSaldo);
            }
        });
        
    }
    private getCategoria(){
        let http = new VpHttp('http://5c6c7eb5d51de300146f5b98.mockapi.io/categoria');

        http.get().subscribe(
            (data : any) => {
                data.forEach((element:any) => {
                        this.dataCategoria.push(element.categoria);
                });
                this.getProduto();
            },
            (error : any) => {
                console.log(error); 
            }
        )
    }
    private getProduto(){
        let http = new VpHttp('http://5c6c7eb5d51de300146f5b98.mockapi.io/produto');

        http.get().subscribe(
            (data : any) => {
                this.dataProduto = data;
               
        
                this.run1();
            },
            (error : any) => {
                console.log(error); 
            }
        )
   };
}
