// ** Product
export interface IProduct{
    id?: string,
    name: string,
    description: string,
    category: string,
    productPrice: number,
    reviews?: {
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
    overRate?: {
        oneStar: number,
        twoStars: number,
        threeStars: number,
        fourStars: number,
        fiveStars: number
    }
    mainImage: string,
    images: string[]
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