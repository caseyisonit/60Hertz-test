import React from "react";
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const DayWrapper = styled.div`
    .card{
        text-align: center;
        box-shadow: 5px 8px 8px rgba(0, 0, 0, .35);
        margin-bottom: 50px;
    }

    .day.card-header {
        font-size: 20px;
    }

    h2 {
        color: #e69a27;
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
                    <CardHeader className="day"><h5>{props.day}</h5></CardHeader>
                    <CardBody>
                        <h2 className="current">{props.current}&deg;F</h2>
                        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description} />
                        <h2 className="description">{props.description}</h2>
                        <h5 className="hiLow">High: {props.high}&deg;  |  Low: {props.low}&deg;</h5>
                    </CardBody>
                </Card>
            </DayWrapper>
        </Col>
    )
}


export default DayCard;