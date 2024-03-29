import React from 'react'
import './products.css'
import { products } from '../../data'

function Products() {
  return (
    <div className="products__section">
        <div className="products__content">
            <div className="products__title">Our Product / Service Offerings</div>
            <div className="products__wrapper">
                {
                    products.map((product, index) => (
                        <div key={index} className="product">
                            <div className="pimage">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h2>{product.name}</h2>
                            <p>{product.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products