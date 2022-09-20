var listaPatika = new Array();
var izabrano = new Array();
var listaPrikaz = new Array();
var korpa = new Array();

class Patika {
    constructor(id, proizvodjac, url) {
        this.proizvodjac = proizvodjac;
        this.slika = url;
        this.id = id;
    }

    prikaz() {
        let img = document.createElement("img");
        img.className = "slika";
        img.src = this.slika;
        img.alt = "artikal";
        img.addEventListener("click", (e) => {
            korpa.push(this);
            alert(`Ubacen je: ${this.id}`);
        });
        return img;
    }
}

var patika = new Patika("artikal1", "Nike", "./images/slika1.webp");
listaPatika.push(patika);

var patika = new Patika("artikal2", "Nike", "./images/slika2.webp");
listaPatika.push(patika);

var patika = new Patika("artikal3", "Addidas", "./images/slika3.webp");
listaPatika.push(patika);

var patika = new Patika("artikal4", "Addidas", "./images/slika4.webp");
listaPatika.push(patika);

var patika = new Patika("artikal5", "Puma", "./images/slika5.webp");
listaPatika.push(patika);

var patika = new Patika("artikal6", "Puma", "./images/slika6.webp");
listaPatika.push(patika);

var patika = new Patika("artikal7", "Sketchers", "./images/slika7.webp");
listaPatika.push(patika);

var patika = new Patika("artikal8", "Sketchers", "./images/slika8.webp");
listaPatika.push(patika);
listaPatika.forEach(e => {
    listaPrikaz.push(e);
})

const azurirajArtikle = () => {
    let prikaz = document.getElementById("prikaz");
    prikaz.innerHTML = '';
    listaPrikaz.forEach(x => {
        prikaz.appendChild(x.prikaz());
    })
}
azurirajArtikle();

const checkboxHandler = (e) => {
    if (e.checked) {
        izabrano.push(e.value);
    } else {
        izabrano = izabrano.filter(a => {
            if (a !== e.value)
                return true;
        });
    }
}

const filtriraj = () => {
    listaPrikaz = new Array();
    let temp = new Array();
    
    izabrano.forEach(uslov => {
        temp = listaPatika.filter(x => x.proizvodjac === uslov);
        temp.forEach(x => listaPrikaz.push(x));
    });
    azurirajArtikle();
}

const prikaziKorpu = () => {
    let prikaz = document.getElementById("prikaz");
    prikaz.innerHTML = "";
    listaPrikaz = new Array();
    korpa.forEach(x => listaPrikaz.push(x));
    azurirajArtikle();
}

const isprazniKorpu = () => {
    korpa = new Array();
    let prikaz = document.getElementById("prikaz");
    prikaz.innerHTML = "";
    alert("Korpa je ispraznjena. Vracamo vas na prikaz svih artikala.");
    listaPatika.forEach(e => {
        listaPrikaz.push(e);
    })
    azurirajArtikle();
}