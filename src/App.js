import {Component} from 'react'

import './App.css'

class ProductGrid extends Component {
  state = {products: [], selectedProduct: null}

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    this.setState({products: data})
  }

  showProductDetails = product => {
    this.setState({selectedProduct: product})
  }

  render() {
    const {products, selectedProduct} = this.state
    return (
      <div className="app">
        <h1 className="heading">Products</h1>
        <div className="product-grid">
          {products.map(product => (
            <button
              type="button"
              className="product"
              key={product.id}
              onClick={() => this.showProductDetails(product)}
            >
              <img src={product.image} alt={product.title} className="img" />
              <p className="para">{product.title}</p>
              <p className="para1">${product.price}</p>
            </button>
          ))}
        </div>
        {selectedProduct && (
          <div className="product-details">
            <h2 className="h2">{selectedProduct.title}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="img1"
            />
            <p className="p3">{selectedProduct.description}</p>
            <p className="p4">${selectedProduct.price}</p>
            <p className="p5">Category: {selectedProduct.category}</p>
          </div>
        )}
      </div>
    )
  }
}

export default ProductGrid
