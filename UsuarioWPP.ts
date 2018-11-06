//usuario vai ter que importar chat pq usa o array chats
import { Chat } from "./ChatWPP";
export class Usuario{
    private id: string;
    private chats : Chat[] = new Array(); //cria um array pq usuario pode ter varios chats do tipo CHAT

    constructor(id:string){
        this.id = id;
    }

    public getId():string{
        return this.id;
    }

    public setId(id:string):void{
        this.id = id;
    }

    public getChats():Chat[]{
        return this.chats;
    }

    public setChats(chats: Chat[]):void{
        this.chats = chats;
    }

    public addChat(chat: Chat){
        this.chats.push(chat); // push pegar
    }

}

