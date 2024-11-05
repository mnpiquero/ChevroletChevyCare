function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Pikaday en el input de fecha
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'DD/MM/YYYY', // Formato de fecha (puedes ajustarlo según necesites)
        toString: function(date, format) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', locale: 'es-ES' };
            return date.toLocaleDateString('es-ES', options); // Formato en español
        },
        onSelect: function(date) {
            console.log(date); // Muestra la fecha seleccionada en la consola
        },
        i18n: {
            previousMonth: 'Mes Anterior',
            nextMonth: 'Mes Siguiente',
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
        }
    });

    // Capturar el servicio seleccionado
    const serviceSelect = document.getElementById('service-select');
    serviceSelect.addEventListener('change', function () {
        console.log(`Servicio seleccionado: ${this.value}`);
    });
});
