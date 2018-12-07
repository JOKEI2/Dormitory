const TMP={
  No:0,
  time:"",
  status:false,
  pin:"",
  bookTime:"",
  startCanEnter:"",endCanEnter:""
}
new Vue({
  el: "#vue-app",
  data: {
    building: ["A", "B", "C"],
    buildingSelected: "",
    queue: [
      { No: 1, time: "21:21", status: false, pin: "1236" ,bookTime: "22:00",startCanEnter:"22.10",endCanEnter:"5:14"},
      { No: 2, time: "22.05", status: false, pin: "8125" ,bookTime: "00:00"},
      { No: 3, time: "21.29", status: false, pin: "5565" ,bookTime: "00:00"}
    ],
    // selectedQueue:{ No: 0, time: 0 ,status:false},
    // selectedIndex:-1,
    selectedPin: "",
    timeCurrent: "15:20",
    dataSet:{
      No:1,
      time:"08:10",
      status:false,
      pin:"1222",
      bookTime:"08:20",
      startCanEnter:"",
      endCanEnter:""
    },
    dataSetList:[
      { No: 1, time: "9:21", status: false, pin: "1236" ,bookTime: "00:00",startCanEnter:"",endCanEnter:""},
      { No: 2, time: "8:50", status: false, pin: "8125" ,bookTime: "00:00",startCanEnter:"",endCanEnter:""},
      { No: 3, time: "10:00", status: false, pin: "5565" ,bookTime: "00:00",startCanEnter:"",endCanEnter:""}
    ]
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
    sentBuilding:function(){
      var myObj = {
        building:this.buildingSelected
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
          
      //   console.log(res.data)
      //   this.dataSetList=res.data.data
      //   setTimeout(() => {
      //     this.changeDataList()
      //     console.log("open");
      //   }, 100);
      // });
    },
    changeDataList:function(){
      var i
      for ( i = 0; i < this.dataSetList.length; i++) {
        let cloned = JSON.parse(JSON.stringify(TMP));
        cloned.No=this.dataSetList[i].No
        cloned.time=this.dataSetList[i].time
        cloned.status=false
        this.queue.push(cloned)
      }
    },
    openform: function(key) {
      // this.selectedIndex=key
      var myObj = {
        time:this.timeCurrent
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
          
      //   console.log(res.data)
        // this.dataSet=res.data.data
        setTimeout(() => {
          this.queue[key].pin=this.dataSet.pin
          this.queue[key].startCanEnter=this.dataSet.startCanEnter
          this.queue[key].endCanEnter=this.dataSet.endCanEnter
          this.queue[key].status = true;
          this.selectedPin = this.queue[key].pin;
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
          console.log("open");
        }, 100);
      // });
      // this.selectedCus=this.CusEmpty
      // console.log(this.selectedCus);
      
      
    },
    closeform: function() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
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
        i = "" + i;
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
      document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
      this.timeCurrent = h + ":" + m;
      console.log(new Date());
      
      // return new Date()
    },
    reduceTime: function(key) {

      // document.getElementById('playtime').innerHTML=(this.queue[key].time + 1000 * 60 * 1 - this.startTime()) / (60 * 1000)
      return this.queue[key].time-this.timeCurrent
      // Math.floor(
      //   (this.queue[key].time + 1000 * 60 * 1 - new Date()) / (60 * 1000)
      // );
    },
    setTime: function() {

      this.queue[0].time = Date.now()+(1000*60*2);
      this.queue[1].time = Date.now()+(1000*60*1);
      this.queue[2].time = Date.now()+(1000*60*0);
    },
    countDown10min:function(key){
      if(this.reduceTime==-10){
        this.queue.status=false
      }
    }
  },
  mounted() {
    // this.setTime()
    setInterval(() => {
      // this.timeC.substring(7,12)=this.timeCurrent
      var t = document
        .getElementById("txt")
        .innerHTML.split(':');
      this.timeCurrent=t[0]+":"+t[1]
      console.log(this.timeCurrent);
      for (let i = 0; i < this.queue.length; i++) {
        if(this.queue[i].status==true&&this.queue[i].endCanEnter!==""&&this.queue[i].endCanEnter<=this.timeCurrent){
            this.queue[i].status=false
            this.queue[i].endCanEnter=""
            this.queue[i].bookTime=""
            this.queue[i].startCanEnter=""
        }
        if(this.queue[i].time<this.timeCurrent){
          this.queue[i].time=""
        }
        
      }
    }, 100);

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
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  self.timeCurrent = h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "" + i};  // add zero in front of numbers < 10
  return i;
}