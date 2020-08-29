import { Component, OnInit, OnDestroy } from '@angular/core';
import { SatelliteService } from '../../services/satellite.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-launch-satellites',
  templateUrl: './launch-satellites.component.html',
  styleUrls: ['./launch-satellites.component.scss'],
})
export class LaunchSatellitesComponent implements OnInit, OnDestroy {
  dataWithoutFilters: any;
  dataLoaded = false;
  queryParamsObj = {};
  paramsSubscription: Subscription;

  constructor(
    public satelliteService: SatelliteService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.loadData();
    this.router.navigate(['/launches'], {
      queryParams: { limit: 100 },
      queryParamsHandling: 'merge',
    });
    this.paramsSubscription = this.route.queryParams.subscribe(
      (queryParams) => {
        this.queryParamsObj['limitQueryParams'] = queryParams['limit'];
        this.queryParamsObj['launchQueryParams'] =
          queryParams['launch_success'];
        this.queryParamsObj['landingQueryParams'] = queryParams['land_success'];
        this.queryParamsObj['launchYearQueryParam'] =
          queryParams['launch_year'];

        this.loadChangedData(this.queryParamsObj);
      }
    );
  }

  loadChangedData(queryParamsObj) {
    this.spinner.show();
    this.satelliteService
      .getDataWithFilters(queryParamsObj)
      .subscribe((res) => {
        this.dataWithoutFilters = res;
        this.dataLoaded = true;
        this.spinner.hide();
      });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
