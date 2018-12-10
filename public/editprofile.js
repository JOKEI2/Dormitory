var CustomerData = new Vue({
  el: "#CustomerData",
  data: {
    building: 'A',
    roomNumb: '101',
    account: 'สมหมาย มีชัย',
    accountID: "1111111111",
    customer: [{
      name: '',
      id: '',
      phoneNumb: '',
      lineID: '',
      email: '',
      priority: 'ผู้เช่าหลัก',
    },
    {
      name: '',
      id: '',
      phoneNumb: '',
      lineID: '',
      email: '',
      priority: 'ผู้เช่ารอง',

    }],
    dataSetCus: {
      iduser: 3,
      username: "A102_1",
      hash: null,
      firstname: "สมมสมสมสมสมสม",
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
      firstname_2: "กกกกกก",
      lastname_2: "กกกก",
      tel_2: "",
      id_2: "",
      roomse_2: "2",
      roomnum_2: "102",
      building_2: "A",
      lineid_2: "",
      type_2: "3",
      email_2: ""
    },

  },
  methods: {
    changeData:function(){
      console.log("start");
      
      this.building = this.dataSetCus.building;
      this.roomNumb = this.dataSetCus.roomnum;
      this.account = this.dataSetCus.accountname;
      this.accountID = this.dataSetCus.account;
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
      console.log(this.customer[1].name);
      
      this.customer[1].id = this.dataSetCus.id_2;
      this.customer[1].phoneNumb = this.dataSetCus.tel_2;
      this.customer[1].lineID = this.dataSetCus.lineid_2;
      this.customer[1].email = this.dataSetCus.email_2;
    },
    fullName: function(firstname, lastname) {
      return firstname + " " + lastname;
    },
    setCustomer: function () {
      var i;
      for (i = 0; i < this.customer.length; i++) {
        this.customer.phoneNumb = this.customer.phoneNumb;
        this.customer.lineID = this.customer.lineID;
        this.customer.email = this.customer.email;
      }
    },
    cancel: function () {
      window.location.href = "profile.html"
    },
    saving: function () {
      // if (this.customer.phoneNumb !='' || this.customer.phoneNumb ){
      var inputphone1 = document.getElementById("phone1");
      var inputemail1 = document.getElementById("email1");

      var inputphone2 = document.getElementById("phone2");
      var inputemail2 = document.getElementById("email2");

      if (inputphone1.checkValidity() && inputemail1.checkValidity() &&
        inputphone2.checkValidity() && inputemail2.checkValidity()) {
        console.log("sentttttt");
        var modal = document.getElementById("savingModal");
        modal.style.display = "block";

        this.sentnewdata();

        window.onclick = (event) => {
          if (event.target == modal) {
            window.location.href = "profile.html"
          }
        };
      } else {
        if (!inputphone1.checkValidity()) {
          document.getElementById("dp_phone1").innerHTML =
            "กรอกตามรูปแบบ '06 หรือ 08 หรือ 09xxxxxxxx' ";
          document.getElementById("dp_phone1").style.display = "block";
        }
        if (!inputphone2.checkValidity()) {
          document.getElementById("dp_phone2").innerHTML =
            "กรอกตามรูปแบบ '06 หรือ 08 หรือ 09xxxxxxxx' ";
          document.getElementById("dp_phone2").style.display = "block";
        }

        if (!inputemail1.checkValidity()) {
          document.getElementById("dp_email1").innerHTML =
            "กรอกตามรูปแบบของ email";
          document.getElementById("dp_email1").style.display = "block";
        }

        if (!inputemail2.checkValidity()) {
          document.getElementById("dp_email2").innerHTML =
            "กรอกตามรูปแบบของ email";
          document.getElementById("dp_email2").style.display = "block";
        }
        

        inputphone1.addEventListener("change", function (e) {
          if (inputphone1.checkValidity()) {
            document.getElementById("dp_phone1").style.display = "none";
          } else {
            document.getElementById("dp_phone1").innerHTML =
              "กรอกตามรูปแบบ '06 หรือ 08 หรือ 09xxxxxxxx' ";
            document.getElementById("dp_phone1").style.display = "block";
          }
        }
        );

        inputphone2.addEventListener("change", function (e) {
          if (inputphone2.checkValidity()) {
            document.getElementById("dp_phone2").style.display = "none";
          } else {
            document.getElementById("dp_phone2").innerHTML =
              "กรอกตามรูปแบบ '06 หรือ 08 หรือ 09xxxxxxxx' ";
            document.getElementById("dp_phone2").style.display = "block";
          }
        }
        );

        inputemail1.addEventListener("change", function (e) {
          if (inputemail1.checkValidity()) {
            document.getElementById("dp_email1").style.display = "none";
          } else {
            document.getElementById("dp_email1").innerHTML =
              "กรอกตามรูปแบบของ email ";
            document.getElementById("dp_email1").style.display = "block";
          }
        }
        );

        inputemail2.addEventListener("change", function (e) {
          if (inputemail2.checkValidity()) {
            document.getElementById("dp_email2").style.display = "none";
          } else {
            document.getElementById("dp_email2").innerHTML =
              "กรอกตามรูปแบบของ email";
            document.getElementById("dp_email2").style.display = "block";
          }
        }
        );

      }
      // else {
      //       var modal = document.getElementById("savingModal");
      //       modal.style.display = "block";

      //       this.sentnewdata();
      //       console.log(this.customer.phoneNumb)

      //       window.onclick = (event) => {
      //           if (event.target == modal) {
      //               window.location.href="profile.html"
      //           }
      //       };
      //     }
    },
    sentnewdata: function () {
      this.setCustomer()
      var myObj = {
        changedata1: {
          roomse: "1",
          building: this.building,
          room: this.roomNumb,
          tel: this.customer[0].phoneNumb,
          lineID: this.customer[0].lineID,
          email: this.customer[0].email,
        },
        changedata2: {
          roomse: "2",
          building: this.building,
          room: this.roomNumb,
          tel: this.customer[1].phoneNumb,
          lineID: this.customer[1].lineID,
          email: this.customer[1].email,
        }
      }


      console.log(myObj.changedata1);
      axios.post('/api/user/editP',myObj.changedata1).then(res=>{
          console.log(res.data);
          axios.post('/api/user/editP',myObj.changedata2).then(res=>{
            console.log(res.data);
  
        })
      })

    },
  },
  mounted() {
    axios.get('/api/room/pro').then(res => {
      console.log(res.data)
      this.dataSetCus=res.data.data[0]
      console.log(this.dataSetCus.lastname_2);
      
      setTimeout(() => {
        this.changeData();
      }, 400);
    })
    
  }
});


