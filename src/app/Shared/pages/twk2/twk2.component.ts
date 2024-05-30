import { Component } from '@angular/core';

@Component({
  selector: 'app-twk2',
  templateUrl: './twk2.component.html',
  styleUrls: ['./twk2.component.css']
})
export class TWK2Component {
  date = 'Agenda';
  twk2 = 'The WeekEnd Hack Edition I';
  exhibitors = 'Expositores';
  sponsors = 'Patrocinadores';
  members = [
    {
      name: 'Expositor 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl tincidunt tincidunt.',
      position: 'Expositor 1',
      image: 'assets/img/'
    },
    {
      name: 'Expositor 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl tincidunt tincidunt.',
      position: 'Expositor 2',
      image: 'assets/img/'
    },
    {
      name: 'Expositor 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nisl tincidunt tincidunt.',
      position: 'Expositor 3',
      image: 'assets/img/',
    }
];
}
