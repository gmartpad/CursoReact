import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color:#fff;
    height:50px;
    border-bottom:1px solid #ccc;

    .container {
        max-width:1000px;
        margin:auto;
        display:flex;
    }

    a {
        text-decoration: none;
    }

    .logo{

        flex:1;
        display:flex;
        align-items:center;
        height: 60px;

        span[class*=logo]{
            font-size:27px;
            font-weight:bold;
        }

        .logo-1{
            color:#f00;
        }
        .logo-2{
            color:#0f0;
        }
        .logo-3{
            color:#00f;
        }
    }

    

`;