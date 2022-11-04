import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { UserProfile } from './user-profile.model';
import { BasicInfo } from './user.model';
import { CorrespondenceAddress } from './user-profile.model';
import { PermanentAddress } from './user-profile.model';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  //GET: api/v1/user/profile
  //GET: api/v1/user/profile/id

  apiEndpoint: string = environment.API;

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${this.apiEndpoint}`);
  }

  getById(id: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiEndpoint}`);
  }

  saveUserBasicInfo(basicInfo: BasicInfo): Observable<BasicInfo> {
    return this.http.post<BasicInfo>(`${this.apiEndpoint}/BasicInfo`, basicInfo);
  }

  saveUserCorrespondenceAddressInfo(contactInfo: CorrespondenceAddress): Observable<CorrespondenceAddress> {
    return this.http.post<CorrespondenceAddress>(`${this.apiEndpoint}`, contactInfo);
  }
  saveUserPermanentAddressInfo(contactInfo: PermanentAddress): Observable<PermanentAddress> {
    return this.http.post<PermanentAddress>(`${this.apiEndpoint}`, contactInfo);
  }
  
  savePersonlInfo(){
    
  }

}
