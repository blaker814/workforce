let locations = []

export const useLocations = () => [...locations]

export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
        .then(response => response.json())
        .then(parsedLocations => {
                locations = parsedLocations
            }
        )
}