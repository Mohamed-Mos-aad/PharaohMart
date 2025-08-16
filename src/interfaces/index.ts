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



export interface ISignUpData{
    userFullName: string,
    userEmail: string,
    userPhoneNumber: string,
    userPassword: string,
    userConfirmPassword: string,
    userStoreName: string
}