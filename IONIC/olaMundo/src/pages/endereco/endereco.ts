import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CidadesProvider } from '../../providers/cidades';
import { BairrosProvider } from '../../providers/bairros';

/**
 * Generated class for the EnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endereco',
  templateUrl: 'endereco.html',
})
export class EnderecoPage {
  public listaCidades = [];
  public idCity : any;
  public idBairro : any;
  public listaBairros = [];
  public exibirConteudo : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cidades : CidadesProvider, private bairros : BairrosProvider) {
  }

  ionViewDidLoad() {
    this.listaBairros = [];
    this.listaCidades = [];
    this.exibirConteudo = false;
    this.idCity = null;
    this.idBairro = null;
    this.cidades.cidades().subscribe(
      (data : any) => {
        this.listaCidades = data;
        console.log(this.listaCidades);
      },
      (error : any) => {
        console.log(error);
      }
    )
  }
  onChange(){
    this.bairros.bairros(this.idCity).subscribe(
    (data : any) => {
      this.listaBairros = data;
      console.log(this.listaBairros);
    },
    (error : any) => {
      console.log(error);
    }

  )
  }
  onChangeBairros(){
    if(this.idBairro != null){
    this.exibirConteudo = true;
    }else{
      this.exibirConteudo = false;
    }
   }
}
