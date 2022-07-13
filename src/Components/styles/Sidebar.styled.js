import styled from "styled-components";

export const StyledSidebar = styled.div`
      padding: 40px 30px;
     display: flex;
     flex-direction: column;
     margin: 0px auto;
     background-color:#1E213A;
     border-right: 1px solid black;
     flex: 0.25;

     .sidebar-header{
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem;
        height: 50px;
     }
    
   .sidebar__button{
        color: white;
        padding: 0.6rem;
        border: none;
        outline-width: 0;
        background-color: darkgrey;
        }
     .material-symbols-outlined {
        margin: 15px;
        cursor: pointer;
        padding: 13px;
         background-color: #585676;
        color: darkgrey;
        border-radius: 50px ;
         height: 50px;
        width: 50px;
        
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}


.cloud-icon{
   position: absolute;
   top: 100px;
   left:80px;
   background-blend-mode: lighten;
}
.sidebar__image{
    place-items: center;
    margin: 0 auto;
    padding: 2rem;
}
.bg{
    position: relative;
      top: 0;
      left: 0;
}
/* .img{
    background: url('https://raw.githubusercontent.com/JuanAynose/weather-app-devchallenges/main/assets/images/Cloud-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
    height: 100vh;
   
} */
.sidebar__temp{
    margin: 1rem auto;
    font-size:24px;
    color: lightgray;
}
.sidebar__weatherName{
    margin: 4rem auto;
    font-size: 18px;
    color: lightgray;
}

.sidebar__date{
    color: lightgray;
    font-size: 12px;
    margin: 1rem auto;

}
.sidebar__location{
    color: lightgray;
    margin: 1rem auto;
    display: block;
    .material-symbols-outlined{
        margin: 0;
        
    }
}

  

`