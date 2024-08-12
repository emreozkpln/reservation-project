package dev.buddly.can_taxi.handler;

import dev.buddly.can_taxi.exception.ReservationNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ReservationNotFoundException.class)
    public ResponseEntity<String> handle(ReservationNotFoundException exp){
        return ResponseEntity
                .status(NOT_FOUND)
                .body(exp.getMsg());
    }
}
