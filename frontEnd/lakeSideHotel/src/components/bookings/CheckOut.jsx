import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import { useParams, useNavigate } from "react-router-dom";
import { getRoomById } from "../utils/ApiFuctions";
import {
  FaCar,
  FaParking,
  FaTshirt,
  FaTv,
  FaUtensils,
  FaWifi,
  FaWineGlassAlt,
} from "react-icons/fa";
import RoomCarousel from "../common/RoomCarousel";

const CheckOut = () => {
  const { id: roomId } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [roomInfo, setRoomInfo] = useState({
    photo: "",
    roomType: "",
    roomPrice: "",
  });

  useEffect(() => {
    setTimeout(() => {
      getRoomById(roomId)
        .then((response) => {
          setRoomInfo(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, 2000);
  }, [roomId]);
  return (
    <section className="container">
      <div className="row flex-column flex-md-row align-items-center">
        <div className="col-md-4 mt-5 mb-5 card card-body">
          {isLoading ? (
            <p>Loading room information</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="room-info">
              <img
                src={`data:image/png;base64,${roomInfo.photo}`}
                alt={`A ${roomInfo.roomPrice} room`}
                style={{ width: "100%", height: "200px" }}
              />
              <table>
                <tbody>
                  <tr>
                    <th>Room Type : </th>
                    <td>{roomInfo.roomType}</td>
                  </tr>

                  <tr>
                    <th>Room Price : </th>
                    <td>{roomInfo.roomPrice}</td>
                  </tr>

                  <tr>
                    <th>Room Services : </th>
                    <td>
                      <ul className="list-unstyled">
                        <li>
                          <FaWifi /> Wifi
                        </li>

                        <li>
                          <FaTv /> Netflix Premium
                        </li>

                        <li>
                          <FaUtensils /> Breakfast
                        </li>

                        <li>
                          <FaWineGlassAlt /> Mini bar refreshment
                        </li>

                        <li>
                          <FaCar /> Car Service
                        </li>

                        <li>
                          <FaParking /> Parking Space
                        </li>

                        <li>
                          <FaTshirt /> Laundry
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="col-md-8">
          <BookingForm />
        </div>
      </div>
      <div className="">
        <RoomCarousel />
      </div>
    </section>
  );
};

export default CheckOut;
