import styled from "styled-components";

export const HeroConatiner = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    background-color: #eee;
    padding:1rem 1rem 0 1rem;
    height: 93vh;
    overflow: hidden;
    position: relative;
    margin: 0 3rem;
    margin-bottom: 3rem;


    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding:0 1rem;
        margin: 0;
    }

    .hero-text{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
        z-index: 2;
        width: 88%;
        @media screen and (max-width: 568px) {
                padding: 3rem 0;
            }

        > *{
            margin: 0;
        }


        h1{
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.2;

             @media screen and (max-width: 1000px) {
                font-size: 2rem;
                font-weight: 800;
                line-height: 1.2;
            }

            @media screen and (max-width: 768px) {
                font-size: 2.5rem;
                font-weight: 800;
                line-height: 1.2;
            }

            @media screen and (max-width: 568px) {
                font-size: 1.4rem;
                font-weight: 700;
                line-height: 1.1;
            }
        }



        p{
            font-weight: 100;
        }
    }

    .imageContainer{
        position: relative;
        overflow: hidden;
        padding:2rem 1rem 0 1rem;
        z-index: 1;

        @media screen and (max-width: 768px){
            padding: 0rem;
        }
        .dotted-circle{
            border: 2px dotted #333;
            width: 37rem;
            height: 37rem;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0rem;
            display: grid;
            place-items: center;

            .orange-circle{
                position: relative;
                width: 90%;
                height: 90%;
                background-color: #F0A118;
                border-radius: 50%;
                display: grid;
                place-items: center;
                align-items: end;

                .innerCircle{
                    width: 80%;
                    height: 80%;
                    background-color: #E2CF73;
                    border-radius: 50%;
                }
            }
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            position: relative;
            z-index: 10;
            bottom: 0;
        }
    }


`