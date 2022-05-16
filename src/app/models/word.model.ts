
export interface Word {
    head: undefined;
    def: Array<Def>;
  }
  
  export interface Def {
    text: string;
    pos: string;
    tr: Array<Tr>;
  }
  
  export interface Tr {
    text: string;
    pos: string;
    syn: Array<Syn>;
    mean: Array<Mean>;
    ex: Array<Ex>;
  
  }
  
  export interface Syn {
    text: string;
  }
  
  export interface Mean {
    text: string;
  }
  
  export interface Ex {
    text: string;
    tr: Array<Tr>;
  }
  
  
  
  
  