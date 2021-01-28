import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  obj:any=[]
  localVal:any;
  resObj:any = [];
  // first:any=[];
  indCom:any =0;
  secIndCom:any=0;
  x:any=0;
  y:any;
  result:any=[];
  result1:any=[];
  arr1:any=[];
  arr2:any=[];
  arr3:any=[];
  arr4:any=[];
  numb1:any=[];
  numb2:any=[];
  xx :any;


  constructor(){
    localStorage.clear()
  }

  submit(x){
   x =  this.indCom;

   this.resObj = `X${x}`

this.arr1.push(this.resObj);
this.indCom++;
// console.log(this.arr1)

  }

  save(i){
    
this.result.splice(i,1,this.numb1[i])
// console.log(i,this.result)
  }

  save1(j){

    this.result1.splice(j,1,this.numb2[j])
// console.log(this.result)

  }

  
  submit1(x,y){

    y= this.secIndCom;

this.arr2=[]

this.arr2.push(`Y${this.secIndCom}`)

      this.obj = {
      X:`X${x}` , Y:`${this.arr2}`
    }

    this.arr3.push(this.obj)
    this.secIndCom++;


this.xx = x;


    // console.log(this.arr3)
    
    this.arr3.filter(x=>console.log(x['X'] , `X${this.xx}`))

  }


}
