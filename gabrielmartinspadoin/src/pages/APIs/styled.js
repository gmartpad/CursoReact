import styled from 'styled-components';

export const APIBody = styled.div`

    margin:0 auto;
    padding:20px 0;
    min-height: 425px;
    width:100%;
    max-width:1230px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    .pokémonSelect {
        background:none;
        border:2px solid #fff;
        background-color:#000;
        color:#fff;
        padding: 10px;
        border-radius:10px;
        cursor:pointer;
        transition:all .2s ease-in-out;
        outline:none;
        box-shadow: 2px 2px 4px #666;

        &:hover {
            background-color:#fff;
            color:#000;
            border-color:#000;
            font-weight:bold;
        }

    }

    @media only screen and (max-width: 320px) {
        
        p {
            font-size: 14px !important;
        }

    }

`;

export const Codelike = styled.div`

    width:80%;
    margin:0 10%;

    pre, & > div {
        background:#000;
        color:#9cdcfe;
        padding:20px;
        border-radius:10px;
        white-space:pre-wrap;
        border: 3px solid #fff;
        box-shadow: 2px 2px 4px #666;
        font-family: 'Fira Code', monospace;

        span {
            color:#9CAAFF;
        }

    }

    pre {
        max-height: 400px;
        overflow-y: auto;
        overflow-x: auto;
    }

    @media only screen and (max-width:425px) {

        pre {
            font-size: 14px;
        }

    }

    @media only screen and (max-width:425px) {

        pre {
            font-size: 12px;
        }

    }

`;

export const Divisoria = styled.div`

    margin:20px auto 32px auto;
    width:50%;
    height:2px;
    background:#333;
    border-radius:1px;

`;

export const PokéTitle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: 0 25%;
    background: #aaa;
    border-radius: 10px;
    padding: 20px 30px;
    color: #000;
    border: 3px solid #000;
    box-shadow: 2px 2px 4px #666;
    margin-bottom:15px;

`;