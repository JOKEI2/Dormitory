new Vue({
  el: "#vue-app",
  data:{
      dateSeleted:"",
      ATM:"",
      name:"",
      dataSet: {
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
        account: "",
        accountname: "",
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
  },
  methods: {
    login: function() {
      var input1 = document.getElementById("inputATM");
      var input2 = document.getElementById("inputCVV");
      var input3 = document.getElementById("inputDeadcard");
      var input4 = document.getElementById("inputName");
      console.log(this.check(input3.value));
      
      if (
        input1.checkValidity() &&
        input2.checkValidity() &&
        input3.checkValidity() &&
        input4.checkValidity() &&
        this.check(input3.value)
      ) {
          console.log("sent");
          var myObj = {
            account:this.ATM,
            accountname:this.name
          };
          // console.log(myObj);
          axios.post('/api/room/editAcc', myObj).then(res => {
            console.log("rent");  
            console.log(res.data)
          });
          
        // axios
        //   .post("http://localhost:8081/login", {
        //     ATM: inputATM.value,
        //     CVV: inputCVV.value,
        //     Deadcard: inputDeadcard.value
        //   })
        //   .then(res => {
        //     console.log(res.data);
        //   });
        window.location.href = "profile.html";
      } else{
        if (!input1.checkValidity()) {
            document.getElementById("dp_ATM").innerHTML =
              "กรอกเฉพาะเลข 16 หลัก";
            document.getElementById("dp_ATM").style.display = "block";
          }
          if (!input2.checkValidity()) {
            document.getElementById("dp_CVV").innerHTML =
              "กรอกเฉพาะตัวเลข 3 หลัก";
            document.getElementById("dp_CVV").style.display = "block";
          }
          if (!input4.checkValidity()) {
            document.getElementById("dp_Name").innerHTML =
              "กรอกเฉพาะตัวอักษร";
            document.getElementById("dp_Name").style.display = "block";
          }
          
          
          input1.addEventListener("change", function(e) {
            console.log(input1.checkValidity());
            if (input1.checkValidity()) {
              document.getElementById("dp_ATM").style.display = "none";
            } else {
              document.getElementById("dp_ATM").innerHTML =
                "กรอกเฉพาะเลข 16 หลัก";
              document.getElementById("dp_ATM").style.display = "block";
            }
          });
          input2.addEventListener("change", function(e) {
            // console.log(input1.checkValidity());
            if (input2.checkValidity()) {
              document.getElementById("dp_CVV").style.display = "none";
            } else {
              document.getElementById("dp_CVV").innerHTML =
                "กรอกเฉพาะเลข 3 หลัก";
              document.getElementById("dp_CVV").style.display = "block";
            }
          });
          input4.addEventListener("change", function(e) {
            // console.log(input1.checkValidity());
            if (input4.checkValidity()) {
              document.getElementById("dp_Name").style.display = "none";
            } else {
              document.getElementById("dp_Name").innerHTML =
                "กรอกเฉพาะตัวอักษร";
              document.getElementById("dp_Name").style.display = "block";
            }
          });
    }
    

    },
    changeData:function(){
      if(this.dataSet.account!==""){
        this.ATM=this.dataSet.account
      }
      if(this.dataSet.accountname!==""){
        this.name=this.dataSet.accountname
      }
      
    },
    check: function(input) {
        console.log(input);
        var check = false
        this.isCheck = false;
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
        // console.log(input>today);
        if (input > today) {
          check=true
          document.getElementById("dp_date").style.display = "none";
        }else{
            document.getElementById("dp_date").innerHTML =
                "หมดอายุแล้วใช้ไม่ได้";
            document.getElementById("dp_date").style.display = "block";
        }
        return check
      }
    },
    mounted() {
    
      axios.get('/api/room/acc').then(res => {
        console.log(res.data)
        this.dataSet=res.data.data[0]
        console.log(this.dataSet);
        setTimeout(() => {
          this.changeData();
        }, 100);
      })
      
 
    }
});
function myFunction() {
  document.getElementById("inputATM").submit();
  document.getElementById("inputCVV").submit();
  document.getElementById("inputDeadcard").submit();
}

// function login() {
//     axios.post('http://localhost:8081/login', { ATM: inputATM.value, CVV: inputCVV.value, Deadcard: inputDeadcard.value }).then(res=>{
//         console.log(res.data)
//     })
// }
