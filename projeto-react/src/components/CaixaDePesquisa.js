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

    const [valueText, setValueText] = useState(props.frasePadrao);

    // useEffect(() => {
    //     if(props.onChangeText){
    //         props.onChangeText(valueText);
    //     }
    // }, [valueText]);

    function handleKeyUp(e) {
        if(e.keyCode == 13) {
            if(props.onEnter){
                props.onEnter(valueText);
            }
            setValueText('');            
        }
    }

    return (
        <InputText 
            type="text"
            value={valueText}
            placeholder={valueText} 
            onKeyUp={handleKeyUp}
            onChange={(e) => {setValueText(e.target.value)}}
        />
    );

}

export default CaixaDePesquisa;