package com.jarvis.lakesidehotel.repository;

import com.jarvis.lakesidehotel.model.BookedRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<BookedRoom, Long> {
//    BookedRoom findByBookingConfirmationCode(String confirmationCode);
    Optional<BookedRoom> findByBookingConfirmationCode(String confirmationCode);

    List<BookedRoom> findByRoomId(Long roomId);
}
