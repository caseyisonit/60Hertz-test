import React from 'react';
import { Row, Col } from 'reactstrap'
import styled from 'styled-components';

const ClothesWrapper = styled.div`
    h2 {
    font-size: 4vh;
    }  

    img {
        width: 100%;
        margin-right: 5px;
        border-radius: .25rem;
        box-shadow: 5px 8px 8px rgba(0, 0, 0, .45);
        margin-bottom: 50px;
    }
`

const Clothing = props => {

    return (
        <Col>
            <ClothesWrapper>
                <Row>
                    <Col md={6}>
                        <img src={`${process.env.PUBLIC_URL}/images/girl_${props.description}.jpg`} alt={props.description}></img>
                    </Col>
                    <Col md={6}>
                    <img src={`${process.env.PUBLIC_URL}/images/boy_${props.description}.jpg`} alt={props.description}></img>
                    </Col>
                </Row>
            </ClothesWrapper>
        </Col>
    )
}

export default Clothing;