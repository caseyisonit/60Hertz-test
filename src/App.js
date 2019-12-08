import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar } from 'reactstrap';
import moment from 'moment';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import Clothing from './components/Clothing';
import sampleData from './data/sample.json';
import './App.css'
import { strict } from 'assert';


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
<Navbar><h1>Name of Company</h1></Navbar>
    <Container fluid>
      <Row>
        <Col md={4}><h1>Today's Weather for {location}</h1></Col>
        <Col md={{size: 4, offset: 4}}><SearchBar
        /></Col>
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

export default App;
