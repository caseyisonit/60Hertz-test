import React from "react";
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const DayWrapper = styled.div`
    .card{
        text-align: center;
    }
    img {
        width: auto;
    }
`

const DayCard = props => {

    return (
        <Col>
            <DayWrapper>
                <Card>
                    <CardHeader className="day">{props.day}</CardHeader>
                    <CardBody>
                        <h2 className="current">{props.current}&deg;</h2>
                        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description} />
                        <h3 className="description">{props.description}</h3>
                        <p className="hiLow">High: {props.high}&deg;  |  Low: {props.low}&deg;</p>
                    </CardBody>
                </Card>
            </DayWrapper>
        </Col>
    )
}

export default DayCard;