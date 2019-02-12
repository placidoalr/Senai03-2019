import {prompt} from 'inquirer';

export class Perguntas{
    public makeAQuestion(){
        prompt(
            [
                {
                    name: 'name',
                    type: 'input',
                    message: 'Qual o seu nome',
                }
            ]
        ).then(
            (answers : any) =>{
                console.log(`\nOlá ${answers.name}!\n`);
            }
        );
    }
}