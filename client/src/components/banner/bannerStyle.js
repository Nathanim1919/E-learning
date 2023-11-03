import styled from "styled-components";
import BannerImage from '../../assets/banner/banner.jpg';

export const BannerContainer = styled.div `
    background-image: url(${BannerImage});
    background-position: center;
    background-size: cover;
    padding: 10rem 5rem;
    margin: 3rem 0;
    object-fit: cover;
    text-align: left;

    >*{
        margin-left: 20%;
    }

    @media (max-width: 768px) {
         padding: 3rem 1rem;
        background-repeat: no-repeat;

        >h1{
            font-size: 1rem;
        
        }
    }
`;
