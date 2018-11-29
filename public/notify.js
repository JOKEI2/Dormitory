var notify = new Vue({
    el: "#notify",
    data: {
        cleaning: [],
        customer:{
            building:'A',
            room:'101',
            clean:{
                bedroom:'false',
                toilet:'false',
                airConditioner:'false'

            },
            repair:{
                electricity:'false',
                  water:'false',
                  airConditioner:'false',
                  door:'false',
                  other:'',
            },
            annoy:{
                building:'',
                room:'',
                message:''
            }
        },
        repair: [],
        other: '',
        alertbuilding: '',
        alertroom: '',
        topic: '',
        case0: false,
        case1: false
    },
    methods: {
        setCustomer:function(){
            var i;
            for(i=0;i<this.cleaning.length;i++){
                if(this.cleaning[i]=="ห้องนอน"){
                    this.customer.clean.bedroom='true'
                }
                if(this.cleaning[i]=="ห้องน้ำ"){
                    this.customer.clean.toilet='true'
                }
                if(this.cleaning[i]=="แอร์"){
                    this.customer.clean.airConditioner='true'
                }          
            }
            for(i=0;i<this.repair.length;i++){
                if(this.repair[i]=="ไฟ"){
                    this.customer.repair.electricity='true'
                }
                if(this.repair[i]=="น้ำ"){
                    this.customer.repair.water='true'
                }
                if(this.repair[i]=="แอร์"){
                    this.customer.repair.airConditioner='true'
                }          
                if(this.repair[i]=="ประตูและหน้าต่าง"){
                    this.customer.repair.door='true'
                }  
                if(other!=''){
                    this.customer.repair.other=other
                }
            }
            if(this.building!==''){
                this.customer.annoy.building= alertbuilding
                this.customer.annoy.room= alertroom
                this.customer.annoy.message= topic
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
                        this.cleaning=[];
                    }
                };
            }

        },

        openformRepair: function () {
            var char = document.getElementById("other").value;
            pattern = /[a-zA-Zก-ุฯ-๙\s]/;
            // console.log(pattern.test(char));
            
            if (this.repair.length == 0 && this.other == '' ) {
                this.case0 = true;
            } 
            if( this.other != '') {
                if (!pattern.test(char)){
                    this.case1 = true;
                }
            } 
            
            if (this.case0 == true || this.case1 == true) {
                var modal = document.getElementById("caseModal");
                modal.style.display = "block";

                window.onclick = (event) => {
                    if (event.target == modal) {
                        this.case0= false;
                        this.case1= false;
                        this.other='';
                        modal.style.display = "none"; 
             
                    }
                };
            }else {
                var modal = document.getElementById("repairModal");
                modal.style.display = "block";
                console.log("open");

                // var myObj = {
                //     repair: this.repair,
                //     other: this.other,
                // };
                // console.log(myObj);
                this.sentrepair();

                window.onclick = (event) =>{
                    if (event.target == modal) {
                        console.log("close");
                        modal.style.display = "none";
                        this.repair=[];
                        this.other='';
                    }
                };
            }
            

        },
        openformAnnoy: function () {
            var Bdchar = document.getElementById("alertbuilding").value;
            var Rmchar = document.getElementById("alertroom").value;
            var Tpchar = document.getElementById("topic").value;
            buildingPt = /[A,a]/;
            roomPt = /[0-9]/;
            topicPt = /[a-zA-Zก-ุฯ-๙\s]/;

            if (this.alertbuilding == '' || this.alertroom == '' || this.topic == '') {
                this.case0 = true;
            }
            if( this.alertbuilding != '' ) {
                if (!buildingPt.test(Bdchar)){
                    this.case1 = true;
                }
            } 
            if( this.alertroom != '') {
                if (!roomPt.test(Rmchar)){
                    this.case1 = true;
                }
            } 
            if( this.topic != '') {
                if (!topicPt.test(Tpchar)){
                    this.case1 = true;
                }
            }

            if (this.case0 == true || this.case1 == true) {
                var modal = document.getElementById("caseModal");
                modal.style.display = "block";

                window.onclick = (event)=> {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        this.case0= false;
                        this.case1= false;
                        // this.alertroom='';
                        // this.alertbuilding='';
                        // this.topic=''; 
             
                    }
                };
            }else {
                var modal = document.getElementById("annoyModal");
                modal.style.display = "block";
                // console.log("open");

                // var myObj = {
                //     alertBuilding: this.building,
                //     alertRoom: this.room,
                //     topic: this.topic
                // };
                // console.log(myObj);
                this.sentannoy();

                window.onclick = (event) =>{
                    if (event.target == modal) {
                        console.log("close");
                        modal.style.display = "none";
                        this.alertroom='';
                        this.alertbuilding='';
                        this.topic='';
                    }
                };
            }

        },
        sentclean:function(){
            this.setCustomer()
            var myObj={
                building: this.customer.building,
                room: this.customer.room,
                cleaning:{
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
        sentrepair:function(){
            this.setCustomer()
            var myObj={
                building: this.customer.building,
                room: this.customer.room,
                repair: {
                    electricity: this.customer.repair.electricity,
                    water: this.customer.repair.water,
                    air: this.customer.repair.airConditioner,
                    door: this.customer.repair.door,
                    other: this.customer.repair.other
                },      
            }
            console.log(this.customer.repair.other)

            
            console.log(myObj);
            axios.post('api/notify/repair',myObj).then(res=>{
                console.log(res.data);
                
            })
            
        },
        sentannoy:function(){
            this.setCustomer()
            var myObj={
                building: this.customer.building,
                room: this.customer.room,
                annoy:{
                    building: this.customer.annoy.building,
                    room: this.customer.annoy.room,
                    message: this.customer.annoy.message
                }        
            }

            
            console.log(myObj);
            // axios.post('/yay',myObj).then(res=>{
            //     console.log(res.data);
                
            // })
            
        },
    },
});


