const TMP={
  building:'',
  room:'',
  brand:'',
  amount:0,
}
new Vue({
  el:'#vue-app',
  data:{
    dateSelected:'',
    list:[
      // {
      //   building:'A',
      //   room:'101',
      //   brand:'เพอร์ร่า',
      //   amount:2,
      // },
    ],
    dataSet:[
      {
        build:'A',
        room:'101',
        brand:'เพอร์ร่า',
        amount:2,
      },
      {
        build:'A',
        room:'102',
        brand:'เพอร์ร่า',
        amount:4,
      },
      {
        build:'A',
        room:'103',
        brand:'เพอร์ร่า',
        amount:3,
      },
    ]

  },
  methods:{
      changeDate:function(){
        var i
        for ( i = 0; i < this.dataSet.length; i++) {
          let cloned = JSON.parse(JSON.stringify(TMP));
          cloned.building=this.dataSet[i].build
          cloned.room=this.dataSet[i].room
          cloned.brand=this.dataSet[i].brand
          cloned.amount=this.dataSet[i].amount
          this.list.push(cloned)
        }
      },
      sentDate: function() {     
        var myObj = {
          date: this.dateSelected
        };
        console.log('haaaa' + this.dateSelected);
        console.log('wwwww = ' + myObj.date);
        axios.post('/api/notify/getWaterlist/', myObj).then(res => {
          console.log(res.data.data);
          this.dataSet=res.data.data;
          setTimeout(()=>{
            this.changeDate()
            },100)

        });


        this.$forceUpdate();
      
      },
      manageList:function(part,numberPart){
        var myList=[];
        var start=0;
        var end=0;
        if(numberPart==2){
          if(part==1){
            start=0;
            end=parseInt(this.list.length/2);
          }
          else{
            start=parseInt(this.list.length/2);
            end=Number(this.list.length);
          }
        }
        else{
          if (part==1) {
            start=0;
            end=parseInt(this.list.length/3);
          }
          else if (part==2) {
            start=parseInt(this.list.length/3);
            end=parseInt(this.list.length/3)*2;
          }
          else {
            start=parseInt(this.list.length/3)*2;
            end=Number(this.list.length);
          }
        }
        for (i=start;i<end;i++){
          myList.push(JSON.parse(JSON.stringify(this.list[i]))) ;
          console.log(JSON.parse(JSON.stringify(this.list[i])));
        }
        console.log(myList);
        return myList;
      },
      fixedSizeTBody: function(id) {
        const fix_head = document.getElementById(id);
        console.log(fix_head);
        console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
        fix_head.style.height = (window.innerHeight - (fix_head.getBoundingClientRect().top+50)) + "px";
      },
      nextSetDateAndTime:function(){
        window.location.href="staff1.html"
      },
      nextSchedule:function(){
        window.location.href="staff2.html"
      }
    },
    mounted() {
      // axios.get('/yay').then(res => {
      //   console.log(res.data)
      //   this.schedule=res.data
      // })
      console.log(this.list.length);
      if(this.list.length<13){
        this.fixedSizeTBody("fix_head_one");
      }
      else if (this.list.length<25) {
        this.fixedSizeTBody("fix_head_two_left");
        this.fixedSizeTBody("fix_head_two_right");
      }
      else {
        this.fixedSizeTBody("fix_head_left");
        this.fixedSizeTBody("fix_head_middle");
        this.fixedSizeTBody("fix_head_right");
      }

      window.addEventListener("resize", () => {
        if(this.list.length<13){
          this.fixedSizeTBody("fix_head_one");
        }
        else if (this.list.length<25) {
          this.fixedSizeTBody("fix_head_two_left");
          this.fixedSizeTBody("fix_head_two_right");
        }
        else {
          this.fixedSizeTBody("fix_head_left");
          this.fixedSizeTBody("fix_head_middle");
          this.fixedSizeTBody("fix_head_right");
        }
      })
    }
});
