import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {

  @Input() title!: string;

  @Output() exMenuClicked = new EventEmitter<void>();
  
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onMenuClick() {
    alert('ExMenu clicked');
    this.exMenuClicked.emit();
  }
}
