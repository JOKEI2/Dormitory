var notify = new Vue({
    el: "#notify",
    data: {
        fckingOptionText:{},
        building: ["A"],
        buildingSelected: "",
        floor: ["1", "2", "3"],
        floorSelected: "",
        room: ["01", "02", "03", "04", "05"],
        roomSelected: "",
        cleaning: [],
        customer: {
            building: 'A',
            room: '101',
            clean: {
                bedroom: false,
                toilet: false,
                airConditioner: false

            },
            repair: {
                electricity: false,
                water: false,
                airConditioner: false,
                door: false,
                otherdevice: '',
            },
            annoy: {
                building: '',
                room: '',
                message: ''
            }
        },
        repair: [],
        other: '',
        topic: '',
        annoycase0: false,
        annoycase1: false,
        annoycase2: false,
        case0: false,
        case1: false,
        case2: false,
        case3: false
    },
    methods: {
        setCustomer: function () {
            var i;
            for (i = 0; i < this.cleaning.length; i++) {
                if (this.cleaning[i] == "ห้องนอน") {
                    this.customer.clean.bedroom = true
                }
                if (this.cleaning[i] == "ห้องน้ำ") {
                    this.customer.clean.toilet = true
                }
                if (this.cleaning[i] == "แอร์") {
                    this.customer.clean.airConditioner = true
                }
            }
            for (i = 0; i < this.repair.length; i++) {
                if (this.repair[i] == "ไฟ") {
                    this.customer.repair.electricity = true
                }
                if (this.repair[i] == "น้ำ") {
                    this.customer.repair.water = true
                }
                if (this.repair[i] == "แอร์") {
                    this.customer.repair.airConditioner = true
                }
                if (this.repair[i] == "ประตูและหน้าต่าง") {
                    this.customer.repair.door = true
                }
            }
            if (other != '') {
                this.customer.repair.otherdevice = this.other
            }

            if (this.building !== '') {
                this.customer.annoy.building = this.buildingSelected
                this.customer.annoy.room = this.floorSelected.concat(this.roomSelected);
                this.customer.annoy.message = this.topic
            }
        },
        // pushRepair: function () {
        //     this.repair.push(this.other);
        //     this.other = '';
        // },

        openformCleaning: function () {
            if (this.cleaning.length == 0) {
                var modal = document.getElementById("uncompleteModal");
                modal.style.display = "block";

                window.onclick = (event) => {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                };
            }
            else {
                var modal = document.getElementById("cleaningModal");
                modal.style.display = "block";
                // console.log("open");

                // var myObj = {
                //     cleaning: this.cleaning,
                // };
                this.sentclean();
                // console.log(myObj);
                //   axios.post('/yay', myObj).then(res => {
                //     console.log(res.data)
                //   });

                window.onclick = (event) => {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        this.cleaning = [];
                    }
                };
            }

        },

        openformRepair: function () {
            var input = document.getElementById("other")
            if (this.repair.length == 0 && this.other == '') {
                var modal = document.getElementById("uncompleteModal");
                modal.style.display = "block";


                window.onclick = (event) => {
                    if (event.target == modal) {
                        this.other = '';
                        modal.style.display = "none";

                    }
                };
            } else if (this.repair.length != 0 || this.other != '') {
                if (input.checkValidity()) {
                    console.log("sentttttt");
                    var modal = document.getElementById("repairModal");
                    modal.style.display = "block";
                    console.log(this.other);


                    this.sentrepair();

                    window.onclick = (event) => {
                        if (event.target == modal) {
                            console.log("close");
                            modal.style.display = "none";
                            this.repair = [];
                            this.other = '';
                        }
                    };
                } else {
                if (!input.checkValidity()) {
                    document.getElementById("dp_other").innerHTML =
                        "กรอกเฉพาะตัวอักษร";
                    document.getElementById("dp_other").style.display = "block";
                }
                input.addEventListener("change", function (e) {
                    if (input.checkValidity()) {
                        document.getElementById("dp_other").style.display = "none";
                    } else {
                        document.getElementById("dp_other").innerHTML =
                            "กรอกเฉพาะตัวอักษร";
                        document.getElementById("dp_other").style.display = "block";
                    }
                });
            }
        }
            // var char = document.getElementById("other").value;
            // pattern = /[a-zA-Zก-ุฯ-๙\s]/;
            // // console.log(pattern.test(char));

            // if (this.repair.length == 0 && this.other == '') {
            //     this.case0 = true;
            // }
            // if (this.other != '') {
            //     if (!pattern.test(char)) {
            //         this.case1 = true;
            //     }
            // }

            // if (this.case0 == true || this.case1 == true) {
            //     var modal = document.getElementById("caseModal");
            //     modal.style.display = "block";

            //     window.onclick = (event) => {
            //         if (event.target == modal) {
            //             this.case0 = false;
            //             this.case1 = false;
            //             this.other = '';
            //             modal.style.display = "none";

            //         }
            //     };
            // } else {
            //     var modal = document.getElementById("repairModal");
            //     modal.style.display = "block";
            //     console.log("open");

            //     // var myObj = {
            //     //     repair: this.repair,
            //     //     other: this.other,
            //     // };
            //     // console.log(myObj);
            //     this.sentrepair();

            //     window.onclick = (event) => {
            //         if (event.target == modal) {
            //             console.log("close");
            //             modal.style.display = "none";
            //             this.repair = [];
            //             this.other = '';
            //         }
            //     };
            // }


        },
        openformAnnoy: function () {
            if(this.buildingSelected != ''){
                this.annoycase0 = true;
            }
            if(this.floorSelected != ''){
                this.annoycase1 = true;
            }
            if(this.roomSelected != ''){
                this.annoycase2 = true;
            }
            if(this.buildingSelected == '' && this.roomSelected != '' && this.floorSelected == ''){
                this.case0 = true;
            }
            if(this.floorSelected != '' && this.roomSelected == '' && this.buildingSelected == '' ){
                this.case1 = true;
            }
            if(this.buildingSelected != '' && this.roomSelected != '' && this.floorSelected == ''){
                this.case2 = true;
            }
            if(this.buildingSelected == '' && this.roomSelected != '' && this.floorSelected != ''){
                this.case3 = true;
            }

            if(this.topic == ""){
                var modal = document.getElementById("uncompleteModal");
                modal.style.display = "block";

                window.onclick = (event) => {
                    if (event.target == modal) {
                        this.topic = '';
                        modal.style.display = "none";

                    }
                };
            }
            else if(this.case0 == true || this.case1 == true || this.case2 == true || this.case3 == true){
                var modal = document.getElementById("caseModal");
                modal.style.display = "block";

                window.onclick = (event) => {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        this.case0 = '';
                        this.case1 = '';
                        this.case2 = '';
                        this.case3 = '';

                    }
                };
            }
            else if (this.case0 == false &&  this.case1 == false && this.case2 == false && this.case3 == false){
            var modal = document.getElementById("annoycaseModal");
            modal.style.display = "block";
            // console.log("open");

            // var myObj = {
            //     alertBuilding: this.building,
            //     alertRoom: this.room,
            //     topic: this.topic
            // };
            // console.log(myObj);
            this.sentannoy();

            window.onclick = (event) => {
                if (event.target == modal) {
                    console.log("close");
                    modal.style.display = "none";
                    // this.alertroom = '';
                    // this.alertbuilding = '';
                    this.annoycase0 = false;
                    this.annoycase1 = false;
                    this.annoycase2 = false;
                    this.buildingSelected = '';
                    this.floorSelected = '';
                    this.roomSelected='';
                    this.topic = '';
                    this.fckingOptionText["buildingSelected"].innerText = "ตึก"
                    document.getElementById("buildingSelected").selectedIndex = 0

                    this.fckingOptionText["floorSelected"].innerText = "ชั้น"
                    document.getElementById("floorSelected").selectedIndex = 0

                    this.fckingOptionText["roomSelected"].innerText = "ห้อง"
                    document.getElementById("roomSelected").selectedIndex = 0
                }
            };
            }
        

        },

        sentclean: function () {
            this.setCustomer()
            var myObj = {
                building: this.customer.building,
                room: this.customer.room,
                cleaning: {
                    bedroom: this.customer.clean.bedroom,
                    toilet: this.customer.clean.toilet,
                    air: this.customer.clean.airConditioner
                },
            }

            console.log(myObj);
            axios.post('api/notify/edit',myObj).then(res=>{
                console.log(res.data);

            })

        },
        sentrepair: function () {
            this.setCustomer()
            var myObj = {
                building: this.customer.building,
                room: this.customer.room,
                repair: {
                    electricity: this.customer.repair.electricity,
                    water: this.customer.repair.water,
                    air: this.customer.repair.airConditioner,
                    door: this.customer.repair.door,
                    other: this.customer.repair.otherdevice
                },
            }


            console.log(myObj);
            axios.post('api/notify/repair',myObj).then(res=>{
                console.log(res.data);

            })

        },
        sentannoy: function () {
            this.setCustomer()
            var myObj = {
                building: this.customer.building,
                room: this.customer.room,
                annoy: {
                    building: this.customer.annoy.building,
                    floor: this.customer.annoy.floor,
                    room: this.customer.annoy.room,
                    message: this.customer.annoy.message
                }
            }


            console.log(myObj);
            axios.post('api/notify/annoy',myObj).then(res=>{
                console.log(res.data);

            })

        },
    },
    mounted() {
        var x, i, j, selElmnt, a, b, c, k;

        /*look for any elements with the class "custom-select":*/
        // for(k = 0; k < 3; k++){
        // x = document.getElementsByClassName("custom-select")[k];
        x = document.getElementsByClassName("custom-select");

        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName("select")[0];
            const fck = x[i].getElementsByTagName("select")[0];
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
                c.addEventListener("click", function (e) {
                    
                    /*when an item is clicked, update the original select box,
                  and the selected item:*/
                    var y, i, k, s, h, ss;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            // s.selectedIndex = i;
                            // set buildingSelected
                            // console.log(s.options[i].innerHTML)
                            self.fckingOptionText[fck.id] = h
                            self[fck.id] = JSON.parse(
                                JSON.stringify(s.options[i].innerHTML)
                              );
                            // self.requestDetail();

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


