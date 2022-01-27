import { Clienti } from "../classes/clienti";

export interface ClientiData {
  content:Array<Clienti>
  pageable:Object;
  last:Boolean;
  totalPages:number;
  number:number;
  numberOfPages:number;
  size:number;
  sort:string;
  first:Boolean;
  empty:Boolean;

}
