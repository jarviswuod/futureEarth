import React, { useEffect, useState } from "react";
import { updateRoom, getRoomById } from "../utils/ApiFuctions";
import RoomTypeSelector from "../common/RoomTypeSelector";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const EditRoom = () => {
  const { id: roomId } = useParams();

  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoomInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({ ...room, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId);
        setRoom(roomData);
        setImagePreview(`data:image/jpg;base64,${roomData.photo}`);
      } catch (error) {
        setErrorMessage("Error in fetching your room");
      }
    };
    fetchRoom();
  }, [roomId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await updateRoom(roomId, room);

      if (success.status == 200) {
        setSuccessMessage("Room was updated successfully");
        const updatedRoomData = await getRoomById(roomId);
        setRoom(updatedRoomData);
        setImagePreview(`data:image/jpg;base64,${updatedRoomData.photo}`);
        setErrorMessage("");
      } else {
        setErrorMessage("Error updating room");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }

    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 2000);
  };

  return (
    <>
      <section className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <h2 className="mt-3 mb-2">Edit room</h2>
            {successMessage && (
              <div className="alert alert-success fade show action-message">
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="alert alert-danger fade show" action-message>
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="roomType" className="form-label">
                  Room Type
                </label>
                <RoomTypeSelector
                  handleRoomInputChange={handleRoomInputChange}
                  newRoom={room}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="roomPrice" className="form-label">
                  Room Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  required
                  id="roomPrice"
                  name="roomPrice"
                  value={room.roomPrice}
                  onChange={handleRoomInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="photo" className="form-label">
                  Room Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  required
                  id="photo"
                  name="photo"
                  onChange={handleImageChange}
                />

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt={`A ${room.roomType} photo`}
                    style={{ maxWidth: "400px", maxHeight: "400px" }}
                    className="mb-3"
                  />
                )}
              </div>

              <div className="space-between">
                <Button variant="primary">
                  <Link to="/existing-rooms" className="btn-back">
                    Back
                  </Link>
                </Button>

                <div className="d-grid d-md-flex mt-2">
                  <button className="btn btn-outlise-primary ml-5 btn-hotel">
                    Edit room
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditRoom;
