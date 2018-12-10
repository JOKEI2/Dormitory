const monthTMP = {
  month: "",
  elecStart: 0,
  elecEnd: 0,
  waterStart: 0,
  waterEnd: 0,
  rates: 0,
  other: 0,
  total:0
};
var CustomerData = new Vue({
  el: "#CustomerData",
  data: {
    building: "A",
    roomNumb: "101",
    account: "สมหมาย มีชัย",
    accountID: "1111111111",

    priority: "ผู้เช่าหลัก",
    customer: [
      {
        name: "สมหมาย มีชัย",
        id: "1111111111111",
        phoneNumb: "0811111111",
        lineID: "Xxxxxxx",
        email: "Xxxxxxx@gmail.com",
        priority: "ผู้เช่าหลัก"
      },
      {
        name: "สมศรี มีชัย",
        id: "2222222222222",
        phoneNumb: "082222222",
        lineID: "Yyyyyyy",
        email: "Yyyyyyyy@gmail.com",
        priority: "ผู้เช่ารอง"
      }
    ],

    current: {
      // month: 'พ.ค.',
      elecStart: 1328,
      elecEnd: 1420,
      waterStart: 62,
      waterEnd: 71,
      rates: 5000,
      other: 0,
      payment: true
    },

    history: [
      //   {
      //   month: 'พ.ค.',
      //   elecStart: 1328,
      //   elecEnd: 1420,
      //   waterStart: 62,
      //   waterEnd: 71,
      //   rates: 5000
      // }, {
      //   month: 'มิ.ย.',
      //   elecStart: 1420,
      //   elecEnd: 1488,
      //   waterStart: 71,
      //   waterEnd: 79,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ส.ค.',
      //   elecStart: 1552,
      //   elecEnd: 1617,
      //   waterStart: 84,
      //   waterEnd: 91,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }, {
      //   month: 'ก.ค.',
      //   elecStart: 1488,
      //   elecEnd: 1552,
      //   waterStart: 79,
      //   waterEnd: 84,
      //   rates: 5000
      // }
    ],
    dataSetCus: {
      iduser: 3,
      username: "A102_1",
      hash: null,
      firstname: "-",
      lastname: "c",
      tel: "xcx",
      id: "xcxc",
      roomse: "1",
      roomnum: "102",
      building: "A",
      lineid: "",
      type: "3",
      email: "",
      roomnumber: "102",
      account: "dd",
      accountname: "dd",
      electbill: 0,
      electStart: 0,
      electEnd: 0,
      waterbill: 0,
      waterStart: 0,
      waterEnd: 0,
      rate: 0,
      otherCost: 0,
      total: 0,
      iduser_2: 4,
      username_2: "A102_2",
      hash_2: null,
      firstname_2: "-",
      lastname_2: "",
      tel_2: "",
      id_2: "",
      roomse_2: "2",
      roomnum_2: "102",
      building_2: "A",
      lineid_2: "",
      type_2: "3",
      email_2: ""
    },

    dataSetBill: [
      {
        id: 1,
        month: "พ.ย.",
        waterStart: 0,
        waterEnd: 130,
        waterBill: 2340,
        electStart: 0,
        electEnd: 130,
        electBill: 1040,
        total: 5390,
        room: "102",
        building: "A"
      }
    ]
  },
  methods: {
    changeData1: function() {
      this.building = this.dataSetCus.building;
      this.roomNumb = this.dataSetCus.roomnum;
      console.log(this.dataSetCus);
      
      console.log(this.dataSetCus.accountname);
      console.log(this.dataSetCus.account);
        if (
          this.dataSetCus.accountname == "" ||
          this.dataSetCus.account == "" 
        ) {
          console.log("add_card");

          this.editAcct();
        } else {
          this.account = this.dataSetCus.accountname;
          this.accountID = this.dataSetCus.account;
        }
        console.log(this.dataSetCus.accountname !== "" ||
        this.dataSetCus.account !== "" );
        console.log(this.dataSetCus.accountname);
        console.log(this.dataSetCus.account);
        if (
          (this.dataSetCus.lineid == "" ||
          this.dataSetCus.email == "" )&&(
            this.dataSetCus.accountname !== "" ||
            this.dataSetCus.account !== "" 
          )
        ) {
          console.log("editProfile");
          
          this.editprofile();
        } else {
          this.customer[0].name = this.fullName(
            this.dataSetCus.firstname,
            this.dataSetCus.lastname
          );
          this.customer[0].id = this.dataSetCus.id;
          this.customer[0].phoneNumb = this.dataSetCus.tel;
          this.customer[0].lineID = this.dataSetCus.lineid;
          this.customer[0].email = this.dataSetCus.email;
          this.customer[1].name = this.fullName(
            this.dataSetCus.firstname_2,
            this.dataSetCus.lastname_2
          );
          this.customer[1].id = this.dataSetCus.id_2;
          this.customer[1].phoneNumb = this.dataSetCus.tel_2;
          this.customer[1].lineID = this.dataSetCus.lineid_2;
          this.customer[1].email = this.dataSetCus.email_2;
        }
      this.current.rates = this.dataSetCus.rate;
      this.current.elecStart = this.dataSetCus.electStart;
      this.current.elecEnd = this.dataSetCus.electEnd;
      this.current.waterStart = this.dataSetCus.waterStart;
      this.current.waterEnd = this.dataSetCus.waterEnd;
      this.current.other = this.dataSetCus.otherCost;
    },
    changeData2: function() {
      var i;
      for (i = 0; i < this.dataSetBill.length; i++) {
        let cloned = JSON.parse(JSON.stringify(monthTMP));
        cloned.month = this.dataSetBill[i].month;
        cloned.rates = this.dataSetBill[i].rate;
        cloned.elecStart = this.dataSetBill[i].electStart;
        cloned.elecEnd = this.dataSetBill[i].electEnd;
        cloned.waterStart = this.dataSetBill[i].waterStart;
        cloned.waterEnd = this.dataSetBill[i].waterEnd;
        cloned.other = this.dataSetBill[i].other;
        cloned.total=this.dataSetBill[i].total;
        this.history.push(cloned);
      }
    },
    fullName: function(firstname, lastname) {
      return firstname + " " + lastname;
    },
    waterBill: function(End, Start) {
      var sum = Number(End) - Number(Start);
      return sum * 18;
    },
    elecBill: function(End, Start) {
      var sum = Number(End) - Number(Start);
      return sum * 8;
    },
    roomBill: function(WaterEnd, WaterStart, ElecEnd, ElecStart, Rates) {
      var sumWater = Number(WaterEnd) - Number(WaterStart);
      var waterBill = sumWater * 18;
      var sumElec = Number(ElecEnd) - Number(ElecStart);
      var elecBill = sumElec * 8;
      return Number(Rates) + waterBill + elecBill;
    },
    compute: function(WaterEnd, WaterStart, ElecEnd, ElecStart, Rates, Other) {
      var sumWater = Number(WaterEnd) - Number(WaterStart);
      var waterBill = sumWater * 18;
      var sumElec = Number(ElecEnd) - Number(ElecStart);
      var elecBill = sumElec * 8;
      var other = Number(Other);
      return Number(Rates) + waterBill + elecBill + other;
    },
    editprofile: function() {
      window.location.href = "editprofile.html";
    },
    editAcct: function() {
      window.location.href = "add_card.html";
    }
  },
  mounted() {
    axios.get('/api/room/pro').then(res => {
      this.dataSetCus=res.data.data[0]
      setTimeout(() => {
        this.changeData1();
      }, 100);
      axios.get('/api/bill/roo').then(res1 => {
        this.dataSetBill=res1.data.data
        setTimeout(() => {
          this.changeData2();
        }, 100);
      })
  
    })
    
    
  }
});
