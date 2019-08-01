//const selectors = {
//    image: document.getElementById("image"),
//    getCroppedCanvas: document.getElementById("getCroppedCanvas")
//};

//const options = {
//    aspectRatio: 1 / 1
//};

//const cropper = new Cropper(selectors.image, options);

//console.log(cropper.getImageData());
//console.log(cropper.getCroppedCanvas());
//console.log(cropper.getData());
//console.log(cropper.getContainerData());

//selectors.getCroppedCanvas.addEventListener("click", (event) => {
//    var data = cropper.getCroppedCanvas({
//        maxHeight: 1000,
//        maxWidth: 1000
//    }).toBlob((blob) => {
//        console.log(blob);
//    });

//    $.ajax("/Home/ImageUpload/", {
//        method: "POST",
//        data: data,
//        processData: false,
//        contentType: false,
//        success: () => {
//            console.log(data);
//        },
//        error: () => {
//            console.log("Upload error");
//        }
//    });
//});
















////selectors.image.cropper({
////    aspectRatio: 16 / 9,
////    autoCropArea: 0.85,
////    strict: false,
////    guides: false,
////    highlight: false,
////    dragCrop: false,
////    movable: true,
////    resizable: true,
////    mouseWheelZoom: false
////});



