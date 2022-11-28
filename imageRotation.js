var index = 0;
var mylmage = document.getElementById("mainImage");
var imageArray = ["img/cloud1.jpg", "img/cloud9.jpg", "img/cloud13.jpg", "img/cloud24.jpg"];


function slideShow(){
    mylmage.setAttribute("src", imageArray[index]);
    index++;
    if(index >= imageArray.length){
        index = 0;
    }
}
setInterval(slideShow, 2000);