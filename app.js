function abrirPaginaMapa() {
    window.location.href = "PaginaMapa.html";
}

window.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;

                // Cria o mapa centrado na posição do usuário
                const map = L.map('mapa').setView([lat, lon], 13);

                // (map tiles) do OpenStreetMap
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                }).addTo(map);

                // Marca a posição do usuário com um marcador
                L.marker([lat, lon])
                    .addTo(map)
                    .bindPopup('Você está aqui!')
                    .openPopup();
            },
            function (err) {
                alert('Permissão negada ou erro ao obter localização.');
            }
        );
    } else {
        alert('Geolocalização não é suportada neste navegador.');
    }
};
