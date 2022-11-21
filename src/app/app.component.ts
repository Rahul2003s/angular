import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'count';
  c : number = 0;
  page : boolean=false;
  val : string = "";
  dis : boolean = true;
  show:boolean=true;
  title1 : string = "";
  color : string = "blue";
  tables=[
    {
      name: "prasana",
      email: "venky@gmail.com",
      mobile: "098765493"
    },
    {
      name: "suki",
      email: "p@gmail.com",
      mobile: "098765493"
    },    {
      name: "bharani",
      email: "kumar@gmail.com",
      mobile: "098765493"
    },    {
      name: "sakthi",
      email: "velan@gmail.com",
      mobile: "098765493"
    }
  ]
  title_s(){
    if (this.show) {
      this.title="Count";
    }else {
      this.title="Text";
    }
  }
  increment() {
    this.dis=false;
    this.c=this.c+1;
  }
  decriment(){
    if(this.c==1){
      this.dis=true;
      this.c=0;
    }else{
      this.c=this.c-1;
    }
  }
  reset(){
    this.dis=true;
    this.c=0
  }

  print_name(c:string){
    this.val=c
  }
  getdata(data:any){
    console.log(data);
  }
  }

  


