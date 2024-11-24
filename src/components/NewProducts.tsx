import React from 'react'
import ProductCard from './ProductCard';


const productsData = [
    {
        img: "/banner-1.jpg",
        title: "Jackets",
        desc: "Man Yarns Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img: "/banner-1.jpg",
        title: "Skirt",
        desc: "Black Floral Wrap Midi Skirt",
        rating: 5,
        price: "55.00",
    },
    {
    img: "/banner-1.jpg",
    title: "Sports",
    desc: "trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
}
];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'> New Products</h2>
            <div className='grid grid-col-1 place-items-center sm:place-items-start sm:grid-cols-2 
            lg:grid-cols-3 xl:grid-col-4 gap-10 xl:gap-y-10'>
                {productsData.map((item, index) => (                    
                    <ProductCard key={item}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}
                    />
                ))}
            </div>
        </div>      
    </div>
  );
};

export default NewProducts
