import { Component } from '@angular/core';
import { CardComponent } from "../../widgets/card/card.component";
import { PaginationComponent } from "../../widgets/pagination/pagination.component";
import { FormGroupComponent } from "../../widgets/form-group/form-group.component";
import { WidgetsModule } from '../../widgets/widgets.module';
@Component({
    selector: 'app-department',
    standalone: true,
    templateUrl: './department.component.html',
    styles: ``,
    imports: [WidgetsModule]
})
export class DepartmentComponent {

}
