import { Component } from '@angular/core';


@Component({
  selector: 'app-my-component',
  templateUrl: './food-component.component.html',
  styleUrls: ['./food-component.component.css']
})

export class FoodComponentComponent {
  increse(){
  this.initialCount++
  }
  decrese(){
  if(this.count!==0)
  this.initialCount--
  }
counter() {
this.count--
}
  uploads:string[]=[];
  autosaveTimeout: any;
  images:any=["Surya"];
  value =""
  count = 10
  initialCount=this.count;
  saveImages(e:any){
    let totalfiles=e.target.files;
    console.log(totalfiles);
    if(totalfiles.length>0){
      for(let i=0;i<totalfiles.length;i++){
        let file=totalfiles[i];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=(e:any)=>{
          let ur=e.target.result;
          this.uploads.push(ur);
        }
      }
      console.log(this.uploads);
    }
    e.target.value="";
  }

  deleteimage(data:any){
    this.uploads.splice(data,1);
  }
  onInputChange(e:Event) {
    // Update the table data with the new value
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log(this.value);
    // Debounce the autosave process
    clearTimeout(this.autosaveTimeout);
    this.autosaveTimeout = setTimeout(() => this.autosaveData(), 2000);
  }
  autosaveData(): void {
    localStorage.setItem("data",this.value);
  }

}
