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
                        <img className="image" src={image} alt={title}></img>
                    </div>
                    <div className="card-content">
                        <h2 id="title">{title}</h2>
                        <h3 id="price">$ {price}</h3>
                        <span id="category">{category}</span>
                    </div>

                </div>
            </div>
        )

    })

    return (
        <div className="grid-cards">
            {renderList}
        </div>
    );
};

export default ProductComponent;