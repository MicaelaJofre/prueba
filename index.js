
let container = document.querySelector('.diapo');
let image  = container.querySelector('a')
console.log(image)
// Creación de una instancia de Hammer en el contenedor
const hammer = new Hammer(container);
console.log(hammer)
// Habilitar el reconocimiento de gestos de pellizco
hammer.get('pinch').set({ enable: true });

// Variables para almacenar las transformaciones
let scaleX = 1;
let scaleY = 1;
let lastScaleX = 1;
let lastScaleY = 1;

// Función para aplicar las transformaciones a la imagen
function applyTransform() {
  image.style.transform = `scale(\${scaleX}, \${scaleY})`;
  console.log(image)
}

// Escuchar el evento de pellizco y actualizar las escalas
hammer.on('pinch pinchmove', (event) => {
  console.log('here')
  scaleX = lastScaleX * event.scale;
  scaleY = lastScaleY * event.scale;
  applyTransform();
});

// Guardar las escalas al finalizar el pellizco
hammer.on('pinchend', () => {
  lastScaleX = scaleX;
  lastScaleY = scaleY;
});