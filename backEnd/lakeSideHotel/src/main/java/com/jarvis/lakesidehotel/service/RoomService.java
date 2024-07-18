package com.jarvis.lakesidehotel.service;

import com.jarvis.lakesidehotel.exception.InternalServerException;
import com.jarvis.lakesidehotel.exception.ResourceNotFoundException;
import com.jarvis.lakesidehotel.model.Room;
import com.jarvis.lakesidehotel.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.math.BigDecimal;
import java.nio.ByteBuffer;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RoomService implements IRoomService {
    private final RoomRepository roomRepository;

    @Override
    public Room addNewRoom(MultipartFile file, String roomType, BigDecimal roomPrice) throws SQLException {
        Room room = new Room();
        room.setRoomType(roomType);
        room.setRoomPrice(roomPrice);

        if (!file.isEmpty()) {
//           byte[] photoBytes = file.getSize();
            byte[] photoBytes = ByteBuffer.allocate(Long.BYTES).putLong(file.getSize()).array();
            Blob photoBlob = new SerialBlob(photoBytes);
            room.setPhoto(photoBlob);
        }
        return roomRepository.save(room);

    }

    @Override
    public List<String> getAllRoomTypes() {
        return roomRepository.findDistinctRoomTypes();
    }

    //    GET ALL ROOMS
    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public byte[] getRoomPhotoByRoomId(Long roomId) throws SQLException {
        Optional<Room> theRoom = roomRepository.findById(roomId);
        if (theRoom.isEmpty()) {
            throw new ResourceNotFoundException("Sorry, Room not found!");
        }

        Blob photoBlob = theRoom.get().getPhoto();
        if (photoBlob != null) return photoBlob.getBytes(1, (int) photoBlob.length());
        return null;
    }

    @Override
    public void deleteRoom(Long roomId) {
        Optional<Room> theRoom = roomRepository.findById(roomId);
        if (theRoom.isPresent()) {
            roomRepository.deleteById(roomId);
        }
    }

    @Override
    public Room updateRoom(Long roomId, String roomType, BigDecimal roomPrice, byte[] photoBytes) throws SQLException {
        Room room = roomRepository.findById(roomId).orElseThrow(() -> new ResourceNotFoundException("Sorry, Room not found!"));
        if (roomType != null) room.setRoomType(roomType);
        if (roomPrice != null) room.setRoomPrice(roomPrice);
        if (photoBytes != null && photoBytes.length > 0) {
            try {
                room.setPhoto(new SerialBlob(photoBytes));
            } catch (SQLException exception) {
                throw new InternalServerException("Sorry, Problem occurred while updating photo!");
            }
        }
        return roomRepository.save(room);
    }

    @Override
    public Optional<Room> getRoomById(Long roomId) {
        return Optional.of(roomRepository.findById(roomId).get());
//        return roomRepository.findById(roomId);
    }

//
//@Override
//public Optional<Room> getRoomById(Long roomId) {
////        return Optional.of(roomRepository.findById(roomId).get());
//    return roomRepository.findById(roomId);
//}
}
