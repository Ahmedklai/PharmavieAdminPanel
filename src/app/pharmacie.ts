export class Pharmacie {
    id: string;
    nomprenom: string;
    adresse : string ;
    code : string ;
    email : string ;
    constructor(
        nomprenom: string,
        adresse: string,
        code: string,
        email: string,
      
    ) {
      this.nomprenom = nomprenom;
      this.adresse = adresse;
      this.code = nomprenom;
      this.email = email;
     
    }
  }
  