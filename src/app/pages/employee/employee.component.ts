import { Component } from '@angular/core';
import { CardComponent } from "../../widgets/card/card.component";
import { PaginationComponent } from "../../widgets/pagination/pagination.component";
@Component({
    selector: 'app-employee',
    standalone: true,
    templateUrl: './employee.component.html',
    styles: ``,
    imports: [CardComponent,PaginationComponent]
})
export class EmployeeComponent {

}
