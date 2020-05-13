import React from "react"
import styled from "styled-components"
import DefaultLayout from "../layouts/defaultLayout"
import items from "../../itemData"
import ProductGrid from "../templates/ProductGrid"
import { graphql, useStaticQuery } from "gatsby"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(
        filter: { variants: { elemMatch: { availableForSale: { eq: true } } } }
      ) {
        nodes {
          title
          variants {
            image {
              localFile {
                childImageSharp {
                  fluid(fit: COVER, cropFocus: ATTENTION) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            priceV2 {
              amount
              currencyCode
            }
            sku
          }
          productType
          description
        }
      }
    }
  `)

  return (
    <DefaultLayout title={"Home"}>
      <div>
        <h1>Body</h1>
        <ProductGrid items={data.allShopifyProduct.nodes} />
      </div>
    </DefaultLayout>
  )
}

export default HomePage
