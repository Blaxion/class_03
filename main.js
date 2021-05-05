// ## Exo1

// ### Créer une class Objet
// ### _Propriétés : nom, prix

// ### Créer deux instances d'objets avec un nom et un prix
// ### Créer une boite (tableau) et mettre les deux objets dedans.

// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet)
// ### _Méthode : acheter(vendeur, objet)

// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.
// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

class Objet {
    constructor(nom,prix){
        this.nom = nom;
        this.prix = prix;
    }
}
let objet1 = new Objet("Objet1",10)
let objet2 = new Objet("Objet2",20)

let boite = [objet1,objet2]

class Personnage{
    constructor(nom,sac,argent){
        this.nom = nom;
        this.sac = sac
        this.argent = argent
    }
    prendre(objet){
        this.sac.push(objet[boite.indexOf(objet)])
        boite.splice(boite.indexOf(objet),1)
    }
    acheter(vendeur,objet){
        this.sac.push(objet)
        this.argent = this.argent - objet.prix
        vendeur.sac.splice(vendeur.sac.indexOf(objet),1)
    }
}

let p1 = new Personnage("p1",[],20)
let p2 = new Personnage("p2",[],35)

p1.prendre(objet1)
p2.prendre(objet2)
p1.acheter(p2,objet2)

console.log(p1)
console.log(p2)
