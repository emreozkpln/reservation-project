package dev.buddly.can_taxi.reservation;

import dev.buddly.can_taxi.handler.ResponseHandler;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/reservations")
@RequiredArgsConstructor
public class ReservationController {

    private final ReservationService reservationService;

    @PostMapping("/create")
    public ResponseEntity<Object> create(
            @RequestBody @Valid ReservationRequest request
    ){
        reservationService.create(request);
        return ResponseHandler.responseBuilder("Reservation created successfully", HttpStatus.CREATED);
    }
}
