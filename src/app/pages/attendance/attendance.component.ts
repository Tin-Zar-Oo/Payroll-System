import { Component } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
import { RouterLink } from '@angular/router';
import { CardComponent } from "../../widgets/card/card.component";
import { PaginationComponent } from "../../widgets/pagination/pagination.component";
//import { WidgetsModule } from '../../widgets/widgets.module';

@Component({
    selector: 'app-attendance',
    standalone: true,
    templateUrl: './attendance.component.html',
    styles: ``,
    imports: [RouterLink, CardComponent, PaginationComponent]
})
export class AttendanceComponent {

  statusList = ['Attend', 'Leave', 'Late', 'Early Out', 'Absent']
  dataList:any[] = []

  constructor(service:AttendanceService) {
    service.search().subscribe(result => this.dataList = result)
  }
}
