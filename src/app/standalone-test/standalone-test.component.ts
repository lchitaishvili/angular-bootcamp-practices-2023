import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from '../test2/test2.component';
import { RouterModule, provideRouter } from '@angular/router';

@Component({
  selector: 'app-standalone-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandaloneTestComponent {

}
