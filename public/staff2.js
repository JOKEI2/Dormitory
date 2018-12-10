const timelineCleanSelectedTMP= {
  time: "00:00",
  building: "",
  room: "",
  bedroom: false,
  toilet: false,
  airConditioner: false
}
const timelineRepairSelectedTMP= {
  time: "00:00",
  building: "",
  room: "",
  electricity: false,
  water: false,
  airConditioner: false,
  door: false,
  other: ""
}
new Vue({
  el: "#vue-app",
  data: {
    dateSelected: "2018-12-12",
    timeCurrent: "10:25",
    schedule: {
      timelineClean: [
        // {
        //   time: "17:39",
        //   building: "A",
        //   room: "101",
        //   bedroom: true,
        //   toilet: true,
        //   airConditioner: false
        // }
      ],
      timelineRepair: [
        // {
        //   time: "17:38",
        //   building: "A",
        //   room: "102",
        //   electricity: false,
        //   water: true,
        //   airConditioner: false,
        //   door: false,
        //   other: "พื้น"
        // }
      ]
    },
    dataSetSchedule: [
      {
        idnotify: 1,
        building: "A",
        room: "101",
        bedroom: "true",
        bedroomtime: "18:00",
        bedroomdate: null,
        toilet: "true",
        toilettime: "21:50",
        toiletdate: null,
        airconditioner: "true",
        airconditionertime: "23:00",
        airconditionerdate: null,
        electricity: "true",
        electricitytime: "20:00",
        electricitydate: null,
        water: "true",
        watertime: "21:00",
        waterdate: null,
        airconditionerRe: "true",
        airconditionerRetime: "21:00",
        airconditionerRedate: null,
        door: "true",
        doortime: "23:00",
        doordate: null,
        other: "พื้น",
        othertime: "20:00",
        otherdate: null
      }
    ],
    timeC: "",
    isOpenSchedule: false,
    isCheck:false
  },
  methods: {
    changeDate: function() {
      console.log(this.dateSelected);
    },
    changeDataList: function() {
      var i;
      this.schedule.timelineClean=[]
      this.schedule.timelineRepair=[]
      for (i = 0; i < this.dataSetSchedule.length; i++) {
        if(this.dataSetSchedule[i].bedroom == "true"||this.dataSetSchedule[i].toilet == "true"|| this.dataSetSchedule[i].airconditioner == "true"){
          
          if(this.dataSetSchedule[i].bedroom == "true"&&this.dataSetSchedule[i].toilet == "true"&& this.dataSetSchedule[i].airconditioner == "true"
          &&this.dataSetSchedule[i].bedroomtime==this.dataSetSchedule[i].toilettime&&this.dataSetSchedule[i].bedroomtime==this.dataSetSchedule[i].airconditionertime){
            const cloned = Object.assign({},timelineCleanSelectedTMP)
            cloned.building= this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time = this.dataSetSchedule[i].bedroomtime;
            cloned.bedroom = true;
            cloned.toilet = true;
            cloned.airConditioner = true;
            this.schedule.timelineClean.push(cloned)
            console.log(cloned);
            this.dataSetSchedule[i].bedroom ="false"
            this.dataSetSchedule[i].toilet = "false"
            this.dataSetSchedule[i].airconditioner ="false"
            console.log(this.dataSetSchedule[i].bedroom);
            console.log(this.dataSetSchedule[i].toilet);
            console.log( this.dataSetSchedule[i].airconditioner);
            
          }
          if(this.dataSetSchedule[i].bedroom == "true"&&this.dataSetSchedule[i].toilet == "true"
          &&this.dataSetSchedule[i].bedroomtime==this.dataSetSchedule[i].toilettime){
            console.log("hiiiii");
            const cloned = Object.assign({},timelineCleanSelectedTMP)
            cloned.building= this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time = this.dataSetSchedule[i].bedroomtime;
            cloned.bedroom = true;
            cloned.toilet = true;
            cloned.airConditioner = false;
            this.schedule.timelineClean.push(cloned)
            console.log(this.timelineCleanSelected);
            this.dataSetSchedule[i].bedroom ="false"
            this.dataSetSchedule[i].toilet = "false"
            console.log(this.dataSetSchedule[i].bedroom);
            console.log(this.dataSetSchedule[i].toilet);
            console.log( this.dataSetSchedule[i].airconditioner);
          }
          if(this.dataSetSchedule[i].bedroom == "true"&&this.dataSetSchedule[i].airconditioner == "true"
          &&this.dataSetSchedule[i].bedroomtime==this.dataSetSchedule[i].airconditionertime
          ){
            const cloned = Object.assign({},timelineCleanSelectedTMP)
            cloned.building= this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time = this.dataSetSchedule[i].bedroomtime;
            cloned.bedroom = true;
            cloned.toilet = false;
            cloned.airConditioner = true;
            this.schedule.timelineClean.push(cloned)
            this.dataSetSchedule[i].bedroom ="false"
            this.dataSetSchedule[i].airconditioner ="false"
          }
          if(this.dataSetSchedule[i].toilet == "true"&&this.dataSetSchedule[i].airconditioner == "true"
          &&this.dataSetSchedule[i].toilettime==this.dataSetSchedule[i].airconditionertime
          ){
            const cloned = Object.assign({},timelineCleanSelectedTMP)
            cloned.building= this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time = this.dataSetSchedule[i].toilettime;
            cloned.bedroom = false;
            cloned.toilet = true;
            cloned.airConditioner = true;
            this.schedule.timelineClean.push(cloned)
            this.dataSetSchedule[i].toilet = "false"
            this.dataSetSchedule[i].airconditioner ="false"
          } 
          if(this.dataSetSchedule[i].bedroom == "true"){
            const cloned = Object.assign({},timelineCleanSelectedTMP)
            cloned.building= this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time = this.dataSetSchedule[i].bedroomtime;
            cloned.bedroom = true;
            cloned.toilet = false;
            cloned.airConditioner = false;
            this.schedule.timelineClean.push(cloned)
            this.dataSetSchedule[i].bedroom ="false"
          }
          if(this.dataSetSchedule[i].toilet == "true"){
            const cloned = Object.assign({},timelineCleanSelectedTMP)
            cloned.building= this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time = this.dataSetSchedule[i].toilettime;
            cloned.bedroom = false;
            cloned.toilet = true;
            cloned.airConditioner = false;
            this.schedule.timelineClean.push(cloned)
            this.dataSetSchedule[i].toilet = "false"       
          }
          if(this.dataSetSchedule[i].airconditioner == "true"){
            const cloned = Object.assign({},timelineCleanSelectedTMP)
            cloned.building= this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time = this.dataSetSchedule[i].airconditionertime;
            cloned.bedroom = false;
            cloned.toilet = false;
            cloned.airConditioner = true;
            this.schedule.timelineClean.push(cloned)
            console.log(this.timelineCleanSelected);
            this.dataSetSchedule[i].airconditioner ="false"
            console.log(this.dataSetSchedule[i].bedroom);
            console.log(this.dataSetSchedule[i].toilet);
            console.log( this.dataSetSchedule[i].airconditioner);
          }
        }
        if(this.dataSetSchedule[i].electricity=="true"||this.dataSetSchedule[i].water=="true"||this.dataSetSchedule[i].airconditionerRe=="true"
        ||this.dataSetSchedule[i].door=="true"||this.dataSetSchedule[i].other!==""){
          
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].airconditionerRe=="true"&&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime
          ){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].airconditionerRe=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime
          ){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].doortime
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].watertime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime
          ){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=false
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].electricity=="true"
          &&this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].airconditionerRetime==this.dataSetSchedule[i].doortime
          &&this.dataSetSchedule[i].airconditionerRetime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].airconditionerRetime
            cloned.electricity=false
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].doortime
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].watertime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].airconditionerRetime
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].doortime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].water=="true"
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].watertime
          ){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=false
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].water="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].airconditionerRetime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].airconditionerRe="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].doortime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].electricity=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].electricitytime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=false
            cloned.door=false
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].airconditionerRe=="true"
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].airconditionerRetime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].watertime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].airconditionerRe="false"
          }
          if(this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].doortime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].watertime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].doortime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].watertime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].water=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].watertime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].watertime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=false
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].airconditionerRe=="true"&&this.dataSetSchedule[i].door=="true"
          &&this.dataSetSchedule[i].airconditionerRetime==this.dataSetSchedule[i].doortime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].airconditionerRetime
            cloned.electricity=false
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].airconditionerRe=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].airconditionerRetime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].airconditionerRetime
            cloned.electricity=false
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].airconditionerRe="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].door=="true"&&this.dataSetSchedule[i].other!==""
          &&this.dataSetSchedule[i].doortime==this.dataSetSchedule[i].othertime){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].doortime
            cloned.electricity=false
            cloned.water=false
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].door="false"
            this.dataSetSchedule[i].other=""
          }
          if(this.dataSetSchedule[i].electricity=="true"){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].electricitytime
            cloned.electricity=true
            cloned.water=false
            cloned.airConditioner=false
            cloned.door=false
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].electricity="false"
          }
          if(this.dataSetSchedule[i].water=="true"){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].watertime
            cloned.electricity=false
            cloned.water=true
            cloned.airConditioner=false
            cloned.door=false
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].water="false"
          }
          if(this.dataSetSchedule[i].airconditionerRe=="true"){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].airconditionerRetime
            cloned.electricity=false
            cloned.water=false
            cloned.airConditioner=true
            cloned.door=false
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].airconditionerRe="false"
          }
          if(this.dataSetSchedule[i].door=="true"){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].doortime
            cloned.electricity=false
            cloned.water=false
            cloned.airConditioner=false
            cloned.door=true
            cloned.other=""
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].door="false"
          }
          if(this.dataSetSchedule[i].other!==""){
            const cloned = Object.assign({},timelineRepairSelectedTMP)
            cloned.building = this.dataSetSchedule[i].building;
            cloned.room = this.dataSetSchedule[i].room;
            cloned.time=this.dataSetSchedule[i].othertime
            cloned.electricity=false
            cloned.water=false
            cloned.airConditioner=false
            cloned.door=false
            cloned.other==this.dataSetSchedule[i].other
            this.schedule.timelineRepair.push(cloned)
            this.dataSetSchedule[i].other=""
          }
        }   
      }
      this.schedule.timelineClean.sort(function(a, b) {
        return a.time< b.time ? -1 : a.time> b.time ? 1 : 0;
      });
      this.schedule.timelineRepair.sort(function(a, b) {
        return a.time< b.time ? -1 : a.time> b.time ? 1 : 0;
      });
      
    },
    sentDate: function() {
      console.log(this.check(this.dateSelected));

      if (this.check(this.dateSelected)) {
        var myObj = {
          date: this.dateSelected
        };
        console.log(myObj);
        axios.post('/api/notify/show_list/', myObj).then(res => {
          console.log(res.data.data)
          this.schedule=res.data.data;
          setTimeout(()=>{this.changeDataList()},100)

        });

        // console.log(this.schedule.timelineClean.length);

        this.$forceUpdate();
      }
    },
    fixedSizeTBody: function(id) {
      const fix_head = document.getElementById(id);
      // console.log(window.innerHeight - fix_head.getBoundingClientRect().top);
      fix_head.style.height =
        window.innerHeight - (fix_head.getBoundingClientRect().top + 50) + "px";
    },
    nextSetDateAndTime: function() {
      window.location.href = "staff1.html";
    },
    nextSentDrinkingWater: function() {
      window.location.href = "staff3.html";
    },
    check: function(input) {
      console.log("yayyyy");
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
      if (input >= today) {
        if (input == today) {
          this.isOpenSchedule = true;
        }else{
          this.isOpenSchedule = false;
        }
        this.isCheck = true;
        check=true
        console.log(this.isOpenSchedule);
      }
      return check
    }
  },
  mounted() {
    // axios.get('/yay').then(res => {
    //   console.log(res.data)
    //   this.schedule=res.data
    // })
    // setTimeout(()=>{this.changeDataList()},100)
    var check = false;
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

    this.dateSelected = yyyy + "-" + mm + "-" + dd;
    setInterval(() => {
      // this.timeC.substring(7,12)=this.timeCurrent
      var t = document
        .getElementById("txt")
        .innerHTML.split(':');
      this.timeCurrent=t[0]+":"+t[1]
      console.log(this.timeCurrent);
    }, 100);

    this.fixedSizeTBody("fix_head1");
    this.fixedSizeTBody("fix_head2");
    window.addEventListener("resize", () => {
      this.fixedSizeTBody("fix_head1");
      this.fixedSizeTBody("fix_head2");
    });
  }
});
function startTime() {
  var time;
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = "เวลา : " + h + ":" + m + ":" + s;

  time = h + ":" + m;
  var t = setTimeout(startTime, 500);
  // return time
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
