import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import {
  BankInfo, BasicInfo, CorrespondenceAddress, DateOfJoiningInfo, Dependent,
  Educational, EmergencyContactInfo, JobHistory, Nominee, PermanentAddress,
  PersonalInfo, ReferenceInfo, SpouseInfo
} from './user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  //GET: api/v1/user/profile
  //GET: api/v1/user/profile/id

  apiEndpoint: string = environment.API;

  constructor(private http: HttpClient) { }

  saveUserBasicInfo(basicInfo: BasicInfo): Observable<BasicInfo> {
    return this.http.post<BasicInfo>(`${this.apiEndpoint}/basicInfo`, basicInfo);
  }

  saveUserCorrespondenceAddressInfo(correspondenceAddress: CorrespondenceAddress): Observable<CorrespondenceAddress> {
    return this.http.post<CorrespondenceAddress>(`${this.apiEndpoint}/contactInfo`, correspondenceAddress);
  }

  saveUserPermanentAddressInfo(permanentAddress: PermanentAddress): Observable<PermanentAddress> {
    return this.http.post<PermanentAddress>(`${this.apiEndpoint}/PermanentAddress`, permanentAddress);
  }

  saveUserPersonalInfo(personalInfo: PersonalInfo): Observable<PersonalInfo> {
    return this.http.post<PersonalInfo>(`${this.apiEndpoint}/PersonalInfo`, personalInfo);
  }

  saveUserSpouseInfo(spouseInfo: SpouseInfo): Observable<SpouseInfo> {
    return this.http.post<SpouseInfo>(`${this.apiEndpoint}/SpouseInfo`, spouseInfo);
  }

  saveUserReferenceInfo(referenceInfo: ReferenceInfo): Observable<ReferenceInfo> {
    return this.http.post<ReferenceInfo>(`${this.apiEndpoint}/ReferenceInfo`, referenceInfo);
  }

  saveUserJobHistoryInfo(jobHistory: JobHistory): Observable<JobHistory> {
    return this.http.post<JobHistory>(`${this.apiEndpoint}/JobHistory`, jobHistory);
  }

  saveUserEducationalInfo(educational: Educational): Observable<Educational> {
    return this.http.post<Educational>(`${this.apiEndpoint}/Educational`, educational);
  }

  saveUserNomineeInfo(nominee: Nominee): Observable<Nominee> {
    return this.http.post<Nominee>(`${this.apiEndpoint}/Nominee`, nominee);
  }

  saveUserDependentInfo(dependent: Dependent): Observable<Dependent> {
    return this.http.post<Dependent>(`${this.apiEndpoint}/Dependent`, dependent);
  }

  saveUserDateOfJoiningInfo(dateOfJoiningInfo: DateOfJoiningInfo): Observable<DateOfJoiningInfo> {
    return this.http.post<DateOfJoiningInfo>(`${this.apiEndpoint}/DateOfJoiningInfo`, dateOfJoiningInfo);
  }

  saveUserBankInfo(bankInfo: BankInfo): Observable<BankInfo> {
    return this.http.post<BankInfo>(`${this.apiEndpoint}/BankInfo`, bankInfo);
  }

  saveUserEmergencyContactInfo(emergencyContactInfo: EmergencyContactInfo): Observable<EmergencyContactInfo> {
    return this.http.post<EmergencyContactInfo>(`${this.apiEndpoint}/EmergencyContactInfo`, emergencyContactInfo);
  }

}
