import styled from "styled-components";


export const CourseContainer = styled.div `
    display: grid;
    margin: 0 3rem;
    margin-bottom: 8rem;


    @media screen and (max-width:768px){
        padding:2rem;
        margin: 0;
    }

    .header, .sliders {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        position: relative;
        z-index: 10;

        h1{
            @media screen and (max-width:768px){
              font-size: 1.4rem;
            }
            @media screen and (max-width:468px){
              font-size: 1.2rem;
            }
        }

        .slider-icons,.course-filter{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;
            
        }
        .course-filter{
            cursor: pointer;
            h4{
                background-color: rgba(0,0,255,.053);
                display: flex;
                padding:.2rem .6rem;
                justify-content: center;
                align-items: center;
                gap: .5rem;
                color: #333;
                font-weight: 300;
                font-size: .9rem;
            }
            .courseTypes{
                background-color: #fff;
                box-shadow: 0 19px 48px rgba(0,0,0,.07);
                position: absolute;
                z-index: 40;
                top: 4rem;
                list-style-type: none;
                color: #333;
                padding: 1rem;
                width: 100%;
                >*{
                    padding: 0.3rem;
                    border-bottom: 1px solid #eee;
                    cursor: pointer;
                    width: 100%;
                    font-size: .9rem;

                    &:hover{
                        background-color: #eee;
                        color: #000;
                    }
                }
            }
        }

        .slider-icons{
            gap: .5rem;
        }

        .slider-icons > *{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            cursor: pointer;
            background-color: #eee;
        }

          
        .slider-icons > *:hover{
            background-color: orange;
        }

        .course-filter{
            font-size: 1rem;
            color: #18ACF0;
            font-weight: 400;
        }


    }

      .PopularCourses{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-top: 3rem;

            .course{
                box-shadow: 0 12px 24px rgba(0,0,0,.07);
                border-radius: 20px;
                overflow: hidden;
                display: grid;
                grid-template-rows: .4fr .6fr;
                height: 100%;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                div.content{
                    display: flex;
                    flex-direction: column;
                    gap: 0rem;
                    padding:0 2rem;

                    >*{
                        margin: 0rem;
                    }

                    >h2{
                        font-size: 1.3rem;
                        line-height: 1.2;
                        border-bottom: 2px solid #eee;
                        padding-bottom: 0.4rem;
                    }

                    .cost{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        h4{
                            font-size: .85rem;
                            border: 1px solid #eee;
                            background-color: #E0F1F9;
                            color: #52585B;
                            padding: 0.1rem .5rem;
                            font-weight: 300;
                        }

                        h4:nth-child(2){
                            font-size: 1.2rem;
                            color:blue;
                            background-color: transparent;
                            font-weight: 800;
                            border: none;
                        }
                    }

                    .rating-info{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        gap: 3rem;

                        >div:nth-child(1){
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 1.5rem;
                            
                            >div{
                                font-weight: 100;
                                font-size:.9rem;
                                color: #53575A;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                gap: .7rem;
                            }
                        }
                    }

                    .instructor{
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        overflow: hidden;

                        img{
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
`