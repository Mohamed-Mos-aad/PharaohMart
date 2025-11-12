// ** Product
export interface IFakeDataProduct{
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
export interface IProduct {
    id: number;
    documentId: string;
    name: string;
    description: string;

    // 🏷️ العلاقات
    categories: ICategory[];
    owner: ISeller;

    // 💰 الأسعار
    price: number;
    salePrice: number;

    // 🧾 معلومات إضافية
    stockQuantity: number;
    productSKU: string;
    publishDate: string;
    publishTime: string;
    isPublished: boolean;
    lowStockAlert: number;
    unitWeight: string;
    unitDimension: string;
    weight: number;
    width: number;
    length: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;

    // 🖼️ الصور
    mainImage: IImage;
    images: IImage[];

    // ⭐ المراجعات
    reviews: IReview[];
}

// ** Category
export interface ICategory {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// ** Seller
export interface ISeller {
    id: number;
    documentId: string;
    username: string;
    email: string;
    phone: number;
    storeName: string;
    roleType: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// ** Image
export interface IImage {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        large?: IImageFormat;
        medium?: IImageFormat;
        small?: IImageFormat;
        thumbnail?: IImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    documentId: string;
}

// ** Image Format
export interface IImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
}

// ** Review
export interface IReview {
    userData: {
        userPhoto: {
        src: string;
        alt: string;
        };
        userName: string;
        date: string;
    };
    userRate: number;
    userComment: string;
    UserSupport: {
        like: number;
        unLike: number;
    };
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