import styled from "styled-components";

export const TestimonialContainer = styled.div`
    display: grid;
    place-items: center;
    margin: 5rem 3rem;
    gap: 3rem;

    .testimonials{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;


        >div{
            display: grid;
            box-shadow: 0 10px 43px rgba(0,0,0,.052);
            padding: 1rem 2rem;

            >p{
                font-size: 1rem;
                font-weight: 500;
                font-style: italic;
            }

            .info{
                display: flex;
                align-items: center;
                gap: .5rem;
                margin: 2rem;

                .name-info{
                    display: flex;
                    flex-direction: column;

                    h3{
                        font-size: .9rem;
                        font-weight: 600;
                    }

                    p{
                        font-size:.8rem;
                        font-weight: 300;
                    }

                    >*{
                        margin: 0;
                    }
                }

                .pic{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;

                    >img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
`