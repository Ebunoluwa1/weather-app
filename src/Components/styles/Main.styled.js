import styled from "styled-components";

export const StyledMain = styled.div`
        background-color: #100E1D;
        display: flex;
        flex-direction: column;
        flex: 0.75;
        color:#E7E7EB;

        .main__wrapper{
                margin-top: 20px;
                margin-bottom: 20px;
                margin-right: 50px;
                margin-left:90px ;
        }
        .main-header{
                cursor: pointer;
                font-size: 16px;
                top:20px;
                right: 110px;
                position: absolute;
                width: 6rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
        }
         .units{
                background-color: #E7E7EB;
                color: #100E1D;
                padding: 10px;
                height: 40px;
                width: 40px;
                border-radius: 50px;
                }
        
       .inactive{
                background-color: #585676;
                color: white;
       }
     
       .cards{
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(6, 2fr);
        grid-gap: 25px;
     /* grid-auto-rows: minmax(100px, auto); */
       
       }
        .main__card{
                align-items: center;
            background-color: #1E213A;
            width: 130px;
            display: flex;
            flex-direction: column;
            padding: 10px ;

            .temp{
                margin-top: 10px;
                display: inline-flex;
                align-items: center;

                .min {
                padding-right: 10px;
             
              }
            }
        
        }

       
        .main__highlights{
         margin-top: 50px;
        }
        .card__highlight{
            margin-top: 20px ;
            display: grid;
                grid-template-columns: 2fr 2fr;
                /* grid-template-rows:  minmax(100px, auto); */
                grid-gap: 8px; 
                row-gap: 5px;

        }
        .Highlight{
           margin-top: 15px;
                /* grid-auto-rows: minmax(100px, auto)  */
        }

        .main__cardHighlight{
           align-items: center;
            background-color: #1E213A;
            width: 350px;
            display: flex;
            flex-direction: column;
            padding: 20px;

             p{
                margin-bottom: 10px;
             }

             div{
                 display: flex;
                 h1{
            }
            span{
                padding: 7px;
            }
             }
           
             div {
                display: flex;
                margin-top: 20px;
                .material-symbols-outlined {
                        transform: rotate(-150deg);
                        background: rgba(255, 255, 255, 0.3);
                        width: 24.99;
                        height: 24.99;
                        border-radius: 50px;
                }
                aside{
                        font-size: 14px;
                        padding: 10px;
                }
             }

                div.highlight__icon{
                        margin-top: -2px;
                        display: flex;
                        flex-direction: column;
                       div{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                       } 

                       main{
                        margin-top: -7px;
                        width: 180px;
                        border-bottom: 5px solid #E7E7EB;
                        position: relative;
                        border-radius: 80px;
                       }
                       main:before{
                        background: #FFEC65;
                        position: absolute;
                        content: '';
                        width: 130px;
                        left:0;
                        height: 5px;
                        bottom: -5px;
                        border-radius: 80px;
                       }
                       small{
                        padding: 2px;
                        align-items: left;
                        /* padding: 3px; */
                        margin-left: 170px;
                       }
                }


        }
` 