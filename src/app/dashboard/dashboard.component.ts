import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeModel } from './dashboard.model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users = [];
  public formValue !: FormGroup;
  employeeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  constructor(private appService: AppService, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: [''],
      email: [''],
      password: [''],
      mobilenumber: ['']
    })
    this.getUserList();
  }
  getUserList() {
    this.appService.getUser().subscribe(
      response => this.users = response
    );
  }
  clickAddEmployee() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails() {
    this.employeeModelObj.firstname = this.formValue.value.firstname;
    this.employeeModelObj.lastname = this.formValue.value.lastname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobilenumber = this.formValue.value.mobilenumber;
    this.employeeModelObj.password = this.formValue.value.password;
    if (this.formValue.valid) (
      this.appService.postEmployee(this.employeeModelObj)
        .subscribe((res: any) => {
          // console.log(res);
          alert('Employee added successfully')
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.getUserList();
        }, (error: any) => {
          alert("some thing wrong")
        })
    )
  }
  deleteEmployee(user: any) {
    this.appService.deleteEmployee(user.id)
      .subscribe(res => {
        alert("Employee deleted");
        this.getUserList();
      })
  }
  dataEdit(user: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = user.id;
    this.formValue.controls['firstname'].setValue(user.firstname);
    this.formValue.controls['lastname'].setValue(user.lastname);
    this.formValue.controls['email'].setValue(user.email);
    this.formValue.controls['mobilenumber'].setValue(user.mobilenumber);
    this.formValue.controls['password'].setValue(user.password);
  }
  updateEmployeeDetails() {
    this.employeeModelObj.firstname = this.formValue.value.firstname;
    this.employeeModelObj.lastname = this.formValue.value.lastname;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobilenumber = this.formValue.value.mobilenumber;
    this.employeeModelObj.password = this.formValue.value.password;

    this.appService.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
      .subscribe(res => {
        alert("Updated successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        window.location.reload();
        this.getUserList();
      })

  }

}
