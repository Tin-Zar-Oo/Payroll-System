import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  standalone: false,
  
  templateUrl: './form-group.component.html',
  styles:''
})
export class FormGroupComponent {

  @Input()
  label = ''
}
