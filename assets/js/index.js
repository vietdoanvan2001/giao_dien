var img = document.querySelectorAll('.slider__container img');
var i = 0;
function showSlide() {
    img.forEach(function myfunction(image) {
        image.style.display = "none";
    })
    img[i].style.display = "block";
    i++;
    if (i == img.length) {
        i = 0;
    }
    setTimeout(showSlide, 2000);
}
showSlide();

var imgContainer = document.querySelector('.best_seller-product');
var imgPosition = document.querySelectorAll('.page');

imgPosition.forEach(
    function page(img) {
        img.style.display = "none";
    });
imgPosition[0].style.display='flex';
document.querySelector('.page_0').classList.add('changeColour');

var d=1;
function showProduct(){
    imgPosition.forEach(
        function page(img) {
            img.style.display = "none";
        });
    imgPosition[d].style.display='flex';
    var s= ".page_"+d;
    d++;
    var pages = document.querySelectorAll(".best_seller-page-item");
    pages.forEach(function(page){
        page.classList.remove('changeColour');
    })
    document.querySelector(""+s+"").classList.add('changeColour');
    if(d==4){
        d=0;
    }
}
setInterval(showProduct,4000);

var pages = document.querySelectorAll(".best_seller-page-item");
pages.forEach(function(page, index){
    page.onclick = function(){
        imgPosition.forEach(
            function page(img) {
                img.style.display = "none";
            });
        imgPosition[index].style.display='flex';
        pages.forEach(function(page){
            page.classList.remove('changeColour');
        })
        page.classList.add('changeColour');
    }
})





