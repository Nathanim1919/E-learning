import styled from "styled-components";


export const CourseContainer = styled.div`
    display: grid;

    .header, .sliders {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        .slider-icons,.course-filter{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;
        }

        .slider-icons{
            gap: 0;
        }

        .slider-icons > *{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            cursor: pointer;
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
            gap: 2rem;

            .course{
                border: 1px solid #333;
                display: grid;

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .content{
                    display: flex;
                    flex-direction: column;

                    >*{
                        margin: 0;
                    }

                    .cost{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .rating-info{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;

                        >div:nth-child(1){
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 3rem;
                        }
                    }
                }
            }
        }
`
