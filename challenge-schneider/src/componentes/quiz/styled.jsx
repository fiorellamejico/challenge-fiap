import styled from 'styled-components';

export const AreaQuiz = styled.div`
  
    
     
    .perguntas{
        font-family: montserrat;
        width: 95%;
        margin-left: 10px;
        color: black;
        font-size: 15px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,.5)
    }

    .geralPerguntas{
        border-bottom: solid 1px green;
        padding-left:10px;
    }
    

    label{
        width:50%;
    }

    input{
        margin-bottom:10px;
    }
   
   button{
    background-color: #46cd4d;
    color:white;
    width: 100%;
    height: 35px;
    padding: 5px 20px;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    outline: 2px solid #46C052;
    font-weight: 500;
    
   }

   button:hover{
    transition: 0.4s;
    box-shadow: 0px 00px 20px #46C052;
   }


 
`;