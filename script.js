const inputUpload = document.getElementById('input-file')
const imageUpload = document.getElementById('image-upload')

inputUpload.onchange = function () {
    const file = inputUpload.files[0]
    imageUpload.src = URL.createObjectURL(file)
}
