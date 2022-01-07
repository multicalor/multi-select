export interface IAddress {
    street:string,
    city:string,
    zipcode:string,
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    address: IAddress,
}

export interface ITodo {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

export interface IStyle {
    width?: string;
    height?: string;
    position?: string;
    background?: string;
    backdropFilter?: string;
    borderRadius?: string;
}

export interface IOptions {
    width?: string;
    perent?: string;
    position?: string;
    background?: string;
    backdropFilter?: string;
    borderRadius?: string;
}

export interface IParents {
    [key: string]:ISelect
}
export interface ISelect {
    parent: string ;
    options: string [];
}