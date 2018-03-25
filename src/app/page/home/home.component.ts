import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  datas: Array<any>;

  dropdownDuration: Array<any>;
  listProgress: Array<any>;

  TotalConflicts: number;
  RecordsAutoProcessed: number;
  ManualInterventionNeeded: number;
  AutoRate: number;

  dropdownDurationActive: any;
  
  selectedAll: any;
  processing: any;


  starting: any = true;
  
  errorMessage: string;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.onload();
  }
  action(e): void {
    console.log(this.dropdownDurationActive)
  }
  // load data services
  onload = (): void => {
    this.dataService.getData('assets/data/home.json').subscribe(
      data => {
        this.datas = data;

        // Total Conflicts
        this.TotalConflicts = data['Total Conflicts']

        // Records Auto-Processed
        this.RecordsAutoProcessed = data['Records Auto-Processed']

        // Manual Intervention Needed
        this.ManualInterventionNeeded = data['Manual Intervention Needed']

        // Auto-Rat
        this.AutoRate = data['Auto-Rate']

        
      },
      error => this.errorMessage = <any>error,
      () => this.loadData(this.datas)
    );
  }

  loadData(json: any){

    this.dropdownDuration = json['List Duration'];

    this.listProgress = json['List Progress']
    this.dropdownDurationActive = json['List Duration'][0].value;

    for (var i = 0; i < this.listProgress.length; i++) {
      if (this.listProgress[i]['Status'] === 'Not Processed'){
        this.listProgress[i]['starting'] = true;
      }
    }
    
  }


  selectAll() {
    for (var i = 0; i < this.listProgress.length; i++) {
      this.listProgress[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.listProgress.every(function(item:any) {
        return item.selected == true;
      })
  }

  
  progressAll() {
    for (var i = 0; i < this.listProgress.length; i++) {
      this.isProcessing(i);
    }
  }

  isProcessing(i: any) {
    this.listProgress[i].processing = true;
    this.listProgress[i]['starting'] = false;

    setTimeout(() => {
      this.listProgress[i].processing = false;
      
      if (this.listProgress[i]['Status'] === 'Not Processed'){
        this.listProgress[i]['Status'] = 'Completed';
      }      
    }, 2000);
  }
  
}
