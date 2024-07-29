import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getHeader = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export async function addRoom(photo, roomType, roomPrice) {
  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("roomType", roomType);
  formData.append("roomPrice", roomPrice);

  const response = await api.post("/rooms/add/new-room", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.status === 201;
}

export async function getRoomTypes() {
  try {
    const response = await api.get("/rooms/room/types");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching room types`);
  }
}

export async function getAllRooms() {
  try {
    const response = await api.get("/rooms/all-rooms");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching rooms`);
  }
}

export async function deleteRoom(roomId) {
  try {
    const response = await api.delete(`/rooms/delete/room/${roomId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting room ${error.message}`);
  }
}

export async function updateRoom(roomId, roomData) {
  const formData = new FormData();
  formData.append("photo", roomData.photo);
  formData.append("roomType", roomData.roomType);
  formData.append("roomPrice", roomData.roomPrice);

  const response = await api.put(`/rooms/update/${roomId}`, formData);
  return response;
}

export async function getRoomById(roomId) {
  try {
    const response = await api.get(`/rooms/room/${roomId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching room ${error.message}`);
  }
}

export async function bookRoom(roomId, booking) {
  try {
    const response = await api.post(
      `/bookings/room/${roomId}/booking`,
      booking
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error booking room: ${error.message}`);
    }
  }
}

export async function getAllBookings() {
  try {
    const response = await api.get(`/bookings/all-bookings`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching bookings: ${error.message}`);
  }
}

export async function getBookingByConfirmationCode(confirmationCode) {
  try {
    const response = await api.get(
      `/bookings/confirmation/${confirmationCode}`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error(`Error finding room: ${error.message}`);
    }
  }
}

export async function cancelBooking(bookingId) {
  try {
    const response = await api.delete(`/bookings/${bookingId}/delete`);
    return response.data;
  } catch (error) {
    throw new Error(`Error cancelling booking: ${error.message}`);
  }
}

export async function getAvailableRooms(checkInDate, checkOutDate, roomType) {
  const results = await api.get(
    `rooms/available-rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomType=${roomType}`
  );
  return results;
}

export async function userRegistration(registration) {
  try {
    const response = await api.post(`/auth/register-user`, registration);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(`Error : ${error.response.data}`);
    } else {
      throw new Error(`User registration error: ${error.message}`);
    }
  }
}

export async function userLogin(login) {
  try {
    const response = await api.post(`/auth/login`, login);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(`Error : ${error.response.data}`);
    } else {
      throw new Error(`User login error: ${error.message}`);
    }
  }
}

export async function getUserProfile(userId, token) {
  try {
    const response = await api.get(`/users/profile/${userId}`, {
      header: getHeader(),
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error getting user data: ${error.message}`);
  }
}

export async function deleteUser(userId) {
  try {
    const response = await api.delete(`/userd/delete/${userId}`, {
      headers: getHeader(),
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error closing account: ${error.message}`);
  }
}

export async function getUser(userId, token) {
  try {
    const response = await api.get(`/userd/${userId}`, {
      headers: getHeader(),
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error loading account: ${error.message}`);
  }
}
