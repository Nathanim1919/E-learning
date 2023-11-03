import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 3rem;
    overflow-x: hidden;

    >div:nth-child(1){
        h2{
            font-size: 1.5rem;
            margin: .4rem 0;

            span{
                color: orange;
            }
        }
        p{
            font-size: .9rem;
            font-weight: 600;
        }
    }

    >div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        form{
            display: flex;

            input{
                background-color: #eee;
                outline: none;
            }

            input, button{
                padding: .3rem .6rem;
                border: none;
            }

            button{
                background-color: blue;
                color: #fff;
                font-size: 1.2rem;
                cursor: pointer;
            }

            >*{
                flex: 1;
            }
        }

        >*{
            margin: 0;
            text-align: left;
        }

        h3{
            font-size: 1rem;
        }

        >ul{
            display: flex;
            flex-direction: column;
            text-align: left;
        }

        li{
            color: #6E7274;
            font-weight: 300;
            list-style-type: none;
           
        }

        .socialIcons{
            display: flex;
            align-items: center;
            gap: 1rem;

            .icons{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: .5rem;
            }
        }
    }
`