import Book from "./book.js";

let ASimg;
ASimg = "pics/americansniper.jpg"
let CAimg;
CAimg = "EXAM_10-02-2022/pics/commandauthority.jpg"
let NEDimg;
NEDimg = "EXAM_10-02-2022/pics/noeasyday.jpg"

export default class libreria{
    constructor()
    {
        console.log("prova");
        if(document.getElementById('tastoAS')!=null){document.getElementById('tastoAS').addEventListener('click', this.cAS);}
        if(document.getElementById('tastoCA')!=null){document.getElementById('tastoCA').addEventListener('click', this.cCA);}
        if(document.getElementById('tastoNED')!=null){document.getElementById('tastoNED').addEventListener('click', this.cNED);}
    }
    cAS() {
        console.log("prova");
        var AS = new Book("American Sniper", "Storia di un cecchino", "adrenalinico, autobiografico", ASimg);
        AS.click();
        AS.name()
    }
    cCA() {
        console.log("prova");
        var CA = new Book("Command authority", "Storia di un passato alternativo", "adrenalinico, immaginario", "CAimg");
        CA.click();
        CA.name()
    }
    cNED() {
        console.log("prova");
        var NED = new Book("No easy day", "Storia del Navy Seal che uccise Bin Laden", "adrenalinico, storico", "NEDimg");
        NED.click();
        NED.name()
    }
}