import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test3Component {

}
