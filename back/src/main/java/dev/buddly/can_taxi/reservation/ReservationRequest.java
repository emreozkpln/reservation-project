package dev.buddly.can_taxi.reservation;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record ReservationRequest(
    @NotNull(message = "Name should not be null")
    String name,
    @NotNull(message = "Phone number should not be null")
    String phoneNumber,
    String startingPlace,
    String destination,
    @NotNull(message = "Date should not be null")
    LocalDateTime date,
    String description
) {
}
