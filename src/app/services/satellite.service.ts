import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { BehaviorSubject } from 'rxjs';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class SatelliteService {
  constructor(private http: HttpClient) {}

  getDataWithFilters(queryParameters) {
    let {
      limitQueryParams,
      launchYearQueryParam,
      landingQueryParams,
      launchQueryParams,
    } = queryParameters;
    let paramProp = '';
    paramProp += `limit=100`;
    if (launchQueryParams) {
      paramProp += `&launch_success=${launchQueryParams}`;
    }
    if (landingQueryParams) {
      paramProp += `&land_success=${landingQueryParams}`;
    }

    if (launchYearQueryParam) {
      paramProp += `&launch_year=${launchYearQueryParam}`;
    }
    console.log(queryParameters);
    let options = { params: new HttpParams({ fromString: paramProp }) };
    return this.http.get(`${API_URL}`, options);
  }
}
