export class Product {
       
   name : String;
   description: String;
   laboratory: String;
   conditioning: String;
   dosage: String;
   form: String;
   presentation: String;
   therapeutiClass : String;
   subClass: String;
   specification: String;
   DurationOfConversation: String;
   publicPrice: Number;
   use: String;
   path: String;
   contreIndications: String;
   tableOfContent : String;
    constructor(name : string,
        description: string,
        laboratory: string,
        conditioning: string,
        dosage: string,
        form: string,
        presentation: string,
        therapeutiClass : string,
        subClass: string,
        specification: string,
        DurationOfConversation: string,
        publicPrice: number,
        use: string,
        path: string,
        contreIndications: string,
        tableOfContent : string,) {
      
      this.name = name;
      this.description = description;
      this.laboratory = laboratory;
      this.conditioning = conditioning;
      this.dosage = dosage;
      this.form = form;
      this.presentation = presentation;
      this.therapeutiClass = therapeutiClass;
      this.subClass = subClass;
      this.specification = specification;
      this.DurationOfConversation = DurationOfConversation;
      this.publicPrice = publicPrice;
      this.use = use;
      this.path = path;
      this.contreIndications = contreIndications;
      this.tableOfContent = tableOfContent;
    }
  }