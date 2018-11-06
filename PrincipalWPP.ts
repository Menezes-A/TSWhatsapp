import { ControladorWPP } from "./ControladorWPP";
import { Usuario } from "./UsuarioWPP";
import { Chat } from "./ChatWPP";

declare function require (msg:string): any; //padrão
var readline= require('readline-sync');  // colocar no controlador 

let controlador : ControladorWPP = new ControladorWPP();
let status:boolean = true;
while(status){

    let menu: string = readline.question("Escolha um dos comandos: addUser, statusUser, novoChat. \n");
    switch(menu){
        case "addUser": 
            let id: string = readline.question("O Id do Usuario: ");           
            controlador.addUsuario(id); // add o usuario no sistema
        break;

        case "novoChat":
            let nomeGrupo:string = readline.question("Nome do Grupo: ");
            console.log(controlador.addGrupo(nomeGrupo));
        break;

        case "statusUser":
            let nomeGrupoBuscar:string = readline.question("Nome do Grupo: ");
            console.log(controlador.buscarGrupo(nomeGrupoBuscar));
        break;
    }
}