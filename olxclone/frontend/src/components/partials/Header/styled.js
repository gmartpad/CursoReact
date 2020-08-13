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

nav {
    padding-top:10px;
    padding-bottom:10px;

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul{
        display: flex;
        align-items: center;
        height: 40px;
    }

    li {
        margin: 0 20px;

        a {
            color: #000;
            font-size:14px;
            text-decoration: none;

            &:hover{
                color:#999;
            }

            &.button {
                background-color: #FF8100;
                border-radius: 4px;
                color: #FFF;
                padding: 5px 10px;
                transition: all .2s ease-in-out;
            }

            &.button:hover{
                background-color: #E57706;
            }
        }

    }

}

`;