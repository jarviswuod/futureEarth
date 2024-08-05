import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Form } from "react-bootstrap";

import moment from "moment";
import { bookRoom, getRoomById } from "../utils/ApiFuctions";
import BookingSummary from "./BookingSummary";

const BookingForm = () => {
  const { id: roomId } = useParams();
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("userId");

  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [roomInfo, setRoomInfo] = useState({
    photo: "",
    roomType: "",
    roomPrice: "",
  });
  const [booking, setBooking] = useState({
    guestFullName: "",
    guestEmail: currentUser,
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: "",
    numberOfChildren: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    setErrorMessage("");
  };

  const getRoomPriceById = async (roomId) => {
    try {
      const room = await getRoomById(roomId);
      setRoomInfo(room);
      setRoomPrice(room.roomPrice);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getRoomPriceById(roomId);
  }, [booking.checkInDate, booking.checkOutDate]);

  const calculatePayment = () => {
    const checkInDate = moment(booking.checkInDate);
    const checkOutDate = moment(booking.checkOutDate);
    const diffInDays = checkOutDate.diff(checkInDate, "days");
    const price = roomPrice ? roomPrice : 0;

    return diffInDays * price;
  };

  const isGuestCountValid = () => {
    const adultCount = parseInt(booking.numberOfAdults);
    const childrenCount = parseInt(booking.numberOfChildren);
    const totalCount = adultCount + childrenCount;
    return totalCount >= 1 && adultCount >= 1;
  };

  const isCheckOutDateValid = () => {
    calculatePayment();
    if (
      !moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))
    ) {
      setErrorMessage("Check-out date must come before check in date");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      form.checkValidity() === false ||
      !isGuestCountValid() ||
      !isCheckOutDateValid()
    ) {
      e.stopPropagation();
    } else {
      setIsSubmitted(true);
    }
    setIsValidated(true);
  };

  const handleBooking = async () => {
    try {
      const confirmationCode = await bookRoom(roomId, booking);
      setIsSubmitted(true);
      navigate("/booking-success", { state: { message: confirmationCode } });
    } catch (error) {
      setErrorMessage(error.message);
      navigate("/booking-success", { state: { error: errorMessage } });
    }
  };

  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-body mt-5">
              <h4 className="card card-title">Reserve room</h4>
              <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="guestFullName">Full Name : </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    id="guestFullName"
                    name="guestFullName"
                    value={booking.guestFullName}
                    placeholder="Enter your full name"
                    onChange={handleInputChange}
                  />

                  <Form.Control.Feedback type="invalid">
                    Please enter your fullName
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="guestEmail">Email : </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    id="guestEmail"
                    name="guestEmail"
                    value={booking.guestEmail}
                    placeholder="john@example.com"
                    onChange={handleInputChange}
                  />

                  <Form.Control.Feedback type="invalid">
                    Please enter your Email address
                  </Form.Control.Feedback>
                </Form.Group>

                <fieldset style={{ border: "2px" }}>
                  <legend>Loadging period</legend>
                  <div className="row">
                    <div className="col-6">
                      <Form.Label htmlFor="checkInDate">
                        Check-In Date :{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="date"
                        id="checkInDate"
                        name="checkInDate"
                        value={booking.checkInDate}
                        placeholder="check-In-Date"
                        onChange={handleInputChange}
                      />

                      <Form.Control.Feedback type="invalid">
                        Please select a check-in-date
                      </Form.Control.Feedback>
                    </div>

                    <div className="col-6">
                      <Form.Label htmlFor="checkOutDate">
                        Check-out Date :{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="date"
                        id="checkOutDate"
                        name="checkOutDate"
                        value={booking.checkOutDate}
                        placeholder="check-out-Date"
                        onChange={handleInputChange}
                      />

                      <Form.Control.Feedback type="invalid">
                        Please select a check-out-date
                      </Form.Control.Feedback>
                    </div>

                    {errorMessage && (
                      <p className="error-message text-danger">
                        {errorMessage}
                      </p>
                    )}
                  </div>
                </fieldset>

                <fieldset style={{ border: "2px" }}>
                  <legend>Number of Guest</legend>
                  <div className="row">
                    <div className="col-6">
                      <Form.Label htmlFor="numberOfAdults">
                        Adults :{" "}
                      </Form.Label>
                      <Form.Control
                        required
                        type="number"
                        id="numberOfAdults"
                        name="numberOfAdults"
                        value={booking.numberOfAdults}
                        placeholder="0"
                        min={1}
                        onChange={handleInputChange}
                      />

                      <Form.Control.Feedback type="invalid">
                        Please select at least one adult.
                      </Form.Control.Feedback>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <Form.Label htmlFor="numberOfChildren">
                        Children :
                      </Form.Label>
                      <Form.Control
                        required
                        type="number"
                        id="numberOfChildren"
                        name="numberOfChildren"
                        value={booking.numberOfChildren}
                        placeholder="0"
                        min={0}
                        onChange={handleInputChange}
                      />

                      <Form.Control.Feedback type="invalid">
                        Please select number of children
                      </Form.Control.Feedback>
                    </div>
                  </div>
                </fieldset>
                <div className="form-group mt-2 mb-2">
                  <button type="submit" className="btn btn-hotel">
                    Continue
                  </button>
                </div>
              </Form>
            </div>
          </div>

          <div className="col-md-6">
            {isSubmitted && (
              <BookingSummary
                booking={booking}
                payment={calculatePayment}
                isFormValid={isValidated}
                onConfirm={handleBooking}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
