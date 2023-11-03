import styled from "styled-components";

export const AboutContaienr = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    background-color: #eee;
    padding: 3rem 5rem;
    gap: 2rem;


      @media screen and (max-width:768px){
        padding:2rem;
        margin: 0;
    }


    .getTOKnow{
        display: flex;
        flex-direction: column;
        gap: 0rem;
        align-items: flex-start;
        justify-content: flex-start;
        width: 80%;

          @media screen and (max-width:768px){
           width: 100%;
    }

        >*{
            margin:0;
        }

        .description-text{
            font-size: .9rem;
            color: #333;
            font-weight: 500;
        }

        .our-services{
            font-size: .9rem;
            list-style-type: none;
            font-weight: 600;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            gap: .7rem;
            margin-top: .5rem;

            >*{
                display: flex;
                align-items: center;
                gap: .5rem;
                

                span{
                   opacity: .6;
                }
            }
        }
    }

    .aboutImg{
        position: relative;
        
        img{
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .sloganBox{
            position: absolute;
            background-color: #fff;
            top: 55%;
            left: -30%;
            width: 180px;
            display: flex;
            flex-direction: column;
            padding: 1rem 2rem;
            box-shadow: 0 9px 18px rgba(0,0,0,.06);

            @media screen and (max-width: 768px) {
                 bottom: 5%;
                 left: 0%;
            }

            .icon{
                font-size: 2rem;
                opacity: .7;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #eee;
                padding: 0.3rem;
                display: grid;
                place-items: center;
                margin-bottom: .5rem;
            }

            >*{
                margin: .1rem;
            }

            h3{
                opacity: .8;
                font-size:.9rem;
            }

            p{
                font-weight: 300;
                font-size: .8rem;
            }
        }
    }



`