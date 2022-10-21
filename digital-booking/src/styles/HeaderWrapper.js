import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  
  p {
    color: #545776;
    font-style: italic;
    padding: 1rem;
    }

  @media only screen and (max-width: 624px) {
    p {
        display: none;
    }
  }

`;