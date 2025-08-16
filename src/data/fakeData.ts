// ** Interfaces
import type { IProduct } from "../interfaces";



// ** Fake Data
export const fakeData: IProduct[] = [
  {
    id: "product_1",
    name: "Essence Mascara Lash Princess",
    description: '',
    category: "beauty",
    price: {
      productPrice: 9.99,
      productDiscount: "10.48%",
      productOff: "$1.05"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Eleanor Collins"
          },
          userName: "Eleanor Collins",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Would not recommend!",
        UserSupport: { like: 5, unLike: 2 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Lucas Gordon"
          },
          userName: "Lucas Gordon",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Very satisfied!",
        UserSupport: { like: 8, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Eleanor Collins"
          },
          userName: "Eleanor Collins",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Highly impressed!",
        UserSupport: { like: 12, unLike: 1 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"],
  },
  {
    id: "product_2",
    name: "Eyeshadow Palette with Mirror",
    description: '',
    category: "beauty",
    price: {
      productPrice: 19.99,
      productDiscount: "18.19%",
      productOff: "$4.58"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Savannah Gomez"
          },
          userName: "Savannah Gomez",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Great product!",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Christian Perez"
          },
          userName: "Christian Perez",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Awesome product!",
        UserSupport: { like: 12, unLike: 1 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Nicholas Bailey"
          },
          userName: "Nicholas Bailey",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Poor quality!",
        UserSupport: { like: 2, unLike: 20 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"],
  },
  {
    id: "product_3",
    name: "Powder Canister",
    description: '',
    category: "beauty",
    price: {
      productPrice: 14.99,
      productDiscount: "9.84%",
      productOff: "$1.55"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Alexander Jones"
          },
          userName: "Alexander Jones",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Would buy again!",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Elijah Cruz"
          },
          userName: "Elijah Cruz",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Highly impressed!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Avery Perez"
          },
          userName: "Avery Perez",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Very dissatisfied!",
        UserSupport: { like: 2, unLike: 15 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"],
  },
  {
    id: "product_4",
    name: "Red Lipstick",
    description: '',
    category: "beauty",
    price: {
      productPrice: 12.99,
      productDiscount: "12.16%",
      productOff: "$1.60"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Liam Garcia"
          },
          userName: "Liam Garcia",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great product!",
        UserSupport: { like: 14, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Ruby Andrews"
          },
          userName: "Ruby Andrews",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Great product!",
        UserSupport: { like: 20, unLike: 1 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Clara Berry"
          },
          userName: "Clara Berry",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Would buy again!",
        UserSupport: { like: 25, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"],
  },
  {
    id: "product_5",
    name: "Red Nail Polish",
    description: '',
    category: "beauty",
    price: {
      productPrice: 8.99,
      productDiscount: "11.44%",
      productOff: "$1.02"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Benjamin Wilson"
          },
          userName: "Benjamin Wilson",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Poor quality!",
        UserSupport: { like: 4, unLike: 12 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Liam Smith"
          },
          userName: "Liam Smith",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Great product!",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Clara Berry"
          },
          userName: "Clara Berry",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Very unhappy with my purchase!",
        UserSupport: { like: 2, unLike: 20 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 0, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"],
  },
  {
    id: "product_6",
    name: "Calvin Klein CK One",
    description: '',
    category: "fragrances",
    price: {
      productPrice: 49.99,
      productDiscount: "1.89%",
      productOff: "$0.95"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Layla Young"
          },
          userName: "Layla Young",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Very disappointed!",
        UserSupport: { like: 3, unLike: 10 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Daniel Cook"
          },
          userName: "Daniel Cook",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Fast shipping!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Jacob Cooper"
          },
          userName: "Jacob Cooper",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Not as described!",
        UserSupport: { like: 5, unLike: 5 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 0 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
    ],
  },
  {
    id: "product_7",
    name: "Chanel Coco Noir Eau De",
    description: '',
    category: "fragrances",
    price: {
      productPrice: 129.99,
      productDiscount: "16.51%",
      productOff: "$21.45"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Ruby Andrews"
          },
          userName: "Ruby Andrews",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly impressed!",
        UserSupport: { like: 25, unLike: 2 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Leah Henderson"
          },
          userName: "Leah Henderson",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Awesome product!",
        UserSupport: { like: 30, unLike: 1 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Xavier Wright"
          },
          userName: "Xavier Wright",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Very happy with my purchase!",
        UserSupport: { like: 35, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 0, fiveStars: 3 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
    ],
  },
  {
    id: "product_8",
    name: "Dior J'adore",
    description: '',
    category: "fragrances",
    price: {
      productPrice: 89.99,
      productDiscount: "14.72%",
      productOff: "$12.52"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Nicholas Bailey"
          },
          userName: "Nicholas Bailey",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Great value for money!",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Penelope Harper"
          },
          userName: "Penelope Harper",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great product!",
        UserSupport: { like: 28, unLike: 1 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Emma Miller"
          },
          userName: "Emma Miller",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great product!",
        UserSupport: { like: 27, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
    ],
  },
  {
    id: "product_9",
    name: "Dolce Shine Eau de",
    description: '',
    category: "fragrances",
    price: {
      productPrice: 69.99,
      productDiscount: "0.62%",
      productOff: "$0.44"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Mateo Bennett"
          },
          userName: "Mateo Bennett",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Would buy again!",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Nolan Gonzalez"
          },
          userName: "Nolan Gonzalez",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly recommended!",
        UserSupport: { like: 14, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Aurora Lawson"
          },
          userName: "Aurora Lawson",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Very happy with my purchase!",
        UserSupport: { like: 16, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
    ],
  },
  {
    id: "product_10",
    name: "Gucci Bloom Eau de",
    description: '',
    category: "fragrances",
    price: {
      productPrice: 79.99,
      productDiscount: "14.39%",
      productOff: "$13.00"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Cameron Perez"
          },
          userName: "Cameron Perez",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Very dissatisfied!",
        UserSupport: { like: 2, unLike: 15 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Daniel Cook"
          },
          userName: "Daniel Cook",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Very happy with my purchase!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Addison Wright"
          },
          userName: "Addison Wright",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly impressed!",
        UserSupport: { like: 18, unLike: 1 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
    ],
  },
  {
    id: "product_11",
    name: "Annibale Colombo Bed",
    description: '',
    category: "furniture",
    price: {
      productPrice: 1899.99,
      productDiscount: "8.57%",
      productOff: "$44.12"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Christopher West"
          },
          userName: "Christopher West",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Would not recommend!",
        UserSupport: { like: 3, unLike: 10 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Vivian Carter"
          },
          userName: "Vivian Carter",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly impressed!",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Mason Wright"
          },
          userName: "Mason Wright",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Poor quality!",
        UserSupport: { like: 1, unLike: 15 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 1, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp"
    ],
  },
  {
    id: "product_12",
    name: "Annibale Colombo Sofa",
    description: '',
    category: "furniture",
    price: {
      productPrice: 2499.99,
      productDiscount: "14.4%",
      productOff: "$423.00"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Christian Perez"
          },
          userName: "Christian Perez",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Very unhappy with my purchase!",
        UserSupport: { like: 2, unLike: 10 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Lillian Bishop"
          },
          userName: "Lillian Bishop",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Fast shipping!",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Lillian Simmons"
          },
          userName: "Lillian Simmons",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Poor quality!",
        UserSupport: { like: 1, unLike: 20 }
      }
    ],
    overRate: { oneStar: 2, twoStars: 1, threeStars: 0, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
    ],
  },
  {
    id: "product_13",
    name: "Bedside Table African Cherry",
    description: '',
    category: "furniture",
    price: {
      productPrice: 299.99,
      productDiscount: "19.09%",
      productOff: "$71.86"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Aaliyah Hanson"
          },
          userName: "Aaliyah Hanson",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Excellent quality!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Liam Smith"
          },
          userName: "Liam Smith",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Excellent quality!",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Avery Barnes"
          },
          userName: "Avery Barnes",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly recommended!",
        UserSupport: { like: 22, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 3, fiveStars: 0 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp"
    ],
  },
  {
    id: "product_14",
    name: "Knoll Saarinen Executive Conference Chair",
    description: '',
    category: "furniture",
    price: {
      productPrice: 499.99,
      productDiscount: "2.01%",
      productOff: "$10.10"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Ella Cook"
          },
          userName: "Ella Cook",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Waste of money!",
        UserSupport: { like: 2, unLike: 15 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Clara Berry"
          },
          userName: "Clara Berry",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Very dissatisfied!",
        UserSupport: { like: 1, unLike: 20 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Elena Long"
          },
          userName: "Elena Long",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Would buy again!",
        UserSupport: { like: 25, unLike: 0 }
      }
    ],
    overRate: { oneStar: 2, twoStars: 1, threeStars: 0, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp"
    ],
  },
  {
    id: "product_15",
    name: "Wooden Bathroom Sink With Mirror",
    description: '',
    category: "furniture",
    price: {
      productPrice: 799.99,
      productDiscount: "8.8%",
      productOff: "$72.00"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Logan Torres"
          },
          userName: "Logan Torres",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Fast shipping!",
        UserSupport: { like: 22, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Aria Parker"
          },
          userName: "Aria Parker",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Very pleased!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Dylan Wells"
          },
          userName: "Dylan Wells",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Poor quality!",
        UserSupport: { like: 10, unLike: 5 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 1, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp"
    ],
  },
  {
    id: "product_16",
    name: "Apple",
    description: '',
    category: "groceries",
    price: {
      productPrice: 1.99,
      productDiscount: "12.62%",
      productOff: "$0.29"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Sophia Brown"
          },
          userName: "Sophia Brown",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Very satisfied!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Scarlett Bowman"
          },
          userName: "Scarlett Bowman",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Very dissatisfied!",
        UserSupport: { like: 1, unLike: 15 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "William Gonzalez"
          },
          userName: "William Gonzalez",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Very unhappy with my purchase!",
        UserSupport: { like: 5, unLike: 10 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 1, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"],
  },
  {
    id: "product_17",
    name: "Beef Steak",
    description: '',
    category: "groceries",
    price: {
      productPrice: 12.99,
      productDiscount: "9.61%",
      productOff: "$1.37"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Eleanor Tyler"
          },
          userName: "Eleanor Tyler",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Would not recommend!",
        UserSupport: { like: 3, unLike: 10 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Alexander Jones"
          },
          userName: "Alexander Jones",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Fast shipping!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Natalie Harris"
          },
          userName: "Natalie Harris",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Great value for money!",
        UserSupport: { like: 25, unLike: 0 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"],
  },
  {
    id: "product_18",
    name: "Cat Food",
    description: '',
    category: "groceries",
    price: {
      productPrice: 8.99,
      productDiscount: "9.58%",
      productOff: "$0.87"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Noah Lewis"
          },
          userName: "Noah Lewis",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Would not recommend!",
        UserSupport: { like: 3, unLike: 12 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Ruby Andrews"
          },
          userName: "Ruby Andrews",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Very unhappy with my purchase!",
        UserSupport: { like: 2, unLike: 10 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Ethan Thompson"
          },
          userName: "Ethan Thompson",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Very disappointed!",
        UserSupport: { like: 1, unLike: 15 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"],
  },
  {
    id: "product_19",
    name: "Chicken Meat",
    description: '',
    category: "groceries",
    price: {
      productPrice: 9.99,
      productDiscount: "13.7%",
      productOff: "$1.39"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Mateo Bennett"
          },
          userName: "Mateo Bennett",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Great product!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Jackson Evans"
          },
          userName: "Jackson Evans",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly recommended!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Sadie Morales"
          },
          userName: "Sadie Morales",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Not worth the price!",
        UserSupport: { like: 5, unLike: 10 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
    ],
  },
  {
    id: "product_20",
    name: "Cooking Oil",
    description: '',
    category: "groceries",
    price: {
      productPrice: 4.99,
      productDiscount: "9.33%",
      productOff: "$0.53"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Victoria McDonald"
          },
          userName: "Victoria McDonald",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Very happy with my purchase!",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Hazel Evans"
          },
          userName: "Hazel Evans",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Would not recommend!",
        UserSupport: { like: 2, unLike: 20 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Zoe Bennett"
          },
          userName: "Zoe Bennett",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Would buy again!",
        UserSupport: { like: 25, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"],
  },
  {
    id: "product_21",
    name: "Cucumber",
    description: '',
    category: "groceries",
    price: {
      productPrice: 1.49,
      productDiscount: "0.16%",
      productOff: "$0.00"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Lincoln Kelly"
          },
          userName: "Lincoln Kelly",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great product!",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Savannah Gomez"
          },
          userName: "Savannah Gomez",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great value for money!",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "James Davis"
          },
          userName: "James Davis",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Poor quality!",
        UserSupport: { like: 2, unLike: 8 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 0 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"],
  },
  {
    id: "product_22",
    name: "Dog Food",
    description: '',
    category: "groceries",
    price: {
      productPrice: 10.99,
      productDiscount: "10.27%",
      productOff: "$1.22"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Nicholas Edwards"
          },
          userName: "Nicholas Edwards",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Excellent quality!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Zachary Lee"
          },
          userName: "Zachary Lee",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Awesome product!",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Nova Cooper"
          },
          userName: "Nova Cooper",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great product!",
        UserSupport: { like: 20, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"],
  },
  {
    id: "product_23",
    name: "Eggs",
    description: '',
    category: "groceries",
    price: {
      productPrice: 2.99,
      productDiscount: "11.05%",
      productOff: "$0.33"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Penelope King"
          },
          userName: "Penelope King",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Disappointing product!",
        UserSupport: { like: 3, unLike: 12 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Eleanor Tyler"
          },
          userName: "Eleanor Tyler",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Poor quality!",
        UserSupport: { like: 2, unLike: 11 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Benjamin Foster"
          },
          userName: "Benjamin Foster",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Very pleased!",
        UserSupport: { like: 8, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 0 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"],
  },
  {
    id: "product_24",
    name: "Fish Steak",
    description: '',
    category: "groceries",
    price: {
      productPrice: 14.99,
      productDiscount: "4.23%",
      productOff: "$0.63"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Caleb Perkins"
          },
          userName: "Caleb Perkins",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Would not buy again!",
        UserSupport: { like: 2, unLike: 12 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Isabella Jackson"
          },
          userName: "Isabella Jackson",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Excellent quality!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Nathan Dixon"
          },
          userName: "Nathan Dixon",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great value for money!",
        UserSupport: { like: 20, unLike: 0 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"],
  },
  {
    id: "product_25",
    name: "Green Bell Pepper",
    description: '',
    category: "groceries",
    price: {
      productPrice: 1.29,
      productDiscount: "0.16%",
      productOff: "$0.00"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Avery Carter"
          },
          userName: "Avery Carter",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly recommended!",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Henry Hill"
          },
          userName: "Henry Hill",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Would not recommend!",
        UserSupport: { like: 4, unLike: 8 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Addison Wright"
          },
          userName: "Addison Wright",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Excellent quality!",
        UserSupport: { like: 14, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"],
  },
  {
    id: "product_26",
    name: "Green Chili Pepper",
    description: '',
    category: "groceries",
    price: {
      productPrice: 0.99,
      productDiscount: "1%",
      productOff: "$0.00"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Luna Russell"
          },
          userName: "Luna Russell",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Great product!",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Noah Lewis"
          },
          userName: "Noah Lewis",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Waste of money!",
        UserSupport: { like: 1, unLike: 12 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Clara Berry"
          },
          userName: "Clara Berry",
          date: "2025-04-30"
        },
        userRate: 3,
        userComment: "Very disappointed!",
        UserSupport: { like: 4, unLike: 8 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 1, fourStars: 0, fiveStars: 0 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"],
  },
  {
    id: "product_27",
    name: "Honey Jar",
    description: '',
    category: "groceries",
    price: {
      productPrice: 6.99,
      productDiscount: "14.4%",
      productOff: "$1.14"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Autumn Gomez"
          },
          userName: "Autumn Gomez",
          date: "2025-04-30"
        },
        userRate: 1,
        userComment: "Very disappointed!",
        UserSupport: { like: 1, unLike: 8 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Benjamin Wilson"
          },
          userName: "Benjamin Wilson",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly impressed!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Nicholas Edwards"
          },
          userName: "Nicholas Edwards",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Very disappointed!",
        UserSupport: { like: 3, unLike: 12 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 1, fourStars: 0, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"],
  },
  {
    id: "product_28",
    name: "Ice Cream",
    description: '',
    category: "groceries",
    price: {
      productPrice: 5.49,
      productDiscount: "8.69%",
      productOff: "$0.52"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Elijah Cruz"
          },
          userName: "Elijah Cruz",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Very pleased!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Jace Smith"
          },
          userName: "Jace Smith",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Excellent quality!",
        UserSupport: { like: 22, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Sadie Morales"
          },
          userName: "Sadie Morales",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Highly impressed!",
        UserSupport: { like: 30, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
    ],
  },
  {
    id: "product_29",
    name: "Juice",
    description: '',
    category: "groceries",
    price: {
      productPrice: 3.99,
      productDiscount: "12.06%",
      productOff: "$0.55"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Nolan Gonzalez"
          },
          userName: "Nolan Gonzalez",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Excellent quality!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Bella Grant"
          },
          userName: "Bella Grant",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Would buy again!",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Aria Flores"
          },
          userName: "Aria Flores",
          date: "2025-04-30"
        },
        userRate: 5,
        userComment: "Awesome product!",
        UserSupport: { like: 30, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"],
  },
  {
    id: "product_30",
    name: "Kiwi",
    description: '',
    category: "groceries",
    price: {
      productPrice: 2.49,
      productDiscount: "15.22%",
      productOff: "$0.37"
    },
    reviews: [
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51mQf+AxR-L._AC_SL1000_.jpg",
            alt: "Emily Brown"
          },
          userName: "Emily Brown",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Highly recommended!",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/41pFZz6k2tL._AC_SY200_.jpg",
            alt: "Jackson Morales"
          },
          userName: "Jackson Morales",
          date: "2025-04-30"
        },
        userRate: 2,
        userComment: "Would not buy again!",
        UserSupport: { like: 3, unLike: 12 }
      },
      {
        userData: {
          userPhoto: {
            src: "https://images-na.ssl-images-amazon.com/images/I/51eU+U7DkVL._AC_SL1000_.jpg",
            alt: "Nora Russell"
          },
          userName: "Nora Russell",
          date: "2025-04-30"
        },
        userRate: 4,
        userComment: "Fast shipping!",
        UserSupport: { like: 15, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"],
  }
]



// ** Categories
export const productCategories = [
  {
    name: "Beauty",
    path: "/categories/beauty"
  },
  {
    name: "Fragrances",
    path: "/categories/fragrances"
  },
  {
    name: "Furniture",
    path: "/categories/furniture"
  },
  {
    name: "Groceries",
    path: "/categories/groceries"
  }
];