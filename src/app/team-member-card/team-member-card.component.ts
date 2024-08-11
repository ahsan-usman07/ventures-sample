import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss'
})
export class TeamMemberCardComponent {
  
  @Input() member: any;
  @Output() openDialog = new EventEmitter<any>();

  showDetails(){
    this.openDialog.emit(this.member)
  }
}

