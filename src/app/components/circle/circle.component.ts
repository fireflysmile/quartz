import { Component, OnChanges, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnChanges {

  @Input() number: number;
  @Input() total: number;
  @Input() radius: number;
  @Input() fontSize: number;
  @Input() SubText: string;
  @Input() isPercent: boolean;
  @Input() bigPercent: boolean;
  @Input() color: string;
  @Input() topSet: number;


  @ViewChild('full') full;
  @ViewChild('rank') rank;
  @ViewChild('half') half;
  @ViewChild('shadow') shadow;
  @ViewChild('fix1') fix1;
  @ViewChild('fix2') fix2;

  @ViewChild('inset') inset;

  constructor( ) {

  }

  ngOnChanges() {
    const divFill = document.getElementsByClassName('fill');
    console.log(divFill)
    const radius = this.radius + 'px';
    const percent = (this.number / this.total) * 100;

    const rotate  = 'rotate(' + percent * 1.8 + 'deg)';

    // console.log(rotate)

    const clip  = 'rect(' + 0  + ',' + this.radius + 'px,' + this.radius + 'px,' + this.radius / 2 + 'px)';
    const clip2  = 'rect(' + 0  + ',' + this.radius / 2 + 'px,' + this.radius + 'px,' + 0 + 'px)';

    // console.log(clip)

    // set width chart
    this.full.nativeElement.style.width = this.full.nativeElement.style.height =
    this.rank.nativeElement.style.width = this.rank.nativeElement.style.height =
    this.fix1.nativeElement.style.width = this.fix1.nativeElement.style.height =
    this.half.nativeElement.style.width = this.half.nativeElement.style.height =
    this.shadow.nativeElement.style.width = this.shadow.nativeElement.style.height =  radius;

    // width height inset circle
    this.inset.nativeElement.style.width = this.inset.nativeElement.style.height = this.radius * 80 / 100 + 'px';

    // left top inset circle
    this.inset.nativeElement.style.marginLeft = this.inset.nativeElement.style.marginTop = (this.radius - ( this.radius * 80 / 100)) / 2 + 'px';

    // set font-size chart
    this.inset.nativeElement.getElementsByTagName('p')[0].style.paddingTop = this.topSet + 'px';
    this.inset.nativeElement.getElementsByTagName('p')[0].style.fontSize = this.fontSize + 'px';
    this.inset.nativeElement.getElementsByTagName('span')[0].style.fontSize = this.fontSize / 2 + 'px';

    // set style clip total
    this.full.nativeElement.style.clip = this.half.nativeElement.style.clip =
    this.fix1.nativeElement.style.clip = this.fix2.nativeElement.style.clip = clip;

    // set style clip rank
    this.rank.nativeElement.style.clip =
    this.fix1.nativeElement.style.clip = this.fix2.nativeElement.style.clip = clip2;

    // set transform
    this.full.nativeElement.style.transform = this.rank.nativeElement.style.transform =
    this.fix1.nativeElement.style.transform = this.fix2.nativeElement.style.transform = rotate;

  }

}
