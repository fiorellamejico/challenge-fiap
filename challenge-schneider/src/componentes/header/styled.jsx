import styled from 'styled-components';

export const AreaHeader =styled.div`
    heigth: 60px;
    background-color: #46cd4d;
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

        .logo{
            flex: 1;
            img{
                height: 30px;
            }
        }

        nav{
            ul{
                display: flex;
            }
                li{
                    list-style:none;
                    margin-left: 20px;
                }
        }

`;