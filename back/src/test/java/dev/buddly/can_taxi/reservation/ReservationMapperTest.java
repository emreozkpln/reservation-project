package dev.buddly.can_taxi.reservation;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class ReservationMapperTest {

    private ReservationMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = new ReservationMapper();
    }

    @Test
    public void shouldMapReservationDtoToReservation() {
        ReservationRequest request = new ReservationRequest(
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                LocalDateTime.now(),
                "Description"
        );

        Reservation reservation = mapper.toReservation(request);

        assertEquals(request.name(), reservation.getName());
        assertEquals(request.phoneNumber(), reservation.getPhoneNumber());
        assertEquals(request.startingPlace(), reservation.getStartingPlace());
        assertEquals(request.destination(), reservation.getDestination());
        assertEquals(request.date(), reservation.getDate());
        assertEquals(request.description(), reservation.getDescription());
    }

    @Test
    public void should_throw_exception_when_reservation_is_null() {
        assertThrows(NullPointerException.class,()->mapper.toReservation(null));
    }

    @Test
    public void shouldMapReservationToReservationDto(){
        Reservation reservation = new Reservation(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                LocalDateTime.now(),
                LocalDateTime.now(),
                LocalDateTime.now()
        );

        ReservationResponse response = mapper.fromReservation(reservation);

        assertEquals(reservation.getId(), response.id());
        assertEquals(reservation.getName(), response.name());
        assertEquals(reservation.getPhoneNumber(), response.phoneNumber());
        assertEquals(reservation.getStartingPlace(), response.startingPlace());
        assertEquals(reservation.getDestination(), response.destination());
        assertEquals(reservation.getDescription(), response.description());
        assertEquals(reservation.getDate(), response.date());
        assertEquals(reservation.getCreatedDate(), response.createdDate());
        assertEquals(reservation.getLastModifiedDate(), response.lastModifiedDate());

    }

}
