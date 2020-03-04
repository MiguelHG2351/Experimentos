const video = document.getElementById('video')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const body = document.getElementById('body')

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
})

.then((stream) => {
    video.srcObject = stream
})

video.addEventListener('loadeddata', () => {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    setInterval(() => {
        chromakey()
    }, 40);
})

function chromakey() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imgData.data.length / 4
    console.log('Azul')
    for (let i = 0; i < data; i++) {
        const offset = i * 4
        const red = imgData.data[offset + 0]
        const green = imgData.data[offset + 1]
        const blue = imgData.data[offset + 2]
    
        if (blue > 90 && blue > red && blue > green) {
            imgData.data[offset + 3] = 0
        }
    }
    ctx.putImageData(imgData, 0, 0)
}


body.addEventListener('mousemove', (e) => {
    console.log(`Posición del puntero en ${e.clientX} / ${e.clientY}`)
})









