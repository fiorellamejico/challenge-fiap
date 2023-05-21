import styled from 'styled-components';

export const AreaHeader = styled.div`
    background-color: #46cd4d;
    color: #fff;
    width: 100%;
    position: sticky;
    z-index: 9999;
    top: 0;

    .container {
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

    .logo {
        flex: 1;
        img {
            height: 30px;
        }
    }

    nav {
        ul {
            display: flex;
        }

        li {
            list-style: none;
            margin-left: 20px;
        }
    }
`;
