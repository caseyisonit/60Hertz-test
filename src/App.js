import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import moment from 'moment';
import DayCard from './components/DayCard';
import Clothing from './components/Clothing';
import NetworkDetector from './hoc/NetworkDetector';
import API from './utils/API';
import './App.css'

const App = () => {

  //using React Hooks for state
  const [weather, setWeather] = useState({
    today: null,
    location: "",
  });

  //destructured for easier calling
  const { today, location } = weather;

  useEffect(() => {
    getWeather(80202);
  }, []);

  const getWeather = zip => {

    API.getWeather(zip)
      .then(res => {
        console.log(res.data);
        setWeather({
          today: res.data,
          location: `${res.data.name}`
        });
      })
      .catch(err => console.log(err));

  };

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
          <Col md={{ size: 8, offset: 2 }}>
            <p className="intro">Welcome to your very own fashion forecast! Don't let weather ruin your holidays this year. We've recommended options for staying stylish and modest that will hold up in any weather condition.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            {today ? ( <DayCard
              day={moment().format('dddd')}
              current={today.main.temp}
              high={today.main.temp_max}
              low={today.main.temp_min}
              icon={today.weather[0].icon}
              description={today.weather[0].main}
            /> ) : (<h2>We're sorry!</h2>)}
              
          </Col>
          <Col md={8}>
            {today ? (<Clothing
            description={today.weather[0].main}
            />) : (<h2>Looks like we're having issues.</h2>)}
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NetworkDetector(App);
