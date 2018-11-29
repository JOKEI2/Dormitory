new Vue({
  el:'#vue-app',
  data:{
    dateSelected:'',
    list:[
      {
    //     building:'A',
    //     room:'101',
    //     brand:'เพอร์ร่า',
    //     amount:2,
      },
    ],

  },
  methods:{
      changeDate:function(){
        console.log(this.dateSelected);
      },
      sentDate: function() {     
        var myObj = {
          date: this.dateSelected
        };
        console.log('wwwww'+myObj);
        axios.post('/api/notify/getWaterlist/', myObj).then(res => {
          console.log('dddd'+res.data);
          this.dateSelected=res.data;
          setTimeout(()=>{this.manageList()},100)

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
