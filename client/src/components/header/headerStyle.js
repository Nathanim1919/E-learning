import Styled, { styled } from 'styled-components'


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin: 0 3rem;

    .list-items, ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

         @media screen and (max-width: 768px){
            gap: 0rem;
         }



        >ul{
            font-weight: 500;
            list-style-type: none;
            color: #333;
            
            >li{
                padding:0rem .5rem;
                cursor: pointer;
                border-radius: 5px;
                transition: all .1s ease-in-out;

                 @media screen and (max-width: 768px){
                    width: 90%;
                    font-size: 1.3rem;
                    font-weight: 600;
                 }

                &:hover, .active{
                    background-color: orange;
                    color: #fff;
                }
            }

            .close-icon{
                display: none;
            }
            @media screen and (max-width: 768px) {
                flex-direction: column;
                position: fixed;
                background-color: #fff;
                top: -300rem;
                left: 0;
                padding: 1rem;
                height: 60vh;
                width: 100%;
                z-index:10;
                align-items: start;
                overflow-x: hidden;

                .close-icon {
                    position: relative;
                    left: -2rem;
                    font-size: 1.3rem;
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                    cursor: pointer;
                    

                    &:hover{
                        color: orange;
                    }
                }
            }
        }

        > div:nth-child(1) span{
            color: orange;
        }
    }

    .call-icons, .call-icons > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        >div:nth-child(1){
            border-right: 1px solid #eee;
            padding: 0 .5rem;
            >div{
                padding: 0;
                border-radius: 50%;
                display: grid;
                place-items: center;
                width: 30px;
                height: 30px;
                position: relative;

                >span{
                    width: 13px;
                    height: 13px;
                    font-weight: 200;
                    position: absolute;
                    font-size: .6rem;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    background-color: orange;
                    color: #fff;
                    top: 0;
                    right: 0;
                }
            }
        }

        > div{
           gap: 0.5rem;


           > *{
            cursor: pointer;
           }
        }
    }
`;