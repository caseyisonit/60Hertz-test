import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import SearchBar from './components/SearchBar';
import DayCard from './components/DayCard';
import DayDetails from './components/DayDetails';
import sampleData from './data/sample.json';


const App = () => {
  //using React Hooks for state
  const [data, setData] = useState({
    day: sampleData,
    location: "Denver, CO",
    searchTerm: ""
  });

  //destructured for easier calling
  const { day, location, searchTerm } = data;


  return (
    <Container>
      <Row>
        <Col md={8}><h1>Today's Weather for {location}</h1></Col>
        <Col md={4}><SearchBar
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
          <DayDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
