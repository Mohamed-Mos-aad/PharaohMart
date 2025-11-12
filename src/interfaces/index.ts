// ** Product
export interface IProduct{
    id: string,
    name: string,
    description: string,
    category: string,
    price: {
        productPrice: number;
        productDiscount: string;
        productOff: string;
    },
    reviews: {
        userData: {
            userPhoto: {
                src: string,
                alt: string
            },
            userName: string,
            date: string
        };
        userRate: number;
        userComment: string;
        UserSupport: {
            like: number,
            unLike: number
        }
    }[],
    overRate: {
        oneStar: number,
        twoStars: number,
        threeStars: number,
        fourStars: number,
        fiveStars: number
    }
    mainImage: string,
    images: string[]
}
export interface INewProduct{
    owner: number,
    name: string; // ** Done
    description: string;  // ** Done
    categories: number[] | null;  // ** Done
    price: number;  // ** Done
    salePrice?: number | null;  // ** Done
    stockQuantity?: number;  // ** Done
    productSKU?: string;  // ** Done
    lowStockAlert?: number;  // ** Done
    tags?: string[];
    weight?: number;  // ** Done
    length?: number;  // ** Done
    width?: number;  // ** Done
    unitWeight?: string;  // ** Done
    unitDimension?: string;  // ** Done
    images: number[];  // ** Done
    mainImage: number | null;  // ** Done
    isPublished?: boolean;  // ** Done
    publishDate?: string;  // ** Done
    publishTime?: string;  // ** Done
}



// ** Category
export interface ICategory{
    createdAt: string,
    documentId: string,
    id: number,
    publishedAt: string,
    title: string,
    updatedAt: string
}



// ** Auth
export interface ISignUpData{
    userFullName: string,
    userEmail: string,
    userPhoneNumber: string,
    userPassword: string,
    userConfirmPassword: string,
    userStoreName?: string,
    role: string
}
export interface ISignInData{
    userEmail: string,
    userPassword: string,
}