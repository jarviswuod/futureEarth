package com.jarvis.lakesidehotel.repository;

import com.jarvis.lakesidehotel.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
