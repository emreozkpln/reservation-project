package dev.buddly.can_taxi.reservation;

import org.springframework.stereotype.Service;

@Service
public class ReservationMapper {

    public ReservationResponse fromReservation(Reservation reservation){
        return new ReservationResponse(
                reservation.getId(),
                reservation.getName(),
                reservation.getPhoneNumber(),
                reservation.getStartingPlace(),
                reservation.getDestination(),
                reservation.getDescription(),
                reservation.getDate(),
                reservation.getCreatedDate(),
                reservation.getLastModifiedDate()
        );
    }

    public Reservation toReservation(ReservationRequest request){
        return Reservation.builder()
                .name(request.name())
                .phoneNumber(request.phoneNumber())
                .startingPlace(request.startingPlace())
                .destination(request.destination())
                .date(request.date())
                .description(request.description())
                .build();
    }
}
