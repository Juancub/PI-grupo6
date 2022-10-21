import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background: #1DBEB4;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;

    img {
        margin: 0.5rem;
    }

    p {
        color: white;
        font-weight: bold;
    }

    @media only screen and (max-width: 624px) {
        div {
            display: none;
        }
    }

`;