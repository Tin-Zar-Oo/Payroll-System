import { Component } from '@angular/core';
import { WidgetsModule } from "../../widgets/widgets.module";
import { HolidayService } from '../../services/holiday.service';

@Component({
    selector: 'app-holiday',
    standalone: true,
    templateUrl: './holiday.component.html',
    styles: ``,
    imports: [WidgetsModule]
})
export class HolidayComponent {

  holidayType = ['Gazetted', 'Special', 'Weekend']
  dataList:any[] = []

  constructor(service:HolidayService) {
    service.search().subscribe(result => this.dataList = result)
  }

}
