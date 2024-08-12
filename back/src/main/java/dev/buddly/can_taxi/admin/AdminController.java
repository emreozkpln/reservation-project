package dev.buddly.can_taxi.admin;

import dev.buddly.can_taxi.handler.ResponseHandler;
import dev.buddly.can_taxi.reservation.ReservationResponse;
import dev.buddly.can_taxi.reservation.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin_only")
@RequiredArgsConstructor
public class AdminController {

    private final ReservationService reservationService;

    @GetMapping
    public ResponseEntity<List<ReservationResponse>> findAll(){
        return ResponseEntity.ok(reservationService.findAll());
    }

    @GetMapping("/{reservation-id}")
    public ResponseEntity<ReservationResponse> findById(@PathVariable("reservation-id") Integer id){
        return ResponseEntity.ok(reservationService.findById(id));
    }

    @DeleteMapping("/{reservation-id}")
    public ResponseEntity<Object> deleteById(@PathVariable("reservation-id") Integer id){
        reservationService.delete(id);
        return ResponseHandler.responseBuilder("Reservation deleted successfully", HttpStatus.OK);
    }
}
