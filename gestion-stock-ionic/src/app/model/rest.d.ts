/* tslint:disable */

export interface CommandDto {
    comment: string;
    createAt: Date;
    id: number;
    products: ProductDto[];
}

export interface ProductDto {
    description: string;
    id: number;
    name: string;
    photo: string;
    price: number;
    quantity: number;
}

export interface UserDto {
    commands: CommandDto[];
    email: string;
    id: number;
    name: string;
    password: string;
    username: string;
}
