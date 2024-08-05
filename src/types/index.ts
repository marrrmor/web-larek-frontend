export interface IProduct {
    description: string;
    image: string;
    title: string,
    category: string,
    price: number | null;
    _id: string; 
}

export interface IPerson {
    address: string;
    email: string;
    phone: string;
}

export interface IProductsData {
    products: IProduct[];
    preview: string | null;
    setProducts(products: IProduct[]): void;
    getProduct(productId: string): IProduct | null;
}

export interface IPersonData {
    setPersonData(personData: IPerson): void;
    checkPayValidation(data: Record<keyof TPersonPay, string>): boolean;
    checkContactsValidation(data: Record<keyof TPersonContacts, string>): boolean;
}

export interface IBasket {
    items: Map<string, number>;
    add(id: string): void;
    remove(id: string): void;
    calculateTotal(products: Map<string, IProduct>): number;
}

export type TProductCard = Pick<IProduct, 'title' | 'category' | 'image' | 'price'>;

export type TProductModal = Pick<IProduct, 'title' | 'category' | 'image' | 'price' | 'description'>;

export type TProductBasket = Pick<IProduct, 'title' | 'price'>;

export type TPersonPay = Pick<IPerson, 'address'>;

export type TPersonContacts = Pick<IPerson, 'email' | 'phone'>;
