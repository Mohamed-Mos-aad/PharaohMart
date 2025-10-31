// ** Interfaces
import type { IProduct } from "../interfaces";




// ** Fake Data
export const fakeData: IProduct[] = [
  {
    id: "product_1",
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Men's Clothing",
    price: {
      productPrice: 109.95,
      productDiscount: "10%",
      productOff: "$11.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Alex Smith" }, userName: "Alex Smith", date: "2025-07-21" },
        userRate: 4,
        userComment: "Great backpack! It's stylish and holds everything I need for the day.",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Emily White" }, userName: "Emily White", date: "2025-06-15" },
        userRate: 5,
        userComment: "Absolutely love the quality and the color. It's very durable.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Daniel Harris" }, userName: "Daniel Harris", date: "2025-08-11" },
        userRate: 5,
        userComment: "High quality material and very spacious. Worth every penny.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sophia Clark" }, userName: "Sophia Clark", date: "2025-07-30" },
        userRate: 4,
        userComment: "Very practical for daily use and looks great.",
        UserSupport: { like: 18, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    images: ["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"]
  },
  {
    id: "product_2",
    name: "Mens Casual Premium Slim Fit T-Shirts",
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "Men's Clothing",
    price: {
      productPrice: 16.73,
      productDiscount: "25%",
      productOff: "$5.57"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Michael Brown" }, userName: "Michael Brown", date: "2025-08-01" },
        userRate: 4,
        userComment: "Good quality for the price. The fit is a bit tighter than I expected.",
        UserSupport: { like: 18, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Chris Johnson" }, userName: "Chris Johnson", date: "2025-07-28" },
        userRate: 5,
        userComment: "Excellent t-shirt, very comfortable and looks great. I'll be buying more colors.",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Jane Doe" }, userName: "Jane Doe", date: "2025-07-19" },
        userRate: 3,
        userComment: "It's an okay shirt. The material is a little thin.",
        UserSupport: { like: 7, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Robert Davis" }, userName: "Robert Davis", date: "2025-07-15" },
        userRate: 5,
        userComment: "Perfect fit and very soft material. I love it.",
        UserSupport: { like: 25, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    images: ["https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"]
  },
  {
    id: "product_3",
    name: "Mens Cotton Jacket",
    description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "Men's Clothing",
    price: {
      productPrice: 55.99,
      productDiscount: "15%",
      productOff: "$8.40"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "David Black" }, userName: "David Black", date: "2025-05-20" },
        userRate: 5,
        userComment: "Fantastic jacket. It's warm, comfortable, and has plenty of pockets.",
        UserSupport: { like: 45, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "George Harris" }, userName: "George Harris", date: "2025-08-01" },
        userRate: 4,
        userComment: "A great jacket for the price. It fits well and looks good.",
        UserSupport: { like: 28, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Thomas Clark" }, userName: "Thomas Clark", date: "2025-07-25" },
        userRate: 5,
        userComment: "I'm very impressed with the quality. It's my new favorite jacket.",
        UserSupport: { like: 35, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sarah Lewis" }, userName: "Sarah Lewis", date: "2025-07-20" },
        userRate: 4,
        userComment: "Very stylish and practical. I get a lot of compliments on it.",
        UserSupport: { like: 22, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    images: ["https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"]
  },
  {
    id: "product_4",
    name: "Mens Casual Slim Fit",
    description: "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed on the product description.",
    category: "Men's Clothing",
    price: {
      productPrice: 15.99,
      productDiscount: "5%",
      productOff: "$0.80"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sarah Green" }, userName: "Sarah Green", date: "2025-08-10" },
        userRate: 2,
        userComment: "Not as advertised. The material feels very cheap and the sizing is way off.",
        UserSupport: { like: 4, unLike: 15 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Kevin Hall" }, userName: "Kevin Hall", date: "2025-08-05" },
        userRate: 1,
        userComment: "I would not recommend this. It started falling apart after one wash.",
        UserSupport: { like: 2, unLike: 21 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Mark Young" }, userName: "Mark Young", date: "2025-08-02" },
        userRate: 3,
        userComment: "The fit is okay, but the material is not what I expected.",
        UserSupport: { like: 8, unLike: 6 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Laura King" }, userName: "Laura King", date: "2025-07-28" },
        userRate: 2,
        userComment: "The color faded after the first wash. Very disappointed.",
        UserSupport: { like: 5, unLike: 12 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 2, threeStars: 1, fourStars: 0, fiveStars: 0 },
    mainImage: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    images: ["https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png"]
  },
  {
    id: "product_5",
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "Jewelry",
    price: {
      productPrice: 695,
      productDiscount: "20%",
      productOff: "$139.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Jessica King" }, userName: "Jessica King", date: "2025-07-30" },
        userRate: 5,
        userComment: "This bracelet is absolutely stunning! The craftsmanship is exquisite.",
        UserSupport: { like: 50, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Olivia Martinez" }, userName: "Olivia Martinez", date: "2025-07-22" },
        userRate: 5,
        userComment: "Received this as a gift and I'm in love. It's even more beautiful in person.",
        UserSupport: { like: 42, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Nancy Rodriguez" }, userName: "Nancy Rodriguez", date: "2025-07-18" },
        userRate: 5,
        userComment: "A true work of art. I get compliments every time I wear it.",
        UserSupport: { like: 38, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Karen Hernandez" }, userName: "Karen Hernandez", date: "2025-07-11" },
        userRate: 4,
        userComment: "It's a beautiful piece, but the clasp is a little difficult to open and close.",
        UserSupport: { like: 20, unLike: 5 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    images: ["https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png"]
  },
  {
    id: "product_6",
    name: "Solid Gold Petite Micropave",
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
    category: "Jewelry",
    price: {
      productPrice: 168,
      productDiscount: "15%",
      productOff: "$25.20"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Helen Scott" }, userName: "Helen Scott", date: "2025-08-12" },
        userRate: 5,
        userComment: "So delicate and beautiful. It's exactly what I was looking for.",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sandra Adams" }, userName: "Sandra Adams", date: "2025-08-08" },
        userRate: 4,
        userComment: "It's a very pretty piece, but smaller than I expected from the pictures.",
        UserSupport: { like: 15, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Donna Baker" }, userName: "Donna Baker", date: "2025-08-01" },
        userRate: 5,
        userComment: "I love it! It's the perfect size for everyday wear.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Carol Gonzalez" }, userName: "Carol Gonzalez", date: "2025-07-26" },
        userRate: 5,
        userComment: "Great quality and it sparkles beautifully. Very happy with my purchase.",
        UserSupport: { like: 28, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
    images: ["https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"]
  },
  {
    id: "product_7",
    name: "White Gold Plated Princess Ring",
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "Jewelry",
    price: {
      productPrice: 9.99,
      productDiscount: "25%",
      productOff: "$2.50"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Chloe Davis" }, userName: "Chloe Davis", date: "2025-06-11" },
        userRate: 4,
        userComment: "Very pretty for the price. It sparkles nicely but the band feels a little thin.",
        UserSupport: { like: 19, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ben Carter" }, userName: "Ben Carter", date: "2025-05-29" },
        userRate: 3,
        userComment: "It's a decent costume jewelry piece, but it turned my finger green after a few days.",
        UserSupport: { like: 10, unLike: 8 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Amanda Moore" }, userName: "Amanda Moore", date: "2025-08-14" },
        userRate: 5,
        userComment: "Surprisingly beautiful for the price. Looks much more expensive than it is.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Taylor" }, userName: "Laura Taylor", date: "2025-08-05" },
        userRate: 2,
        userComment: "The stone fell out after a week of wearing it. Disappointed.",
        UserSupport: { like: 3, unLike: 15 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
    images: ["https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png"]
  },
  {
    id: "product_8",
    name: "Rose Gold Plated Double Flared Tunnel Plug Earrings",
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "Jewelry",
    price: {
      productPrice: 10.99,
      productDiscount: "10%",
      productOff: "$1.10"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Mia Rodriguez" }, userName: "Mia Rodriguez", date: "2025-08-12" },
        userRate: 1,
        userComment: "The plating wore off almost immediately. Very disappointed with the quality.",
        UserSupport: { like: 1, unLike: 11 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Jacob Martinez" }, userName: "Jacob Martinez", date: "2025-08-01" },
        userRate: 3,
        userComment: "They look nice but are very uncomfortable to wear.",
        UserSupport: { like: 5, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Isabella Garcia" }, userName: "Isabella Garcia", date: "2025-07-28" },
        userRate: 2,
        userComment: "Caused a bad reaction on my skin. Would not recommend for sensitive ears.",
        UserSupport: { like: 2, unLike: 9 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Ethan Wilson" }, userName: "Ethan Wilson", date: "2025-07-20" },
        userRate: 4,
        userComment: "Look great, but the rose gold color faded to a copper color quickly.",
        UserSupport: { like: 8, unLike: 3 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 0 },
    mainImage: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    images: ["https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png"]
  },
  {
    id: "product_9",
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7.",
    category: "Electronics",
    price: {
      productPrice: 64,
      productDiscount: "15%",
      productOff: "$9.60"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Ethan Moore" }, userName: "Ethan Moore", date: "2025-08-01" },
        userRate: 5,
        userComment: "Works perfectly. Fast, reliable, and a great price for 2TB of storage.",
        UserSupport: { like: 40, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Grace Lee" }, userName: "Grace Lee", date: "2025-07-15" },
        userRate: 4,
        userComment: "Solid external hard drive. The transfer speeds are good for my needs.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "William Taylor" }, userName: "William Taylor", date: "2025-07-10" },
        userRate: 5,
        userComment: "A must-have for anyone needing extra storage. Small and portable.",
        UserSupport: { like: 35, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Emma Anderson" }, userName: "Emma Anderson", date: "2025-07-02" },
        userRate: 4,
        userComment: "No issues so far, it's been working great for a few months now.",
        UserSupport: { like: 20, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    images: ["https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png"]
  },
  {
    id: "product_10",
    name: "SanDisk SSD PLUS 1TB Internal SSD",
    description: "Easy upgrade for faster boot up, shutdown, application load and response. Read/write speeds of up to 535MB/s/450MB/s.",
    category: "Electronics",
    price: {
      productPrice: 109,
      productDiscount: "10%",
      productOff: "$10.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Leo Wilson" }, userName: "Leo Wilson", date: "2025-06-03" },
        userRate: 4,
        userComment: "Gave my old laptop a huge speed boost. Installation was straightforward.",
        UserSupport: { like: 33, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Noah Jackson" }, userName: "Noah Jackson", date: "2025-08-10" },
        userRate: 5,
        userComment: "Incredible difference in performance. My computer boots up in seconds now.",
        UserSupport: { like: 50, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "James White" }, userName: "James White", date: "2025-07-25" },
        userRate: 5,
        userComment: "Excellent SSD for the price. Highly recommend for a system upgrade.",
        UserSupport: { like: 45, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Lucas Harris" }, userName: "Lucas Harris", date: "2025-07-18" },
        userRate: 3,
        userComment: "It works well, but the read/write speeds are a bit lower than advertised for me.",
        UserSupport: { like: 15, unLike: 6 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
    images: ["https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png"]
  },
  {
    id: "product_11",
    name: "Silicon Power 256GB SSD 3D NAND A55",
    description: "3D NAND flash are applied to deliver high transfer speeds. The advanced SLC Cache Technology allows performance boost and longer lifespan.",
    category: "Electronics",
    price: {
      productPrice: 109,
      productDiscount: "20%",
      productOff: "$21.80"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Alex Smith" }, userName: "Alex Smith", date: "2025-07-21" },
        userRate: 5,
        userComment: "Excellent SSD for a budget build. It's incredibly fast and reliable.",
        UserSupport: { like: 62, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Emily White" }, userName: "Emily White", date: "2025-06-15" },
        userRate: 4,
        userComment: "Very satisfied with the performance boost it gave my PC. Great value.",
        UserSupport: { like: 48, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Benjamin Martin" }, userName: "Benjamin Martin", date: "2025-08-08" },
        userRate: 5,
        userComment: "Can't beat this for the price. Made my old PC feel brand new.",
        UserSupport: { like: 55, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Elijah Thompson" }, userName: "Elijah Thompson", date: "2025-07-30" },
        userRate: 5,
        userComment: "Fast, easy to install, and affordable. What more could you ask for?",
        UserSupport: { like: 60, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    images: ["https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png"]
  },
  {
    id: "product_12",
    name: "WD 4TB Gaming Drive for Playstation 4",
    description: "Expand your PS4 gaming experience, Play anywhere. Fast and easy setup with a sleek design and high capacity.",
    category: "Electronics",
    price: {
      productPrice: 114,
      productDiscount: "25%",
      productOff: "$28.50"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Michael Brown" }, userName: "Michael Brown", date: "2025-08-01" },
        userRate: 5,
        userComment: "A must-have for any serious PS4 gamer. No more deleting games to make space!",
        UserSupport: { like: 75, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Chris Johnson" }, userName: "Chris Johnson", date: "2025-07-28" },
        userRate: 5,
        userComment: "Plug and play, it's that easy. Works flawlessly and has tons of space.",
        UserSupport: { like: 68, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Mason Garcia" }, userName: "Mason Garcia", date: "2025-07-22" },
        userRate: 5,
        userComment: "Finally have enough room for all my games. This thing is a lifesaver.",
        UserSupport: { like: 80, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Logan Rodriguez" }, userName: "Logan Rodriguez", date: "2025-07-14" },
        userRate: 4,
        userComment: "Works great, but the cable it comes with is a little short.",
        UserSupport: { like: 40, unLike: 5 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
    images: ["https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png"]
  },
  {
    id: "product_13",
    name: "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin Monitor",
    description: "21.5 inches Full HD (1920 x 1080) widescreen IPS display with Radeon FreeSync technology. Zero-frame design.",
    category: "Electronics",
    price: {
      productPrice: 599,
      productDiscount: "10%",
      productOff: "$59.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Jane Doe" }, userName: "Jane Doe", date: "2025-07-19" },
        userRate: 3,
        userComment: "The picture quality is good, but the stand is very wobbly.",
        UserSupport: { like: 22, unLike: 9 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Jacob Lee" }, userName: "Jacob Lee", date: "2025-08-13" },
        userRate: 4,
        userComment: "Great monitor for the price. The colors are vibrant and the design is sleek.",
        UserSupport: { like: 30, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Olivia Walker" }, userName: "Olivia Walker", date: "2025-08-04" },
        userRate: 5,
        userComment: "Incredible value. The frameless design is perfect for a dual monitor setup.",
        UserSupport: { like: 40, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Michael Hall" }, userName: "Michael Hall", date: "2025-07-29" },
        userRate: 2,
        userComment: "Developed a dead pixel after just one month of use.",
        UserSupport: { like: 5, unLike: 18 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    images: ["https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png"]
  },
  {
    id: "product_14",
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
    description: "49 inch super ultrawide 32:9 curved gaming monitor with Quantum Dot (QLED) technology and HDR support.",
    category: "Electronics",
    price: {
      productPrice: 999.99,
      productDiscount: "15%",
      productOff: "$150.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "David Black" }, userName: "David Black", date: "2025-05-20" },
        userRate: 5,
        userComment: "Gaming on this thing is a truly immersive experience. Absolutely breathtaking.",
        UserSupport: { like: 110, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sarah Green" }, userName: "Sarah Green", date: "2025-08-10" },
        userRate: 2,
        userComment: "It's impressive, but I've had persistent issues with screen flickering.",
        UserSupport: { like: 12, unLike: 10 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Daniel Allen" }, userName: "Daniel Allen", date: "2025-08-02" },
        userRate: 5,
        userComment: "The best monitor I have ever owned. Productivity and gaming are on another level.",
        UserSupport: { like: 120, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Matthew King" }, userName: "Matthew King", date: "2025-07-24" },
        userRate: 4,
        userComment: "Amazing monitor, but you need a very powerful GPU to run games at native resolution.",
        UserSupport: { like: 80, unLike: 8 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
    images: ["https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png"]
  },
  {
    id: "product_15",
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
    description: "US standard size. Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Suitable for different seasons.",
    category: "Women's Clothing",
    price: {
      productPrice: 56.99,
      productDiscount: "10%",
      productOff: "$5.70"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Brenda Smith" }, userName: "Brenda Smith", date: "2025-08-14" },
        userRate: 5,
        userComment: "Keeps me perfectly warm and dry on the slopes. Love the color!",
        UserSupport: { like: 40, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Pamela Johnson" }, userName: "Pamela Johnson", date: "2025-08-10" },
        userRate: 4,
        userComment: "Great jacket, very versatile with the removable liner. A bit bulky though.",
        UserSupport: { like: 25, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Amanda Williams" }, userName: "Amanda Williams", date: "2025-08-05" },
        userRate: 5,
        userComment: "Excellent quality and so many useful pockets. Highly recommend.",
        UserSupport: { like: 35, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Debra Jones" }, userName: "Debra Jones", date: "2025-07-30" },
        userRate: 4,
        userComment: "Very happy with this purchase. It's great for different weather conditions.",
        UserSupport: { like: 28, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
    images: ["https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png"]
  },
  {
    id: "product_16",
    name: "Lock and Love Women's Faux Leather Moto Biker Jacket",
    description: "100% POLYURETHANE(shell) 100% POLYESTER(lining). Faux leather material for style and comfort with a removable hood.",
    category: "Women's Clothing",
    price: {
      productPrice: 29.95,
      productDiscount: "15%",
      productOff: "$4.49"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Jessica King" }, userName: "Jessica King", date: "2025-07-30" },
        userRate: 4,
        userComment: "Super stylish jacket! I get compliments every time I wear it. A little stiff at first.",
        UserSupport: { like: 29, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Kevin Hall" }, userName: "Kevin Hall", date: "2025-08-05" },
        userRate: 2,
        userComment: "The zipper broke after only a few wears. Disappointed in the quality.",
        UserSupport: { like: 3, unLike: 7 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Cynthia Brown" }, userName: "Cynthia Brown", date: "2025-08-12" },
        userRate: 5,
        userComment: "I love this jacket! The removable hood is a great feature.",
        UserSupport: { like: 35, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kimberly Taylor" }, userName: "Kimberly Taylor", date: "2025-08-08" },
        userRate: 3,
        userComment: "Looks good, but has a weird chemical smell that won't go away.",
        UserSupport: { like: 10, unLike: 6 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png",
    images: ["https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png"]
  },
  {
    id: "product_17",
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoat",
    description: "Lightweight perfect for trip or casual wear. Long sleeve with hooded, adjustable drawstring waist design.",
    category: "Women's Clothing",
    price: {
      productPrice: 39.99,
      productDiscount: "5%",
      productOff: "$2.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Deborah Davis" }, userName: "Deborah Davis", date: "2025-08-13" },
        userRate: 5,
        userComment: "I love this rain jacket! It's so stylish and keeps me dry.",
        UserSupport: { like: 33, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Stephanie Miller" }, userName: "Stephanie Miller", date: "2025-08-09" },
        userRate: 4,
        userComment: "It's very lightweight and packable, perfect for travel.",
        UserSupport: { like: 24, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Rebecca Wilson" }, userName: "Rebecca Wilson", date: "2025-08-04" },
        userRate: 5,
        userComment: "The striped lining is a really cute touch. Great fit too.",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Laura Moore" }, userName: "Laura Moore", date: "2025-07-28" },
        userRate: 3,
        userComment: "It's more of a windbreaker than a true raincoat. Not great for heavy rain.",
        UserSupport: { like: 12, unLike: 7 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
    images: ["https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png"]
  },
  {
    id: "product_18",
    name: "MBJ Women's Solid Short Sleeve Boat Neck V-Neck",
    description: "95% RAYON 5% SPANDEX, Made in USA or Imported. Lightweight fabric with great stretch for comfort.",
    category: "Women's Clothing",
    price: {
      productPrice: 9.85,
      productDiscount: "10%",
      productOff: "$0.99"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Olivia Martinez" }, userName: "Olivia Martinez", date: "2025-07-22" },
        userRate: 5,
        userComment: "This is the perfect basic tee. It's so soft and flattering, I have it in five colors!",
        UserSupport: { like: 34, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Anderson" }, userName: "Michelle Anderson", date: "2025-08-11" },
        userRate: 4,
        userComment: "Very comfortable and versatile. The material is a bit thin but not see-through.",
        UserSupport: { like: 20, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Donna Thomas" }, userName: "Donna Thomas", date: "2025-08-03" },
        userRate: 5,
        userComment: "A staple in my wardrobe. Washes well and keeps its shape.",
        UserSupport: { like: 28, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Patricia Jackson" }, userName: "Patricia Jackson", date: "2025-07-27" },
        userRate: 4,
        userComment: "Great shirt for layering or wearing on its own. Good value.",
        UserSupport: { like: 18, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
    images: ["https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png"]
  },
  {
    id: "product_19",
    name: "Opna Women's Short Sleeve Moisture Wicking Tee",
    description: "100% cationic polyester interlock. Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away.",
    category: "Women's Clothing",
    price: {
      productPrice: 7.95,
      productDiscount: "15%",
      productOff: "$1.19"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Chloe Davis" }, userName: "Chloe Davis", date: "2025-06-11" },
        userRate: 5,
        userComment: "Perfect for workouts. It's light, breathable, and keeps me dry.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Linda White" }, userName: "Linda White", date: "2025-08-14" },
        userRate: 4,
        userComment: "Great athletic shirt. The fit is a little loose, which I like for running.",
        UserSupport: { like: 15, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Barbara Harris" }, userName: "Barbara Harris", date: "2025-08-07" },
        userRate: 5,
        userComment: "Wicks sweat away really well. I have this in multiple colors.",
        UserSupport: { like: 22, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Elizabeth Martin" }, userName: "Elizabeth Martin", date: "2025-07-31" },
        userRate: 3,
        userComment: "It's okay, but the material snagged easily on my gym equipment.",
        UserSupport: { like: 6, unLike: 4 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    images: ["https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png"]
  },
  {
    id: "product_20",
    name: "DANVOUY Womens T Shirt Casual Cotton Short Sleeve",
    description: "95% Cotton, 5% Spandex. The fabric is soft and has some stretch. Features: Casual, Short Sleeve, Letter Print, V-Neck.",
    category: "Women's Clothing",
    price: {
      productPrice: 12.99,
      productDiscount: "5%",
      productOff: "$0.65"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Jennifer Thompson" }, userName: "Jennifer Thompson", date: "2025-08-12" },
        userRate: 5,
        userComment: "Super soft and comfortable t-shirt. The fit is perfect.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Susan Garcia" }, userName: "Susan Garcia", date: "2025-08-06" },
        userRate: 4,
        userComment: "Cute casual tee. I like the v-neck and the graphic print.",
        UserSupport: { like: 18, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Maria Martinez" }, userName: "Maria Martinez", date: "2025-07-29" },
        userRate: 3,
        userComment: "The material is nice, but it shrank a little bit in the wash.",
        UserSupport: { like: 9, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Karen Rodriguez" }, userName: "Karen Rodriguez", date: "2025-07-23" },
        userRate: 4,
        userComment: "A great everyday shirt. Good quality for the price.",
        UserSupport: { like: 15, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
    images: ["https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png"]
  },
  {
    id: "product_21",
    name: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "Beauty",
    price: {
      productPrice: 9.99,
      productDiscount: "10.48%",
      productOff: "$1.05"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Eleanor Collins" }, userName: "Eleanor Collins", date: "2025-04-30" },
        userRate: 3,
        userComment: "It's a bit clumpy for my taste, but it does add volume.",
        UserSupport: { like: 5, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Lucas Gordon" }, userName: "Lucas Gordon", date: "2025-04-30" },
        userRate: 4,
        userComment: "Great mascara for the price! I'm very satisfied with the results.",
        UserSupport: { like: 8, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Mary Lee" }, userName: "Mary Lee", date: "2025-08-15" },
        userRate: 5,
        userComment: "My holy grail mascara. Makes my lashes look so long and full.",
        UserSupport: { like: 30, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Jessica Davis" }, userName: "Jessica Davis", date: "2025-08-09" },
        userRate: 2,
        userComment: "It smudges under my eyes by the end of the day.",
        UserSupport: { like: 4, unLike: 10 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"]
  },
  {
    id: "product_22",
    name: "Eyeshadow Palette with Mirror",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "Beauty",
    price: {
      productPrice: 19.99,
      productDiscount: "18.19%",
      productOff: "$3.64"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Savannah Gomez" }, userName: "Savannah Gomez", date: "2025-04-30" },
        userRate: 5,
        userComment: "The colors are so pigmented and blend beautifully. A new favorite!",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Nicholas Bailey" }, userName: "Nicholas Bailey", date: "2025-04-30" },
        userRate: 1,
        userComment: "Poor quality. The eyeshadows have no pigment and are very chalky.",
        UserSupport: { like: 1, unLike: 10 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Sarah Wilson" }, userName: "Sarah Wilson", date: "2025-08-13" },
        userRate: 4,
        userComment: "A great mix of matte and shimmer shades. Perfect for day to night looks.",
        UserSupport: { like: 12, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Emily Brown" }, userName: "Emily Brown", date: "2025-08-07" },
        userRate: 3,
        userComment: "The colors are pretty but there's a lot of fallout.",
        UserSupport: { like: 6, unLike: 3 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"]
  },
  {
    id: "product_23",
    name: "Powder Canister",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "Beauty",
    price: {
      productPrice: 14.99,
      productDiscount: "15%",
      productOff: "$2.25"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Lisa Miller" }, userName: "Lisa Miller", date: "2025-08-11" },
        userRate: 5,
        userComment: "This powder sets my makeup all day without looking cakey.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Nancy Taylor" }, userName: "Nancy Taylor", date: "2025-08-05" },
        userRate: 4,
        userComment: "Good for controlling oil, but it can cause a bit of flashback in photos.",
        UserSupport: { like: 14, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Betty Anderson" }, userName: "Betty Anderson", date: "2025-07-30" },
        userRate: 5,
        userComment: "A little goes a long way. Leaves a beautiful, smooth finish.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Helen Thomas" }, userName: "Helen Thomas", date: "2025-07-24" },
        userRate: 4,
        userComment: "Great setting powder for the price. I would repurchase.",
        UserSupport: { like: 16, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"]
  },
  {
    id: "product_24",
    name: "Red Lipstick",
    description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "Beauty",
    price: {
      productPrice: 12.99,
      productDiscount: "12.16%",
      productOff: "$1.58"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Liam Garcia" }, userName: "Liam Garcia", date: "2025-04-30" },
        userRate: 4,
        userComment: "A beautiful shade of red and it feels comfortable on the lips.",
        UserSupport: { like: 11, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sandra Moore" }, userName: "Sandra Moore", date: "2025-08-14" },
        userRate: 5,
        userComment: "The perfect red! It lasts for hours without drying out my lips.",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Donna Jackson" }, userName: "Donna Jackson", date: "2025-08-08" },
        userRate: 3,
        userComment: "The color is stunning but it bleeds a little without a lip liner.",
        UserSupport: { like: 7, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Carol White" }, userName: "Carol White", date: "2025-08-01" },
        userRate: 5,
        userComment: "I get so many compliments when I wear this. It's my go-to red lipstick.",
        UserSupport: { like: 20, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"]
  },
  {
    id: "product_25",
    name: "Red Nail Polish",
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "Beauty",
    price: {
      productPrice: 8.99,
      productDiscount: "11.44%",
      productOff: "$1.03"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Clara Berry" }, userName: "Clara Berry", date: "2025-04-30" },
        userRate: 1,
        userComment: "Chipped within hours of applying it. Very unhappy with my purchase!",
        UserSupport: { like: 2, unLike: 9 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ruth Harris" }, userName: "Ruth Harris", date: "2025-08-12" },
        userRate: 4,
        userComment: "A beautiful, classic red. It lasts about 4-5 days before chipping.",
        UserSupport: { like: 10, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sharon Martin" }, userName: "Sharon Martin", date: "2025-08-06" },
        userRate: 2,
        userComment: "The formula is very streaky. It took three coats to get it opaque.",
        UserSupport: { like: 3, unLike: 6 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Michelle Thompson" }, userName: "Michelle Thompson", date: "2025-07-29" },
        userRate: 5,
        userComment: "Love this nail polish! It dries quickly and has a beautiful glossy finish.",
        UserSupport: { like: 15, unLike: 0 }
      }
    ],
    overRate: { oneStar: 1, twoStars: 1, threeStars: 0, fourStars: 1, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"]
  },
  {
    id: "product_26",
    name: "Calvin Klein CK One",
    description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "Fragrances",
    price: {
      productPrice: 49.99,
      productDiscount: "20%",
      productOff: "$10.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Daniel Cook" }, userName: "Daniel Cook", date: "2025-04-30" },
        userRate: 4,
        userComment: "Fast shipping and a great price for a classic scent.",
        UserSupport: { like: 14, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jacob Cooper" }, userName: "Jacob Cooper", date: "2025-04-30" },
        userRate: 3,
        userComment: "It smells good, but the scent doesn't last very long on me.",
        UserSupport: { like: 6, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Paul King" }, userName: "Paul King", date: "2025-08-11" },
        userRate: 5,
        userComment: "My go-to fragrance for years. Clean, fresh, and not overpowering.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Mark Wright" }, userName: "Mark Wright", date: "2025-08-04" },
        userRate: 4,
        userComment: "A timeless classic. Always get compliments when I wear it.",
        UserSupport: { like: 18, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
    ]
  },
  {
    id: "product_27",
    name: "Chanel Coco Noir Eau De Parfum",
    description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "Fragrances",
    price: {
      productPrice: 129.99,
      productDiscount: "16.51%",
      productOff: "$21.46"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kimberly Green" }, userName: "Kimberly Green", date: "2025-08-15" },
        userRate: 5,
        userComment: "Absolutely intoxicating. My signature scent for special occasions.",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Angela Scott" }, userName: "Angela Scott", date: "2025-08-09" },
        userRate: 5,
        userComment: "Elegant, sophisticated, and long-lasting. Worth every penny.",
        UserSupport: { like: 28, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Melissa Adams" }, userName: "Melissa Adams", date: "2025-08-02" },
        userRate: 4,
        userComment: "A beautiful and complex fragrance, but a bit too strong for me for everyday wear.",
        UserSupport: { like: 15, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Cynthia Baker" }, userName: "Cynthia Baker", date: "2025-07-27" },
        userRate: 5,
        userComment: "This is a masterpiece from Chanel. Timeless and alluring.",
        UserSupport: { like: 35, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
    ]
  },
  {
    id: "product_28",
    name: "Dior J'adore",
    description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "Fragrances",
    price: {
      productPrice: 89.99,
      productDiscount: "14.72%",
      productOff: "$13.25"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Penelope Harper" }, userName: "Penelope Harper", date: "2025-04-30" },
        userRate: 5,
        userComment: "My absolute favorite perfume. It's elegant, timeless, and I always get compliments.",
        UserSupport: { like: 22, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Amy Nelson" }, userName: "Amy Nelson", date: "2025-08-13" },
        userRate: 5,
        userComment: "A classic for a reason. It's a beautiful floral scent that's not overwhelming.",
        UserSupport: { like: 20, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Kathleen Carter" }, userName: "Kathleen Carter", date: "2025-08-07" },
        userRate: 4,
        userComment: "Lovely fragrance, but the scent doesn't seem to last as long as it used to.",
        UserSupport: { like: 12, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Laura Mitchell" }, userName: "Laura Mitchell", date: "2025-08-01" },
        userRate: 5,
        userComment: "This is my signature scent. I feel so glamorous when I wear it.",
        UserSupport: { like: 28, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/3.webp"
    ]
  },
  {
    id: "product_29",
    name: "Dolce Shine Eau de Parfum",
    description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "Fragrances",
    price: {
      productPrice: 69.99,
      productDiscount: "15%",
      productOff: "$10.50"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Janet Perez" }, userName: "Janet Perez", date: "2025-08-10" },
        userRate: 5,
        userComment: "Smells like a tropical vacation in a bottle! I love it.",
        UserSupport: { like: 24, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Pamela Roberts" }, userName: "Pamela Roberts", date: "2025-08-04" },
        userRate: 4,
        userComment: "A very fresh and fruity scent, perfect for summer. Doesn't last all day though.",
        UserSupport: { like: 16, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Debra Turner" }, userName: "Debra Turner", date: "2025-07-28" },
        userRate: 5,
        userComment: "This is such a happy and uplifting fragrance. My new favorite.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Carol Phillips" }, userName: "Carol Phillips", date: "2025-07-21" },
        userRate: 3,
        userComment: "It's a nice scent, but a little too sweet for my personal taste.",
        UserSupport: { like: 8, unLike: 5 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/3.webp"
    ]
  },
  {
    id: "product_30",
    name: "Gucci Bloom Eau de Parfum",
    description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: "Fragrances",
    price: {
      productPrice: 79.99,
      productDiscount: "14.39%",
      productOff: "$11.51"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Addison Wright" }, userName: "Addison Wright", date: "2025-04-30" },
        userRate: 4,
        userComment: "A beautiful floral scent. It's very strong, so a little goes a long way.",
        UserSupport: { like: 18, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Christine Campbell" }, userName: "Christine Campbell", date: "2025-08-15" },
        userRate: 5,
        userComment: "Smells like a beautiful garden. I'm obsessed with this perfume.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Samantha Parker" }, userName: "Samantha Parker", date: "2025-08-08" },
        userRate: 5,
        userComment: "This is a very unique and sophisticated floral. I love it.",
        UserSupport: { like: 22, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Catherine Evans" }, userName: "Catherine Evans", date: "2025-08-02" },
        userRate: 4,
        userComment: "A lovely perfume for spring and summer. Very feminine and romantic.",
        UserSupport: { like: 19, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/2.webp",
      "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/3.webp"
    ]
  },
  {
    id: "product_31",
    name: "Annibale Colombo Bed",
    description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "Furniture",
    price: {
      productPrice: 1899.99,
      productDiscount: "8.57%",
      productOff: "$162.83"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Rachel Edwards" }, userName: "Rachel Edwards", date: "2025-08-14" },
        userRate: 5,
        userComment: "This bed is a work of art. The craftsmanship is impeccable.",
        UserSupport: { like: 40, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Heather Collins" }, userName: "Heather Collins", date: "2025-08-09" },
        userRate: 5,
        userComment: "Absolutely stunning. It completely transformed our bedroom.",
        UserSupport: { like: 35, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Diane Stewart" }, userName: "Diane Stewart", date: "2025-08-03" },
        userRate: 4,
        userComment: "A beautiful and sturdy bed frame. The assembly was a bit challenging though.",
        UserSupport: { like: 20, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Julie Morris" }, userName: "Julie Morris", date: "2025-07-28" },
        userRate: 5,
        userComment: "Worth every penny for the quality and design. We are thrilled with it.",
        UserSupport: { like: 45, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/3.webp"
    ]
  },
  {
    id: "product_32",
    name: "Annibale Colombo Sofa",
    description: "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    category: "Furniture",
    price: {
      productPrice: 2499.99,
      productDiscount: "18%",
      productOff: "$450.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Lillian Bishop" }, userName: "Lillian Bishop", date: "2025-04-30" },
        userRate: 5,
        userComment: "Stunning sofa and surprisingly comfortable. It's the centerpiece of our living room.",
        UserSupport: { like: 19, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Virginia Murphy" }, userName: "Virginia Murphy", date: "2025-08-12" },
        userRate: 5,
        userComment: "The quality of the leather and construction is outstanding. A true luxury piece.",
        UserSupport: { like: 30, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Beverly Bailey" }, userName: "Beverly Bailey", date: "2025-08-06" },
        userRate: 4,
        userComment: "It's a beautiful sofa, but it's a bit firmer than I would prefer.",
        UserSupport: { like: 15, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Denise Rivera" }, userName: "Denise Rivera", date: "2025-07-31" },
        userRate: 5,
        userComment: "This sofa is a statement piece. We get so many compliments on it.",
        UserSupport: { like: 35, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp"
    ]
  },
  {
    id: "product_33",
    name: "Bedside Table African Cherry",
    description: "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    category: "Furniture",
    price: {
      productPrice: 299.99,
      productDiscount: "19.09%",
      productOff: "$57.27"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Judy Cooper" }, userName: "Judy Cooper", date: "2025-08-10" },
        userRate: 5,
        userComment: "Beautifully made and the wood grain is stunning. Perfect size.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Mildred Richardson" }, userName: "Mildred Richardson", date: "2025-08-04" },
        userRate: 4,
        userComment: "Solid wood and looks great. The drawer is a little sticky though.",
        UserSupport: { like: 14, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Doris Cox" }, userName: "Doris Cox", date: "2025-07-29" },
        userRate: 5,
        userComment: "Came fully assembled and in perfect condition. I love it.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Frances Howard" }, userName: "Frances Howard", date: "2025-07-22" },
        userRate: 4,
        userComment: "A very elegant bedside table. It completes the look of our bedroom.",
        UserSupport: { like: 18, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/3.webp"
    ]
  },
  {
    id: "product_34",
    name: "Knoll Saarinen Executive Conference Chair",
    description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "Furniture",
    price: {
      productPrice: 499.99,
      productDiscount: "2.01%",
      productOff: "$10.05"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Elena Long" }, userName: "Elena Long", date: "2025-04-30" },
        userRate: 5,
        userComment: "An iconic chair. It's comfortable for long meetings and looks incredibly stylish.",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Joan Ward" }, userName: "Joan Ward", date: "2025-08-11" },
        userRate: 5,
        userComment: "A design classic. Very comfortable and well-made.",
        UserSupport: { like: 20, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Theresa Diaz" }, userName: "Theresa Diaz", date: "2025-08-05" },
        userRate: 3,
        userComment: "Looks great, but not as ergonomic as I had hoped for all-day use.",
        UserSupport: { like: 8, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Sara Brooks" }, userName: "Sara Brooks", date: "2025-07-30" },
        userRate: 4,
        userComment: "A very stylish addition to our conference room. Everyone loves them.",
        UserSupport: { like: 15, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/3.webp"
    ]
  },
  {
    id: "product_35",
    name: "Wooden Bathroom Sink With Mirror",
    description: "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    category: "Furniture",
    price: {
      productPrice: 799.99,
      productDiscount: "8.8%",
      productOff: "$70.40"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Aria Parker" }, userName: "Aria Parker", date: "2025-04-30" },
        userRate: 5,
        userComment: "So pleased with this purchase. It completely transformed our bathroom!",
        UserSupport: { like: 9, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Lori Hughes" }, userName: "Lori Hughes", date: "2025-08-14" },
        userRate: 5,
        userComment: "A beautiful and unique piece. We always get compliments from guests.",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Ann Price" }, userName: "Ann Price", date: "2025-08-08" },
        userRate: 3,
        userComment: "Looks amazing, but you have to be careful to wipe up water immediately to avoid spots.",
        UserSupport: { like: 6, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Jacqueline Sanders" }, userName: "Jacqueline Sanders", date: "2025-08-02" },
        userRate: 4,
        userComment: "Very stylish and well-made. It was a great choice for our powder room.",
        UserSupport: { like: 12, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/3.webp"
    ]
  },
  {
    id: "product_36",
    name: "Apple",
    description: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    category: "Groceries",
    price: {
      productPrice: 1.99,
      productDiscount: "12.62%",
      productOff: "$0.25"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Cheryl Patterson" }, userName: "Cheryl Patterson", date: "2025-08-15" },
        userRate: 5,
        userComment: "Always fresh and crisp. A great healthy snack.",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Megan Hughes" }, userName: "Megan Hughes", date: "2025-08-10" },
        userRate: 4,
        userComment: "Good quality apples, but a few of them had bruises.",
        UserSupport: { like: 5, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Evelyn Simmons" }, userName: "Evelyn Simmons", date: "2025-08-05" },
        userRate: 5,
        userComment: "Perfect for making apple pie. Sweet and juicy.",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Andrea Foster" }, userName: "Andrea Foster", date: "2025-07-30" },
        userRate: 4,
        userComment: "A staple in our weekly grocery order.",
        UserSupport: { like: 8, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"]
  },
  {
    id: "product_37",
    name: "Beef Steak",
    description: "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    category: "Groceries",
    price: {
      productPrice: 12.99,
      productDiscount: "15%",
      productOff: "$1.95"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Natalie Harris" }, userName: "Natalie Harris", date: "2025-04-30" },
        userRate: 5,
        userComment: "Excellent cut of meat. Very tender and flavorful.",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Arthur Bryant" }, userName: "Arthur Bryant", date: "2025-08-13" },
        userRate: 5,
        userComment: "Grilled up perfectly. Great marbling and taste.",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Carl Alexander" }, userName: "Carl Alexander", date: "2025-08-07" },
        userRate: 3,
        userComment: "A bit tougher than I expected for the price.",
        UserSupport: { like: 4, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Walter Russell" }, userName: "Walter Russell", date: "2025-08-01" },
        userRate: 4,
        userComment: "Good quality steak, but a little on the thin side.",
        UserSupport: { like: 9, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"]
  },
  {
    id: "product_38",
    name: "Cat Food",
    description: "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    category: "Groceries",
    price: {
      productPrice: 8.99,
      productDiscount: "9.58%",
      productOff: "$0.86"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Roger Griffin" }, userName: "Roger Griffin", date: "2025-08-12" },
        userRate: 5,
        userComment: "My cat is a picky eater, but he loves this food.",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Jean Hayes" }, userName: "Jean Hayes", date: "2025-08-06" },
        userRate: 4,
        userComment: "Good ingredients, and my cat seems to enjoy it.",
        UserSupport: { like: 10, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Keith Diaz" }, userName: "Keith Diaz", date: "2025-07-31" },
        userRate: 2,
        userComment: "Unfortunately, this gave my cat an upset stomach.",
        UserSupport: { like: 2, unLike: 7 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Terry Wallace" }, userName: "Terry Wallace", date: "2025-07-25" },
        userRate: 4,
        userComment: "A good quality cat food for a reasonable price.",
        UserSupport: { like: 12, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 0, fourStars: 2, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"]
  },
  {
    id: "product_39",
    name: "Chicken Meat",
    description: "Fresh and tender chicken meat, suitable for various culinary preparations.",
    category: "Groceries",
    price: {
      productPrice: 9.99,
      productDiscount: "13.7%",
      productOff: "$1.37"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Mateo Bennett" }, userName: "Mateo Bennett", date: "2025-04-30" },
        userRate: 5,
        userComment: "Great quality chicken. Always fresh and tastes great.",
        UserSupport: { like: 8, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Dennis Woods" }, userName: "Dennis Woods", date: "2025-08-14" },
        userRate: 5,
        userComment: "Very fresh and tender. Perfect for grilling.",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Jerry Barnes" }, userName: "Jerry Barnes", date: "2025-08-09" },
        userRate: 4,
        userComment: "Good quality chicken, no complaints.",
        UserSupport: { like: 7, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Henry Fisher" }, userName: "Henry Fisher", date: "2025-08-03" },
        userRate: 4,
        userComment: "Consistently good quality. Our go-to for chicken.",
        UserSupport: { like: 9, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/2.webp"
    ]
  },
  {
    id: "product_40",
    name: "Cooking Oil",
    description: "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    category: "Groceries",
    price: {
      productPrice: 4.99,
      productDiscount: "9.33%",
      productOff: "$0.47"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Douglas Henderson" }, userName: "Douglas Henderson", date: "2025-08-12" },
        userRate: 5,
        userComment: "A great all-purpose cooking oil. Good value for the size.",
        UserSupport: { like: 14, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Peter Coleman" }, userName: "Peter Coleman", date: "2025-08-07" },
        userRate: 4,
        userComment: "Good for high-heat cooking. No strong flavor.",
        UserSupport: { like: 9, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Adam Jenkins" }, userName: "Adam Jenkins", date: "2025-08-01" },
        userRate: 4,
        userComment: "It's cooking oil, it does the job. No issues.",
        UserSupport: { like: 7, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Zachary Perry" }, userName: "Zachary Perry", date: "2025-07-26" },
        userRate: 5,
        userComment: "My preferred brand for cooking oil. Always reliable.",
        UserSupport: { like: 11, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"]
  },
  {
    id: "product_41",
    name: "Cucumber",
    description: "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    category: "Groceries",
    price: {
      productPrice: 1.49,
      productDiscount: "5%",
      productOff: "$0.07"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Nathan Powell" }, userName: "Nathan Powell", date: "2025-08-15" },
        userRate: 5,
        userComment: "Very fresh and crunchy. Perfect for salads.",
        UserSupport: { like: 9, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Kyle Long" }, userName: "Kyle Long", date: "2025-08-11" },
        userRate: 4,
        userComment: "Good quality, but they seem to go soft a little faster than I'd like.",
        UserSupport: { like: 4, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Justin Patterson" }, userName: "Justin Patterson", date: "2025-08-06" },
        userRate: 5,
        userComment: "Crisp, fresh, and delicious.",
        UserSupport: { like: 7, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Brandon Hughes" }, userName: "Brandon Hughes", date: "2025-07-31" },
        userRate: 3,
        userComment: "The cucumber I received was a little bit mushy on one end.",
        UserSupport: { like: 2, unLike: 3 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"]
  },
  {
    id: "product_42",
    name: "Dog Food",
    description: "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    category: "Groceries",
    price: {
      productPrice: 10.99,
      productDiscount: "10.27%",
      productOff: "$1.13"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Nova Cooper" }, userName: "Nova Cooper", date: "2025-04-30" },
        userRate: 4,
        userComment: "My dog loves this food, and her coat has never been shinier.",
        UserSupport: { like: 14, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Austin Flores" }, userName: "Austin Flores", date: "2025-08-13" },
        userRate: 5,
        userComment: "My dog can't get enough of this stuff. Great ingredients.",
        UserSupport: { like: 16, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jordan Washington" }, userName: "Jordan Washington", date: "2025-08-08" },
        userRate: 3,
        userComment: "My dog ate it, but didn't seem as excited about it as his old food.",
        UserSupport: { like: 5, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Evan Butler" }, userName: "Evan Butler", date: "2025-08-02" },
        userRate: 4,
        userComment: "Good quality dog food that doesn't upset my dog's sensitive stomach.",
        UserSupport: { like: 11, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"]
  },
  {
    id: "product_43",
    name: "Eggs",
    description: "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    category: "Groceries",
    price: {
      productPrice: 2.99,
      productDiscount: "13%",
      productOff: "$0.39"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kevin Simmons" }, userName: "Kevin Simmons", date: "2025-08-14" },
        userRate: 5,
        userComment: "Always fresh and none are ever broken. Great for breakfast.",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Christian Foster" }, userName: "Christian Foster", date: "2025-08-09" },
        userRate: 4,
        userComment: "Good quality eggs. The yolks have a nice dark color.",
        UserSupport: { like: 8, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Gerald Gonzales" }, userName: "Gerald Gonzales", date: "2025-08-04" },
        userRate: 5,
        userComment: "A staple in my kitchen. Never had any issues.",
        UserSupport: { like: 9, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Dylan Bryant" }, userName: "Dylan Bryant", date: "2025-07-29" },
        userRate: 4,
        userComment: "Fresh eggs at a good price. What's not to like?",
        UserSupport: { like: 7, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"]
  },
  {
    id: "product_44",
    name: "Fish Steak",
    description: "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    category: "Groceries",
    price: {
      productPrice: 14.99,
      productDiscount: "4.23%",
      productOff: "$0.63"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Ethan Alexander" }, userName: "Ethan Alexander", date: "2025-08-13" },
        userRate: 5,
        userComment: "Very fresh and tasted delicious. Held up well on the grill.",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Logan Russell" }, userName: "Logan Russell", date: "2025-08-08" },
        userRate: 3,
        userComment: "It was okay, but had a slightly fishier taste than I prefer.",
        UserSupport: { like: 4, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Owen Griffin" }, userName: "Owen Griffin", date: "2025-08-03" },
        userRate: 4,
        userComment: "Good quality fish. A bit pricey, but worth it for the taste.",
        UserSupport: { like: 9, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Caleb Diaz" }, userName: "Caleb Diaz", date: "2025-07-28" },
        userRate: 5,
        userComment: "Excellent flavor and texture. Pan-seared it with lemon and herbs.",
        UserSupport: { like: 11, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"]
  },
  {
    id: "product_45",
    name: "Green Bell Pepper",
    description: "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    category: "Groceries",
    price: {
      productPrice: 1.29,
      productDiscount: "5%",
      productOff: "$0.06"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Ryan Hayes" }, userName: "Ryan Hayes", date: "2025-08-15" },
        userRate: 5,
        userComment: "Fresh, crisp, and perfect for stir-fries.",
        UserSupport: { like: 8, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Adrian Wallace" }, userName: "Adrian Wallace", date: "2025-08-10" },
        userRate: 4,
        userComment: "Good quality pepper. Arrived fresh.",
        UserSupport: { like: 6, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Aaron Woods" }, userName: "Aaron Woods", date: "2025-08-05" },
        userRate: 3,
        userComment: "Mine was a little soft and had a brown spot.",
        UserSupport: { like: 2, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Isaac Barnes" }, userName: "Isaac Barnes", date: "2025-07-31" },
        userRate: 5,
        userComment: "Always receive fresh and firm bell peppers.",
        UserSupport: { like: 7, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"]
  },
  {
    id: "product_46",
    name: "Green Chili Pepper",
    description: "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    category: "Groceries",
    price: {
      productPrice: 0.99,
      productDiscount: "15%",
      productOff: "$0.15"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Henry Fisher" }, userName: "Henry Fisher", date: "2025-08-14" },
        userRate: 5,
        userComment: "Perfect amount of heat for my chili. Very fresh.",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Walter Henderson" }, userName: "Walter Henderson", date: "2025-08-09" },
        userRate: 4,
        userComment: "Good and spicy, but I wish they were a little bigger.",
        UserSupport: { like: 6, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Gabriel Coleman" }, userName: "Gabriel Coleman", date: "2025-08-04" },
        userRate: 5,
        userComment: "Nice and hot! Just what I needed for my salsa.",
        UserSupport: { like: 9, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Samuel Jenkins" }, userName: "Samuel Jenkins", date: "2025-07-29" },
        userRate: 4,
        userComment: "Fresh peppers with a good kick.",
        UserSupport: { like: 7, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"]
  },
  {
    id: "product_47",
    name: "Honey Jar",
    description: "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    category: "Groceries",
    price: {
      productPrice: 6.99,
      productDiscount: "14.4%",
      productOff: "$1.01"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Frank Perry" }, userName: "Frank Perry", date: "2025-08-13" },
        userRate: 5,
        userComment: "Delicious honey with a great flavor. Perfect in my tea.",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Raymond Powell" }, userName: "Raymond Powell", date: "2025-08-08" },
        userRate: 4,
        userComment: "Good quality honey. I like that it's in a glass jar.",
        UserSupport: { like: 10, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Patrick Long" }, userName: "Patrick Long", date: "2025-08-03" },
        userRate: 5,
        userComment: "This honey is so good. I use it on everything from toast to yogurt.",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Scott Patterson" }, userName: "Scott Patterson", date: "2025-07-28" },
        userRate: 4,
        userComment: "Tastes great, but it crystallized a bit faster than other honeys I've bought.",
        UserSupport: { like: 8, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"]
  },
  {
    id: "product_48",
    name: "Ice Cream",
    description: "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    category: "Groceries",
    price: {
      productPrice: 5.49,
      productDiscount: "8.69%",
      productOff: "$0.48"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sadie Morales" }, userName: "Sadie Morales", date: "2025-04-30" },
        userRate: 5,
        userComment: "So creamy and delicious! Highly impressed with the flavor.",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Shawn Hughes" }, userName: "Shawn Hughes", date: "2025-08-12" },
        userRate: 5,
        userComment: "This is my new favorite ice cream. The texture is amazing.",
        UserSupport: { like: 14, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Jason Price" }, userName: "Jason Price", date: "2025-08-07" },
        userRate: 3,
        userComment: "The flavor was good, but mine had a bit of an icy texture.",
        UserSupport: { like: 5, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Jose Sanders" }, userName: "Jose Sanders", date: "2025-08-01" },
        userRate: 4,
        userComment: "A great treat for a hot day. The whole family enjoyed it.",
        UserSupport: { like: 11, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/2.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/3.webp",
      "https://cdn.dummyjson.com/product-images/groceries/ice-cream/4.webp"
    ]
  },
  {
    id: "product_49",
    name: "Juice",
    description: "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    category: "Groceries",
    price: {
      productPrice: 3.99,
      productDiscount: "12.06%",
      productOff: "$0.48"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Jeffrey Patterson" }, userName: "Jeffrey Patterson", date: "2025-08-15" },
        userRate: 5,
        userComment: "Tastes fresh and not too sweet. Perfect for breakfast.",
        UserSupport: { like: 12, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Gary Simmons" }, userName: "Gary Simmons", date: "2025-08-10" },
        userRate: 4,
        userComment: "Good juice, but I wish it was 100% juice without any added sugar.",
        UserSupport: { like: 8, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Stephen Foster" }, userName: "Stephen Foster", date: "2025-08-05" },
        userRate: 4,
        userComment: "The kids love it. A good staple to have in the fridge.",
        UserSupport: { like: 9, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Timothy Gonzales" }, userName: "Timothy Gonzales", date: "2025-07-30" },
        userRate: 5,
        userComment: "Very refreshing and has a great flavor.",
        UserSupport: { like: 11, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"]
  },
  {
    id: "product_50",
    name: "Kiwi",
    description: "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    category: "Groceries",
    price: {
      productPrice: 2.49,
      productDiscount: "15.22%",
      productOff: "$0.38"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Eric Bryant" }, userName: "Eric Bryant", date: "2025-08-14" },
        userRate: 5,
        userComment: "Perfectly ripe and sweet. Delicious!",
        UserSupport: { like: 10, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Jonathan Alexander" }, userName: "Jonathan Alexander", date: "2025-08-09" },
        userRate: 3,
        userComment: "They were a little too hard and took a long time to ripen.",
        UserSupport: { like: 3, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Larry Russell" }, userName: "Larry Russell", date: "2025-08-04" },
        userRate: 4,
        userComment: "Sweet and tangy. A great addition to my fruit salads.",
        UserSupport: { like: 8, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Justin Griffin" }, userName: "Justin Griffin", date: "2025-07-29" },
        userRate: 5,
        userComment: "Excellent quality kiwis. I buy them every week.",
        UserSupport: { like: 9, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp",
    images: ["https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"]
  },
  {
    id: "product_51",
    name: "Classic Red Pullover Hoodie",
    description: "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit.",
    category: "Clothes",
    price: {
      productPrice: 9.99,
      productDiscount: "22%",
      productOff: "$2.20"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Brian Diaz" }, userName: "Brian Diaz", date: "2025-08-15" },
        userRate: 5,
        userComment: "Love the vibrant color. It's so comfortable and soft.",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Ronald Hayes" }, userName: "Ronald Hayes", date: "2025-08-10" },
        userRate: 4,
        userComment: "Great hoodie for the price. The material feels nice.",
        UserSupport: { like: 12, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Anthony Wallace" }, userName: "Anthony Wallace", date: "2025-08-05" },
        userRate: 3,
        userComment: "It fits a little smaller than I expected. I would size up.",
        UserSupport: { like: 7, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jason Woods" }, userName: "Jason Woods", date: "2025-07-30" },
        userRate: 4,
        userComment: "A good quality hoodie that has held up well in the wash.",
        UserSupport: { like: 10, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/1twoaDy.jpeg",
    images: [
      "https://i.imgur.com/1twoaDy.jpeg",
      "https://i.imgur.com/FDwQgLy.jpeg",
      "https://i.imgur.com/kg1ZhhH.jpeg"
    ]
  },
  {
    id: "product_52",
    name: "Classic Heather Gray Hoodie",
    description: "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in.",
    category: "Clothes",
    price: {
      productPrice: 69,
      productDiscount: "5%",
      productOff: "$3.45"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Michael Brown" }, userName: "Michael Brown", date: "2025-08-01" },
        userRate: 5,
        userComment: "My new favorite hoodie. It's so comfortable and the quality is top-notch.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Kevin Fisher" }, userName: "Kevin Fisher", date: "2025-08-14" },
        userRate: 4,
        userComment: "A great basic hoodie. It's soft and fits true to size.",
        UserSupport: { like: 18, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Donald Henderson" }, userName: "Donald Henderson", date: "2025-08-08" },
        userRate: 5,
        userComment: "Excellent quality and very comfortable. I wear it all the time.",
        UserSupport: { like: 22, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "George Coleman" }, userName: "George Coleman", date: "2025-08-03" },
        userRate: 4,
        userComment: "Good value for a simple, classic hoodie.",
        UserSupport: { like: 15, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/cHddUCu.jpeg",
    images: [
      "https://i.imgur.com/cHddUCu.jpeg",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg"
    ]
  },
  {
    id: "product_53",
    name: "Classic Grey Hooded Sweatshirt",
    description: "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit.",
    category: "Clothes",
    price: {
      productPrice: 90,
      productDiscount: "10%",
      productOff: "$9.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Paul Jenkins" }, userName: "Paul Jenkins", date: "2025-08-12" },
        userRate: 5,
        userComment: "High-quality material and a great fit. Very comfortable.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Mark Perry" }, userName: "Mark Perry", date: "2025-08-07" },
        userRate: 4,
        userComment: "A solid hoodie for the price. Not too thick, not too thin.",
        UserSupport: { like: 14, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Steven Powell" }, userName: "Steven Powell", date: "2025-08-02" },
        userRate: 5,
        userComment: "My go-to sweatshirt for lounging around the house.",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Kenneth Long" }, userName: "Kenneth Long", date: "2025-07-27" },
        userRate: 4,
        userComment: "It's a nice basic hoodie. The color is exactly as pictured.",
        UserSupport: { like: 11, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/R2PN9Wq.jpeg",
    images: [
      "https://i.imgur.com/R2PN9Wq.jpeg",
      "https://i.imgur.com/IvxMPFr.jpeg",
      "https://i.imgur.com/7eW9nXP.jpeg"
    ]
  },
  {
    id: "product_54",
    name: "Classic Black Hooded Sweatshirt",
    description: "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood.",
    category: "Clothes",
    price: {
      productPrice: 79,
      productDiscount: "30%",
      productOff: "$23.70"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Andrew Patterson" }, userName: "Andrew Patterson", date: "2025-08-15" },
        userRate: 5,
        userComment: "The perfect black hoodie. It's soft, comfortable, and looks great.",
        UserSupport: { like: 24, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Joshua Hughes" }, userName: "Joshua Hughes", date: "2025-08-10" },
        userRate: 4,
        userComment: "A classic staple. Good quality and fits well.",
        UserSupport: { like: 17, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Christopher Simmons" }, userName: "Christopher Simmons", date: "2025-08-05" },
        userRate: 5,
        userComment: "I'm very happy with this purchase. It's a high-quality hoodie.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Joseph Foster" }, userName: "Joseph Foster", date: "2025-07-30" },
        userRate: 4,
        userComment: "Good material, but it picks up a lot of lint.",
        UserSupport: { like: 12, unLike: 3 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/cSytoSD.jpeg",
    images: [
      "https://i.imgur.com/cSytoSD.jpeg",
      "https://i.imgur.com/WwKucXb.jpeg",
      "https://i.imgur.com/cE2Dxh9.jpeg"
    ]
  },
  {
    id: "product_55",
    name: "Classic Comfort Fit Joggers",
    description: "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit.",
    category: "Clothes",
    price: {
      productPrice: 25,
      productDiscount: "10%",
      productOff: "$2.50"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Chris Johnson" }, userName: "Chris Johnson", date: "2025-07-28" },
        userRate: 4,
        userComment: "Really comfortable joggers for lounging or running errands.",
        UserSupport: { like: 16, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Daniel Gonzales" }, userName: "Daniel Gonzales", date: "2025-08-13" },
        userRate: 5,
        userComment: "My new favorite pair of joggers. The material is so soft.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Matthew Bryant" }, userName: "Matthew Bryant", date: "2025-08-07" },
        userRate: 4,
        userComment: "Good fit and very comfortable. I would buy them again.",
        UserSupport: { like: 14, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "David Alexander" }, userName: "David Alexander", date: "2025-08-01" },
        userRate: 3,
        userComment: "They're comfortable, but they started pilling after a few washes.",
        UserSupport: { like: 8, unLike: 4 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/ZKGofuB.jpeg",
    images: [
      "https://i.imgur.com/ZKGofuB.jpeg",
      "https://i.imgur.com/GJi73H0.jpeg",
      "https://i.imgur.com/633Fqrz.jpeg"
    ]
  },
  {
    id: "product_56",
    name: "Classic Comfort Drawstring Joggers",
    description: "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric and convenient side pockets.",
    category: "Clothes",
    price: {
      productPrice: 79,
      productDiscount: "15%",
      productOff: "$11.85"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Anthony Russell" }, userName: "Anthony Russell", date: "2025-08-12" },
        userRate: 5,
        userComment: "Incredibly comfortable. I could live in these.",
        UserSupport: { like: 19, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Robert Griffin" }, userName: "Robert Griffin", date: "2025-08-06" },
        userRate: 4,
        userComment: "Great joggers, but they run a little long on me.",
        UserSupport: { like: 13, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Michael Diaz" }, userName: "Michael Diaz", date: "2025-07-31" },
        userRate: 5,
        userComment: "The fabric is amazing. So soft and has a good amount of stretch.",
        UserSupport: { like: 17, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "William Hayes" }, userName: "William Hayes", date: "2025-07-25" },
        userRate: 4,
        userComment: "Very happy with this purchase. Good quality and comfortable fit.",
        UserSupport: { like: 11, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/mp3rUty.jpeg",
    images: [
      "https://i.imgur.com/mp3rUty.jpeg",
      "https://i.imgur.com/JQRGIc2.jpeg"
    ]
  },
  {
    id: "product_57",
    name: "Classic Red Jogger Sweatpants",
    description: "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging. Made with soft, durable fabric, these joggers feature a snug waistband and practical side pockets.",
    category: "Clothes",
    price: {
      productPrice: 98,
      productDiscount: "20%",
      productOff: "$19.60"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "James Wallace" }, userName: "James Wallace", date: "2025-08-14" },
        userRate: 5,
        userComment: "Love the color! They're super comfortable and look great.",
        UserSupport: { like: 21, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "John Woods" }, userName: "John Woods", date: "2025-08-09" },
        userRate: 4,
        userComment: "The fabric is really soft. Great for relaxing at home.",
        UserSupport: { like: 16, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Richard Barnes" }, userName: "Richard Barnes", date: "2025-08-04" },
        userRate: 3,
        userComment: "They are comfortable, but the color faded a bit after washing.",
        UserSupport: { like: 9, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Charles Fisher" }, userName: "Charles Fisher", date: "2025-07-29" },
        userRate: 4,
        userComment: "A great pair of joggers. Good fit and feel.",
        UserSupport: { like: 13, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/9LFjwpI.jpeg",
    images: [
      "https://i.imgur.com/9LFjwpI.jpeg",
      "https://i.imgur.com/vzrTgUR.jpeg",
      "https://i.imgur.com/p5NdI6n.jpeg"
    ]
  },
  {
    id: "product_58",
    name: "Classic Navy Blue Baseball Cap",
    description: "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit.",
    category: "Clothes",
    price: {
      productPrice: 61,
      productDiscount: "25%",
      productOff: "$15.25"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Jane Doe" }, userName: "Jane Doe", date: "2025-07-19" },
        userRate: 5,
        userComment: "Perfect cap. The color is great and it fits perfectly.",
        UserSupport: { like: 13, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Joseph Henderson" }, userName: "Joseph Henderson", date: "2025-08-11" },
        userRate: 4,
        userComment: "A simple, well-made cap. The adjustable strap is a nice feature.",
        UserSupport: { like: 9, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Thomas Coleman" }, userName: "Thomas Coleman", date: "2025-08-06" },
        userRate: 5,
        userComment: "My new favorite hat. The navy blue color goes with everything.",
        UserSupport: { like: 15, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Daniel Jenkins" }, userName: "Daniel Jenkins", date: "2025-07-31" },
        userRate: 4,
        userComment: "Good quality hat for the price.",
        UserSupport: { like: 7, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/R3iobJA.jpeg",
    images: [
      "https://i.imgur.com/R3iobJA.jpeg",
      "https://i.imgur.com/Wv2KTsf.jpeg",
      "https://i.imgur.com/76HAxcA.jpeg"
    ]
  },
  {
    id: "product_59",
    name: "Classic Blue Baseball Cap",
    description: "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor.",
    category: "Clothes",
    price: {
      productPrice: 86,
      productDiscount: "10%",
      productOff: "$8.60"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Christopher Perry" }, userName: "Christopher Perry", date: "2025-08-15" },
        userRate: 5,
        userComment: "Great hat. The color is a perfect shade of blue.",
        UserSupport: { like: 16, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Matthew Powell" }, userName: "Matthew Powell", date: "2025-08-10" },
        userRate: 4,
        userComment: "It's a comfortable hat, but it sits a little high on my head.",
        UserSupport: { like: 8, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Kevin Long" }, userName: "Kevin Long", date: "2025-08-05" },
        userRate: 5,
        userComment: "High-quality material and a great fit. I wear it all the time.",
        UserSupport: { like: 14, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Brian Patterson" }, userName: "Brian Patterson", date: "2025-07-30" },
        userRate: 4,
        userComment: "A simple and stylish cap. Very happy with it.",
        UserSupport: { like: 10, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/wXuQ7bm.jpeg",
    images: [
      "https://i.imgur.com/wXuQ7bm.jpeg",
      "https://i.imgur.com/BZrIEmb.jpeg",
      "https://i.imgur.com/KcT6BE0.jpeg"
    ]
  },
  {
    id: "product_60",
    name: "Classic Red Baseball Cap",
    description: "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all.",
    category: "Clothes",
    price: {
      productPrice: 35,
      productDiscount: "25%",
      productOff: "$8.75"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Jason Hughes" }, userName: "Jason Hughes", date: "2025-08-13" },
        userRate: 5,
        userComment: "Love the bright red color. The hat is well-made and comfortable.",
        UserSupport: { like: 15, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "David Simmons" }, userName: "David Simmons", date: "2025-08-08" },
        userRate: 4,
        userComment: "A great looking cap. It's my new go-to for sunny days.",
        UserSupport: { like: 11, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Paul Foster" }, userName: "Paul Foster", date: "2025-08-03" },
        userRate: 5,
        userComment: "Perfect fit and the color hasn't faded at all.",
        UserSupport: { like: 13, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Steven Gonzales" }, userName: "Steven Gonzales", date: "2025-07-28" },
        userRate: 3,
        userComment: "The brim is a little flatter than I prefer, but it's a nice hat.",
        UserSupport: { like: 6, unLike: 3 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/cBuLvBi.jpeg",
    images: [
      "https://i.imgur.com/cBuLvBi.jpeg",
      "https://i.imgur.com/N1GkCIR.jpeg",
      "https://i.imgur.com/kKc9A5p.jpeg"
    ]
  },
  {
    id: "product_61",
    name: "Classic Black Baseball Cap",
    description: "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit.",
    category: "Clothes",
    price: {
      productPrice: 58,
      productDiscount: "5%",
      productOff: "$2.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kenneth Bryant" }, userName: "Kenneth Bryant", date: "2025-08-12" },
        userRate: 5,
        userComment: "You can't go wrong with a classic black cap. This one is perfect.",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Andrew Alexander" }, userName: "Andrew Alexander", date: "2025-08-07" },
        userRate: 4,
        userComment: "Good quality, fits well. A solid choice for a black hat.",
        UserSupport: { like: 12, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Edward Russell" }, userName: "Edward Russell", date: "2025-08-02" },
        userRate: 5,
        userComment: "Durable and comfortable. I've been wearing it every day.",
        UserSupport: { like: 16, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Joshua Griffin" }, userName: "Joshua Griffin", date: "2025-07-27" },
        userRate: 4,
        userComment: "Great hat, just as described.",
        UserSupport: { like: 10, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/KeqG6r4.jpeg",
    images: [
      "https://i.imgur.com/KeqG6r4.jpeg",
      "https://i.imgur.com/xGQOw3p.jpeg",
      "https://i.imgur.com/oO5OUjb.jpeg"
    ]
  },
  {
    id: "product_62",
    name: "Classic Olive Chino Shorts",
    description: "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit.",
    category: "Clothes",
    price: {
      productPrice: 84,
      productDiscount: "10%",
      productOff: "$8.40"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kevin Diaz" }, userName: "Kevin Diaz", date: "2025-08-14" },
        userRate: 5,
        userComment: "Perfect shorts for summer. The color is great and they are very comfortable.",
        UserSupport: { like: 19, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Brian Hayes" }, userName: "Brian Hayes", date: "2025-08-09" },
        userRate: 4,
        userComment: "The fit is good and the material feels high-quality.",
        UserSupport: { like: 14, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "George Wallace" }, userName: "George Wallace", date: "2025-08-04" },
        userRate: 3,
        userComment: "I like the shorts, but they wrinkle very easily.",
        UserSupport: { like: 8, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Ronald Woods" }, userName: "Ronald Woods", date: "2025-07-29" },
        userRate: 5,
        userComment: "A great pair of shorts. Very versatile and can be dressed up or down.",
        UserSupport: { like: 17, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/UsFIvYs.jpeg",
    images: [
      "https://i.imgur.com/UsFIvYs.jpeg",
      "https://i.imgur.com/YIq57b6.jpeg"
    ]
  },
  {
    id: "product_63",
    name: "Classic High-Waisted Athletic Shorts",
    description: "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe.",
    category: "Clothes",
    price: {
      productPrice: 43,
      productDiscount: "20%",
      productOff: "$8.60"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Amanda Barnes" }, userName: "Amanda Barnes", date: "2025-08-13" },
        userRate: 5,
        userComment: "These are the perfect workout shorts. They don't ride up and are very flattering.",
        UserSupport: { like: 22, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Melissa Fisher" }, userName: "Melissa Fisher", date: "2025-08-08" },
        userRate: 4,
        userComment: "Very comfortable and the high waist is great. The material is soft.",
        UserSupport: { like: 16, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Deborah Henderson" }, userName: "Deborah Henderson", date: "2025-08-03" },
        userRate: 5,
        userComment: "I have these in three colors. They are my go-to shorts for the gym.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Stephanie Coleman" }, userName: "Stephanie Coleman", date: "2025-07-28" },
        userRate: 4,
        userComment: "Great shorts, but the waistband does roll down a little during some exercises.",
        UserSupport: { like: 11, unLike: 3 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/eGOUveI.jpeg",
    images: [
      "https://i.imgur.com/eGOUveI.jpeg",
      "https://i.imgur.com/UcsGO7E.jpeg",
      "https://i.imgur.com/NLn4e7S.jpeg"
    ]
  },
  {
    id: "product_64",
    name: "Classic White Crew Neck T-Shirt",
    description: "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit.",
    category: "Clothes",
    price: {
      productPrice: 39,
      productDiscount: "5%",
      productOff: "$1.95"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Rebecca Jenkins" }, userName: "Rebecca Jenkins", date: "2025-08-11" },
        userRate: 5,
        userComment: "The perfect white t-shirt. It's not see-through and has a great fit.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sharon Perry" }, userName: "Sharon Perry", date: "2025-08-06" },
        userRate: 4,
        userComment: "A good quality basic tee. It's very soft and comfortable.",
        UserSupport: { like: 18, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Laura Powell" }, userName: "Laura Powell", date: "2025-08-01" },
        userRate: 3,
        userComment: "It's a nice shirt, but the collar stretched out after a few washes.",
        UserSupport: { like: 9, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Kimberly Long" }, userName: "Kimberly Long", date: "2025-07-26" },
        userRate: 5,
        userComment: "A wardrobe staple. I've already bought a few more.",
        UserSupport: { like: 21, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/axsyGpD.jpeg",
    images: [
      "https://i.imgur.com/axsyGpD.jpeg",
      "https://i.imgur.com/T8oq9X2.jpeg",
      "https://i.imgur.com/J6MinJn.jpeg"
    ]
  },
  {
    id: "product_65",
    name: "Classic White Tee - Timeless Style and Comfort",
    description: "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear.",
    category: "Clothes",
    price: {
      productPrice: 73,
      productDiscount: "10%",
      productOff: "$7.30"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "David Black" }, userName: "David Black", date: "2025-05-20" },
        userRate: 5,
        userComment: "The perfect white tee. Great fit, soft material, and holds up well after washing.",
        UserSupport: { like: 19, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Michelle Patterson" }, userName: "Michelle Patterson", date: "2025-08-14" },
        userRate: 5,
        userComment: "Excellent quality. The cotton is very soft and has a nice weight to it.",
        UserSupport: { like: 23, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Cynthia Hughes" }, userName: "Cynthia Hughes", date: "2025-08-09" },
        userRate: 4,
        userComment: "A great t-shirt, but a little more expensive than other options.",
        UserSupport: { like: 15, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jessica Simmons" }, userName: "Jessica Simmons", date: "2025-08-04" },
        userRate: 5,
        userComment: "This is my go-to white t-shirt. It's worth the price for the quality.",
        UserSupport: { like: 20, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://i.imgur.com/Y54Bt8J.jpeg",
    images: [
      "https://i.imgur.com/Y54Bt8J.jpeg",
      "https://i.imgur.com/SZPDSgy.jpeg",
      "https://i.imgur.com/sJv4Xx0.jpeg"
    ]
  },
  {
    id: "product_66",
    name: "Classic Black T-Shirt",
    description: "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves.",
    category: "Clothes",
    price: {
      productPrice: 35,
      productDiscount: "20%",
      productOff: "$7.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Sarah Foster" }, userName: "Sarah Foster", date: "2025-08-13" },
        userRate: 5,
        userComment: "A great basic black tee. The material is soft and the fit is perfect.",
        UserSupport: { like: 21, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Karen Gonzales" }, userName: "Karen Gonzales", date: "2025-08-08" },
        userRate: 4,
        userComment: "Good quality t-shirt. The color has not faded after several washes.",
        UserSupport: { like: 16, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Nancy Bryant" }, userName: "Nancy Bryant", date: "2025-08-03" },
        userRate: 5,
        userComment: "I love the feel of this shirt. It's a staple in my closet.",
        UserSupport: { like: 19, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Lisa Alexander" }, userName: "Lisa Alexander", date: "2025-07-28" },
        userRate: 4,
        userComment: "A comfortable and versatile black t-shirt.",
        UserSupport: { like: 14, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/9DqEOV5.jpeg",
    images: [
      "https://i.imgur.com/9DqEOV5.jpeg",
      "https://i.imgur.com/ae0AEYn.jpeg",
      "https://i.imgur.com/mZ4rUjj.jpeg"
    ]
  },
  {
    id: "product_67",
    name: "Sleek White & Orange Wireless Gaming Controller",
    description: "Elevate your gaming experience with this state-of-the-art wireless controller, featuring a crisp white base with vibrant orange accents. Designed for precision play and maximum comfort.",
    category: "Electronics",
    price: {
      productPrice: 69,
      productDiscount: "10%",
      productOff: "$6.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Daniel Russell" }, userName: "Daniel Russell", date: "2025-08-11" },
        userRate: 5,
        userComment: "This controller looks and feels amazing. The buttons are responsive.",
        UserSupport: { like: 28, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Matthew Griffin" }, userName: "Matthew Griffin", date: "2025-08-06" },
        userRate: 4,
        userComment: "A great controller with a unique design. The battery life is good.",
        UserSupport: { like: 20, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Anthony Diaz" }, userName: "Anthony Diaz", date: "2025-08-01" },
        userRate: 3,
        userComment: "It's a solid controller, but the joysticks feel a little stiff.",
        UserSupport: { like: 12, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Christopher Hayes" }, userName: "Christopher Hayes", date: "2025-07-26" },
        userRate: 5,
        userComment: "Love the color scheme. It works perfectly with my PC.",
        UserSupport: { like: 25, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/ZANVnHE.jpeg",
    images: [
      "https://i.imgur.com/ZANVnHE.jpeg",
      "https://i.imgur.com/Ro5z6Tn.jpeg",
      "https://i.imgur.com/woA93Li.jpeg"
    ]
  },
  {
    id: "product_68",
    name: "Sleek Wireless Headphone & Inked Earbud Set",
    description: "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort.",
    category: "Electronics",
    price: {
      productPrice: 44,
      productDiscount: "5%",
      productOff: "$2.20"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sarah Green" }, userName: "Sarah Green", date: "2025-08-10" },
        userRate: 4,
        userComment: "Great combo deal. The headphones are comfortable and the earbuds are perfect for the gym.",
        UserSupport: { like: 21, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Mark Wallace" }, userName: "Mark Wallace", date: "2025-08-14" },
        userRate: 4,
        userComment: "Good sound quality on both. The headphones can get a little warm after long use.",
        UserSupport: { like: 18, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Steven Woods" }, userName: "Steven Woods", date: "2025-08-07" },
        userRate: 5,
        userComment: "I'm very impressed with this set, especially for the price. Both are comfortable and sound great.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Paul Barnes" }, userName: "Paul Barnes", date: "2025-08-01" },
        userRate: 3,
        userComment: "The headphones are good, but the earbuds stopped working in one ear after a month.",
        UserSupport: { like: 9, unLike: 8 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/yVeIeDa.jpeg",
    images: [
      "https://i.imgur.com/yVeIeDa.jpeg",
      "https://i.imgur.com/jByJ4ih.jpeg",
      "https://i.imgur.com/KXj6Tpb.jpeg"
    ]
  },
  {
    id: "product_69",
    name: "Sleek Comfort-Fit Over-Ear Headphones",
    description: "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband.",
    category: "Electronics",
    price: {
      productPrice: 28,
      productDiscount: "20%",
      productOff: "$5.60"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kenneth Fisher" }, userName: "Kenneth Fisher", date: "2025-08-13" },
        userRate: 5,
        userComment: "Incredibly comfortable, and the sound quality is amazing for the price.",
        UserSupport: { like: 26, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "George Henderson" }, userName: "George Henderson", date: "2025-08-08" },
        userRate: 4,
        userComment: "Very good headphones. They block out a lot of external noise.",
        UserSupport: { like: 19, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ronald Coleman" }, userName: "Ronald Coleman", date: "2025-08-03" },
        userRate: 3,
        userComment: "The sound is a little heavy on the bass for my taste, but they are comfortable.",
        UserSupport: { like: 11, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Edward Jenkins" }, userName: "Edward Jenkins", date: "2025-07-28" },
        userRate: 4,
        userComment: "A great pair of headphones for work calls and listening to music.",
        UserSupport: { like: 17, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/SolkFEB.jpeg",
    images: [
      "https://i.imgur.com/SolkFEB.jpeg",
      "https://i.imgur.com/KIGW49u.jpeg",
      "https://i.imgur.com/mWwek7p.jpeg"
    ]
  },
  {
    id: "product_70",
    name: "Efficient 2-Slice Toaster",
    description: "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning.",
    category: "Miscellaneous",
    price: {
      productPrice: 48,
      productDiscount: "10%",
      productOff: "$4.80"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Betty Perry" }, userName: "Betty Perry", date: "2025-08-11" },
        userRate: 5,
        userComment: "Toasts perfectly every time. The browning control is very accurate.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Helen Powell" }, userName: "Helen Powell", date: "2025-08-06" },
        userRate: 4,
        userComment: "A sleek and simple toaster that does its job well.",
        UserSupport: { like: 15, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sandra Long" }, userName: "Sandra Long", date: "2025-08-01" },
        userRate: 3,
        userComment: "It toasts a little unevenly, one side is always darker than the other.",
        UserSupport: { like: 8, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Donna Patterson" }, userName: "Donna Patterson", date: "2025-07-26" },
        userRate: 4,
        userComment: "I like the simple design and it's very easy to clean.",
        UserSupport: { like: 12, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/keVCVIa.jpeg",
    images: [
      "https://i.imgur.com/keVCVIa.jpeg",
      "https://i.imgur.com/afHY7v2.jpeg",
      "https://i.imgur.com/yAOihUe.jpeg"
    ]
  },
  {
    id: "product_71",
    name: "Sleek Wireless Computer Mouse",
    description: "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design.",
    category: "Electronics",
    price: {
      productPrice: 10,
      productDiscount: "5%",
      productOff: "$0.50"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Carol Hughes" }, userName: "Carol Hughes", date: "2025-08-15" },
        userRate: 5,
        userComment: "Great little mouse for the price. It's responsive and connects easily.",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Ruth Simmons" }, userName: "Ruth Simmons", date: "2025-08-10" },
        userRate: 4,
        userComment: "It's a bit small for my hand, but it works well for travel.",
        UserSupport: { like: 10, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sharon Foster" }, userName: "Sharon Foster", date: "2025-08-05" },
        userRate: 3,
        userComment: "The glossy finish shows a lot of fingerprints.",
        UserSupport: { like: 6, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Michelle Gonzales" }, userName: "Michelle Gonzales", date: "2025-07-30" },
        userRate: 4,
        userComment: "A solid, basic wireless mouse that gets the job done.",
        UserSupport: { like: 12, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/w3Y8NwQ.jpeg",
    images: [
      "https://i.imgur.com/w3Y8NwQ.jpeg",
      "https://i.imgur.com/WJFOGIC.jpeg",
      "https://i.imgur.com/dV4Nklf.jpeg"
    ]
  },
  {
    id: "product_72",
    name: "Sleek Modern Laptop with Ambient Lighting",
    description: "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play.",
    category: "Electronics",
    price: {
      productPrice: 43,
      productDiscount: "10%",
      productOff: "$4.30"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Laura Bryant" }, userName: "Laura Bryant", date: "2025-08-14" },
        userRate: 5,
        userComment: "This laptop is so sleek and fast. The ambient lighting is a cool feature.",
        UserSupport: { like: 30, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sarah Alexander" }, userName: "Sarah Alexander", date: "2025-08-09" },
        userRate: 4,
        userComment: "A great laptop for everyday tasks. It's very lightweight and portable.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Kimberly Russell" }, userName: "Kimberly Russell", date: "2025-08-04" },
        userRate: 3,
        userComment: "The battery life isn't as long as advertised, but it's a decent laptop.",
        UserSupport: { like: 15, unLike: 6 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Deborah Griffin" }, userName: "Deborah Griffin", date: "2025-07-29" },
        userRate: 5,
        userComment: "I'm very impressed with the performance and design of this laptop.",
        UserSupport: { like: 28, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/OKn1KFI.jpeg",
    images: [
      "https://i.imgur.com/OKn1KFI.jpeg",
      "https://i.imgur.com/G4f21Ai.jpeg",
      "https://i.imgur.com/Z9oKRVJ.jpeg"
    ]
  },
  {
    id: "product_73",
    name: "Sleek Modern Laptop for Professionals",
    description: "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life.",
    category: "Electronics",
    price: {
      productPrice: 97,
      productDiscount: "20%",
      productOff: "$19.40"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Kevin Hall" }, userName: "Kevin Hall", date: "2025-08-05" },
        userRate: 5,
        userComment: "Incredibly fast and lightweight. The battery life is amazing. Perfect for my work.",
        UserSupport: { like: 32, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Cynthia Diaz" }, userName: "Cynthia Diaz", date: "2025-08-12" },
        userRate: 5,
        userComment: "A powerhouse of a laptop. It handles all my demanding software with ease.",
        UserSupport: { like: 40, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Jessica Hayes" }, userName: "Jessica Hayes", date: "2025-08-07" },
        userRate: 4,
        userComment: "Excellent laptop, but it does get a bit hot under heavy load.",
        UserSupport: { like: 25, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Jason Wallace" }, userName: "Jason Wallace", date: "2025-08-02" },
        userRate: 5,
        userComment: "The screen is beautiful and the keyboard is a joy to type on. Highly recommend.",
        UserSupport: { like: 35, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://i.imgur.com/ItHcq7o.jpeg",
    images: [
      "https://i.imgur.com/ItHcq7o.jpeg",
      "https://i.imgur.com/55GM3XZ.jpeg",
      "https://i.imgur.com/tcNJxoW.jpeg"
    ]
  },
  {
    id: "product_74",
    name: "Stylish Red & Silver Over-Ear Headphones",
    description: "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups and an adjustable padded headband.",
    category: "Electronics",
    price: {
      productPrice: 39,
      productDiscount: "10%",
      productOff: "$3.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Amanda Woods" }, userName: "Amanda Woods", date: "2025-08-13" },
        userRate: 5,
        userComment: "These headphones look so cool! The sound quality is great too.",
        UserSupport: { like: 24, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Melissa Barnes" }, userName: "Melissa Barnes", date: "2025-08-08" },
        userRate: 4,
        userComment: "Very comfortable to wear for long periods. The sound is clear.",
        UserSupport: { like: 18, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Deborah Fisher" }, userName: "Deborah Fisher", date: "2025-08-03" },
        userRate: 4,
        userComment: "A great pair of stylish headphones. Good value for the money.",
        UserSupport: { like: 16, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Stephanie Henderson" }, userName: "Stephanie Henderson", date: "2025-07-28" },
        userRate: 3,
        userComment: "The sound quality is decent, but they feel a little flimsy.",
        UserSupport: { like: 9, unLike: 4 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/YaSqa06.jpeg",
    images: [
      "https://i.imgur.com/YaSqa06.jpeg",
      "https://i.imgur.com/isQAliJ.jpeg",
      "https://i.imgur.com/5B8UQfh.jpeg"
    ]
  },
  {
    id: "product_75",
    name: "Sleek Mirror Finish Phone Case",
    description: "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance.",
    category: "Electronics",
    price: {
      productPrice: 27,
      productDiscount: "5%",
      productOff: "$1.35"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Rebecca Coleman" }, userName: "Rebecca Coleman", date: "2025-08-11" },
        userRate: 4,
        userComment: "A very stylish case, and I can use it as a mirror! It does get smudged easily though.",
        UserSupport: { like: 15, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sharon Jenkins" }, userName: "Sharon Jenkins", date: "2025-08-06" },
        userRate: 3,
        userComment: "Looks cool, but it's very slippery and doesn't offer much drop protection.",
        UserSupport: { like: 8, unLike: 6 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Laura Perry" }, userName: "Laura Perry", date: "2025-08-01" },
        userRate: 5,
        userComment: "I love how this case looks on my phone. So chic.",
        UserSupport: { like: 18, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Kimberly Powell" }, userName: "Kimberly Powell", date: "2025-07-26" },
        userRate: 2,
        userComment: "The mirror finish scratched within the first day.",
        UserSupport: { like: 4, unLike: 10 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 1, fiveStars: 1 },
    mainImage: "https://i.imgur.com/yb9UQKL.jpeg",
    images: [
      "https://i.imgur.com/yb9UQKL.jpeg",
      "https://i.imgur.com/m2owtQG.jpeg",
      "https://i.imgur.com/bNiORct.jpeg"
    ]
  },
  {
    id: "product_76",
    name: "Sleek Smartwatch with Vibrant Display",
    description: "Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap.",
    category: "Electronics",
    price: {
      productPrice: 16,
      productDiscount: "25%",
      productOff: "$4.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jessica King" }, userName: "Jessica King", date: "2025-07-30" },
        userRate: 3,
        userComment: "It's a decent smartwatch for the price, but the battery life is pretty short.",
        UserSupport: { like: 8, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Michelle Long" }, userName: "Michelle Long", date: "2025-08-14" },
        userRate: 4,
        userComment: "A great entry-level smartwatch. It has all the basic features I need.",
        UserSupport: { like: 14, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Cynthia Patterson" }, userName: "Cynthia Patterson", date: "2025-08-09" },
        userRate: 2,
        userComment: "The touch screen is not very responsive and it frequently disconnects from my phone.",
        UserSupport: { like: 4, unLike: 11 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sarah Hughes" }, userName: "Sarah Hughes", date: "2025-08-04" },
        userRate: 4,
        userComment: "I like the design and the watch faces are cool. The strap is comfortable.",
        UserSupport: { like: 11, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 1, threeStars: 1, fourStars: 2, fiveStars: 0 },
    mainImage: "https://i.imgur.com/LGk9Jn2.jpeg",
    images: [
      "https://i.imgur.com/LGk9Jn2.jpeg",
      "https://i.imgur.com/1ttYWaI.jpeg",
      "https://i.imgur.com/sPRWnJH.jpeg"
    ]
  },
  {
    id: "product_77",
    name: "Sleek Modern Leather Sofa",
    description: "Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish.",
    category: "Furniture",
    price: {
      productPrice: 53,
      productDiscount: "10%",
      productOff: "$5.30"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Jessica Simmons" }, userName: "Jessica Simmons", date: "2025-08-12" },
        userRate: 5,
        userComment: "This sofa looks so much more expensive than it is. It's a great addition to my apartment.",
        UserSupport: { like: 26, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Betty Foster" }, userName: "Betty Foster", date: "2025-08-07" },
        userRate: 4,
        userComment: "It's a very stylish sofa, but it's quite firm and not the best for napping.",
        UserSupport: { like: 18, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Helen Gonzales" }, userName: "Helen Gonzales", date: "2025-08-02" },
        userRate: 5,
        userComment: "I'm very happy with the quality and the modern design. It was easy to assemble.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sandra Bryant" }, userName: "Sandra Bryant", date: "2025-07-27" },
        userRate: 4,
        userComment: "A great looking sofa for a smaller space. The leather feels nice.",
        UserSupport: { like: 16, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/Qphac99.jpeg",
    images: [
      "https://i.imgur.com/Qphac99.jpeg",
      "https://i.imgur.com/dJjpEgG.jpeg",
      "https://i.imgur.com/MxJyADq.jpeg"
    ]
  },
  {
    id: "product_78",
    name: "Mid-Century Modern Wooden Dining Table",
    description: "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic.",
    category: "Furniture",
    price: {
      productPrice: 24,
      productDiscount: "5%",
      productOff: "$1.20"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Donna Alexander" }, userName: "Donna Alexander", date: "2025-08-15" },
        userRate: 5,
        userComment: "I am in love with this table! It's the perfect size and the design is beautiful.",
        UserSupport: { like: 28, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Carol Russell" }, userName: "Carol Russell", date: "2025-08-10" },
        userRate: 4,
        userComment: "A great table for the price. The finish is nice, but it does scratch easily.",
        UserSupport: { like: 17, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ruth Griffin" }, userName: "Ruth Griffin", date: "2025-08-05" },
        userRate: 5,
        userComment: "It was very easy to put together and looks fantastic in my dining room.",
        UserSupport: { like: 24, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sharon Diaz" }, userName: "Sharon Diaz", date: "2025-07-30" },
        userRate: 4,
        userComment: "A solid and stylish dining table. Very happy with this purchase.",
        UserSupport: { like: 19, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/DMQHGA0.jpeg",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg"
    ]
  },
  {
    id: "product_79",
    name: "Elegant Golden-Base Stone Top Dining Table",
    description: "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance.",
    category: "Furniture",
    price: {
      productPrice: 66,
      productDiscount: "20%",
      productOff: "$13.20"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Olivia Martinez" }, userName: "Olivia Martinez", date: "2025-07-22" },
        userRate: 5,
        userComment: "This table is a showstopper. It's incredibly well-made and looks so luxurious.",
        UserSupport: { like: 28, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Hayes" }, userName: "Michelle Hayes", date: "2025-08-13" },
        userRate: 5,
        userComment: "Even more beautiful in person. The base is a work of art.",
        UserSupport: { like: 30, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Wallace" }, userName: "Laura Wallace", date: "2025-08-08" },
        userRate: 4,
        userComment: "A stunning table. The stone top is very heavy, so assembly requires two people.",
        UserSupport: { like: 20, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sarah Woods" }, userName: "Sarah Woods", date: "2025-08-03" },
        userRate: 5,
        userComment: "It has completely elevated our dining room. We are thrilled.",
        UserSupport: { like: 26, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 1, fiveStars: 3 },
    mainImage: "https://i.imgur.com/NWIJKUj.jpeg",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg"
    ]
  },
  {
    id: "product_80",
    name: "Modern Elegance Teal Armchair",
    description: "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery.",
    category: "Furniture",
    price: {
      productPrice: 25,
      productDiscount: "5%",
      productOff: "$1.25"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kimberly Barnes" }, userName: "Kimberly Barnes", date: "2025-08-12" },
        userRate: 5,
        userComment: "I love the color of this chair! It's a perfect accent piece for my living room.",
        UserSupport: { like: 23, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Deborah Fisher" }, userName: "Deborah Fisher", date: "2025-08-07" },
        userRate: 4,
        userComment: "A very stylish and comfortable chair. The fabric is soft and feels high-quality.",
        UserSupport: { like: 18, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Stephanie Henderson" }, userName: "Stephanie Henderson", date: "2025-08-02" },
        userRate: 3,
        userComment: "The chair is beautiful, but it's smaller than it appears in the pictures.",
        UserSupport: { like: 10, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Rebecca Coleman" }, userName: "Rebecca Coleman", date: "2025-07-27" },
        userRate: 5,
        userComment: "Easy to assemble and it looks great. Very happy with this purchase.",
        UserSupport: { like: 20, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/6wkyyIN.jpeg",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg"
    ]
  },
  {
    id: "product_81",
    name: "Elegant Solid Wood Dining Table",
    description: "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home.",
    category: "Furniture",
    price: {
      productPrice: 67,
      productDiscount: "10%",
      productOff: "$6.70"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Sharon Jenkins" }, userName: "Sharon Jenkins", date: "2025-08-14" },
        userRate: 5,
        userComment: "A beautiful and solid table. The wood finish is lovely.",
        UserSupport: { like: 27, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Perry" }, userName: "Laura Perry", date: "2025-08-09" },
        userRate: 4,
        userComment: "It's a great minimalist table. Very sturdy and easy to clean.",
        UserSupport: { like: 20, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Cynthia Powell" }, userName: "Cynthia Powell", date: "2025-08-04" },
        userRate: 5,
        userComment: "This table exceeded my expectations. The quality is fantastic.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jessica Long" }, userName: "Jessica Long", date: "2025-07-29" },
        userRate: 4,
        userComment: "A simple and elegant dining table. We love it.",
        UserSupport: { like: 18, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/4lTaHfF.jpeg",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg"
    ]
  },
  {
    id: "product_82",
    name: "Modern Minimalist Workstation Setup",
    description: "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer and stylish adjustable wooden desk lamp.",
    category: "Furniture",
    price: {
      productPrice: 49,
      productDiscount: "5%",
      productOff: "$2.45"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Patterson" }, userName: "Michelle Patterson", date: "2025-08-13" },
        userRate: 5,
        userComment: "This desk is perfect for my home office. It's stylish and functional.",
        UserSupport: { like: 26, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sarah Hughes" }, userName: "Sarah Hughes", date: "2025-08-08" },
        userRate: 4,
        userComment: "A great looking desk. The lamp is a really nice touch.",
        UserSupport: { like: 19, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Karen Simmons" }, userName: "Karen Simmons", date: "2025-08-03" },
        userRate: 3,
        userComment: "The desk looks good, but the surface isn't very durable and scratches easily.",
        UserSupport: { like: 11, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Nancy Foster" }, userName: "Nancy Foster", date: "2025-07-28" },
        userRate: 5,
        userComment: "I love my new workstation. It has made working from home much more enjoyable.",
        UserSupport: { like: 23, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/3oXNBst.jpeg",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg"
    ]
  },
  {
    id: "product_83",
    name: "Modern Ergonomic Office Chair",
    description: "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism and smooth-rolling casters.",
    category: "Furniture",
    price: {
      productPrice: 71,
      productDiscount: "20%",
      productOff: "$14.20"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Lisa Gonzales" }, userName: "Lisa Gonzales", date: "2025-08-11" },
        userRate: 5,
        userComment: "This chair has been a lifesaver for my back. It's very comfortable and supportive.",
        UserSupport: { like: 29, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Betty Bryant" }, userName: "Betty Bryant", date: "2025-08-06" },
        userRate: 4,
        userComment: "A great ergonomic chair for the price. The assembly was quick and easy.",
        UserSupport: { like: 21, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Helen Alexander" }, userName: "Helen Alexander", date: "2025-08-01" },
        userRate: 3,
        userComment: "It's a comfortable chair, but the armrests are not adjustable.",
        UserSupport: { like: 13, unLike: 6 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sandra Russell" }, userName: "Sandra Russell", date: "2025-07-26" },
        userRate: 4,
        userComment: "I can sit in this chair all day without any discomfort. Highly recommend.",
        UserSupport: { like: 24, unLike: 3 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/3dU0m72.jpeg",
    images: [
      "https://i.imgur.com/3dU0m72.jpeg",
      "https://i.imgur.com/zPU3EVa.jpeg"
    ]
  },
  {
    id: "product_84",
    name: "Futuristic Holographic Soccer Cleats",
    description: "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette and lightweight construction for maximum agility.",
    category: "Shoes",
    price: {
      productPrice: 39,
      productDiscount: "10%",
      productOff: "$3.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Donna Griffin" }, userName: "Donna Griffin", date: "2025-08-15" },
        userRate: 5,
        userComment: "These cleats look amazing! My son loves them.",
        UserSupport: { like: 25, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Carol Diaz" }, userName: "Carol Diaz", date: "2025-08-10" },
        userRate: 4,
        userComment: "They're very lightweight and comfortable. The holographic effect is really cool.",
        UserSupport: { like: 18, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ruth Hayes" }, userName: "Ruth Hayes", date: "2025-08-05" },
        userRate: 3,
        userComment: "They look great, but they don't seem very durable. Already showing signs of wear.",
        UserSupport: { like: 9, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sharon Wallace" }, userName: "Sharon Wallace", date: "2025-07-30" },
        userRate: 4,
        userComment: "A great pair of cleats for the price. My son gets a lot of compliments on them.",
        UserSupport: { like: 16, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/qNOjJje.jpeg",
    images: [
      "https://i.imgur.com/qNOjJje.jpeg",
      "https://i.imgur.com/NjfCFnu.jpeg",
      "https://i.imgur.com/eYtvXS1.jpeg"
    ]
  },
  {
    id: "product_85",
    name: "Rainbow Glitter High Heels",
    description: "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step.",
    category: "Shoes",
    price: {
      productPrice: 39,
      productDiscount: "20%",
      productOff: "$7.80"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Chloe Davis" }, userName: "Chloe Davis", date: "2025-06-11" },
        userRate: 5,
        userComment: "These shoes are so fun and surprisingly comfortable for heels!",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Michelle Woods" }, userName: "Michelle Woods", date: "2025-08-13" },
        userRate: 5,
        userComment: "I wore these to a party and got so many compliments. They are absolutely stunning.",
        UserSupport: { like: 28, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Laura Barnes" }, userName: "Laura Barnes", date: "2025-08-08" },
        userRate: 3,
        userComment: "They are beautiful, but the glitter started to fall off after one wear.",
        UserSupport: { like: 10, unLike: 6 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sarah Fisher" }, userName: "Sarah Fisher", date: "2025-08-03" },
        userRate: 4,
        userComment: "A fun and eye-catching pair of heels. Perfect for a night out.",
        UserSupport: { like: 18, unLike: 3 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/62gGzeF.jpeg",
    images: [
      "https://i.imgur.com/62gGzeF.jpeg",
      "https://i.imgur.com/5MoPuFM.jpeg",
      "https://i.imgur.com/sUVj7pK.jpeg"
    ]
  },
  {
    id: "product_86",
    name: "Chic Summer Denim Espadrille Sandals",
    description: "Step into summer with style in our denim espadrille sandals. Featuring a braided jute sole for a classic touch and adjustable denim straps for a snug fit, these sandals offer both comfort and a fashionable edge.",
    category: "Shoes",
    price: {
      productPrice: 33,
      productDiscount: "10%",
      productOff: "$3.30"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Kimberly Henderson" }, userName: "Kimberly Henderson", date: "2025-08-12" },
        userRate: 5,
        userComment: "These are the perfect summer sandals. They're so cute and comfortable.",
        UserSupport: { like: 21, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Deborah Coleman" }, userName: "Deborah Coleman", date: "2025-08-07" },
        userRate: 4,
        userComment: "Very stylish and go with a lot of different outfits.",
        UserSupport: { like: 17, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Stephanie Jenkins" }, userName: "Stephanie Jenkins", date: "2025-08-02" },
        userRate: 3,
        userComment: "They're cute, but the straps started to fray after a few weeks.",
        UserSupport: { like: 9, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Rebecca Perry" }, userName: "Rebecca Perry", date: "2025-07-27" },
        userRate: 4,
        userComment: "A great pair of sandals for the price. I've gotten a lot of wear out of them.",
        UserSupport: { like: 15, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/9qrmE1b.jpeg",
    images: [
      "https://i.imgur.com/9qrmE1b.jpeg",
      "https://i.imgur.com/wqKxBVH.jpeg",
      "https://i.imgur.com/sWSV6DK.jpeg"
    ]
  },
  {
    id: "product_87",
    name: "Vibrant Runners: Bold Orange & Blue Sneakers",
    description: "Step into style with these eye-catching sneakers featuring a striking combination of orange and blue hues. Designed for both comfort and fashion, these shoes come with flexible soles and cushioned insoles.",
    category: "Shoes",
    price: {
      productPrice: 27,
      productDiscount: "5%",
      productOff: "$1.35"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Sharon Powell" }, userName: "Sharon Powell", date: "2025-08-14" },
        userRate: 5,
        userComment: "I love the bright colors! These shoes are so comfortable for walking.",
        UserSupport: { like: 24, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Long" }, userName: "Laura Long", date: "2025-08-09" },
        userRate: 4,
        userComment: "A great pair of casual sneakers. The colors are very vibrant in person.",
        UserSupport: { like: 18, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Cynthia Patterson" }, userName: "Cynthia Patterson", date: "2025-08-04" },
        userRate: 5,
        userComment: "These are my new favorite shoes. They're so fun and comfortable.",
        UserSupport: { like: 21, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jessica Hughes" }, userName: "Jessica Hughes", date: "2025-07-29" },
        userRate: 4,
        userComment: "Good support and a very stylish look.",
        UserSupport: { like: 16, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/hKcMNJs.jpeg",
    images: [
      "https://i.imgur.com/hKcMNJs.jpeg",
      "https://i.imgur.com/NYToymX.jpeg",
      "https://i.imgur.com/HiiapCt.jpeg"
    ]
  },
  {
    id: "product_88",
    name: "Vibrant Pink Classic Sneakers",
    description: "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design.",
    category: "Shoes",
    price: {
      productPrice: 84,
      productDiscount: "25%",
      productOff: "$21.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Simmons" }, userName: "Michelle Simmons", date: "2025-08-13" },
        userRate: 5,
        userComment: "I am obsessed with these shoes! The color is amazing.",
        UserSupport: { like: 27, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Betty Foster" }, userName: "Betty Foster", date: "2025-08-08" },
        userRate: 4,
        userComment: "Very cute and comfortable. They do run a half size small.",
        UserSupport: { like: 19, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Helen Gonzales" }, userName: "Helen Gonzales", date: "2025-08-03" },
        userRate: 5,
        userComment: "I get so many compliments every time I wear these.",
        UserSupport: { like: 24, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sandra Bryant" }, userName: "Sandra Bryant", date: "2025-07-28" },
        userRate: 4,
        userComment: "A fun and stylish sneaker. The color is just as bright as the picture.",
        UserSupport: { like: 17, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/mcW42Gi.jpeg",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg"
    ]
  },
  {
    id: "product_89",
    name: "Futuristic Silver and Gold High-Top Sneaker",
    description: "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear.",
    category: "Shoes",
    price: {
      productPrice: 68,
      productDiscount: "10%",
      productOff: "$6.80"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Donna Alexander" }, userName: "Donna Alexander", date: "2025-08-11" },
        userRate: 5,
        userComment: "These shoes are so unique! I love the futuristic design.",
        UserSupport: { like: 26, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Carol Russell" }, userName: "Carol Russell", date: "2025-08-06" },
        userRate: 4,
        userComment: "They look amazing, but they are a little stiff and need to be broken in.",
        UserSupport: { like: 16, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ruth Griffin" }, userName: "Ruth Griffin", date: "2025-08-01" },
        userRate: 5,
        userComment: "I get tons of compliments on these. They are surprisingly comfortable.",
        UserSupport: { like: 22, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sharon Diaz" }, userName: "Sharon Diaz", date: "2025-07-26" },
        userRate: 4,
        userComment: "A very cool and stylish pair of sneakers.",
        UserSupport: { like: 18, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/npLfCGq.jpeg",
    images: [
      "https://i.imgur.com/npLfCGq.jpeg",
      "https://i.imgur.com/vYim3gj.jpeg",
      "https://i.imgur.com/HxuHwBO.jpeg"
    ]
  },
  {
    id: "product_90",
    name: "Futuristic Chic High-Heel Boots",
    description: "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish.",
    category: "Shoes",
    price: {
      productPrice: 36,
      productDiscount: "5%",
      productOff: "$1.80"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Hayes" }, userName: "Michelle Hayes", date: "2025-08-15" },
        userRate: 5,
        userComment: "I am obsessed with these boots! The heel is so unique and they are surprisingly stable.",
        UserSupport: { like: 30, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Wallace" }, userName: "Laura Wallace", date: "2025-08-10" },
        userRate: 4,
        userComment: "These are a serious fashion statement. They're not the most comfortable for walking long distances though.",
        UserSupport: { like: 20, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sarah Woods" }, userName: "Sarah Woods", date: "2025-08-05" },
        userRate: 5,
        userComment: "I love how modern and chic these boots are. They elevate any outfit.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Kimberly Barnes" }, userName: "Kimberly Barnes", date: "2025-07-30" },
        userRate: 4,
        userComment: "A very cool and unique pair of boots.",
        UserSupport: { like: 18, unLike: 3 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/HqYqLnW.jpeg",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg"
    ]
  },
  {
    id: "product_91",
    name: "Elegant Patent Leather Peep-Toe Pumps",
    description: "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour.",
    category: "Shoes",
    price: {
      productPrice: 53,
      productDiscount: "20%",
      productOff: "$10.60"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Mia Rodriguez" }, userName: "Mia Rodriguez", date: "2025-08-12" },
        userRate: 5,
        userComment: "Gorgeous shoes! They look very high-end and are perfect for a special occasion.",
        UserSupport: { like: 17, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Deborah Fisher" }, userName: "Deborah Fisher", date: "2025-08-14" },
        userRate: 4,
        userComment: "Very elegant and classy. The block heel makes them easy to walk in.",
        UserSupport: { like: 15, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Stephanie Henderson" }, userName: "Stephanie Henderson", date: "2025-08-09" },
        userRate: 5,
        userComment: "I wore these to a wedding and they were comfortable all night.",
        UserSupport: { like: 20, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Rebecca Coleman" }, userName: "Rebecca Coleman", date: "2025-08-04" },
        userRate: 3,
        userComment: "They are beautiful, but they gave me blisters on my toes.",
        UserSupport: { like: 8, unLike: 6 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/AzAY4Ed.jpeg",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg"
    ]
  },
  {
    id: "product_92",
    name: "Elegant Purple Leather Loafers",
    description: "Step into sophistication with our Elegant Purple Leather Loafers, perfect for making a bold statement. Crafted from high-quality leather with a vibrant purple finish.",
    category: "Shoes",
    price: {
      productPrice: 17,
      productDiscount: "10%",
      productOff: "$1.70"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Sharon Jenkins" }, userName: "Sharon Jenkins", date: "2025-08-13" },
        userRate: 5,
        userComment: "The color is absolutely stunning! They are so comfortable too.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Perry" }, userName: "Laura Perry", date: "2025-08-08" },
        userRate: 4,
        userComment: "A great way to add a pop of color to an outfit. The leather is very soft.",
        UserSupport: { like: 16, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Cynthia Powell" }, userName: "Cynthia Powell", date: "2025-08-03" },
        userRate: 5,
        userComment: "I love these loafers. They are stylish and feel very well-made.",
        UserSupport: { like: 19, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Jessica Long" }, userName: "Jessica Long", date: "2025-07-28" },
        userRate: 4,
        userComment: "Very comfortable for walking. The color is beautiful.",
        UserSupport: { like: 15, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/Au8J9sX.jpeg",
    images: [
      "https://i.imgur.com/Au8J9sX.jpeg",
      "https://i.imgur.com/gdr8BW2.jpeg",
      "https://i.imgur.com/KDCZxnJ.jpeg"
    ]
  },
  {
    id: "product_93",
    name: "Classic Blue Suede Casual Shoes",
    description: "Step into comfort with our Classic Blue Suede Casual Shoes, perfect for everyday wear. These shoes feature a stylish blue suede upper and durable rubber soles for superior traction.",
    category: "Shoes",
    price: {
      productPrice: 39,
      productDiscount: "5%",
      productOff: "$1.95"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Patterson" }, userName: "Michelle Patterson", date: "2025-08-11" },
        userRate: 5,
        userComment: "These shoes are so comfortable and I love the color.",
        UserSupport: { like: 20, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Sarah Hughes" }, userName: "Sarah Hughes", date: "2025-08-06" },
        userRate: 4,
        userComment: "A great pair of casual shoes. The suede is very soft.",
        UserSupport: { like: 14, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Karen Simmons" }, userName: "Karen Simmons", date: "2025-08-01" },
        userRate: 3,
        userComment: "They're comfortable, but they got stained easily and are hard to clean.",
        UserSupport: { like: 8, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Nancy Foster" }, userName: "Nancy Foster", date: "2025-07-26" },
        userRate: 4,
        userComment: "Very happy with these shoes. They are my new go-to for everyday.",
        UserSupport: { like: 16, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/sC0ztOB.jpeg",
    images: [
      "https://i.imgur.com/sC0ztOB.jpeg",
      "https://i.imgur.com/Jf9DL9R.jpeg",
      "https://i.imgur.com/R1IN95T.jpeg"
    ]
  },
  {
    id: "product_94",
    name: "Sleek Futuristic Electric Bicycle",
    description: "This modern electric bicycle combines style and efficiency with its unique design and top-notch performance features. Equipped with a durable frame and enhanced battery life.",
    category: "Miscellaneous",
    price: {
      productPrice: 22,
      productDiscount: "15%",
      productOff: "$3.30"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Lisa Gonzales" }, userName: "Lisa Gonzales", date: "2025-08-15" },
        userRate: 5,
        userComment: "This bike is so much fun to ride! The electric assist is a game changer.",
        UserSupport: { like: 30, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Betty Bryant" }, userName: "Betty Bryant", date: "2025-08-10" },
        userRate: 4,
        userComment: "A great e-bike for commuting. The battery lasts for my whole trip.",
        UserSupport: { like: 22, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Helen Alexander" }, userName: "Helen Alexander", date: "2025-08-05" },
        userRate: 5,
        userComment: "I love the design of this bike. It's very sleek and modern.",
        UserSupport: { like: 28, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sandra Russell" }, userName: "Sandra Russell", date: "2025-07-30" },
        userRate: 4,
        userComment: "A solid bike, but it is quite heavy to carry up stairs.",
        UserSupport: { like: 18, unLike: 4 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/BG8J0Fj.jpg",
    images: [
      "https://i.imgur.com/BG8J0Fj.jpg",
      "https://i.imgur.com/ujHBpCX.jpg",
      "https://i.imgur.com/WHeVL9H.jpg"
    ]
  },
  {
    id: "product_95",
    name: "Sleek All-Terrain Go-Kart",
    description: "Experience the thrill of outdoor adventures with our Sleek All-Terrain Go-Kart, featuring a durable frame, comfortable racing seat, and robust, large-tread tires.",
    category: "Miscellaneous",
    price: {
      productPrice: 37,
      productDiscount: "10%",
      productOff: "$3.70"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Donna Griffin" }, userName: "Donna Griffin", date: "2025-08-14" },
        userRate: 5,
        userComment: "My kids absolutely love this go-kart. It's very sturdy and safe.",
        UserSupport: { like: 35, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Carol Diaz" }, userName: "Carol Diaz", date: "2025-08-09" },
        userRate: 4,
        userComment: "A lot of fun for the whole family. The assembly took some time though.",
        UserSupport: { like: 25, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ruth Hayes" }, userName: "Ruth Hayes", date: "2025-08-04" },
        userRate: 5,
        userComment: "This go-kart is awesome! It handles really well on different terrains.",
        UserSupport: { like: 30, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sharon Wallace" }, userName: "Sharon Wallace", date: "2025-07-29" },
        userRate: 4,
        userComment: "A great toy for outdoor fun. Seems very durable.",
        UserSupport: { like: 22, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/Ex5x3IU.jpg",
    images: [
      "https://i.imgur.com/Ex5x3IU.jpg",
      "https://i.imgur.com/z7wAQwe.jpg",
      "https://i.imgur.com/kc0Dj9S.jpg"
    ]
  },
  {
    id: "product_96",
    name: "Radiant Citrus Eau de Parfum",
    description: "Indulge in the essence of summer with this vibrant citrus-scented Eau de Parfum. Encased in a sleek glass bottle with a bold orange cap, this fragrance embodies freshness and elegance.",
    category: "Miscellaneous",
    price: {
      productPrice: 73,
      productDiscount: "15%",
      productOff: "$10.95"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Woods" }, userName: "Michelle Woods", date: "2025-08-13" },
        userRate: 5,
        userComment: "This is my new favorite summer scent. It's so fresh and uplifting.",
        UserSupport: { like: 26, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Barnes" }, userName: "Laura Barnes", date: "2025-08-08" },
        userRate: 4,
        userComment: "A lovely citrus fragrance, but I wish it lasted a little longer.",
        UserSupport: { like: 18, unLike: 3 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sarah Fisher" }, userName: "Sarah Fisher", date: "2025-08-03" },
        userRate: 5,
        userComment: "Smells like sunshine in a bottle. I always get compliments when I wear it.",
        UserSupport: { like: 24, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Kimberly Henderson" }, userName: "Kimberly Henderson", date: "2025-07-28" },
        userRate: 4,
        userComment: "A beautiful, fresh scent that isn't overpowering.",
        UserSupport: { like: 19, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/xPDwUb3.jpg",
    images: [
      "https://i.imgur.com/xPDwUb3.jpg",
      "https://i.imgur.com/3rfp691.jpg",
      "https://i.imgur.com/kG05a29.jpg"
    ]
  },
  {
    id: "product_97",
    name: "Sleek Olive Green Hardshell Carry-On Luggage",
    description: "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation.",
    category: "Miscellaneous",
    price: {
      productPrice: 48,
      productDiscount: "20%",
      productOff: "$9.60"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Deborah Coleman" }, userName: "Deborah Coleman", date: "2025-08-12" },
        userRate: 5,
        userComment: "The perfect carry-on! It's lightweight, durable, and the wheels are so smooth.",
        UserSupport: { like: 30, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Stephanie Jenkins" }, userName: "Stephanie Jenkins", date: "2025-08-07" },
        userRate: 4,
        userComment: "I love the color and it holds a surprising amount of stuff. The handle feels a little wobbly though.",
        UserSupport: { like: 22, unLike: 4 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Rebecca Perry" }, userName: "Rebecca Perry", date: "2025-08-02" },
        userRate: 5,
        userComment: "This has been on several trips with me and it's held up great.",
        UserSupport: { like: 28, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sharon Powell" }, userName: "Sharon Powell", date: "2025-07-27" },
        userRate: 4,
        userComment: "A very stylish and functional piece of luggage.",
        UserSupport: { like: 20, unLike: 2 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/jVfoZnP.jpg",
    images: [
      "https://i.imgur.com/jVfoZnP.jpg",
      "https://i.imgur.com/Tnl15XK.jpg",
      "https://i.imgur.com/7OqTPO6.jpg"
    ]
  },
  {
    id: "product_98",
    name: "Chic Transparent Fashion Handbag",
    description: "Elevate your style with our Chic Transparent Fashion Handbag, perfect for showcasing your essentials with a clear, modern edge. This trendy accessory features durable acrylic construction and luxe gold-tone hardware.",
    category: "Miscellaneous",
    price: {
      productPrice: 61,
      productDiscount: "10%",
      productOff: "$6.10"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Laura Long" }, userName: "Laura Long", date: "2025-08-15" },
        userRate: 5,
        userComment: "I am in love with this bag! It's so unique and I get compliments everywhere I go.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Cynthia Patterson" }, userName: "Cynthia Patterson", date: "2025-08-10" },
        userRate: 4,
        userComment: "A very trendy and fun bag. It's perfect for concerts or events with clear bag policies.",
        UserSupport: { like: 18, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Jessica Hughes" }, userName: "Jessica Hughes", date: "2025-08-05" },
        userRate: 3,
        userComment: "It's super cute, but it's smaller than I thought and doesn't hold much.",
        UserSupport: { like: 10, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Michelle Simmons" }, userName: "Michelle Simmons", date: "2025-07-30" },
        userRate: 4,
        userComment: "The quality is surprisingly good for the price. The acrylic is thick and sturdy.",
        UserSupport: { like: 16, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/Lqaqz59.jpg",
    images: [
      "https://i.imgur.com/Lqaqz59.jpg",
      "https://i.imgur.com/uSqWK0m.jpg",
      "https://i.imgur.com/atWACf1.jpg"
    ]
  },
  {
    id: "product_99",
    name: "Trendy Pink-Tinted Sunglasses",
    description: "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare.",
    category: "Miscellaneous",
    price: {
      productPrice: 38,
      productDiscount: "5%",
      productOff: "$1.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ben Carter" }, userName: "Ben Carter", date: "2025-05-29" },
        userRate: 4,
        userComment: "Love the style of these. They feel a little flimsy but they look great.",
        UserSupport: { like: 11, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Betty Foster" }, userName: "Betty Foster", date: "2025-08-13" },
        userRate: 5,
        userComment: "These are so cute! I've gotten so many compliments on them.",
        UserSupport: { like: 18, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/6DERudP.png", alt: "Helen Gonzales" }, userName: "Helen Gonzales", date: "2025-08-08" },
        userRate: 4,
        userComment: "A fun and trendy pair of sunglasses. I like the pink tint.",
        UserSupport: { like: 14, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Sandra Bryant" }, userName: "Sandra Bryant", date: "2025-08-03" },
        userRate: 3,
        userComment: "They're more of a fashion accessory than for sun protection. The lenses are very light.",
        UserSupport: { like: 7, unLike: 4 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 2, fiveStars: 1 },
    mainImage: "https://i.imgur.com/0qQBkxX.jpg",
    images: [
      "https://i.imgur.com/0qQBkxX.jpg",
      "https://i.imgur.com/I5g1DoE.jpg",
      "https://i.imgur.com/myfFQBW.jpg"
    ]
  },
  {
    id: "product_100",
    name: "Elegant Glass Tumbler Set",
    description: "Enhance your drinkware collection with our sophisticated set of glass tumblers, perfect for serving your favorite beverages. This versatile set includes both clear and subtly tinted glasses.",
    category: "Miscellaneous",
    price: {
      productPrice: 50,
      productDiscount: "10%",
      productOff: "$5.00"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Donna Alexander" }, userName: "Donna Alexander", date: "2025-08-12" },
        userRate: 5,
        userComment: "These glasses are beautiful and have a nice weight to them. They feel very high-end.",
        UserSupport: { like: 22, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Carol Russell" }, userName: "Carol Russell", date: "2025-08-07" },
        userRate: 4,
        userComment: "A very elegant set of glasses. Perfect for entertaining.",
        UserSupport: { like: 17, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Ruth Griffin" }, userName: "Ruth Griffin", date: "2025-08-02" },
        userRate: 3,
        userComment: "They're very pretty, but they seem quite fragile. One broke in the dishwasher.",
        UserSupport: { like: 9, unLike: 5 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Sharon Diaz" }, userName: "Sharon Diaz", date: "2025-07-27" },
        userRate: 5,
        userComment: "I love the subtle tint on some of the glasses. A very stylish set.",
        UserSupport: { like: 20, unLike: 0 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 1, fourStars: 1, fiveStars: 2 },
    mainImage: "https://i.imgur.com/TF0pXdL.jpg",
    images: [
      "https://i.imgur.com/TF0pXdL.jpg",
      "https://i.imgur.com/BLDByXP.jpg",
      "https://i.imgur.com/b7trwCv.jpg"
    ]
  },
  {
    id: "product_102",
    name: "Classic Heather Gray Hoodie v2",
    description: "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs.",
    category: "Clothes",
    price: {
      productPrice: 69,
      productDiscount: "10%",
      productOff: "$6.90"
    },
    reviews: [
      {
        userData: { userPhoto: { src: "https://i.imgur.com/zvyVp1f.png", alt: "Michelle Hayes" }, userName: "Michelle Hayes", date: "2025-08-14" },
        userRate: 5,
        userComment: "My favorite hoodie by far. The material is thick and soft.",
        UserSupport: { like: 28, unLike: 0 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/1As8dlo.png", alt: "Laura Wallace" }, userName: "Laura Wallace", date: "2025-08-09" },
        userRate: 4,
        userComment: "A great, classic hoodie. Fits well and is very comfortable.",
        UserSupport: { like: 21, unLike: 2 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/aC3z2fA.png", alt: "Sarah Woods" }, userName: "Sarah Woods", date: "2025-08-04" },
        userRate: 5,
        userComment: "Excellent quality. It has quickly become a staple in my wardrobe.",
        UserSupport: { like: 25, unLike: 1 }
      },
      {
        userData: { userPhoto: { src: "https://i.imgur.com/3cO9c7d.png", alt: "Kimberly Barnes" }, userName: "Kimberly Barnes", date: "2025-07-29" },
        userRate: 4,
        userComment: "Very happy with this purchase. A good quality hoodie for a fair price.",
        UserSupport: { like: 19, unLike: 1 }
      }
    ],
    overRate: { oneStar: 0, twoStars: 0, threeStars: 0, fourStars: 2, fiveStars: 2 },
    mainImage: "https://i.imgur.com/cHddUCu.jpeg",
    images: ["https://i.imgur.com/cHddUCu.jpeg"]
  }
]



// ** Categories
export const productCategories = [
  {
    name: "Men's Clothing",
    path: "/categories/men's-clothing"
  },
  {
    name: "Jewelry",
    path: "/categories/jewelry"
  },
  {
    name: "Electronics",
    path: "/categories/electronics"
  },
  {
    name: "Women's Clothing",
    path: "/categories/women's-clothing"
  },
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
  },
  {
    name: "Clothes",
    path: "/categories/clothes"
  },
  {
    name: "Shoes",
    path: "/categories/shoes"
  },
  {
    name: "Miscellaneous",
    path: "/categories/miscellaneous"
  }
];


// const featuredCategories = {
//   bestSellers: [
//     {
//       id: "product_11",
//       name: "Silicon Power 256GB SSD 3D NAND A55",
//       category: "Electronics",
//       price: 109,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_12",
//       name: "WD 4TB Gaming Drive for Playstation 4",
//       category: "Electronics",
//       price: 114,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_31",
//       name: "Annibale Colombo Bed",
//       category: "Furniture",
//       price: 1899.99,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_32",
//       name: "Annibale Colombo Sofa",
//       category: "Furniture",
//       price: 2499.99,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_28",
//       name: "Dior J'adore",
//       category: "Fragrances",
//       price: 89.99,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_27",
//       name: "Chanel Coco Noir Eau De Parfum",
//       category: "Fragrances",
//       price: 129.99,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_79",
//       name: "Elegant Golden-Base Stone Top Dining Table",
//       category: "Furniture",
//       price: 66,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_65",
//       name: "Classic White Tee - Timeless Style and Comfort",
//       category: "Clothes",
//       price: 73,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_73",
//       name: "Sleek Modern Laptop for Professionals",
//       category: "Electronics",
//       price: 97,
//       rating: "5 Stars"
//     },
//     {
//       id: "product_15",
//       name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
//       category: "Women's Clothing",
//       price: 56.99,
//       rating: "5 Stars"
//     }
//   ],
//   dealsOfTheDay: [
//     {
//       id: "product_54",
//       name: "Classic Black Hooded Sweatshirt",
//       category: "Clothes",
//       price: 79,
//       discount: "30%"
//     },
//     {
//       id: "product_12",
//       name: "WD 4TB Gaming Drive for Playstation 4",
//       category: "Electronics",
//       price: 114,
//       discount: "25%"
//     },
//     {
//       id: "product_2",
//       name: "Mens Casual Premium Slim Fit T-Shirts",
//       category: "Men's Clothing",
//       price: 16.73,
//       discount: "25%"
//     },
//     {
//       id: "product_7",
//       name: "White Gold Plated Princess Ring",
//       category: "Jewelry",
//       price: 9.99,
//       discount: "25%"
//     },
//     {
//       id: "product_60",
//       name: "Classic Red Baseball Cap",
//       category: "Clothes",
//       price: 35,
//       discount: "25%"
//     },
//     {
//       id: "product_88",
//       name: "Vibrant Pink Classic Sneakers",
//       category: "Shoes",
//       price: 84,
//       discount: "25%"
//     },
//     {
//       id: "product_76",
//       name: "Sleek Smartwatch with Vibrant Display",
//       category: "Electronics",
//       price: 16,
//       discount: "25%"
//     },
//     {
//       id: "product_51",
//       name: "Classic Red Pullover Hoodie",
//       category: "Clothes",
//       price: 9.99,
//       discount: "22%"
//     },
//     {
//       id: "product_5",
//       name: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
//       category: "Jewelry",
//       price: 695,
//       discount: "20%"
//     },
//     {
//       id: "product_11",
//       name: "Silicon Power 256GB SSD 3D NAND A55",
//       category: "Electronics",
//       price: 109,
//       discount: "20%"
//     }
//   ],
//   newArrivals: [
//     {
//       id: "product_21",
//       name: "Essence Mascara Lash Princess",
//       category: "Beauty",
//       price: 9.99,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_36",
//       name: "Apple",
//       category: "Groceries",
//       price: 1.99,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_51",
//       name: "Classic Red Pullover Hoodie",
//       category: "Clothes",
//       price: 9.99,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_54",
//       name: "Classic Black Hooded Sweatshirt",
//       category: "Clothes",
//       price: 79,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_30",
//       name: "Gucci Bloom Eau de Parfum",
//       category: "Fragrances",
//       price: 79.99,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_27",
//       name: "Chanel Coco Noir Eau De Parfum",
//       category: "Fragrances",
//       price: 129.99,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_49",
//       name: "Juice",
//       category: "Groceries",
//       price: 3.99,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_84",
//       name: "Futuristic Holographic Soccer Cleats",
//       category: "Shoes",
//       price: 39,
//       lastReview: "2025-08-15"
//     },
//     {
//       id: "product_25",
//       name: "Red Nail Polish",
//       category: "Beauty",
//       price: 8.99,
//       lastReview: "2025-08-12"
//     },
//     {
//       id: "product_32",
//       name: "Annibale Colombo Sofa",
//       category: "Furniture",
//       price: 2499.99,
//       lastReview: "2025-08-12"
//     }
//   ],
//   recommendedForYou: [
//     {
//       id: "product_1",
//       name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       category: "Men's Clothing",
//       price: 109.95,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_3",
//       name: "Mens Cotton Jacket",
//       category: "Men's Clothing",
//       price: 55.99,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_9",
//       name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
//       category: "Electronics",
//       price: 64,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_15",
//       name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
//       category: "Women's Clothing",
//       price: 56.99,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_18",
//       name: "MBJ Women's Solid Short Sleeve Boat Neck V-Neck",
//       category: "Women's Clothing",
//       price: 9.85,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_23",
//       name: "Powder Canister",
//       category: "Beauty",
//       price: 14.99,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_30",
//       name: "Gucci Bloom Eau de Parfum",
//       category: "Fragrances",
//       price: 79.99,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_33",
//       name: "Bedside Table African Cherry",
//       category: "Furniture",
//       price: 299.99,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_39",
//       name: "Chicken Meat",
//       category: "Groceries",
//       price: 9.99,
//       rating: "4.5 Stars"
//     },
//     {
//       id: "product_40",
//       name: "Cooking Oil",
//       category: "Groceries",
//       price: 4.99,
//       rating: "4.5 Stars"
//     }
//   ]
// }