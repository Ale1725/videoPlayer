/* Declaración de variable del dom */

const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')


/* Manipulación del button play mediante evento */

$play.addEventListener('click', handlePlay )
/* Manejar el evento */
function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log("Me activo cuando me dan Click al boton de play")
}


/* Manipulación del DOM con evento del boton pause */
$pause.addEventListener('click', handlePause )
function handlePause() {
  $pause.hidden = true
  $play.hidden = false
  $video.pause()
  console.log("Me activo cuando me dan Click al boton de pausa")
}


$backward.addEventListener('click', handleBackward)

function handleBackward( ) {
  /* $video.currentTime = $video.currentTime - 10 */
 $video.currentTime -= 10
 console.log("Retroceder 10 segundos")
}


$forward.addEventListener('click', handleForward)
function handleForward( ) {
  /* $video.currentTime = $video.currentTime + 10 */
  $video.currentTime += 10
  console.log("Adelantar 10 segundos ", $video.currentTime)
}


/* Configuracion de mi barra de reproducción */
const $progress = document.querySelector("#progress");

$video.addEventListener('loadedmetadata', handleLoaded)
function handleLoaded( ) {
  $progress.max = $video.duration
  console.log("Ha cargado mi video", $video.duration)
}

$video.addEventListener('timeupdate', handleTimeUpdate)
function handleTimeUpdate( ) {
  $progress.value = $video.currentTime
  console.log('holi', $video.currentTime)
}

$progress.addEventListener('input',  handleInput)
function handleInput( ) {
  $video.currentTime = $progress.value
console.log($progress.value)
}
