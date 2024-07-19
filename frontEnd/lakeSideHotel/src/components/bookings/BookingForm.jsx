import React, { useState, useParams, useEffect, useNavigate } from "react";

import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlFeedback,
} from "react-bootstrap";

import moment from "moment";
import { bookRoom } from "../utils/ApiFuctions";
import BookingSummary from "./BookingSummary";

const BookingForm = () => {
  const { id: roomId } = useParams();
  const navigate = useNavigate();

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
    guestEmail: "",
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
      const response = await getRoomPriceById(roomId);
      setRoomPrice(response.roomPrice);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getRoomPriceById(roomId);
  }, [roomId]);

  const calculatePayment = () => {
    const checkInDate = moment(booking.checkInDate);
    const checkOutDate = moment(booking.checkOutDate);
    const diffInDays = checkOutDate.diff(checkInDate);
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
    if (
      !moment(booking.checkOutDate).isSameOrAfter(moment(booking.checkInDate))
    ) {
      setErrorMessage("Chesk-out date must come before check in date");
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
      navigate("/", { state: { message: confirmationCode } });
    } catch (error) {
      setErrorMessage(error.message);
      navigate("/", { state: { error: errorMessage } });
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
                <FormGroup>
                  <FormLabel htmlFor="guestFullName">Full Name : </FormLabel>
                  <FormControl
                    required
                    type="text"
                    id="guestFullName"
                    name="guestFullName"
                    value={booking.guestFullName}
                    placeholder="Enter your full name"
                    onChange={handleInputChange}
                  />

                  <FormControlFeedback type="invalid">
                    Please enter your fullName
                  </FormControlFeedback>
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="guestEmail">Email : </FormLabel>
                  <FormControl
                    required
                    type="email"
                    id="guestEmail"
                    name="guestEmail"
                    value={booking.guestEmail}
                    placeholder="john@example.com"
                    onChange={handleInputChange}
                  />

                  <FormControlFeedback type="invalid">
                    Please enter your Email address
                  </FormControlFeedback>
                </FormGroup>

                <fieldset style={{ border: "2px" }}>
                  <legend>Loadging period</legend>
                  <div className="row">
                    <div className="col-6">
                      <FormLabel htmlFor="checkInDate">
                        Check-In Date :{" "}
                      </FormLabel>
                      <FormControl
                        required
                        type="date"
                        id="checkInDate"
                        name="checkInDate"
                        value={booking.checkInDate}
                        placeholder="check-In-Date"
                        onChange={handleInputChange}
                      />

                      <FormControlFeedback type="invalid">
                        Please select a check-in-date
                      </FormControlFeedback>
                    </div>

                    <div className="col-6">
                      <FormLabel htmlFor="checkOutDate">
                        Check-out Date :{" "}
                      </FormLabel>
                      <FormControl
                        required
                        type="date"
                        id="checkOutDate"
                        name="checkOutDate"
                        value={booking.checkOutDate}
                        placeholder="check-out-Date"
                        onChange={handleInputChange}
                      />

                      <FormControlFeedback type="invalid">
                        Please select a check-out-date
                      </FormControlFeedback>
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
                      <FormLabel htmlFor="numberOfAdults">Adults : </FormLabel>
                      <FormControl
                        required
                        type="number"
                        id="numberOfAdults"
                        name="numberOfAdults"
                        value={booking.numberOfAdults}
                        placeholder="0"
                        min={1}
                        onChange={handleInputChange}
                      />

                      <FormControlFeedback type="invalid">
                        Please select at least one adult.
                      </FormControlFeedback>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <FormLabel htmlFor="numberOfChildren">
                        Children :
                      </FormLabel>
                      <FormControl
                        required
                        type="number"
                        id="numberOfChildren"
                        name="numberOfChildren"
                        value={booking.numberOfChildren}
                        placeholder="0"
                        min={0}
                        onChange={handleInputChange}
                      />

                      <FormControlFeedback type="invalid">
                        Please select number of children
                      </FormControlFeedback>
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
