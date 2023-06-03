import { Component ,Input,OnInit} from '@angular/core';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit{


 upArrow=faChevronUp
 downArrow=faChevronDown
  @Input() isReadMore: boolean = false;
  public isCollapsed: boolean = true;



  constructor() { }

  ngOnInit() {
  }

}
