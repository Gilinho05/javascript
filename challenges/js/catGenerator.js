
/*********************************************************************
                MY VERSION ALONE
******************************************************************** */

function fGenerateCat() {
   // var imgID  = 'image';
    var img = document.createElement('img');
    img.setAttribute('src', 'img/cat.jpg');
    img.classList.add('catsImg');
    //img.setAttribute('id', imgID);
    document.getElementById('divResult').appendChild(img);
}


function fClearCats() {
    document.getElementById('divResult').innerHTML = "";
}

/*********************************************************************
                FOLLOWING TOTURIAL
******************************************************************** */

function fGenerateCat2() {
     var image = document.createElement('img');
     image.src = "img/cat.jpg";
     image.classList.add('catsImg');
     var div = document.getElementById('cats-content');
     div.appendChild(image)
 }