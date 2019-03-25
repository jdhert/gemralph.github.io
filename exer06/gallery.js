/* gallery.js */

//alert("ok");
var images = [];
images.push("images/kimyuna1.jpg");
images.push("images/kimyuna2.jpg");
images.push("images/kimyuna3.jpg");
images.push("https://media3.s-nbcnews.com/j/streams/2014/February/140220/2D11705101-today-yuna-kim-140220-01.fit-760w.jpg");
images.push("http://images5.fanpop.com/image/photos/26400000/Kim-Yu-Na-yuna-kim-26427916-300-380.jpg");

currentImage = 0;
document.querySelector("#prevButton").addEventListener("click",
    function(){
        //alert("ok");
        currentImage --;
        if(currentImage<0)
            currentImage  = images.length -1 ;
        showImage();
});

document.querySelector("#nextButton").addEventListener("click",
    function(){
        //alert("ok");
        currentImage ++;
        if(currentImage>=images.length)
            currentImage  = 0;

        showImage();

});

function showImage(){
    pc = document.getElementById('picture');
    pc.src = images[currentImage];
}