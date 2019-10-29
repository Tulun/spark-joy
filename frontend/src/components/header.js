import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import { CentralColumn } from "./styles";

const HeaderStyle = styled.header`
  background: rebeccapurple;
  margin-bottom: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <CentralColumn>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </CentralColumn>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
