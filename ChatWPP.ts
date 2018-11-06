import { Usuario } from "./UsuarioWPP";
export class Chat{
    //private usuario : Usuario; //o atributo usuario é do tipo Usuario
    private nomeChat:string;
    private usuario : Usuario;
    //private msgs : Mensagem[] = new Array(); //msg é um array do tipo Mensagem, pq o usuario/chat pode ter varias msgs
    private usuarios : Usuario[] = new Array(); //um chat pode ter varios usuarios
    constructor(nomeChat:string){
        this.nomeChat = nomeChat;
        this.usuarios.push(this.usuario);
    }

    public getNomeChat():string{
        return this.nomeChat;
    }
    public setNomeChat(nomeChat:string):void{
        this.nomeChat = nomeChat;
    }

    // metodo para addPessoas ao chat
    public addPessoas(usuario:Usuario):void{
        this.usuarios.push(usuario);
    }

    public getPessoas():Usuario[]{
        return this.usuarios;
    }

}
