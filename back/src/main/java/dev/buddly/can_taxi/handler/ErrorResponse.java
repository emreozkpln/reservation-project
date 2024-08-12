package dev.buddly.can_taxi.handler;

import java.util.Map;

public record ErrorResponse(
        Map<String, String> errors
) {
}
