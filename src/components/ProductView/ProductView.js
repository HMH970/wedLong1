import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import { useState } from 'react';

function ProductView({ products }) {
    const [sideOpen, setSideOpen] = useState(true);
    const [selectedProduct, setselectedProduct] = useState('')
    
    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item => {
                        let highlight=false
                        if(selectedProduct.id === item.id) highlight=true
                        return <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => {
                                setselectedProduct(item)
                                return
                            }}
                            isSelected={highlight}
                            

                        />
                    })}
                </div>
            </div>
            <div className="product-side-panel">
                <div className="product-side-panel-toggle-wrapper">
                    <div className="product-side-panel-toggle"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '>' : '<'}
                    </div>
                </div>
                <ProductDetails product={selectedProduct} visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
