export default class Book{
    constructor(nome, descrizione, valutazioneMedia, img){
        this.nome = nome;
        this.descrizione = descrizione;
        this.valutazioneMedia = valutazioneMedia;
        this.img = img;
    }
    name(){
        return "nome: "+this.nome+"descrizione: "+this.descrizione+"valutazione media: "+this.valutazioneMedia
    }
    click (){
        document.getElementById("testo").innerHTML = this.name()
    }
}