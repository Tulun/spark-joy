import styled from "styled-components";
import { palette } from "styled-tools";
import { theme } from "./theme";

console.log(palette(theme))

export const CentralColumn = styled.div`
  margin: 0 auto;
  width: 960px;
  padding: 1.45rem 1.0875rem;
`

// TODO: Figure out how to do h1, h2, h3...
export const Heading = styled.h1`
  font-size: ${palette("headings", 0) };
  line-height: ${palette("headings", 0) };
  /* margin-bottom: 0; */
`