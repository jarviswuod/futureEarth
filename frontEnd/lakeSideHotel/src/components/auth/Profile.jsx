import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";
import { deleteUser, getUser } from "../utils/ApiFuctions";

const Profile = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState({
    id: null,
    email: "",
    firstName: "",
    lastName: "",
    roles: [{ id: "", name: "" }],
  });
  const [bookings, setBookings] = useState([
    {
      id: "",
      room: { id: "", roomType: "" },
      checkInDate: "",
      checkOutDate: "",
      bookingConfirmationCode: "",
    },
  ]);

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const userData = await getUser(userId, token);
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    const fectchBookings = async () => {
      try {
        const response = await getBookingsByUserId(userId, token);
        setBookings(response);
      } catch (error) {
        console.error("Error fetching bookings: ", error.message);
        setBookings(error.message);
      }
    };
    fectchBookings();
  }, [userId]);

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? His action cannot be undone."
    );
    if (confirmed) {
      await deleteUser(userId)
        .then((response) => {
          setErrorMessage(response.data);
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("userRole");
          navigate("/");
          window.location.reload();
        })
        .catch((error) => {
          setErrorMessage(error.data);
        });
    }
  };

  return (
    <div className="container">
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      {message && <p className="text-success">{message}</p>}
      {user ? <></> : <> </>}
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Room Id</th>
            <th>Room Type</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>

            <th>Confirmation code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filterBookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.room.id}</td>
              <td>{booking.room.roomType}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>

              <td>{booking.bookingConfirmationCode}</td>
              <td>{booking.bookingConfirmationCode}</td>
              {/* <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleBookingCancellation(booking.id)}
                >
                  Cancel
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
