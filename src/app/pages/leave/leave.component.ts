import { Component } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { PaginationComponent } from "../../widgets/pagination/pagination.component";
import { CardComponent } from "../../widgets/card/card.component";
//import { WidgetsModule } from '../../widgets/widgets.module';

@Component({
    selector: 'app-leave',
    standalone: true,
    templateUrl: './leave.component.html',
    styles: ``,
    imports: []
})
export class LeaveComponent {

  leaveTypes = ["Paid", "Un Paid"]
  leaveCategories = ["Sick Leave", "Family and Medical Leave", "Parental Leave", "Study Leave", "Others"]
  list:any[] = []

  constructor(service:LeaveService) {
    service.search().subscribe(result => this.list = result)
  }
}