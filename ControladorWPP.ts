import { Usuario } from "./UsuarioWPP";
import { Chat } from "./ChatWPP";

export class ControladorWPP{
    private usuario: Usuario[] = new Array();
    private chats: Chat[] = new Array();
    private status:boolean = true;

    public buscarUser(id:string):Usuario|undefined{
        if(this.usuario.length > 0){ //vai percorrer todo o usurio
            for(let i of this.usuario){ // for pra percorrer com o i o usuario
                if(i.getId() == id){
                    return i; 
                }else{
                    return undefined;
                }
            }
        return undefined;
        }
    }
    
    public addUsuario(id: string):string|void{
        if(this.buscarUser(id) == undefined){
            this.usuario.push(new Usuario(id));
         }else{
            return this.buscarUser(id).getId + " já existe";
        }     
    }

    public addGrupo(nomeChat:string):void|string{
        let chat: Chat = new Chat(nomeChat); //no usuario
                this.chats.push(chat)
                return "Grupo criado";
    }

    public buscarGrupo(nomeChat:string):Chat|undefined{ //igual o buscas usuario
        if(this.chats.length > 0){
            for(let i of this.chats){
                if(i.getNomeChat() == nomeChat){
                    return i;
                } else {
                    return undefined;
                }
            }
        }else{ 
            return undefined;

                
        }
    }

    public statusUser(nome:string):string{
        if(this.buscarGrupo(nome) != undefined){
            let nomeGrupoBuscar = this.buscarGrupo(nome);
            let nomes:string = "[";
            for (let i of nomeGrupoBuscar.getPessoas()){
                nomes += i.getId() + " ";
            }
            nomes += "]";
            return nomes;
        }else{
            return "Grupo não existe";
        }
        }
}
