package com.jarvis.lakesidehotel.controller;

import com.jarvis.lakesidehotel.exception.InvalidBookingRequestException;
import com.jarvis.lakesidehotel.exception.ResourceNotFoundException;
import com.jarvis.lakesidehotel.model.BookedRoom;
import com.jarvis.lakesidehotel.model.Room;
import com.jarvis.lakesidehotel.response.BookingResponse;
import com.jarvis.lakesidehotel.response.RoomResponse;
import com.jarvis.lakesidehotel.service.IBookingService;
import com.jarvis.lakesidehotel.service.IRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@RestController
@RequestMapping("/bookings")
public class BookingController {
    private final IBookingService bookingService;
    private final IRoomService roomService;

    @GetMapping("/all-bookings")
    public ResponseEntity<List<BookingResponse>> getAllBookings() {
        List<BookedRoom> bookings = bookingService.getAllBookings();
        List<BookingResponse> bookingResponses = new ArrayList<>();
        for (BookedRoom booking : bookings) {
            BookingResponse bookingResponse = getBookingResponse(booking);
            bookingResponses.add(bookingResponse);
        }
        return ResponseEntity.ok(bookingResponses);
    }


    @GetMapping("/confirmation/{confirmationCode}")
    public ResponseEntity<?> getBookingByConfirmationCode(@PathVariable String confirmationCode) {
        try {
            BookedRoom booking = bookingService.findByBookingConfirmationCode(confirmationCode);
            BookingResponse bookingResponse = getBookingResponse(booking);
            return ResponseEntity.ok(bookingResponse);
        } catch (ResourceAccessException exception) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
        }
    }


    @PostMapping("/room/{roomId}/booking")
    public ResponseEntity<?> saveBooking(@PathVariable Long roomId, @RequestBody BookedRoom bookingRequest) {
        try {
            String confirmationCode = bookingService.saveBooking(roomId, bookingRequest);
            return ResponseEntity.ok("Room booked successfully! Your confirmation code is: " + confirmationCode);
        } catch (InvalidBookingRequestException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @DeleteMapping("/booking/{bookingId}/delete")
    public void cancelBooking(@PathVariable Long bookingId) {
        bookingService.cancelBooking(bookingId);
    }

//    private BookingResponse getBookingResponse(BookedRoom booking) {
//    }


//    public BookingResponse getBookingResponse(BookedRoom booking) {
//        Optional<Object> theRoom = roomService.getRoomById(booking.getRoom().getId());
////        Room theRoom = roomService.getRoomById(booking.getRoom().getId().get());
////        Room theRoom = roomService.getRoomById(booking.getRoom().getId());
//        RoomResponse room = new RoomResponse(theRoom.getId(),
//                theRoom.getRoomType(),
//                theRoom.getRoomPrice());
//        return new BookingResponse(
//                booking.getBookingId(), booking.getCheckInDate(),
//                booking.getCheckOutDate(), booking.getGuestFullName(),
//                booking.getGuestEmail(), booking.getNumberOfAdults(),
//                booking.getNumberOfChildren(), booking.getTotalNumberOfGuests(),
//                booking.getBookingConfirmationCode(), room);
//    }
}
