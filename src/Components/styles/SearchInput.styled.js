import styled from "styled-components";

export const StyledSearchInput = styled.div`
      text-align: center;
      padding: 20px 30px;
    display: flex;
     flex-direction: column;
     background-color:#1E213A;
     border-right: 1px solid black;
     flex: 0.25;
     
   
     
 
            div{
                .material-symbols-outlined{
                
                    font-weight: bold;
                    margin: 15px;
                    cursor: pointer;
                
                    font-variation-settings:
                    'FILL' 0,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 48

                }
                .close{
                    top: 0px;
                    position: absolute;
                   left: 330px;
                    color: white;
                }
            }

            .searchInput__header{
                margin-top: 50px;
                    display: flex;
                    align-items: center; 
                .search{
                    border: 1px solid #E7E7EB;
                    outline-width: 0;
                     background:  #1E213A;
                     display: flex;
                     cursor: pointer;
                     
                     span{
                        border: none;
                        color: #616475;
                     }
                    input{
                        color: white;
                      border: none;
                        outline-width: 0;
                        background-color:transparent;
                        font-size: 16px;
                    }
                    input::placeholder{
                        font-size: 16px;
                        color: #616475;
                    }
                }

             .btn{
                    margin-left: 10px ;
                    color: #E7E7EB;
                     font-size: 19px;
                     padding: 15px;
                    background-color: #3c47e9;
                }
            }

            .searchInput__chats{
                margin-top: 4rem;
                cursor: pointer;
                         
                .searchInput__div{
                         
                   div{
                    padding: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    p{
                        color: #E7E7EB;

                    }
                    span{
                        color: #616475;
                        padding: 3px;
                    }
                   }
                  
                }
               .searchInput__div:hover{
                      border: 1px solid #E7E7EB;
    transform: translateX(0%);
                        transition: transform .5s ease-in;
                      /* transition: border ease-in .4s;
                      transition-duration:.2s ;
                      transform: scale(1);                
                        transition-property: transform, border;
                        transition-timing-function: ease-in; */
                    }

            }
`