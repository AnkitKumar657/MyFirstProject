import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem("id", jsonData);
  }
}
