export class Product {
  id: string;
  name: string;
  isPromotion: boolean;
  isBestSelling: boolean;
  createdAt:string;
  newPrice: number;
  description: string;
  laboratory: string;
  conditioning: string;
  // dosage: string;
  form: string;
  comments:{username:string,text:string,createAt:string}[];
  rating:number;
  presentation: string;
  // therapeutiClass: string;
  // subClass: string;
  specification: string;
  DurationOfConversation: string;
  publicPrice: number;
  // use: string;
  path: string;
  // contreIndications: string;
  // tableOfContent: {vitamine:string,percentage:string}[];
  contreIndication:string;
  superClass:string;
  category : string ; 

  pharmacies : string[];
  constructor(
    name: string,
    comments:{username:string,text:string,createAt:string}[],
  rating:number,
    description: string,
    createdAt:string,
    laboratory: string,
    isPromotion: boolean,
    isBestSelling: boolean,
    newPrice: number,
    conditioning: string,
    // dosage: string,
    form: string,
    presentation: string,
    // therapeutiClass: string,
    // subClass: string,
    specification: string,
    DurationOfConversation: string,
    publicPrice: number,
    use: string,
    path: string,
    category : string , 
    // contreIndications: string,
    // tableOfContent: {vitamine:string,percentage:string}[] ,
    pharmacies: string[],
  ) {
    this.name = name;
    this.comments = comments;
    this.rating = rating;
    this.description = description;
    this.laboratory = laboratory;
    this.conditioning = conditioning;
    this.createdAt = createdAt;
    // this.dosage = dosage;
    this.form = form;
    this.isPromotion = isPromotion;
    this.isBestSelling = isBestSelling;
    this.newPrice = newPrice;
    this.presentation = presentation;
    // this.therapeutiClass = therapeutiClass;
    // this.subClass = subClass;
    this.specification = specification;
    this.DurationOfConversation = DurationOfConversation;
    this.publicPrice = publicPrice;
    // this.use = use;
    this.path = path;
    // this.contreIndications = contreIndications;
    // this.tableOfContent = tableOfContent;
    this.pharmacies = pharmacies;
    this.category = category ; 
  }
}
