import styled from 'styled-components';

export const HeaderArea = styled.div`

    height:80px;
    width:100%;
    background:#222;
    color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;

    ul {
        display:flex;
        flex-direction:row;
        padding:0;

        li {
            list-style:none;
            text-transform:uppercase;
            perspective: 300px;
            transition: all .2s ease-in-out;
            margin:0 5px;
            padding:5px 10px;
            border-radius:10px;
            transition: all .2s ease-in-out;

            &.noUpper{
                text-transform:none;
            }

            a {
                color:#fff;
                font-weight:bold;
                text-decoration:none;
                display:block;
                transition: all .2s ease-in-out;
            }

            &:hover{
                background:#ddd;
                a{
                    color:#222;
                }
            }

        }

    }

`;