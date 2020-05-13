import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  background: rgb(241, 55, 8);
  color: rgba(250, 250, 250, 0.7);
  font-size: 14px;
  min-height: 25vh;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// TODO: social buttons, repeat the links, contact info, add a "powered by shopify" or something

const Footer = () => (
  <FooterWrapper>
    <h1>Footer</h1>
  </FooterWrapper>
)

export default Footer
