const selectedCusTMP = {
  building: "",
  room: "",
  hiringStatus: "",
  customerFirst: {
    firstname: "",
    lastname: "",
    tel: "",
    id: ""
  },
  customerSecond: {
    firstname: "",
    lastname: "",
    tel: "",
    id: ""
  },
  request: {
    annoy: {
      building: "",
      room: "",
      message: ""
    },
    repair: {
      electricity: false,
      water: false,
      airConditioner: false,
      door: false,
      other: ""
    },
    clean: {
      room: false,
      toilet: false,
      airConditioner: false
    }
  },
  paymentStatus: false,
  rent: {
    rates: 0,
    elecStart: 0,
    elecEnd: 0,
    waterStart: 0,
    waterEnd: 0,
    otherBill: 0
  },
  obj: [],
  datePerObj: [],
  numberOfObj:0
};

new Vue({
  el: "#vue-app",
  data: {
    checkOpen: false,
    textData: "",
    customer: [
      // {
      //   building: "A",
      //   room: "101",
      //   hiringStatus: "เช่าแล้ว",
      //   customerFirst: {
      //     firstname: "สมศรี",
      //     lastname: "มีหวัง",
      //     tel: "0235647420",
      //     id: "134567890123"
      //   },
      //   customerSecond: {
      //     firstname: "สมหวัง",
      //     lastname: "มีหวัง",
      //     tel: "0123456789",
      //     id: "9874563210123"
      //   },
      //   request: {
      //     annoy: {
      //       building: "",
      //       room: "101",
      //       message: "นาฬิกาปลุก"
      //     },
      //     repair: {
      //       electricity: false,
      //       water: false,
      //       airConditioner: false,
      //       door: false,
      //       other: ""
      //     },
      //     clean: {
      //       room: false,
      //       toilet: false,
      //       airConditioner: false
      //     }
      //   },
      //   paymentStatus: false,
      //   rent: {
      //     rates: 5000,
      //     elecStart: 1328,
      //     elecEnd: 1420,
      //     waterStart: 62,
      //     waterEnd: 71,
      //     otherBill: 0
      //   },
      //   obj: ["12345678912TH", "12344678912TH", "12345677912TH"]
      // },
      // {
      //   building: "A",
      //   room: "101",
      //   hiringStatus: "เช่าแล้ว",
      //   customerFirst: {
      //     firstname: "สมศรี",
      //     lastname: "มีหวัง",
      //     tel: "0235647420",
      //     id: "134567890123"
      //   },
      //   customerSecond: {
      //     firstname: "สมหวัง",
      //     lastname: "มีหวัง",
      //     tel: "0123456789",
      //     id: "9874563210123"
      //   },
      //   request: {
      //     annoy: {
      //       building: "A",
      //       room: "101",
      //       message: "นาฬิกาปลุก"
      //     },
      //     repair: {
      //       electricity: false,
      //       water: true,
      //       airConditioner: false,
      //       door: false,
      //       other: ""
      //     },
      //     clean: {
      //       room: true,
      //       toilet: true,
      //       airConditioner: false
      //     }
      //   },
      //   paymentStatus: false,
      //   rent: {
      //     rates: 5000,
      //     elecStart: 1328,
      //     elecEnd: 1420,
      //     waterStart: 62,
      //     waterEnd: 71,
      //     otherBill: 0
      //   },
      //   obj: ["12345678912TH", "12344678912TH", "12345677912TH"]
      // },
      // {
      //   building: "A",
      //   room: "101",
      //   hiringStatus: "เช่าแล้ว",
      //   customerFirst: {
      //     firstname: "สมศรี",
      //     lastname: "มีหวัง",
      //     tel: "0235647420",
      //     id: "134567890123"
      //   },
      //   customerSecond: {
      //     firstname: "สมหวัง",
      //     lastname: "มีหวัง",
      //     tel: "0123456789",
      //     id: "9874563210123"
      //   },
      //   request: {
      //     annoy: {
      //       building: "",
      //       room: "101",
      //       message: "นาฬิกาปลุก"
      //     },
      //     repair: {
      //       electricity: false,
      //       water: false,
      //       airConditioner: false,
      //       door: false,
      //       other: ""
      //     },
      //     clean: {
      //       room: false,
      //       toilet: false,
      //       airConditioner: false
      //     }
      //   },
      //   paymentStatus: false,
      //   rent: {
      //     rates: 5000,
      //     elecStart: 1328,
      //     elecEnd: 1420,
      //     waterStart: 62,
      //     waterEnd: 71,
      //     otherBill: 0
      //   },
      //   obj: ["12345678912TH", "12344678912TH", "12345677912TH"]
      // }
    ],
    selectedCus: {
      building: "",
      room: "",
      hiringStatus: "",
      customerFirst: {
        firstname: "",
        lastname: "",
        tel: "",
        id: ""
      },
      customerSecond: {
        firstname: "",
        lastname: "",
        tel: "",
        id: ""
      },
      request: {
        annoy: {
          building: "",
          room: "",
          message: ""
        },
        repair: {
          electricity: false,
          water: false,
          airConditioner: false,
          door: false,
          other: ""
        },
        clean: {
          room: false,
          toilet: false,
          airConditioner: false
        }
      },
      paymentStatus: false,
      rent: {
        rates: 0,
        elecStart: 0,
        elecEnd: 0,
        waterStart: 0,
        waterEnd: 0,
        otherBill: 0
      },
      obj: [],
      datePerObj: []
    },
    CusEmpty: {
      building: "",
      room: "",
      hiringStatus: "ว่าง",
      customerFirst: {
        firstname: "-",
        lastname: "",
        tel: "",
        id: ""
      },
      customerSecond: {
        firstname: "-",
        lastname: "",
        tel: "",
        id: ""
      },
      request: {
        annoy: {
          building: "",
          room: "",
          message: ""
        },
        repair: {
          electricity: false,
          water: false,
          airConditioner: false,
          door: false,
          other: ""
        },
        clean: {
          room: false,
          toilet: false,
          airConditioner: false
        }
      },
      paymentStatus: false,
      rent: {
        rates: 0,
        elecStart: 0,
        elecEnd: 0,
        waterStart: 0,
        waterEnd: 0,
        otherBill: 0
      },
      obj: [],
      datePerObj: [],
      numberOfObj:0
    },
    selectedIndex: -1,
    // dataSetCus: [
    //   {
    //     iduser: 1,
    //     username: "userA101_1",
    //     hash: null,
    //     firstname: "สมศร",
    //     lastname: "มี",
    //     tel: "0235647420",
    //     id: "1345678901223",
    //     roomse: "1",
    //     roomnum: "101",
    //     building: "A"
    //   },
    //   {
    //     iduser: 2,
    //     username: "userA101_2",
    //     hash: null,
    //     firstname: "สมหวัง",
    //     lastname: "มีหวส",
    //     tel: "0123456789",
    //     id: "9874563210123",
    //     roomse: "2",
    //     roomnum: "101",
    //     building: "A"
    //   },
    //   {
    //     iduser: 3,
    //     username: "userA102_1",
    //     hash: null,
    //     firstname: "มีสุข",
    //     lastname: "ดีจัง",
    //     tel: "0834816469",
    //     id: "1206156084536",
    //     roomse: "1",
    //     roomnum: "102",
    //     building: "A"
    //   },
    //   {
    //     iduser: 4,
    //     username: "userA102_2",
    //     hash: null,
    //     firstname: "อยากได้",
    //     lastname: "เอจัง",
    //     tel: "0859336074",
    //     id: "1001212564523",
    //     roomse: "2",
    //     roomnum: "102",
    //     building: "A"
    //   }
    // ],
    // dataSetRoom: [
    //   {
    //     idroom: 1,
    //     building: "A",
    //     roomnumber: "101",
    //     user1: "1",
    //     user2: "2",
    //     hiringStatus: "เช่าแล้ว",
    //     elecStart: 0,
    //     elecEndL: 500,
    //     electbill: 1000,
    //     waterStart: 0,
    //     waterEnd: 0,
    //     waterbill: 1000,
    //     alert: "102012",
    //     account: "10212210",
    //     accountname: "ศิริพล",
    //     money: "01",
    //     rate: 20,
    //     otherCost: 2000,
    //     paymentStatus: "yes",
    //     obj: ["12345678912th"],
    //     datePerObj: ["2018-8-12"]
    //   },
    //   {
    //     idroom: 2,
    //     building: "A",
    //     roomnumber: "102",
    //     user1: "1",
    //     user2: "2",
    //     hiringStatus: "เช่าแล้ว",
    //     elecStart: 0,
    //     elecEndL: 500,
    //     electbill: 1000,
    //     waterStart: 0,
    //     waterEnd: 0,
    //     waterbill: 1000,
    //     alert: "102012",
    //     account: "10212210",
    //     accountname: "ศิริพล",
    //     money: "01",
    //     rate: 20,
    //     otherCost: 3000,
    //     paymentStatus: "yes",
    //     obj: []
    //   }
    // ],
    // dataNotify: [
    //   {
    //     idnotify: 1,
    //     building: "A",
    //     room: "101",
    //     bedroom: "true",
    //     bedroomtime: null,
    //     bedroomdate: null,
    //     toilet: "true",
    //     toilettime: null,
    //     toiletdate: null,
    //     airconditioner: "true",
    //     airconditionertime: null,
    //     airconditionerdate: null,
    //     electricity: "true",
    //     electricitytime: null,
    //     electricitydate: null,
    //     water: "true",
    //     watertime: null,
    //     waterdate: null,
    //     airconditionerRe: "true",
    //     airconditionerRetime: null,
    //     airconditionerRedate: null,
    //     door: "true",
    //     doortime: null,
    //     doordate: null,
    //     other: "พื้น",
    //     othertime: null,
    //     otherdate: null,
    //     alertBuilding: "A",
    //     alertRoom: "201",
    //     alertMessage: "นาฬิกาปลุก"
    //   }
    // ],
    dataSet: [
      {
        idroom: 1,
        building: "A",
        roomnumber: "101",
        hiringStatus: "เช่าแล้ว",
        paymentStatus: "true",
        otherCost: 2000,
        user1: "1",
        user2: "2",
        electbill: 1000,
        waterbill: 1000,
        alertBuilding: "D",
        alertRoom: "102",
        alertMsg: "dsdsd",
        account: "123456789",
        accountname: "ภีรดา",
        money: 1,
        rate: 20,
        iduser: 1,
        username: "A101_1",
        hash: "123456789",
        firstname: "วราเทพ",
        lastname: "ทับบุญ",
        tel: "0235647420",
        id: "134567890123",
        roomse: "1",
        roomnum: "101",
        lineid: "dvR6TeBMQlqxEJDcRANBpTi6KyJlFMEWeEd9nTFLTbH",
        type: "3",
        iduser_2: 2,
        username_2: "A101_2",
        hash_2: null,
        firstname_2: "สมหวัง",
        lastname_2: "มีหวส",
        tel_2: "0123456789",
        id_2: "9874563210123",
        roomse_2: "2",
        roomnum_2: "101",
        building_2: "A",
        lineid_2: null,
        type_2: "3",
        idnotify: 1,
        room: 101,
        bedroom: "true",
        bedroomtime: "12:23",
        bedroomdate: "2018-12-12",
        toilet: "true",
        toilettime: "12:25",
        toiletdate: "2018-12-12",
        airconditioner: "true",
        airconditionertime: "23:00",
        airconditionerdate: "2018-12-12",
        electricity: "true",
        electricitytime: "12:12",
        electricitydate: "2018-12-12",
        water: "true",
        watertime: "false",
        waterdate: "false",
        airconditionerRe: "true",
        airconditionerRetime: "false",
        airconditionerRedate: "false",
        door: "true",
        doortime: "12:13",
        doordate: "2018-12-12",
        other: "sdsds",
        othertime: null,
        otherdate: null
      }
    ],
    dataSetObj:[
      {
        idObj:'1',
        building:'101',
        room:'A',
        number:'12345678912th',
        date:'2018-11-29'
      }
    ]
  },
  methods: {
    noEnter: function() {
      return !(window.event && window.event.keyCode == 13);
    },
    checkLessThanElec: function() {
      var input2_1 = document.getElementById("infoRent2_1");
      var input2_2 = document.getElementById("infoRent2_2");
      if (!(input2_1.value < input2_2.value)) {
        document.getElementById("dp_infoRent2").innerHTML =
          "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
        document.getElementById("dp_infoRent2").style.display = "block";
      } else {
        document.getElementById("dp_infoRent2").style.display = "none";
      }
    },
    checkLessThanWater: function() {
      var input3_1 = document.getElementById("infoRent3_1");
      var input3_2 = document.getElementById("infoRent3_2");
      if (!(input3_1.value < input3_2.value)) {
        document.getElementById("dp_infoRent3").innerHTML =
          "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
        document.getElementById("dp_infoRent3").style.display = "block";
      } else {
        document.getElementById("dp_infoRent3").style.display = "none";
      }
    },
    fullName: function(cusName) {
      return cusName.firstname + " " + cusName.lastname;
    },
    CalculateRent: function(rent) {
      return (
        Number(rent.rates) +
        this.CalculateElec(rent) +
        this.CalculateWater(rent) +
        Number(rent.otherBill)
      );
    },
    CalculateElec: function(rent) {
      return Number(rent.elecEnd - rent.elecStart) * 8;
    },
    CalculateWater: function(rent) {
      return Number(rent.waterEnd - rent.waterStart) * 18;
    },
    fixedSizeTBody: function() {
      const fix_head = document.getElementById("fix_head");
      // console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
      fix_head.style.height =
        window.innerHeight - fix_head.getBoundingClientRect().top + "px";
    },
    openform: function(form, cus) {
      if (this.checkOpen == false) {
        var modal = document.getElementById(form);
        modal.style.display = "block";
        this.selectedIndex = cus;
        // console.log(this.customer[cus]);
        // this.$set(this.selectedCus,cus,this.customer[cus]);
        this.selectedCus = JSON.parse(JSON.stringify(this.customer[cus]));
        // console.log(this.selectedCus);
        this.checkOpen = true;
      }
      // console.log(this.checkOpen);
    },
    closeForm: function(form) {
      document.getElementById(form).style.display = "none";
      this.checkOpen = false;
      // console.log(this.checkOpen);
    },
    sentHiringStatusToJson: function(cus) {
      this.selectedIndex = cus;
      // setTimeout(() => {
      //   console.log("yay");
      // }, 100);
      
      
      console.log(this.customer[this.selectedIndex]);

      this.$forceUpdate();
      if (this.customer[this.selectedIndex].hiringStatus == "ว่าง") {
        this.customer[this.selectedIndex].customerFirst.firstname = "-";
        this.customer[this.selectedIndex].customerFirst.lastname = "";
        this.customer[this.selectedIndex].customerFirst.id = "";
        this.customer[this.selectedIndex].customerFirst.tel = "";
        this.customer[this.selectedIndex].customerSecond.firstname = "-";
        this.customer[this.selectedIndex].customerSecond.lastname = "";
        this.customer[this.selectedIndex].customerSecond.id = "";
        this.customer[this.selectedIndex].customerSecond.tel = "";
        this.customer[this.selectedIndex].request.annoy.building = "";
        this.customer[this.selectedIndex].request.annoy.room = "";
        this.customer[this.selectedIndex].request.annoy.message = "";
        this.customer[this.selectedIndex].request.repair.electricity = "false";
        this.customer[this.selectedIndex].request.repair.water = "false";
        this.customer[this.selectedIndex].request.repair.airConditioner = "false";
        this.customer[this.selectedIndex].request.repair.door = "false";
        this.customer[this.selectedIndex].request.repair.other = "";
        this.customer[this.selectedIndex].request.clean.bedroom = "false";
        this.customer[this.selectedIndex].request.clean.toilet = "false";
        this.customer[this.selectedIndex].request.clean.airConditioner = "false";
        this.customer[this.selectedIndex].paymentStatus = "false";
        this.customer[this.selectedIndex].rent.rates = 0;
        this.customer[this.selectedIndex].rent.elecStart = 0;
        this.customer[this.selectedIndex].rent.elecEnd = 0;
        this.customer[this.selectedIndex].rent.waterStart = 0;
        this.customer[this.selectedIndex].rent.waterEnd = 0;
        this.customer[this.selectedIndex].rent.otherBill = 0;
        this.customer[this.selectedIndex].obj = [];
      }
      // console.log(this.customer[this.selectedIndex]);
      // this.$forceUpdate();
      var myObj = {
        customer: JSON.parse(JSON.stringify(this.customer[this.selectedIndex]))
        // building: this.customer[this.selectedIndex].building,
        // room: this.customer[this.selectedIndex].room,
        // hiringStatus: this.customer[this.selectedIndex].hiringStatus
      };
      console.log(myObj);

      axios.post('/api/room/hiring', myObj).then(res => {
        console.log(res.data)
      });
      // this.selectedCus=this.CusEmpty
      // console.log(this.selectedCus);
      this.selectedIndex = -1;
    },
    sentInformationFirstToJson: function(form) {
      var input1 = document.getElementById("infoCusFirst1");
      var input2 = document.getElementById("infoCusFirst2");
      var input3 = document.getElementById("infoCusFirst3");
      var input4 = document.getElementById("infoCusFirst4");
      if (
        input1.checkValidity() &&
        input2.checkValidity() &&
        input3.checkValidity() &&
        input4.checkValidity()
      ) {
        document.getElementById(form).style.display = "none";
        this.customer[this.selectedIndex] = JSON.parse(
          JSON.stringify(this.selectedCus)
        );
        this.$forceUpdate();
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          roomnum: this.customer[this.selectedIndex].room,
          roomse: "1",
          firstname: this.customer[this.selectedIndex].customerFirst.firstname,
          lastname: this.customer[this.selectedIndex].customerFirst.lastname,
          tel: this.customer[this.selectedIndex].customerFirst.tel,
          id: this.customer[this.selectedIndex].customerFirst.id
        };
        console.log(myObj);
        axios.post('/api/user/edit', myObj).then(res => {
          console.log(res.data)
        });
        this.selectedCus = this.CusEmpty;
        console.log(this.selectedCus);
        this.selectedIndex = -1;
        this.checkOpen = false;
      } else {
        if (!input1.checkValidity()) {
          document.getElementById("dp_infoCusFirst1").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusFirst1").style.display = "block";
        }
        if (!input2.checkValidity()) {
          document.getElementById("dp_infoCusFirst2").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusFirst2").style.display = "block";
        }
        if (!input3.checkValidity()) {
          document.getElementById("dp_infoCusFirst3").innerHTML =
            "กรอกเฉพาะตัวเลข 10 หลัก";
          document.getElementById("dp_infoCusFirst3").style.display = "block";
        }
        if (!input4.checkValidity()) {
          document.getElementById("dp_infoCusFirst4").innerHTML =
            "กรอกเฉพาะตัวเลข 13 หลัก";
          document.getElementById("dp_infoCusFirst4").style.display = "block";
        }
      }
      input1.addEventListener("change", function(e) {
        console.log(input1.checkValidity());
        var c1 = input1.checkValidity();
        if (c1) {
          document.getElementById("dp_infoCusFirst1").style.display = "none";
        } else {
          document.getElementById("dp_infoCusFirst1").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusFirst1").style.display = "block";
        }
      });
      input2.addEventListener("change", function(e) {
        if (input2.checkValidity()) {
          document.getElementById("dp_infoCusFirst2").style.display = "none";
        } else {
          document.getElementById("dp_infoCusFirst2").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusFirst2").style.display = "block";
        }
      });
      input3.addEventListener("change", function(e) {
        if (input3.checkValidity()) {
          document.getElementById("dp_infoCusFirst3").style.display = "none";
        } else {
          document.getElementById("dp_infoCusFirst3").innerHTML =
            "กรอกเฉพาะตัวเลข 10 หลัก";
          document.getElementById("dp_infoCusFirst3").style.display = "block";
        }
      });
      input4.addEventListener("change", function(e) {
        if (input4.checkValidity()) {
          document.getElementById("dp_infoCusFirst4").style.display = "none";
        } else {
          document.getElementById("dp_infoCusFirst4").innerHTML =
            "กรอกเฉพาะตัวเลข 13 หลัก";
          document.getElementById("dp_infoCusFirst4").style.display = "block";
        }
      });
    },
    sentInformationSecondToJson: function(form) {
      var input1 = document.getElementById("infoCusSecond1");
      var input2 = document.getElementById("infoCusSecond2");
      var input3 = document.getElementById("infoCusSecond3");
      var input4 = document.getElementById("infoCusSecond4");
      console.log(
        input1.checkValidity() &&
          input2.checkValidity() &&
          input3.checkValidity() &&
          input4.checkValidity()
      );

      if (
        input1.checkValidity() &&
        input2.checkValidity() &&
        input3.checkValidity() &&
        input4.checkValidity()
      ) {
        document.getElementById(form).style.display = "none";
        this.customer[this.selectedIndex] = JSON.parse(
          JSON.stringify(this.selectedCus)
        );
        this.$forceUpdate();
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          roomnum: this.customer[this.selectedIndex].room,
          roomse: "2",
          firstname: this.customer[this.selectedIndex].customerSecond.firstname,
          lastname: this.customer[this.selectedIndex].customerSecond.lastname,
          tel: this.customer[this.selectedIndex].customerSecond.tel,
          id: this.customer[this.selectedIndex].customerSecond.id
        };
        console.log(myObj);
        axios.post('/api/user/edit', myObj).then(res => {
          console.log(res.data)
        });
        this.selectedCus = this.CusEmpty;
        this.selectedIndex = -1;
        this.checkOpen = false;
      } else {
        if (!input1.checkValidity()) {
          document.getElementById("dp_infoCusSecond1").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusSecond1").style.display = "block";
        }
        if (!input2.checkValidity()) {
          document.getElementById("dp_infoCusSecond2").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusSecond2").style.display = "block";
        }
        if (!input3.checkValidity()) {
          document.getElementById("dp_infoCusSecond3").innerHTML =
            "กรอกเฉพาะตัวเลข 10 หลัก";
          document.getElementById("dp_infoCusSecond3").style.display = "block";
        }
        if (!input4.checkValidity()) {
          document.getElementById("dp_infoCusSecond4").innerHTML =
            "กรอกเฉพาะตัวเลข 13 หลัก";
          document.getElementById("dp_infoCusSecond4").style.display = "block";
        }
      }
      input1.addEventListener("change", function(e) {
        console.log(input1.checkValidity());
        var c1 = input1.checkValidity();
        if (c1) {
          document.getElementById("dp_infoCusSecond1").style.display = "none";
        } else {
          document.getElementById("dp_infoCusSecond1").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusSecond1").style.display = "block";
        }
      });
      input2.addEventListener("change", function(e) {
        if (input2.checkValidity()) {
          document.getElementById("dp_infoCusSecond2").style.display = "none";
        } else {
          document.getElementById("dp_infoCusSecond2").innerHTML =
            "กรอกเฉพาะตัวอักษร";
          document.getElementById("dp_infoCusSecond2").style.display = "block";
        }
      });
      input3.addEventListener("change", function(e) {
        if (input3.checkValidity()) {
          document.getElementById("dp_infoCusSecond3").style.display = "none";
        } else {
          document.getElementById("dp_infoCusSecond3").innerHTML =
            "กรอกเฉพาะตัวเลข 10 หลัก";
          document.getElementById("dp_infoCusSecond3").style.display = "block";
        }
      });
      input4.addEventListener("change", function(e) {
        if (input4.checkValidity()) {
          document.getElementById("dp_infoCusSecond4").style.display = "none";
        } else {
          document.getElementById("dp_infoCusSecond4").innerHTML =
            "กรอกเฉพาะตัวเลข 13 หลัก";
          document.getElementById("dp_infoCusSecond4").style.display = "block";
        }
      });
    },
    sentRentToJson: function(form) {
      var input1 = document.getElementById("infoRent1");
      var input2_1 = document.getElementById("infoRent2_1");
      var input2_2 = document.getElementById("infoRent2_2");
      var input3_1 = document.getElementById("infoRent3_1");
      var input3_2 = document.getElementById("infoRent3_2");
      var input4 = document.getElementById("infoRent4");
      if (
        input1.checkValidity() &&
        input2_1.checkValidity() &&
        input2_2.checkValidity() &&
        input3_1.checkValidity() &&
        input3_2.checkValidity() &&
        input4.checkValidity() &&
        input2_1.value < input2_2.value &&
        input3_1.value < input3_2.value
      ) {
        document.getElementById(form).style.display = "none";
        this.customer[this.selectedIndex] = JSON.parse(
          JSON.stringify(this.selectedCus)
        );
        this.$forceUpdate();
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          roomnumber: this.customer[this.selectedIndex].room,
          rent: this.CalculateRent(this.customer[this.selectedIndex].rent),
          rates: Number(this.customer[this.selectedIndex].rent.rates),
          elecStart: Number(this.customer[this.selectedIndex].rent.elecStart),
          elecEnd: Number(this.customer[this.selectedIndex].rent.elecEnd),
          electbill: this.CalculateElec(this.customer[this.selectedIndex].rent),
          waterStart: Number(this.customer[this.selectedIndex].rent.waterStart),
          waterEnd: Number(this.customer[this.selectedIndex].rent.waterEnd),
          waterbill: this.CalculateWater(
            this.customer[this.selectedIndex].rent
          ),
          otherBill: Number(this.customer[this.selectedIndex].rent.otherBill)
        };
        // console.log(myObj);
        axios.post('/api/room/rent', myObj).then(res => {
          console.log("rent");  
          console.log(res.data)
        });
        console.log("wow");
        axios.patch('/api/bill/edit', myObj).then(res => {
          console.log(res.data)
        });
        this.selectedCus = this.CusEmpty;
        this.selectedIndex = -1;
        this.checkOpen = false;
      } else {
        if (!input1.checkValidity()) {
          document.getElementById("dp_infoRent1").innerHTML = "กรอกเฉพาะตัวเลข";
          document.getElementById("dp_infoRent1").style.display = "block";
        }
        if (!input2_1.checkValidity() || !input2_2.checkValidity()) {
          document.getElementById("dp_infoRent2").innerHTML = "กรอกเฉพาะตัวเลข";
          document.getElementById("dp_infoRent2").style.display = "block";
        } else {
          if (!(input2_1.value < input2_2.value)) {
            document.getElementById("dp_infoRent2").innerHTML =
              "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
            document.getElementById("dp_infoRent2").style.display = "block";
          }
        }
        if (!input3_1.checkValidity() || !input3_2.checkValidity()) {
          document.getElementById("dp_infoRent3").innerHTML = "กรอกเฉพาะตัวเลข";
          document.getElementById("dp_infoRent3").style.display = "block";
        } else {
          if (!(input3_1.value < input3_2.value)) {
            document.getElementById("dp_infoRent3").innerHTML =
              "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
            document.getElementById("dp_infoRent3").style.display = "block";
          }
        }
        if (!input4.checkValidity()) {
          document.getElementById("dp_infoRent4").innerHTML = "กรอกเฉพาะตัวเลข";
          document.getElementById("dp_infoRent4").style.display = "block";
        }
        input1.addEventListener("change", function(e) {
          if (input1.checkValidity()) {
            document.getElementById("dp_infoRent1").style.display = "none";
          } else {
            document.getElementById("dp_infoRent1").innerHTML =
              "กรอกเฉพาะตัวเลข";
            document.getElementById("dp_infoRent1").style.display = "block";
          }
        });
        input2_1.addEventListener("change", function(e) {
          console.log("change");

          console.log(input2_1.checkValidity() < input2_2.checkValidity());
          if (input2_1.checkValidity() && input2_2.checkValidity()) {
            if (!(input2_1.value < input2_2.value)) {
              document.getElementById("dp_infoRent2").innerHTML =
                "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
              document.getElementById("dp_infoRent2").style.display = "block";
            } else {
              document.getElementById("dp_infoRent2").style.display = "none";
            }
          } else {
            document.getElementById("dp_infoRent2").innerHTML =
              "กรอกเฉพาะตัวเลข";
            document.getElementById("dp_infoRent2").style.display = "block";
          }
        });
        input2_2.addEventListener("change", function(e) {
          if (input2_1.checkValidity() && input2_2.checkValidity()) {
            if (!(input2_1.value < input2_2.value)) {
              document.getElementById("dp_infoRent2").innerHTML =
                "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
              document.getElementById("dp_infoRent2").style.display = "block";
            } else {
              document.getElementById("dp_infoRent2").style.display = "none";
            }
          } else {
            document.getElementById("dp_infoRent2").innerHTML =
              "กรอกเฉพาะตัวเลข";
            document.getElementById("dp_infoRent2").style.display = "block";
          }
        });
        input3_1.addEventListener("change", function(e) {
          if (input3_1.checkValidity() && input3_2.checkValidity()) {
            if (!(input3_1.value < input3_2.value)) {
              document.getElementById("dp_infoRent3").innerHTML =
                "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
              document.getElementById("dp_infoRent3").style.display = "block";
            } else {
              document.getElementById("dp_infoRent3").style.display = "none";
            }
          } else {
            document.getElementById("dp_infoRent3").innerHTML =
              "กรอกเฉพาะตัวเลข";
            document.getElementById("dp_infoRent3").style.display = "block";
          }
        });
        input3_2.addEventListener("change", function(e) {
          if (input3_1.checkValidity() && input3_2.checkValidity()) {
            if (!(input3_1.value < input3_2.value)) {
              document.getElementById("dp_infoRent3").innerHTML =
                "ค่าเริ่มต้นต้องน้อยกว่าค่าสิ้นสุด";
              document.getElementById("dp_infoRent3").style.display = "block";
            } else {
              document.getElementById("dp_infoRent3").style.display = "none";
            }
          } else {
            document.getElementById("dp_infoRent3").innerHTML =
              "กรอกเฉพาะตัวเลข";
            document.getElementById("dp_infoRent3").style.display = "block";
          }
        });
        input4.addEventListener("change", function(e) {
          if (input4.checkValidity()) {
            document.getElementById("dp_infoRent4").style.display = "none";
          } else {
            document.getElementById("dp_infoRent4").innerHTML =
              "กรอกเฉพาะตัวเลข";
            document.getElementById("dp_infoRent4").style.display = "block";
          }
        });
      }
    },
    sentHaveObjToJson: function(form) {
      var input = document.getElementById("infoObj");
      if (input.checkValidity()) {
        this.customer[this.selectedIndex].obj.push(this.textData);
        console.log(this.customer[this.selectedIndex].obj);
        document.getElementById(form).style.display = "none";
        this.$forceUpdate();
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
        var myObj = {
          building: this.customer[this.selectedIndex].building,
          roomnumber: this.customer[this.selectedIndex].room,
          obj: this.customer[this.selectedIndex].obj,
          date: today
        };
        console.log(myObj);
        axios.patch('/api/obj/add', myObj).then(res => {
          console.log(res.data)
        });
        this.selectedIndex = -1;
        this.textData = "";
        this.checkOpen = false;
      } else {
        if (!input.checkValidity()) {
          document.getElementById("dp_infoObj").innerHTML = "กรอกไม่ถูกรูปแบบ";
          document.getElementById("dp_infoObj").style.display = "block";
        }
        input.addEventListener("change", function(e) {
          if (input.checkValidity()) {
            document.getElementById("dp_infoObj").style.display = "none";
          } else {
            document.getElementById("dp_infoObj").innerHTML =
              "กรอกไม่ถูกรูปแบบ";
            document.getElementById("dp_infoObj").style.display = "block";
          }
        });
      }
    },
    sentReceiveToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.customer[this.selectedIndex].obj = [];
      this.customer[this.selectedIndex].datePerObj = [];
      console.log(this.customer[this.selectedIndex].obj);
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        roomnumber: this.customer[this.selectedIndex].room,
        obj: this.customer[this.selectedIndex].obj,
        date: this.customer[this.selectedIndex].datePerObj
      };
      console.log(myObj);
      // axios.post('/api/obj/edit', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedCus = this.CusEmpty;
      this.selectedIndex = -1;
      this.checkOpen = false;
      console.log(this.checkOpen);
    },
    sentConnectToJson: function(form) {
      document.getElementById(form).style.display = "none";
      this.$forceUpdate();
      var myObj = {
        building: this.customer[this.selectedIndex].building,
        roomnumber: this.customer[this.selectedIndex].room,
        message: this.textData
      };
      console.log(myObj);
      // axios.post('/yay', myObj).then(res => {
      //   console.log(res.data)
      // });
      this.selectedIndex = -1;
      this.textData = "";
      this.checkOpen = false;
    },
    changeData: function() {
      var i;
      
      for (i = 0; i < this.dataSet.length; i++) {

        // const cloned = Object.assign({},selectedCusTMP)
        let cloned = JSON.parse(JSON.stringify(selectedCusTMP));
        cloned.building = this.dataSet[i].building;
        cloned.room = this.dataSet[i].roomnumber;
        cloned.hiringStatus = this.dataSet[i].hiringStatus;
        cloned.customerFirst.firstname = this.dataSet[i].firstname;
        cloned.customerFirst.lastname = this.dataSet[i].lastname;
        cloned.customerFirst.id = this.dataSet[i].id;
        cloned.customerFirst.tel = this.dataSet[i].tel;
        cloned.customerSecond.firstname = this.dataSet[i].firstname_2;
        cloned.customerSecond.lastname = this.dataSet[i].lastname_2;
        cloned.customerSecond.id = this.dataSet[i].id_2;
        cloned.customerSecond.tel = this.dataSet[i].tel_2;
        
        
        if (this.dataSet[i].paymentStatus === "true") {
          cloned.paymentStatus = true;
        } else {
          cloned.paymentStatus = false;
        }
        cloned.paymentStatus;
        cloned.rent.otherBill = this.dataSet[i].otherCost;
        cloned.rent.rates=this.dataSet[i].rate
        cloned.rent.elecStart=this.dataSet[i].electStart
        cloned.rent.elecEnd=this.dataSet[i].electEnd
        cloned.rent.waterStart=this.dataSet[i].waterStart
        cloned.rent.waterEnd=this.dataSet[i].waterEnd
        // console.log("this.dataSet[i].bedroom");

        // console.log(this.dataSet[i].bedroom);
        // console.log(this.dataSet[i].bedroom === "true");
        
        if (this.dataSet[i].bedroom === "true") {
          cloned.request.clean.bedroom = true;
        } else {
          cloned.request.clean.bedroom = false;
        }
        // console.log(cloned.request.clean.bedroom);
        
        if (this.dataSet[i].toilet === "true") {
          cloned.request.clean.toilet = true;
        } else {
          cloned.request.clean.toilet = false;
        }
        if (this.dataSet[i].airconditioner === "true") {
          cloned.request.clean.airConditioner = true;
        } else {
          cloned.request.clean.airConditioner = false;
        }
        if (this.dataSet[i].electricity === "true") {
          cloned.request.repair.electricity = true;
        } else {
          cloned.request.repair.electricity = false;
        }
        if (this.dataSet[i].water === "true") {
          cloned.request.repair.water = true;
        } else {
          cloned.request.repair.water = false;
        }
        if (this.dataSet[i].airconditionerRe === "true") {
          cloned.request.repair.airConditioner = true;
        } else {
          cloned.request.repair.airConditioner = false;
        }
        if (this.dataSet[i].door === "true") {
          cloned.request.repair.door = true;
        } else {
          cloned.request.repair.door = false;
        }
        if (this.dataSet[i].other !== null || this.dataSet[i].other !== "") {
          cloned.request.repair.other = this.dataSet[i].other;
        } else {
          cloned.request.repair.other = "";
        }
        if (
          this.dataSet[i].alertBuilding !== null ||
          this.dataSet[i].other !== ""
        ) {
          cloned.request.annoy.building = this.dataSet[i].alertBuilding;
          cloned.request.annoy.room = this.dataSet[i].alertRoom;
          cloned.request.annoy.message = this.dataSet[i].alertMsg;
        }
        this.customer.push(cloned);
        // console.log(this.customer);
        
      }
    },
    // changeData1: function() {
    //   console.log("hellloooo1");
    //   var i;
    //   for (i = 0; i < this.dataSetRoom.length; i++) {
    //     this.selectedCus.building = this.dataSetRoom[i].building;
    //     this.selectedCus.room = this.dataSetRoom[i].roomnumber;
    //     this.selectedCus.hiringStatus = this.dataSetRoom[i].hiringStatus;
    //     this.selectedCus.paymentStatus = this.dataSetRoom[i].paymentStatus;
    //     this.selectedCus.rent.otherBill = this.dataSetRoom[i].otherCost;
    //     this.selectedCus.obj = this.dataSetRoom[i].obj;
    //     this.selectedCus.datePerObj = this.dataSetRoom[i].datePerObj;
    //     this.customer.push(this.selectedCus);
    //     console.log(this.customer);
    //     this.selectedCus = this.CusEmpty;
    //   }
    // },
    // changeData2: function() {
    //   console.log("hellloooo2");
    //   var i;
    //   for (i = 0; i < this.customer.length; i++) {
    //     for (let j = 0; j < this.dataSetCus.length; j++) {
    //       if (
    //         this.customer[i].building == this.dataSetCus[j].building &&
    //         this.customer[i].room == this.dataSetCus[j].roomnum
    //       ) {
    //         if (this.dataSetCus[j].roomse == "2") {
    //           this.customer[i].customerSecond.firstname = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].firstname)
    //           );
    //           this.customer[i].customerSecond.lastname = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].lastname)
    //           );
    //           this.customer[i].customerSecond.tel = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].tel)
    //           );
    //           this.customer[i].customerSecond.id = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].id)
    //           );
    //         } else {
    //           this.customer[i].customerFirst.firstname = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].firstname)
    //           );
    //           this.customer[i].customerFirst.lastname = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].lastname)
    //           );
    //           this.customer[i].customerFirst.tel = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].tel)
    //           );
    //           this.customer[i].customerFirst.id = JSON.parse(
    //             JSON.stringify(this.dataSetCus[j].id)
    //           );
    //         }
    //       }
    //     }
    //   }
    // },
    // changeData3: function() {
    //   console.log("hellloooo2");
    //   var i;
    //   for (i = 0; i < this.customer.length; i++) {
    //     for (j = 0; j < this.dataNotify.length; j++) {
    //       if (
    //         this.customer[i].building == this.dataSetCus[j].building &&
    //         this.customer[i].room == this.dataSetCus[j].roomnum
    //       ) {
    //         if (this.dataNotify[j].bedroom == "true") {
    //           this.customer[i].request.clean.bedroom = true;
    //         }
    //         if (this.dataNotify[j].toilet == "true") {
    //           this.customer[i].request.clean.toilet = true;
    //         }
    //         if (this.dataNotify[j].airConditioner == "true") {
    //           this.customer[i].request.clean.airConditioner = true;
    //         }
    //         if (this.dataNotify[j].electricity == "true") {
    //           this.customer[i].request.repair.electricity = true;
    //         }
    //         if (this.dataNotify[j].water == "true") {
    //           this.customer[i].request.repair.water = true;
    //         }
    //         if (this.dataNotify[j].airconditionerRe == "true") {
    //           this.customer[i].request.repair.airConditioner = true;
    //         }
    //         if (this.dataNotify[j].door == "true") {
    //           this.customer[i].request.repair.door = true;
    //         }
    //         if (this.dataNotify[j].other !== null) {
    //           this.customer[i].request.repair.other = this.dataNotify[j].other;
    //         }
    //         if (this.dataNotify[j].alertBuilding !== null) {
    //           this.customer[i].request.annoy.building = this.dataNotify[
    //             j
    //           ].alertBuilding;
    //           this.customer[i].request.annoy.room = this.dataNotify[
    //             j
    //           ].alertRoom;
    //           this.customer[i].request.annoy.message = this.dataNotify[
    //             j
    //           ].alertMessage;
    //         }
    //       }
    //     }
    //   }
    // }
    changeDataObj:function(){
      var i
      for ( i = 0; i < 10; i++) {
        var j
        for (j = 0; j < this.dataSetObj.length; j++) {
          if((Number(this.dataSetObj[j].room) - i) == 100 ){
              console.log(this.customer[i].numberOfObj);
              this.customer[i].numberOfObj += 1
              console.log(this.customer[i].numberOfObj);
          }
          
        }
      }
      
      
    },
    logout:function(){
      axios.post('/api/auth/logout').then(res => {
        console.log(res);
        
      })
      window.location.href = "login.html";
      
    }
  },
  mounted() {
    this.$forceUpdate;
    axios.get('/api/room/all').then(res => {
      this.dataSet=res.data.data 
      setTimeout(() => {
        this.changeData();
      }, 200);
      axios.get('/api/obj/all').then(res => {
        this.dataSetObj=res.data.data      
        setTimeout(() => {
          this.changeDataObj();
        }, 400);
        
      })
      
    }).catch(err=>{
      window.location = "login.html"
    })

    

    
    

    this.fixedSizeTBody();
    window.addEventListener("resize", () => {
      this.fixedSizeTBody();
    });
  }
});
