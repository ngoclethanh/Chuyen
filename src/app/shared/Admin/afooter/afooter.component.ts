import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afooter',
  templateUrl: './afooter.component.html',
  styleUrls: ['./afooter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
