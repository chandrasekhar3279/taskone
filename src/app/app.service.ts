import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>('http://localhost:3000/users');
  }
  postEmployee(data: any) {
    return this.http.post<any>('http://localhost:3000/users', data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteEmployee(id: number) {
    return this.http.delete<number>('http://localhost:3000/users/' + id)
      .pipe(map((res: any) => {
        return res
      }))
  }
  updateEmployee(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/users/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))

  }

}