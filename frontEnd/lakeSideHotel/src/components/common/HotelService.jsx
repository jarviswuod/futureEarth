import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Header from "./Header";
import {
  FaClock,
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi,
} from "react-icons/fa";

const HotelService = () => {
  return (
    <>
      <Container>
        <Header title={"Our Services"} />
        <Row>
          <h4 className="mt-8">
            Services at <span className="hotel-color">LakeSide - </span>Hotel
          </h4>
        </Row>
        {/* <hr /> */}
        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="hotel-color align-center">
                  <FaWifi />
                  <span>WiFi</span>
                </CardTitle>
                <CardText>
                  Stay connected with high-speed internt access.
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody>
                <CardTitle className="hotel-color align-center">
                  <FaUtensils />
                  <span>Breakfast</span>
                </CardTitle>
                <CardText>Start your day with a delicious buffet.</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody>
                <CardTitle className="hotel-color align-center">
                  <FaTshirt />
                  <span>Laundry</span>
                </CardTitle>
                <CardText>
                  Keep your clothes clean and fresh with our laundry services/
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody>
                <CardTitle className="hotel-color align-center">
                  <FaCocktail />
                  <span>Mini-bar</span>
                </CardTitle>
                <CardText>
                  Enjoy a refreshing drink or snack from out in-room mini-bar.
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody>
                <CardTitle className="hotel-color align-center">
                  <FaParking />
                  <span>Parking</span>
                </CardTitle>
                <CardText>
                  Park your car conveniently in our on-site parking lot.
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardBody>
                <CardTitle className="hotel-color align-center">
                  <FaSnowflake />
                  <span>Air condtioning</span>
                </CardTitle>
                <CardText>
                  Stay cool and comfortable with our air conditioning system.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HotelService;
