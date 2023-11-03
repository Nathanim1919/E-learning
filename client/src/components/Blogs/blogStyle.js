import styled from "styled-components";


export const PostContainer = styled.div`
    display: grid;
    margin: 3rem;

    >div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    >div:nth-child(2){
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
       gap: 2rem;

       .post{
        display: grid;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .content{
            display: flex;
            flex-direction: column;

            >* {
                margin: 0;
            }

            h2{
                font-size: 1.2rem;
                margin: 1rem 0;
                line-height: 1.2;
            }

            p{
                color: #333;
                font-weight: 300;
                font-size: 1rem;
            }
        }
       }
    }
`