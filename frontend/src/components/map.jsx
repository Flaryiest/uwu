import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([0, 0], 2); // Center at latitude 0, longitude 0 with zoom level 2

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Predefined list of points (latitude, longitude, and description)
    const predefinedPoints = [
      { lat: 51.5074, lng: -0.1278, description: 'London' },
      { lat: 48.8566, lng: 2.3522, description: 'Paris' },
      { lat: 40.7128, lng: -74.0060, description: 'New York' },
      { lat: 35.6895, lng: 139.6917, description: 'Tokyo' },
    ];

    // Load predefined points onto the map
    predefinedPoints.forEach((point) => {
      const marker = L.marker([point.lat, point.lng]).addTo(map);
      marker.bindPopup(
        `<b>${point.description}</b><br>Lat: ${point.lat}, Lng: ${point.lng}`
      );
    });

    // Add click event listener to the map
    map.on('click', function (e) {
      const lat = e.latlng.lat.toFixed(6); // Latitude
      const lng = e.latlng.lng.toFixed(6); // Longitude

      // Add a marker to the clicked location
      const marker = L.marker([lat, lng]).addTo(map);
      marker
        .bindPopup(`<b>New Point</b><br>Lat: ${lat}, Lng: ${lng}`)
        .openPopup();

      // Display the coordinates
      const coordinatesDisplay = document.getElementById('coordinates');
      if (coordinatesDisplay) {
        coordinatesDisplay.textContent = `Coordinates: Latitude = ${lat}, Longitude = ${lng}`;
      }
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        id="map"
        style={{
          width: '100%',
          height: '500px',
          marginBottom: '10px',
        }}
      ></div>
      <div
        id="coordinates"
        style={{
          padding: '10px',
          backgroundColor: '#f4f4f4',
          border: '1px solid #ddd',
          borderRadius: '5px',
        }}
      >
        Click on the map to see coordinates
      </div>
    </div>
  );
};

export default Map
