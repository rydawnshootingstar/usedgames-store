import React, { Component } from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const ProductGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  min-width: 800px;
  grid-gap: 25px;
`

const ProductWrapper = styled.div`
  margin: 10px auto;
  .productImage {
    display: block;
    min-height: 200px;
    min-width: 200px;
    width: 100%;
    background-color: #e5e5e5;
  }
  .productName {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  }
  .productPrice {
    font-size: 16px;
  }
`

class ProductGrid extends Component {
  render() {
    console.log(this.props.items)
    return (
      <ProductGridWrapper>
        {this.props.items &&
          this.props.items.map(
            ({ description, productType, title, variants }) => (
              <ProductWrapper>
                <Image
                  className="productImage"
                  fixed={variants[0].image.localFile.childImageSharp.fluid}
                  alt={title}
                />
                <div className={"productName"}>{title}</div>
                <div className="productPrice">
                  ${variants[0].priceV2.amount}0
                </div>
              </ProductWrapper>
            )
          )}
      </ProductGridWrapper>
    )
  }
}

export default ProductGrid
