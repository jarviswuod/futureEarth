package com.jarvis.lakesidehotel.service;

import com.jarvis.lakesidehotel.model.BookedRoom;
import com.jarvis.lakesidehotel.model.Room;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService implements IRoomService{
    public List<BookedRoom> getAllBookingsByRoomId(Long roomId) {
        return null;
    }

    @Override
    public Room addNewRoom(MultipartFile photo, String roomType, BigDecimal roomPrice) throws SQLException {
        return null;
    }

    @Override
    public List<String> getAllRoomTypes() {
        return List.of();
    }

    @Override
    public List<Room> getAllRooms() {
        return List.of();
    }

    @Override
    public byte[] getRoomPhotoByRoomId(Long roomId) throws SQLException {
        return new byte[0];
    }

    @Override
    public void deleteRoom(Long roomId) {

    }

    @Override
    public Room updateRoom(Long roomId, String roomType, BigDecimal roomPrice, byte[] photoBytes) throws SQLException {
        return null;
    }

    @Override
    public Optional<Object> getRoomById(Long roomId) {
        return Optional.empty();
    }
//    @Override
//    public Room getRoomById(Long roomId) {
//        return Optional.empty();
//    }
}
