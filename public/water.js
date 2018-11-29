new Vue({
  el: "#vue-app",
  data: {
    brand: ["crystal", "nestlepurelife", "Chang", "Singa", "Minere", "Thip"],
    brandSelected: "",
    amount: 0
  },
  methods: {
    setCenter: function (id) {
      const fix_bottom = document.getElementById("nav-bar");
      const fix_center = document.getElementById(id);
      // console.log(window.innerHeight - fix_bottom.getBoundingClientRect().bottom)
      // console.log(fix_center.getBoundingClientRect().bottom - fix_center.getBoundingClientRect().top);
      var center =
        (window.innerHeight -
          fix_bottom.getBoundingClientRect().bottom -
          (fix_center.getBoundingClientRect().bottom -
            fix_center.getBoundingClientRect().top)) /
        2;
      if (center > 0) {
        fix_center.style.marginTop = center + "px";
        fix_center.style.marginBottom = center + "px";
      }
      // console.log(center);
    },
    openform: function() {
  
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        console.log("open");
        window.onclick = event => {
          if (event.target == modal) {
            this.sentToJson();
            console.log("close");
            this.clear();
            console.log(this.brandSelected);
            console.log(this.amount);
            
            modal.style.display = "none";
          }
          
        };
      
    },
    clear:function(){
      this.brandSelected=""
      this.amount=0
    },
    sentToJson: function () {
      var myObj = {
        brand: this.brandSelected,
        amount: this.amount
      };
      console.log(myObj);
      axios.post('/api/notify/buywater/', myObj).then(res => {
        console.log(res.data);
      });
    }
  },
  mounted() {
              // axios.get('/yay').then(res => {
    //   console.log(res.data)
    //   this.brand=res.data
    // })
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");

      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      // console.log(a.innerHTML);

      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        // console.log(c.innerHTML);
        const self = this
        c.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
        and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          // console.log(s.innerHTML);
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              // set brandSelected
              // console.log(s.options[i].innerHTML)
              self.brandSelected = JSON.parse(JSON.stringify(s.options[i].innerHTML));
              // this.$forceUpdate();
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
  except the current select box:*/
      var x,
        y,
        i,
        arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
  }
});
