import { Component, OnInit } from '@angular/core';
import { DropdownValue } from '../../components/dropdown/dropdown.component';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  datas: Array<any>;
  chart: Array<any>;
  listChannel: Array<any>;
  errorMessage: string;
  stageNo: any = '2310';
  channelPrefix: any = 'Channel-1313';
  wellNameActive: any = 'Ailurian';
  timeRange = '9';
  channelValidation: any;
  listChannelName: DropdownValue[];
  listWellName: DropdownValue[];
  listStageNo: DropdownValue[];
  listChannelPrefix: DropdownValue[];
  listTimeRange: DropdownValue[];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.onload();
    this.listTimeRange = [
      new DropdownValue(6, '6 Months'),
      new DropdownValue(9, '9 Months'),
      new DropdownValue(12, '12 Months'),
      new DropdownValue(18, '18 Months'),
    ];
  }
  action(e): void {
  }
  // load data services
  onload = (): void => {
    this.dataService.getData('assets/data/review.json').subscribe(
      data => {
        this.datas = data;
      },
      error => this.errorMessage = <any>error,
      () => this.loadData(this.datas)
    );
  }

  loadData(json: any){
    this.chart = json.lineChart;

    this.listChannel = json.listTable;
    this.listChannelName = [];
    // Get list channel name from list channel
    this.listChannel.forEach((item) => {
        this.listChannelName.push(new DropdownValue(item.channel, item.channel));
    });
    this.listWellName = [];
    this.listWellName.push(new DropdownValue('Ailurian', 'Ailurian'));
    this.listStageNo = [];
    this.listStageNo.push(new DropdownValue(2310, 2310));
    this.listChannelPrefix = [];
    this.listChannelPrefix.push(new DropdownValue('Channel-1313', 'Channel-1313'));
  }
}
