import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatSidenavModule, MatButtonModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {
  @Input() isExpanded: boolean = false;

  actionSidebar(){
    const sidebar = document.querySelector(".app-sidenav");
    sidebar?.classList.toggle('hidde-sidebar');
    this.isExpanded = !this.isExpanded;
  }
}
