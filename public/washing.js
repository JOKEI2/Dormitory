new Vue({
  el: "#vue-app",
  data: {
    building: ["A", "B", "C"],
    buildingSelected: "",
    queue: [
      { No: 1, time: 1541653407173, status: false, pin: "1236" },
      { No: 2, time: 1541653690916, status: false, pin: "8125" },
      { No: 3, time: 1541654062282, status: false, pin: "5565" }
    ],
    // selectedQueue:{ No: 0, time: 0 ,status:false},
    // selectedIndex:-1,
    selectedPin: "",
    timeCurrent: "15:20",
    timeBooking:0
  },
  methods: {
    setCenter: function(id) {
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
    openform: function(key) {
      // this.selectedIndex=key
      this.queue[key].status = true;
      this.selectedPin = this.queue[key].pin;
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      console.log("open");
    },
    closeform: function() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    clear: function() {
      this.buildingSelected = "";
      this.amount = 0;
    },
    requestDetail: function() {
      var myObj = {
        building: this.buildingSelected
      };
      console.log(myObj);
      //   axios.post("/yay", myObj).then(res => {
      //     console.log(res.data);
      //     this.queue = res.data;
      //   });
    },
    checkTime: function(i) {
      if (i < 10) {
        i = "0" + i;
      } // add zero in front of numbers < 10
      return i;
    },
    startTime: function() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = this.checkTime(m);
      s = this.checkTime(s);
      //   document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
      this.timeCurrent = h + ":" + m;
    },
    reduceTime: function(key) {
      return Math.floor(
        (this.queue[key].time + 1000 * 60 * 110 - Date.now()) / (60 * 1000)
      );
    },
    setTime: function() {

      this.queue[0].time = Date.now()+(1000*60*2);
      this.queue[1].time = Date.now()+(1000*60*1);
      this.queue[2].time = Date.now()+(1000*60*0);
    }
  },
  mounted() {
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
        const self = this;
        c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
        and the selected item:*/
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          // console.log(s.innerHTML);
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              // set buildingSelected
              // console.log(s.options[i].innerHTML)
              self.buildingSelected = JSON.parse(
                JSON.stringify(s.options[i].innerHTML)
              );
              self.requestDetail();

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
      a.addEventListener("click", function(e) {
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
