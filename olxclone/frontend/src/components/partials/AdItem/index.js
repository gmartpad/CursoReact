import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {

    const returnRightPrice = () => {
        let p = '';
        
        props.data.priceNecotiable            
        ? 
            p = `Preço Negociável`
        :
            p = `R$ ${props.data.price}`

        return p;
    }

    const price = returnRightPrice();

    return (
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt="" />
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">
                    {price}
                </div>
            </Link>
        </Item>
    );
}