import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import decode from 'jwt-decode';
@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.scss']
})
export class KeepersComponent implements OnInit {

  constructor(public service:RegserviceService) { }
  private kepers ;
  private owner ;
  private keepers=[];
  res;
  class;
  // ow;
  ngOnInit() {
    const token =this.service.getToken();
  const tokenPayload = decode(token);
    this.service.getnewkeepers().subscribe(response => {this.kepers=response;
      // console.log(response)
      this.res=this.kepers.length;
      for (let i = 0; i < this.kepers.length; i++) {
        
        this.service.getowner(this.kepers[i].ownerid).subscribe(user=>{
          this.owner=user;
          console.log(this.kepers[i].name)
          this.keepers[i] = {
            id:this.kepers[i]._id, 
            name: this.kepers[i].name, 
            owner: this.owner.firstName,
            ownerid:this.owner._id,
            state:this.kepers[i].state
            // time:response[i].state,
          };console.log(this.keepers[i].owner)
        });
      }
    });
  }

  accept(id){
    this.service.acceptpark(id).subscribe(response => {
      this.ngOnInit();
    });
    
  }
ownerpro(id){

}
keeperpro(id){

}
 

}
 