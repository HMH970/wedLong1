import React from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'
import { useState } from 'react';

function ProductView({ products }) {
    const [sideOpen, setSideOpen] = useState(true);
    const [item, setItem] = useState('')
    // const [isSelected, setSelection] = useState(false)

    return (
        <div className="product-view">
            <div className="product-main-area">
                <h1>Products</h1>
                <div className="product-list">
                    {products.map(item => {
                        let isSelected = false
                        return <ProductListItem
                            key={item.id}
                            product={item}
                            onClick={() => {
                                isSelected = true
                                return setItem(item)
                            }}
                            isSelected={isSelected}
                            

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
                <ProductDetails product={item} visible={sideOpen} />
            </div>
        </div>
    );
}

export default ProductView;
