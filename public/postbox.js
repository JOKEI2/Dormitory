const TMP={
  No: "", 
  date: ""
}
new Vue({
  el: "#vue-app",
  data: {
    listpackageNo: [
      // { No: "12345678912th", date: "2018-8-12" },
      // { No: "12345677912th", date: "2018-8-12" }
    ],
    OnePackage:{No: "", date: ""},
    EmptyOnePackage:{No: "", date: ""},
    packageNo: [],
    merge: "",
    datasetThisRoom: 
      {
        idroom: 1,
        building: "A",
        roomnumber: "101",
        user1: "1",
        user2: "2",
        hiringStatus: "เช่าแล้ว",
        elecStart: 0,
        elecEndL: 500,
        electbill: 1000,
        waterStart: 0,
        waterEnd: 0,
        waterbill: 1000,
        alert: "102012",
        account: "10212210",
        accountname: "ศิริพล",
        money: "01",
        rate: 20,
        otherCost: 2000,
        paymentStatus: "yes",
        obj: ["12345678912th","12354678956th"],
        datePerObj:["2018-8-12","2018-8-16"]
      },
      isDateSelected:"2018-2-1",
      isObjSelected:"12345678454th"
 
  },
  methods: {
    moveOnMax: function(field, nextField) {
      var char = document.getElementById(field).value;
      pattern = /[A-Za-z0-9]/;
      if (char.length == 1 && pattern.test(char)) {
        document.getElementById(nextField).focus();
      }
    },
    moveOnMin:function(field,beforeField){
      var input = document.getElementById(field)
      input.addEventListener("keydown",(e)=>{
        // if(e.key=="Backspace"){
        //   this.countBackspace+=1
        // }
        // console.log(this.countBackspace);
        
        if(e.key=="Backspace"&&input.value.length==0){
          // console.log(this.countBackspace);
          document.getElementById(beforeField).focus();
          // this.countBackspace=0
        }
      })
    },
    checkPattern: function() {
      var check = false;
      pattern = /^[A-Za-z0-9]+$/;
      if (pattern.test(this.merge)) {
        check = true;
      }
      return check;
    },
    mergePackageNo: function() {
      this.merge =
        this.packageNo[0] +
        this.packageNo[1] +
        this.packageNo[2] +
        this.packageNo[3] +
        this.packageNo[4] +
        this.packageNo[5] +
        this.packageNo[6] +
        this.packageNo[7] +
        this.packageNo[8] +
        this.packageNo[9] +
        this.packageNo[10] +
        this.packageNo[11] +
        this.packageNo[12];
    },
    clear: function() {
      this.packageNo = [];
      this.merge = "";
    },
    checkObj: function() {
      var i;
      var isTrue = false;
      for (i = 0; i < this.listpackageNo.length; i++) {
        this.OnePackage=this.EmptyOnePackage
        this.OnePackage=this.listpackageNo[i]
        if (
          this.merge.toUpperCase() == this.OnePackage.No
        ) {
          isTrue = true;
          this.isDateSelected=this.OnePackage.date
          this.isObjSelected=this.OnePackage.No
        }
      }
      return isTrue;
    },
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
    openform: function() {
      this.mergePackageNo()
      
      if (this.merge.length == 13 && this.packageNo.length == 13&&this.checkPattern()) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        console.log("open");
        window.onclick = event => {
          if (event.target == modal) {
            this.clear();
            console.log("close");
            modal.style.display = "none";
          }
          this.clear;
        };
      }else if(!this.checkPattern()){
        var mo = document.getElementById("patternFalse");
        mo.style.display = "block";
        console.log("open");
        window.onclick = event => {
          if (event.target == mo) {
            console.log("close");
            mo.style.display = "none";
          }
        };
      } 
      else {
        var mo = document.getElementById("no");
        mo.style.display = "block";
        console.log("open");
        window.onclick = event => {
          if (event.target == mo) {
            console.log("close");
            mo.style.display = "none";
          }
        };
      }
    },
    changeData:function(){
      var i;
      this.listpackageNo=[]
      for ( i = 0; i < this.datasetThisRoom.length; i++) {
        let cloned = JSON.parse(JSON.stringify(TMP));
        s = new Date(Date.parse(this.datasetThisRoom[i].date))
        cloned.No = this.datasetThisRoom[i].number.toUpperCase()
        cloned.date = s.toLocaleDateString()
        this.listpackageNo.push(cloned)
        // this.OnePackage=this.EmptyOnePackage
      }
      console.log(this.listpackageNo);
      
    },
    // changeData:function(){
    //   var i;
    //   this.listpackageNo=[]
    //   for ( i = 0; i < this.datasetThisRoom.length; i++) {
    //     this.OnePackage.No = this.datasetThisRoom[i].number.toUpperCase()
        
    //     this.OnePackage.date = s.toLocaleDateString()
    //     this.listpackageNo.push(this.OnePackage)
    //     this.OnePackage=this.EmptyOnePackage
    //   }
    //   console.log(this.listpackageNo);
      
    // }
  },
  mounted() {
    
    axios.get('/api/obj/room').then(res => {
      this.datasetThisRoom=res.data.data
      console.log(res.data);
      setTimeout(() => {
        this.changeData();
      }, 500);

      
    })
    this.changeData();
    this.setCenter("top");
    window.addEventListener("resize", () => {
      this.setCenter("top");
    });
  }
});
