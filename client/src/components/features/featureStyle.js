import styled from "styled-components";

export const FeatureContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:3rem 1rem;
    margin: 0 3rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;


    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        >div{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background-color: #eee;
            font-size: 2rem;

            >div{
                color: orange;
            }
        }


        h3{
            font-size: 1.2rem;
            font-weight:700;
        }
    }
`