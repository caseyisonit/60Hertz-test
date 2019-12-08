import React from 'react';
import styled from 'styled-components';

const ClothesWrapper = styled.div`
    .card{
        text-align: center;
    }
    img {
        width: 20vw;
    }
`

const Clothing = props => {

    return (
        <>
        <ClothesWrapper>

        <h2>What to Wear Today</h2>
        <img src={`${process.env.PUBLIC_URL}/images/girl_${props.description}.jpg`} alt={props.description}></img>
        <img src={`${process.env.PUBLIC_URL}/images/boy_${props.description}.jpg`} alt={props.description}></img>
        </ClothesWrapper>
        </>
    )
}

export default Clothing;