import React from "react"
import styled from "styled-components"
import DefaultLayout from "../layouts/defaultLayout"
import items from "../../itemData"
import ProductGrid from "../templates/ProductGrid"

const HomePage = () => (
  <DefaultLayout title={"Home"}>
    <div>
      <h1>Body</h1>
      <ProductGrid items={items} />
    </div>
  </DefaultLayout>
)

export default HomePage
