import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import { CentralColumn, Heading  } from "./styles";
import theme from "./theme";

const HeaderStyle = styled.header`
  background: rebeccapurple;
  margin-bottom: 0.5rem;
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderStyle>
      <CentralColumn style={{height: "100%"}}>
        <Heading palette="headings" style={{ lineHeight: "70px"}}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              height: "20px"
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </CentralColumn>
    </HeaderStyle>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
