import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'count';
  c : number = 0;
  val : string = "";
  dis : boolean = true;
  show:boolean=true;
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
  }

  


