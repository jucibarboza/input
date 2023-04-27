import { LightningElement } from 'lwc';

export default class Inputobject extends LightningElement {
   
    inputs={
        primeironome: '',
        sobrenome: '',
        email: '',
        website: '',
        empresa: '',
        receitaanual: '',

            };
        
            //objeto ele tem uma relação muito proxima arrays
            array = [1,2,3,4,5,6];
            new = [];
        
        handleInputChange(event){
            let nameinput = event.target.name;
            let value = event.detail.value;
        
            //montando o objeto input com valores
            this.inputs ={
                ...this.inputs, [nameinput]:value
            };
        
            console.log(this.inputs);
        
        }
        
        
        onSpread(){
            this.new = [1,2,3, this.array];
            console.log(this.new)
        
            this.new = [1,2,3, ...this.array];
            console.log(this.new)
        
        }
        
        //template string > é uma forma misturar string com variaveis
        
        
        //On Spread --- espalhamento de informações
        // expandir valores de um array para dentro de outro array
        //ou um objeto
    
        
        handleOnClick(){
            this.result = `O valor recebido foi ${this.nome} `;
            //this.result = "Valor recebido" + this.nome;
        }
        
        }