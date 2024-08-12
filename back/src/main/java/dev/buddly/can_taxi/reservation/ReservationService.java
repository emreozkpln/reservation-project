package dev.buddly.can_taxi.reservation;

import dev.buddly.can_taxi.exception.ReservationNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import static java.lang.String.format;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository repository;
    private final ReservationMapper mapper;
    public List<ReservationResponse> findAll() {
        return repository.findAll()
                .stream()
                .sorted(Comparator.comparing(Reservation::getCreatedDate).reversed())
                .map(mapper::fromReservation)
                .collect(Collectors.toList());
    }

    public ReservationResponse create(ReservationRequest request) {
        var reservation = mapper.toReservation(request);
        var savedReservation = repository.save(reservation);
        return mapper.fromReservation(savedReservation);
    }

    public ReservationResponse findById(Integer id) {
        return repository.findById(id)
                .map(mapper::fromReservation)
                .orElseThrow(()-> new ReservationNotFoundException(format("Reservation with id %d not found", id)));
    }

    public void delete(Integer id) {
        repository.deleteById(id);
    }
}
