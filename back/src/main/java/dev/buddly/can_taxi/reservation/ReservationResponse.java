package dev.buddly.can_taxi.reservation;

import java.time.LocalDateTime;

public record ReservationResponse(
    Integer id,
    String name,
    String phoneNumber,
    String startingPlace,
    String destination,
    String description,
    LocalDateTime date,
    LocalDateTime createdDate,
    LocalDateTime lastModifiedDate

) {
}
