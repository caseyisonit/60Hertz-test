import React from "react";
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const DayWrapper = styled.div`
    .card{
        text-align: center;
        box-shadow: 5px 8px 8px rgba(233, 107, 22, .45);
        margin-bottom: 50px;
    }

    .day.card-header {
        font-size: 20px;
    }

    h2 {
        color: #e96b16;
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
                    <CardHeader className="day"><h3>{props.day}</h3></CardHeader>
                    <CardBody>
                        <h2 className="current">{props.current}&deg;</h2>
                        <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description} />
                        <h2 className="description">{props.description}</h2>
                        <p className="hiLow">High: {props.high}&deg;  |  Low: {props.low}&deg;</p>
                    </CardBody>
                </Card>
            </DayWrapper>
        </Col>
    )
}


export default DayCard;