import React, { useState } from "react";

const RoomFilter = ({ data, setFilterData }) => {
  const [filter, setFilter] = useState("");

  const handleSelectedChange = (e) => {
    const selectiedRoomType = e.target.value;
    setFilter(selectiedRoomType);
    const filteredRooms = data.filter((room) =>
      room.roomType.toLowerCase().includes(selectiedRoomType.toLowerCase())
    );
    setFilterData(filteredRooms);
  };
  const clearFilter = () => {
    setFilter("");
    setFilterData(data);
  };
  const roomTypes = ["", ...new Set(data.map((room) => room.roomType))];

  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="room-type-filter">
          Filter rooms by type
        </span>
        <select
          name="filter"
          id="filter"
          className="form-select"
          value={filter}
          onChange={handleSelectedChange}
        >
          <option value={""}>Select a room type to filter...</option>
          {roomTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        <button className="btn btn-hotel" onClick={clearFilter}>
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default RoomFilter;
