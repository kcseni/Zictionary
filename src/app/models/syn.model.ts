export interface Root{
    response: Array<Response>;
}

export interface Response{
    list : List;
}

export interface List{
    category: string;
    synonyms: string;
}