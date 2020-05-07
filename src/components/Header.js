import React from "react"
import styled from "styled-components"
import Head from "./Head"

const HeaderWrapper = styled.div`
  background: grey;
  min-height: 15vh;
  max-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.36) 0px 8px 10px 0px;
  transition: 0.5s ease-in-out all;
`

const Header = props => (
  <HeaderWrapper>
    <Head title={props.title} />
    <h1>Header </h1>
  </HeaderWrapper>
)

export default Header
