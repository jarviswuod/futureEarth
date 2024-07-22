import React, { useEffect, useState } from "react";
import { getAllRooms } from "../utils/ApiFuctions";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  Carousel,
  CarouselItem,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const RoomCarousel = () => {
  const [rooms, setRooms] = useState([
    { id: "", roomType: "", roomPrice: "", photo: "" },
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllRooms()
      .then((data) => {
        setRooms(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="mt-5">Loading rooms...</div>;
  }
  if (errorMessage) {
    return <div className="text-danger mt-5">Error : {errorMessage}</div>;
  }

  return (
    <section className="bg-light mb-5 mt-5 shadow">
      <h4 className="my-4 pt-3 px-3">
        <Link to={"/browse-all-rooms"} className="hotel-color text-center">
          Browse all rooms
        </Link>
      </h4>
      <Container>
        <Carousel indicators={false} controls={false}>
          {[...Array(Math.ceil(rooms.length / 4))].map((_, index) => (
            <CarouselItem key={index}>
              <Row>
                {rooms.slice(index * 4, index * 4 + 4).map((room) => (
                  <Col key={room.id} className="mb-4" xs={12} md={6} lg={3}>
                    <Card>
                      <Link to={`/book-room/${room.id}`}>
                        <CardImg
                          variant="top"
                          src={`data:image/png;base64, ${room.photo}`}
                          alt={`A ${room.roomType} photo`}
                          className="w-100"
                          style={{ height: "200px" }}
                        />
                      </Link>

                      <CardBody>
                        <CardTitle className="hotel-color">
                          {room.roomType}
                        </CardTitle>
                        <CardTitle className="room-price">
                          ${room.roomPrice} /night
                        </CardTitle>
                        <div className="flex-shrink-0">
                          <Link
                            className="btn btn-sm btn-hotel"
                            to={`/book-room/${room.id}`}
                          >
                            Book Now
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </CarouselItem>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default RoomCarousel;
