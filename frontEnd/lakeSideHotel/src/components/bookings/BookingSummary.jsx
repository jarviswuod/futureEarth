import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Button } from "react-bootstrap";

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
  const checkInDate = moment(booking.checkInDate);
  const checkOutDate = moment(booking.checkOutDate);
  const numberOfDays = checkOutDate.diff(checkInDate, "days");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);
      setIsBookingConfirmed(true);
    }, 3000);
  };

  useEffect(() => {
    if (isBookingConfirmed) {
      onConfirm();
    }
  }, [isBookingConfirmed, navigate]);

  return (
    <div className="card card-body mt-5">
      <h4>Reservation Summary</h4>

      <p>
        FullName : <strong>{booking.guestFullName}</strong>
      </p>
      <p>
        Email : <strong>{booking.guestEmail}</strong>
      </p>
      <p>
        Check In Date :{" "}
        <strong>{moment(booking.checkInDate).format("MMM Do YYYY")}</strong>
      </p>
      <p>
        Check Out Date :{" "}
        <strong>{moment(booking.checkOutDate).format("MMM Do YYYY")}</strong>
      </p>
      <p>
        Number of Days : <strong>{numberOfDays}</strong>
      </p>

      <div>
        <p>
          Number of Guests :{" "}
          <strong>
            Adult{booking.numberOfAdults > 1 ? "s" : ""} :{" "}
            {booking.numberOfAdults}{" "}
          </strong>
          <strong>Children : {booking.numberOfChildren}</strong>
        </p>
      </div>

      {payment() > 0 ? (
        <>
          <p>
            Total payment: <strong>${payment()}</strong>
          </p>
          {isFormValid && !isBookingConfirmed ? (
            <Button variant="sucess" onClick={handleConfirmBooking}>
              {isProcessingPayment ? (
                <div className="btn btn-hotel">
                  <span
                    className="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <p>Booking Confrimed, redirecting to payment... </p>
                </div>
              ) : (
                <>
                  <p className="btn btn-hotel">
                    Confimed Booking, Proceed to payment
                  </p>
                </>
              )}
            </Button>
          ) : isBookingConfirmed ? (
            <div className="d-flex justify-content-center aligh-items-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading</span>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <p className="text-danger">
          Check-out date must be after check in date.
        </p>
      )}
    </div>
  );
};

export default BookingSummary;
