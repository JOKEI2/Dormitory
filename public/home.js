// var modal = document.getElementById('pic1Modal');

// var img = document.getElementById('pic1');
// var modalImg = document.getElementById("img01");

// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }

// window.onclick = (event)=> {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

var home = new Vue({
    el: "#home",
    methods:{
        zoom:function(modal){
            modal=document.getElementById(modal)
            modal.style.display='block'
            window.onclick = (event)=> {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        },
        
        scroll: function(markpoint){
            var elmnt = document.getElementById(markpoint);
            elmnt.scrollIntoView();
        }
    }

})