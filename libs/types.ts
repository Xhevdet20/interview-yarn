export interface JobSite {
  id: string;
  title: string;
  status: string; 
  color: string;
  categories : Category[]
}


export interface Category {
  name : string;
  categoryItems : Array<[string, string, string, string, string]>;
}


export enum StatusType {
  New = 'New',
  UnderJudgement = 'Under Judgement',
  Open = 'Open',
  Closed = 'Closed',
}

export enum STATUSCOLOR {
  "New" = '#EE8A35',
  "Under Judgement" = '#B3D99B',
  "Open" = '#E9C466',
  "Closed" = '#7AC14D',
}