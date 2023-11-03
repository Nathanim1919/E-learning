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
                cursor: pointer;

                 @media screen and (max-width: 768px){
                    width: 90%;
                    padding: 1rem;
                    font-size: 1.3rem;
                    font-weight: 600;
                 }

                &:hover{
                    background-color: orange;
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
        }

        > div{
           gap: 0.5rem;


           > *{
            cursor: pointer;
           }
        }
    }
`;