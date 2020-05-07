import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ThreePartLayout = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: block;
  min-height: 100vh;
  width: 100%;
`

const BodyWrapper = styled.div`
  min-height: 50vh;
  margin: 0;
  padding: 0;
  display: block;
  font-family: "Oswald";
  letter-spacing: 0.1px;
  line-height: 1.7rem;
`

const DefaultLayout = props => (
  <ThreePartLayout>
    <Header title={props.title || "Untitled Page"} />
    <BodyWrapper>{props.children}</BodyWrapper>

    <Footer />
  </ThreePartLayout>
)

export default DefaultLayout
