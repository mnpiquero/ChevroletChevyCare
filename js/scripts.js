document.addEventListener("DOMContentLoaded", function () {
    const datepicker = document.getElementById("datepicker");
    const serviceSelect = document.getElementById("service-select");
    const reserveButton = document.getElementById("reserve-button");
    const confirmationModal = document.getElementById("confirmation-modal");
    const closeModal = document.getElementById("close-modal");

    // Habilita el botón "Reservar Turno" solo si se ha seleccionado una fecha y un servicio
    function toggleReserveButton() {
        if (datepicker.value && serviceSelect.value) {
            reserveButton.disabled = false;
        } else {
            reserveButton.disabled = true;
        }
    }

    datepicker.addEventListener("change", toggleReserveButton);
    serviceSelect.addEventListener("change", toggleReserveButton);

    // Muestra el modal al hacer clic en "Reservar Turno"
    reserveButton.addEventListener("click", function () {
        confirmationModal.style.display = "flex";
    });

    // Cierra el modal y limpia los campos al hacer clic en "Cerrar"
    closeModal.addEventListener("click", function () {
        confirmationModal.style.display = "none";
        datepicker.value = "";
        serviceSelect.selectedIndex = 0;
        reserveButton.disabled = true;
    });

    // Configuración de Pikaday para el selector de fecha en español con domingo como primer día
    new Pikaday({
        field: datepicker,
        format: 'YYYY-MM-DD',
        firstDay: 0, // El domingo como primer día de la semana
        i18n: {
            previousMonth: 'Mes anterior',
            nextMonth: 'Mes siguiente',
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
        },
        onSelect: toggleReserveButton
    });
});
