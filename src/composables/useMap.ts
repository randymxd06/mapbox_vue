import { ref, onMounted, onBeforeUnmount } from "vue";
import mapboxgl from "mapbox-gl";
import { getMyLocation } from "../helpers/getMyLocation";
import { locations } from "../data/locations";
import 'mapbox-gl/dist/mapbox-gl.css';
import { createCustomMarker } from "../helpers/createCustomMarker";

export const useMap = () => {

    // CONFIGURE THE MAPBOX ACCESS TOKEN //
    mapboxgl.accessToken = "pk.eyJ1IjoicmFuZHloeXRlY2giLCJhIjoiY204ZzltZHhlMGtuNDJqb2lpdzlqdTl4aSJ9.tpQNO6zp8N7tgvkCuHpvhw";
    const mapContainer = ref<HTMLDivElement | null>();
    const map = ref<mapboxgl.Map | null>();

    onMounted(async () => {

        if (!mapContainer.value) return;

        try {

            const myLocation = await getMyLocation();

            map.value = new mapboxgl.Map({
                container: mapContainer.value,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [myLocation.longitud, myLocation.latitud],
                zoom: 5,
            });

            new mapboxgl.Marker().setLngLat([myLocation.longitud, myLocation.latitud]).addTo(map.value);

            const bounds = new mapboxgl.LngLatBounds();

            locations.forEach(location => {
                new mapboxgl.Marker(createCustomMarker('hsl(118, 97%, 50%)')).setLngLat([location.longitud, location.latitud]).addTo(map.value!);
                bounds.extend([location.longitud, location.latitud]);
            });

            map.value.fitBounds(bounds, {
                padding: 50,
                maxZoom: 16,
            });

        } catch (error) {

            console.error("Error al cargar el mapa o la ubicación:", error);

        }

    });

    onBeforeUnmount(() => {
        if (map.value) map.value.remove();
    });

    return {
        mapContainer
    }

}