import { Component , EventEmitter} from '@angular/core';
import { HeaderComponent } from '../header/header.component'
import { CategoryService } from '../../services/category/category.service'
import { FetchAdService } from '../../services/fetchAdvertisements/fetchAd.service'
import { MessageService } from '../../services/message/message.service'
import { ActionService } from '../../services/actions/actions.service'
import { DeleteUserAdService } from '../../services/deleteUserAd/deleteUserAd.service'

@Component({
  selector: 'list-ads',
  templateUrl: './adList.component.html',
  styleUrls:['./adList.component.css'],
  providers: [CategoryService, FetchAdService, MessageService, ActionService, DeleteUserAdService],
  outputs:['dummyEvent']
})

export class AdListComponent {

  categories = new Array();
  actions=new Array();
  userID:string;
  userName:string;
  postId:string;
  displayUserAdFlag:boolean=false;
  public dummyEvent=new EventEmitter();
  constructor(private categoryService: CategoryService, private fetchadService: FetchAdService, private messageService:MessageService, private actionService:ActionService, private deleteUserAdService:DeleteUserAdService) {
    categoryService.getCategories().subscribe((data: any) => {
      for (let temp of data)
        this.categories.push(temp.category);
    });

    actionService.getActions().subscribe((data)=>{
      this.actions=data.data.actionList;
      console.log("in actions ",this.actions);
    });
   this.displayAd("");
  }

  adArray:any[]=[];
  displayAd(categoryName:any){
      this.displayUserAdFlag=false;
      this.fetchadService.fetchAllAd(categoryName).subscribe((data)=>{
        this.adArray=data;
      });
  }

  displaySearchedAds(searchCriteria:any){
      this.displayUserAdFlag=false;
      this.fetchadService.fetchFilteredAd(searchCriteria).subscribe((data)=>{
        this.adArray=data;
      });
  }

  displayUserAds()
  {
    this.displayUserAdFlag=true;
    console.log("in adlist comp");
    this.fetchadService.fetchUserAds().subscribe((data)=>{
      console.log(data.data);
      this.adArray=data;
    });
    
  }

  selectPostUser(userId:any,uname:any, postId:any){
    this.userID=userId;
    this.userName=uname;
    this.postId=postId;
    console.log(this.userID, this.userName);
  }

  sendMessage(msg:string)
  {
    this.messageService.sendMessage(msg,this.postId);
  }

  performAction(actionToDo:string, postId:string){

    if(actionToDo==="Delete")
    {
      this.deleteUserAdService.deleteAd(postId);
      this.dummyEvent.emit(); 
    }
  }
}