import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Jumbotron} from 'reactstrap';
import moment from 'moment';
import DayCard from './components/DayCard';
import Clothing from './components/Clothing';
import NetworkDetector from './hoc/NetworkDetector';

import sampleData from './data/sample.json';
import './App.css'


const App = () => {
  //using React Hooks for state
  const [data, setData] = useState({
    day: sampleData,
    location: "Denver, CO",
    searchTerm: "",
  });

  //destructured for easier calling
  const { day, location, searchTerm } = data;

  return (
    <>
      <Jumbotron>
        <Row>
          <img class="logo" src="../images/salom.png" alt="Salom Mulabi Clothing" />
        </Row>
        <Row>
        <h1 className="title">FASHION FORECAST</h1>
        </Row>
        <Row>
        <h3 className="city">{location}</h3>
        </Row>
      </Jumbotron>
      <Container >
        <Row>
          <Col md={{size: 8, offset: 2}}>
          <p className="intro">Welcome to your very own fashion forecast! Don't let weather ruin your holidays this year. We've recommended options for staying stylish and modest that will hold up in any weather condition.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <DayCard
              day={moment().format('dddd')}
              current={day.main.temp}
              high={day.main.temp_max}
              low={day.main.temp_min}
              icon={day.weather[0].icon}
              description={day.weather[0].main}
            />
          </Col>
          <Col md={8}>
            <Clothing
              description={day.weather[0].main}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NetworkDetector(App);
