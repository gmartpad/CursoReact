import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputText = styled.input`

    border:2px solid #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 17px;
    width:300px;

`;

function CaixaDePesquisa(props) {

    const [valueText, setValueText] = useState(props.frasePadrao || 'escreve uns negócio aí');

    useEffect(() => {
        if(props.onChangeText){
            props.onChangeText(valueText);
        }
    }, [valueText]);

    return (
        <InputText type="text" value={valueText} onChange={(e) => {setValueText(e.target.value)}}/>
    );

}

export default CaixaDePesquisa;