import Styled, { styled } from 'styled-components'


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .5rem;

    .list-items, .list-items > ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        >ul{
            font-weight: 500;
            list-style-type: none;
            color: #333;
            >li{
                cursor: pointer;


                &:hover{
                    color: blue;
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