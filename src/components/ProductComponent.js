import React from 'react';
import {useSelector} from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        return(
            <div key={id}>
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title}></img>
                    </div>
                    <div className="title">{title}</div>
                    <div className="price">{price}</div>
                    <div className="category">$ {category}</div>
                </div>
            </div>
        )

    })

    return (
        <div>
            {renderList}
        </div>
    );
};

export default ProductComponent;