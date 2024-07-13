import React, { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/ApiFuctions";

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    getRoomTypes().then((data) => {
      setRoomTypes(data);
    });
  }, []);

  const handleNewRoomInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
      setShowNewRoomTypeInput(false);
    }
  };

  return (
    <>
      {
        //   roomTypes.length > 0 && (
        <div>
          <select
            name="roomType"
            id="roomType"
            required
            value={newRoom.roomType}
            onChange={(e) => {
              if (e.target.value === "Add new") setShowNewRoomTypeInput(true);
              else handleRoomInputChange(e);
            }}
          >
            <option value="">Select an room type</option>
            <option value={"Add new"}>Add New</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {showNewRoomTypeInput && (
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter a new room type"
                onChange={handleNewRoomInputChange}
              />
              <button className="btn btn-hotel" onClick={handleAddNewRoomType}>
                Add
              </button>
            </div>
          )}
        </div>
        //   )
      }
    </>
  );
};

export default RoomTypeSelector;
