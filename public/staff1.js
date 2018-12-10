const selectedCusTMP= {
  building: "",
  room: "",
  clean: {
    bedroom: {
      isTrue: false,
      time: "",
      date: ""
    },
    toilet: {
      isTrue: false,
      time: "",
      date: ""
    },
    airConditioner: {
      isTrue: false,
      time: "",
      date: ""
    }
  },
  repair: {
    electricity: {
      isTrue: false,
      time: "",
      date: ""
    },
    water: {
      isTrue: false,
      time: "",
      date: ""
    },
    airConditioner: {
      isTrue: false,
      time: "",
      date: ""
    },
    door: {
      isTrue: false,
      time: "",
      date: ""
    },
    other: {
      isOther: "",
      time: "",
      date: ""
    }
  }
}
new Vue({
  el: "#vue-app",
  data: {
    checkOpen: false,
    customer: [
      // {
      //   building: "A",
      //   room: "101",
      //   clean: {
      //     bedroom: {
      //       isTrue: false,
      //       time: "",
      //       date: ""
      //     },
      //     toilet: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     airConditioner: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     }
      //   },
      //   repair: {
      //     electricity: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     water: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     airConditioner: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     door: {
      //       isTrue: true,
      //       time: "",
      //       date: ""
      //     },
      //     other: {
      //       isOther: "พื้น",
      //       time: "",
      //       date: ""
      //     }
      //   }
      // }
    ],
    selectedCus: {
      building: "",
      room: "",
      clean: {
        bedroom: {
          isTrue: false,
          time: "",
          date: ""
        },
        toilet: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        }
      },
      repair: {
        electricity: {
          isTrue: false,
          time: "",
          date: ""
        },
        water: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        },
        door: {
          isTrue: false,
          time: "",
          date: ""
        },
        other: {
          isOther: "",
          time: "",
          date: ""
        }
      }
    },
    default_selectedCus: {
      building: "",
      room: "",
      clean: {
        bedroom: {
          isTrue: false,
          time: "",
          date: ""
        },
        toilet: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        }
      },
      repair: {
        electricity: {
          isTrue: false,
          time: "",
          date: ""
        },
        water: {
          isTrue: false,
          time: "",
          date: ""
        },
        airConditioner: {
          isTrue: false,
          time: "",
          date: ""
        },
        door: {
          isTrue: false,
          time: "",
          date: ""
        },
        other: {
          isOther: "",
          time: "",
          date: ""
        }
      }
    },
    selectedIndex: -1,
    dataset: [
      // {
      //   idnotify: 1,
      //   building: "A",
      //   room: "101",
      //   bedroom: "false",
      //   bedroomtime: null,
      //   bedroomdate: null,
      //   toilet: "true",
      //   toilettime: null,
      //   toiletdate: null,
      //   airconditioner: "true",
      //   airconditionertime: null,
      //   airconditionerdate: null,
      //   electricity: "false",
      //   electricitytime: null,
      //   electricitydate: null,
      //   water: "true",
      //   watertime: null,
      //   waterdate: null,
      //   airconditionerRe: "false",
      //   airconditionerRetime: null,
      //   airconditionerRedate: null,
      //   door: "false",
      //   doortime: null,
      //   doordate: null,
      //   other: "พื้น",
      //   othertime: null,
      //   otherdate: null
      // },
      // {
      //   idnotify: 2,
      //   building: "A",
      //   room: "102",
      //   bedroom: "true",
      //   bedroomtime: null,
      //   bedroomdate: null,
      //   toilet: "false",
      //   toilettime: null,
      //   toiletdate: null,
      //   airconditioner: "true",
      //   airconditionertime: null,
      //   airconditionerdate: null,
      //   electricity: "true",
      //   electricitytime: null,
      //   electricitydate: null,
      //   water: "false",
      //   watertime: null,
      //   waterdate: null,
      //   airconditionerRe: "true",
      //   airconditionerRetime: null,
      //   airconditionerRedate: null,
      //   door: "true",
      //   doortime: null,
      //   doordate: null,
      //   other: "",
      //   othertime: null,
      //   otherdate: null
      // },
      // {
      //   idnotify: 3,
      //   building: "A",
      //   room: "103",
      //   bedroom: "false",
      //   bedroomtime: null,
      //   bedroomdate: null,
      //   toilet: "false",
      //   toilettime: null,
      //   toiletdate: null,
      //   airconditioner: "true",
      //   airconditionertime: null,
      //   airconditionerdate: null,
      //   electricity: "true",
      //   electricitytime: null,
      //   electricitydate: null,
      //   water: "false",
      //   watertime: null,
      //   waterdate: null,
      //   airconditionerRe: "true",
      //   airconditionerRetime: null,
      //   airconditionerRedate: null,
      //   door: "true",
      //   doortime: null,
      //   doordate: null,
      //   other: "ดดด",
      //   othertime: null,
      //   otherdate: null
      // }
    ]
  },
  methods: {
    openform: function(form, key) {
      if (this.checkOpen == false) {
        document.getElementById(form).style.display = "block";
        this.selectedIndex = key;
        this.selectedCus = JSON.parse(JSON.stringify(this.customer[key]));
        this.checkOpen = true;
        console.log(this.checkOpen);
      }
    },
    closeForm: function(form) {
      document.getElementById(form).style.display = "none";
      this.checkOpen = false;
      console.log(this.checkOpen);
    },
    sentDateAndTimeCleanBedroom: function(form,input,id) {
      if(this.check(input,id))
      {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].clean.bedroom.date !== "" &&
        this.customer[this.selectedIndex].clean.bedroom.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "clean",
          part: "bedroom",
          date: this.customer[this.selectedIndex].clean.bedroom.date,
          time: this.customer[this.selectedIndex].clean.bedroom.time
        };
        console.log(myObj);
        axios.post('/api/notify/bedroomdt/', myObj).then(res => {
          console.log(res.data)
          var msg = "ทำความสะอาดห้องนอน วันที่ :"+this.customer[this.selectedIndex].clean.bedroom.date+" เวลา : "+this.customer[this.selectedIndex].clean.bedroom.time
          this.sendline(msg)
        });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;
    }
    },
    sentDateAndTimeCleanToilet: function(form,input,id) {
      if(this.check(input,id))
      {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].clean.toilet.date != "" &&
        this.customer[this.selectedIndex].clean.toilet.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "clean",
          part: "toilet",
          date: this.customer[this.selectedIndex].clean.toilet.date,
          time: this.customer[this.selectedIndex].clean.toilet.time
        };
        console.log(myObj);
        axios.post('/api/notify/toiletdt/', myObj).then(res => {
          console.log(res.data)
          var msg = "ทำความสะอาดห้องน้ำ วันที่ :"+this.customer[this.selectedIndex].clean.toilet.date+" เวลา : "+this.customer[this.selectedIndex].clean.toilet.time
          this.sendline(msg)
        });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;}
    },
    sentDateAndTimeCleanAirConditioner: function(form,input,id) {
      console.log(this.check(input,id));
      if(this.check(input,id))
      {
        document.getElementById(form).style.display = "none";
        this.customer[this.selectedIndex] = JSON.parse(
          JSON.stringify(this.selectedCus)
        );
        this.$forceUpdate();
        if (
          this.customer[this.selectedIndex].clean.airConditioner.date !== "" &&
          this.customer[this.selectedIndex].clean.airConditioner.time !== ""
        ) {
          var myObj = {
            building: this.customer[this.selectedIndex].building,
            room: this.customer[this.selectedIndex].room,
            type: "clean",
            part: "airConditioner",
            date: this.customer[this.selectedIndex].clean.airConditioner.date,
            time: this.customer[this.selectedIndex].clean.airConditioner.time
          };
          console.log(myObj);
          axios.post('/api/notify/airdt/', myObj).then(res => {
            console.log(res.data)
            var msg = "ทำความสะอาดแอร์ วันที่ :"+this.customer[this.selectedIndex].clean.airConditioner.date+" เวลา : "+this.customer[this.selectedIndex].clean.airConditioner.time
            this.sendline(msg)
          });
        }
        this.selectedIndex = -1;
        this.checkOpen = false;
    }
    },
    sentDateAndTimeRepairElectricity: function(form,input,id) {
      if(this.check(input,id))
      {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.electricity.date !== "" &&
        this.customer[this.selectedIndex].repair.electricity.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "electricity",
          date: this.customer[this.selectedIndex].repair.electricity.date,
          time: this.customer[this.selectedIndex].repair.electricity.time
        };
        console.log(myObj);
        axios.post('/api/notify/elecdt/', myObj).then(res => {
          console.log(res.data)
          var msg = "ซ่อมไฟ วันที่ :"+this.customer[this.selectedIndex].repair.electricity.date+" เวลา : "+this.customer[this.selectedIndex].repair.electricity.time
          this.sendline(msg)
        });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;}
    },
    sentDateAndTimeRepairWater: function(form,input,id) {
      if(this.check(input,id))
      {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.water.date !== "" &&
        this.customer[this.selectedIndex].repair.water.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "water",
          date: this.customer[this.selectedIndex].repair.water.date,
          time: this.customer[this.selectedIndex].repair.water.time
        };
        console.log(myObj);
        axios.post('/api/notify/waterdt/', myObj).then(res => {
          console.log(res.data)
          var msg = "ซ่อมน้ำ วันที่ :"+this.customer[this.selectedIndex].repair.water.date+" เวลา : "+this.customer[this.selectedIndex].repair.water.time
          this.sendline(msg)
        });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;}
    },
    sentDateAndTimeRepairAirConditioner: function(form,input,id) {
      if(this.check(input,id))
      {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.airConditioner.date !== "" &&
        this.customer[this.selectedIndex].repair.airConditioner.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "airConditioner",
          date: this.customer[this.selectedIndex].repair.airConditioner.date,
          time: this.customer[this.selectedIndex].repair.airConditioner.time
        };
        console.log(myObj);
        axios.post('/api/notify/airredt/', myObj).then(res => {
          console.log(res.data)
          var msg = "ซ่อมแอร์ วันที่ :"+this.customer[this.selectedIndex].repair.airConditioner.date+" เวลา : "+this.customer[this.selectedIndex].repair.airConditioner.time
          this.sendline(msg)
        });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;}
    },
    sentDateAndTimeRepairDoor: function(form,input,id) {
      if(this.check(input,id))
      {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.door.date !== "" &&
        this.customer[this.selectedIndex].repair.door.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "door",
          date: this.customer[this.selectedIndex].repair.door.date,
          time: this.customer[this.selectedIndex].repair.door.time
        };
        console.log(myObj);
        axios.post('/api/notify/doordt/', myObj).then(res => {
          console.log(res.data)
          var msg = "ซ่อมประตู/หน้าต่าง วันที่ :"+this.customer[this.selectedIndex].repair.door.date+" เวลา : "+this.customer[this.selectedIndex].repair.door.time
          this.sendline(msg)
        });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;}
    },
    sentDateAndTimeRepairOther: function(form,input,id) {
      if(this.check(input,id))
      {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex] = JSON.parse(
        JSON.stringify(this.selectedCus)
      );
      this.$forceUpdate();
      if (
        this.customer[this.selectedIndex].repair.other.date !== "" &&
        this.customer[this.selectedIndex].repair.other.time !== ""
      ) {
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          room: this.customer[this.selectedIndex].room,
          type: "repair",
          part: "other",
          date: this.customer[this.selectedIndex].repair.other.date,
          time: this.customer[this.selectedIndex].repair.other.time
        };
        console.log(myObj);
        axios.post('/api/notify/otherdt/', myObj).then(res => {
          console.log(res.data)
          var msg = "ซ่อม "+ this.customer[this.selectedIndex].repair.other.isOther+" วันที่ :"+this.customer[this.selectedIndex].repair.other.date+" เวลา : "+this.customer[this.selectedIndex].repair.other.time
          this.sendline(msg)
        });
      }
      this.selectedIndex = -1;
      this.checkOpen = false;}
    },
    fixedSizeTBody: function(id) {
      const fix_head = document.getElementById(id);
      console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
      fix_head.style.height =
        window.innerHeight - (fix_head.getBoundingClientRect().top + 50) + "px";
    },
    nextSchedule: function() {
      window.location.href = "staff2.html";
    },
    nextSentDrinkingWater: function() {
      window.location.href = "staff3.html";
    },
    check:function(input,id){
      var check=false
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }

      today = yyyy + "-" + mm + "-" + dd;
      console.log(input>today);
      if(!(input>today)){
        document.getElementById(id).innerHTML="กรุณาเลือกวันพรุ่งนี้เป็นต้นไป"
        document.getElementById(id).style.display="block"
      }else{
        check=true
        document.getElementById(id).style.display="none"
      }
      return check
    },
    changeData: function() {
      var i;
      for (i = 0; i < this.dataset.length; i++) {
        const cloned = JSON.parse(JSON.stringify(selectedCusTMP))
        // var cloned = this.selectedCus
        console.log(i);
        cloned.building = this.dataset[i].building;
        cloned.room = this.dataset[i].room;
        if (this.dataset[i].bedroom == "true") {
          console.log("clean",this.dataset[i].bedroom);
          cloned.clean.bedroom.isTrue = true;
        }
        if(this.dataset[i].toilet == "true"){
          // console.log("clean");
          cloned.clean.toilet.isTrue = true;
        }
        if(this.dataset[i].airconditioner== "true"){
          // console.log("clean");
          cloned.clean.airConditioner.isTrue = true;
        }
        if(this.dataset[i].electricity== "true"){
          // console.log("clean");
          cloned.repair.electricity.isTrue = true;
        }
        if(this.dataset[i].water== "true"){
          // console.log("repair");
          cloned.repair.water.isTrue = true;
        }
        if(this.dataset[i].airconditionerRe== "true"){
          // console.log("repair");
          cloned.repair.airConditioner.isTrue = true;
        }
        if(this.dataset[i].door== "true"){
          // console.log("repair");
          cloned.repair.door.isTrue = true;
        }
        if(this.dataset[i].other!== ""||this.dataset[i].other!==null){
          // console.log("repair");
          cloned.repair.other.isOther = this.dataset[i].other;
        }
        this.customer.push(cloned)
        // console.log(cloned);
        
        // cloned=this.default_selectedCus
      }
      console.log(this.dataset)
    },
    sendline:function (msg){
      request({
          method: 'POST',
          uri: 'https://notify-api.line.me/api/notify',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            bearer: 'dvR6TeBMQlqxEJDcRANBpTi6KyJlFMEWeEd9nTFLTbH', //token
          },
          form: {
            message: msg, //ข้อความที่จะส่ง
          },
        }, (err, httpResponse, body) => {
          if (err) {
            console.log(err)
          } else {
            console.log(body)
          }
        })
    }
    
  },
  mounted() {
    axios.get('/api/notify/show').then(res => {
      // let listOfObjects = Object.keys(res.data.data).map((key) => {
      //   return res.data.data[key]
      // })

      console.log(res.data)
      this.dataset=res.data.data;
      setTimeout(() => this.changeData(),100);
    })
    this.changeData();
    this.fixedSizeTBody("fix_head1");
    this.fixedSizeTBody("fix_head2");
    window.addEventListener("resize", () => {
      this.fixedSizeTBody("fix_head1");
      this.fixedSizeTBody("fix_head2");
    });
  }
});


