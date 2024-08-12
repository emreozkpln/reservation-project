package dev.buddly.can_taxi.reservation;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ReservationServiceTest {

    //service
    @InjectMocks
    private ReservationService service;

    //dependencies
    @Mock
    private ReservationRepository repository;
    @Mock
    private ReservationMapper mapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void should_successfully_save_a_reservation(){
        LocalDateTime now = LocalDateTime.now();

        ReservationRequest reservationRequest = new ReservationRequest(
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                now,
                "Description"
        );
        Reservation reservation = new Reservation(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                now,
                now,
                now
        );
        Reservation savedReservation = new Reservation(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                now,
                now,
                now
        );
        ReservationResponse expectedResponse = new ReservationResponse(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                now,
                now,
                now
        );

        when(mapper.toReservation(reservationRequest))
                .thenReturn(reservation);
        when(repository.save(reservation))
                .thenReturn(savedReservation);
        when(mapper.fromReservation(savedReservation))
                .thenReturn(expectedResponse);

        ReservationResponse response = service.create(reservationRequest);

        assertEquals(reservationRequest.name(),response.name());
        assertEquals(reservationRequest.phoneNumber(),response.phoneNumber());
        assertEquals(reservationRequest.startingPlace(),response.startingPlace());
        assertEquals(reservationRequest.destination(),response.destination());

        long toleranceInSeconds = 1; // 1 second tolerance
        long differenceInSeconds = Duration.between(reservationRequest.date(), response.date()).getSeconds();
        assertTrue(Math.abs(differenceInSeconds) <= toleranceInSeconds, "The dates are not within the tolerance range");

        assertEquals(reservationRequest.description(),response.description());

        verify(mapper,times(1))
                .toReservation(reservationRequest);
        verify(repository,times(1))
                .save(reservation);
        verify(mapper,times(1))
                .fromReservation(savedReservation);
    }

    @Test
    public void should_return_all_reservation(){
        LocalDateTime now = LocalDateTime.now();
        List<Reservation> reservations = new ArrayList<>();
        reservations.add(new Reservation(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                now,
                now,
                now
        ));

        ReservationResponse expectedResponse = new ReservationResponse(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                now,
                now,
                now
        );

        when(repository.findAll())
                .thenReturn(reservations);
        when(mapper.fromReservation(any(Reservation.class)))
                .thenReturn(expectedResponse);

        List<ReservationResponse>  reservationResponses = service.findAll();

        assertEquals(reservations.size(),reservationResponses.size());
        verify(repository,times(1)).findAll();
    }

    @Test
    public void should_return_reservation_by_id(){
        LocalDateTime now = LocalDateTime.now();
        Reservation reservation = new Reservation(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                now,
                now,
                now
        );
        ReservationResponse expectedResponse = new ReservationResponse(
                1,
                "Emre",
                "+905555555555",
                "Istanbul",
                "Ankara",
                "Description",
                now,
                now,
                now
        );

        when(repository.findById(1))
                .thenReturn(Optional.of(reservation));
        when(mapper.fromReservation(any(Reservation.class)))
                .thenReturn(expectedResponse);

        ReservationResponse response = service.findById(1);
        assertEquals(expectedResponse,response);
        verify(repository,times(1)).findById(1);
    }
    
}