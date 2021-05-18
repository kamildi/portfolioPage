window.onload = function () {
    typeText();
}

var i = 0;

    function typeText() {
        const speed = 10;
        let txtClass = document.querySelector('.text-typing')
        const txt = "I’m a graduate of Kazimierz Wielki University in Bydgoszcz on IT major. During my studies, I gained knowledge of information systems in technology and environment . In college, with a group of students and Atos, we designed a system to inform the relevant departments About an accident involving vehicles. The project has brought me a lot of group work experience. A lot of my free time i spend to improving programming skills and create 2D and 3D graphics.";
        if (i < txt.length) {
            txtClass.textContent += txt.charAt(i);
            i++;
            setTimeout(typeText, speed);
        }
}


var modal = document.getElementById("myModal");

var img = document.getElementById("myImg", "myImg1", "myImg2", "myImg3", "myImg4", "myImg5");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}


