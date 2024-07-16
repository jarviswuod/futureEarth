import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

// This function adds a new room to the database
export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  const response = await api.post("/rooms/add/new-room", formData);
  return response.status === 201;
}

// This function gets all room type from the database
export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room/types");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching room types`);
  }
}

// This function gets all rooms from the database
export async function getAllRooms() {
  try {
    const response = await api.get("/rooms/all-rooms");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching rooms`);
  }
}
// This function deletes a room
export async function deleteRoom(roomId) {
  try {
    const response = await api.delete(`/rooms/delete/room/${roomId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting room ${error.message}`);
  }
}

// This function updates a room
export async function updateRoom(roomId, roomData) {
  const formData = new FormData();
  formData.append("photo", roomData.photo);
  formData.append("roomType", roomData.roomType);
  formData.append("roomPrice", roomData.roomPrice);

  const response = await api.put(`/rooms/update/${roomId}`, formData);
  return response;
  // return response.status === 201;
}

// This function gets a room by the Id
export async function getRoomById(roomId) {
  try {
    const response = await api.get(`/rooms/room/${roomId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching room ${error.message}`);
  }
}
