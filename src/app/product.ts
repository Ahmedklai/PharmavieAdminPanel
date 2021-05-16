export class Product {
  id: string;
  name: string;
  isPromotion: boolean;
  isBestSelling: boolean;
  newPrice: number;
  description: string;
  laboratory: string;
  conditioning: string;
  dosage: string;
  form: string;
  presentation: string;
  therapeutiClass: string;
  subClass: string;
  specification: string;
  DurationOfConversation: string;
  publicPrice: number;
  use: string;
  path: string;
  contreIndications: string;
  tableOfContent: string;
  pharmacies : string[];
  constructor(
    name: string,
    description: string,
    laboratory: string,
    isPromotion: boolean,
    isBestSelling: boolean,
    newPrice: number,
    conditioning: string,
    dosage: string,
    form: string,
    presentation: string,
    therapeutiClass: string,
    subClass: string,
    specification: string,
    DurationOfConversation: string,
    publicPrice: number,
    use: string,
    path: string,
    contreIndications: string,
    tableOfContent: string ,
    pharmacies: string[],
  ) {
    this.name = name;
    this.description = description;
    this.laboratory = laboratory;
    this.conditioning = conditioning;
    this.dosage = dosage;
    this.form = form;
    this.isPromotion = isPromotion;
    this.isBestSelling = isBestSelling;
    this.newPrice = newPrice;
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
    this.pharmacies = pharmacies;
  }
}
