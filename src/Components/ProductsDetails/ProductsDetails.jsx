import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Image imports
import Biscuit1 from "../../assits/Biscuit 1.webp";
import Biscuit2 from "../../assits/Biscuit 2.webp";
import Biscuit3 from "../../assits/Biscuit 3.webp";
import Biscuit4 from "../../assits/Biscuit 4.webp";
import Biscuit5 from "../../assits/Biscuit 5.webp";
import Biscuit6 from "../../assits/Biscuit 6.webp";
import Chocolate7 from "../../assits/Chocolate 1.webp";
import Chocolate8 from "../../assits/Chocolate 2.webp";
import Chocolate9 from "../../assits/Chocolate 3.webp";
import Chocolate10 from "../../assits/Chocolate 4.webp";
import Chocolate11 from "../../assits/Chocolate 5.webp";
import Chocolate12 from "../../assits/Chocolate 6.webp";
import Chocolatemix13 from "../../assits/Chocolate mix 1.webp";
import Chocolatemix14 from "../../assits/Chocolate mix 2.webp";
import Chocolatemix15 from "../../assits/Chocolate mix 3.webp";
import Chocolatemix16 from "../../assits/Chocolate mix 4.webp";
import Chocolatemix17 from "../../assits/Chocolate mix 5.webp";
import Chocolatemix18 from "../../assits/Chocolate mix 6.webp";
import lays19 from "../../assits/lays 1.webp";
import lays20 from "../../assits/lays 2.webp";
import lays21 from "../../assits/lays 3.webp";
import lays22 from "../../assits/lays 4.webp";
import lays23 from "../../assits/lays 5.webp";
import lays24 from "../../assits/lays 6.webp";
import Mixbiscuits25 from "../../assits/Mix biscuits 1.webp";
import Mixbiscuits26 from "../../assits/Mix biscuits 2.webp";
import Mixbiscuits27 from "../../assits/Mix biscuits 3.webp";
import Mixbiscuits28 from "../../assits/Mix biscuits 4.webp";
import Mixbiscuits29 from "../../assits/Mix biscuits 5.webp";
import Mixbiscuits30 from "../../assits/Mix biscuits 6.webp";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const dummyProducts = [
      {
        id: 1,
        img: Biscuit1,
        Category: "Nuts & Biscuits",
        title: "Khong Guan Orange Cream",
        price: "$ 5",
      },
      {
        id: 2,
        img: Biscuit2,
        Category: "Nuts & Biscuits",
        title: "Belmont Custard ",
        price: "$ 0.8",
      },
      {
        id: 3,
        img: Biscuit3,
        Category: "Nuts & Biscuits",
        title: "Crawford Digestives",
        price: "$ 10",
      },
      {
        id: 4,
        img: Biscuit4,
        Category: "Nuts & Biscuits",
        title: "Jammie Dodgers Raspberry",
        price: "$ 14",
      },
      {
        id: 5,
        img: Biscuit5,
        Category: "Nuts & Biscuits",
        title: "Crawford Shortie",
        price: "$ 25",
      },
      {
        id: 6,
        img: Biscuit6,
        Category: "Nuts & Biscuits",
        title: "Lotus Biscoff",
        price: "$ 2.5",
      },
      {
        id: 7,
        img: Chocolate7,
        Category: "Chocolates",
        title: "Filipinos",
        price: "$ 5.5",
      },
      {
        id: 8,
        img: Chocolate8,
        Category: "Chocolates",
        title: "Dairy Milk Reclose",
        price: "$ 5.7",
      },
      {
        id: 9,
        img: Chocolate9,
        Category: "Chocolates",
        title: "Cloetta Sprinkle",
        price: "$ 5.25",
      },
      {
        id: 10,
        img: Chocolate10,
        Category: "Chocolates",
        title: "Cloetta Chocowoffle Crispy",
        price: "$ 6.5",
      },
      {
        id: 11,
        img: Chocolate11,
        Category: "Chocolates",
        title: "Cadbury Zip",
        price: "$ 5.75",
      },
      {
        id: 12,
        img: Chocolate12,
        Category: "Chocolates",
        title: "Dairy Milk Crispello",
        price: "$ 3.5",
      },
      {
        id: 13,
        img: Chocolatemix13,
        Category: "Crisps",
        title: "Snikers Snack Size",
        price: "$ 4.25",
      },
      {
        id: 14,
        img: Chocolatemix14,
        Category: "Crisps",
        title: "Snikers Slice",
        price: "$ 7.25",
      },
      {
        id: 15,
        img: Chocolatemix15,
        Category: "Crisps",
        title: "M & M Funsize",
        price: "$ 8.5",
      },
      {
        id: 16,
        img: Chocolatemix16,
        Category: "Crisps",
        title: "Hersheys Kisses",
        price: "$ 9.5",
      },
      {
        id: 17,
        img: Chocolatemix17,
        Category: "Crisps",
        title: "Nestle Kitkat",
        price: "$ 10.5",
      },
      {
        id: 18,
        img: Chocolatemix18,
        Category: "Crisps",
        title: "Nestle Butterfinger",
        price: "$ 0.5",
      },
      {
        id: 19,
        img: lays19,
        Category: "Puzzles lays",
        title: "Lays Baked",
        price: "$ 2.25",
      },
      {
        id: 20,
        img: lays20,
        Category: "Puzzles lays",
        title: "Lays Sea Salted",
        price: "$ 8.75",
      },
      {
        id: 21,
        img: lays21,
        Category: "Puzzles lays",
        title: "Lays Sour Cream",
        price: "$ 6.25",
      },
      {
        id: 22,
        img: lays22,
        Category: "Puzzles lays",
        title: "Snack Rite Ready Saled",
        price: "$ 3.75",
      },
      {
        id: 23,
        img: lays23,
        Category: "Puzzles lays",
        title: "Nims Apple Crisp",
        price: "$ 8.5",
      },
      {
        id: 24,
        img: lays24,
        Category: "Puzzles lays",
        title: "Snack Rite Ready Saled",
        price: "$ 5.25",
      },
      {
        id: 25,
        img: Mixbiscuits25,
        Category: "Snacks ",
        title: "Hill Mini Pack Mix",
        price: "$ 1.75",
      },
      {
        id: 26,
        img: Mixbiscuits26,
        Category: "Snacks",
        title: "Khong Guan Premium Marie",
        price: "$ 5.5",
      },
      {
        id: 27,
        img: Mixbiscuits27,
        Category: "Snacks",
        title: "Jammie Dodgers Raspberry",
        price: "$ 7,25",
      },
      {
        id: 28,
        img: Mixbiscuits28,
        Category: "Snacks",
        title: "Puzzles Crips Ready Salted",
        price: "$ 8.75",
      },
      {
        id: 29,
        img: Mixbiscuits29,
        Category: "Snacks",
        title: "Doritos Tangy Cheese",
        price: "$ 6.75",
      },
      {
        id: 30,
        img: Mixbiscuits30,
        category: "Snacks",
        title: "Lays Kettle Cooked",
        price: "$ 10.25",
      },
     
    ];

    useEffect(() => {
        console.log('ID from URL:', id); // Debugging Log
        const productId = parseInt(id, 10); // Convert URL id to number
        const foundProduct = dummyProducts.find((p) => p.id === productId);

        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            setError('Product not found');
        }
    }, [id]);

    if (error) {
        return <div className="container"><p>{error}</p></div>;
    }

    if (!product) {
        return <div className="container"><h1>Loading product...</h1></div>;
    }

    return (
        <div className="container">
            <div className="product">
                <img src={product.img} alt={product.title} />
                <h1>{product.title}</h1>
                <p>{product.Category}</p>
                <p>{product.price}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
