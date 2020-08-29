import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { SatelliteService } from '../../services/satellite.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-launch-filters',
  templateUrl: './launch-filters.component.html',
  styleUrls: ['./launch-filters.component.scss'],
})
export class LaunchFiltersComponent implements OnInit, OnDestroy {
  launchYears = [];
  successfulBoolean = ['True', 'False'];
  selectedButtonYear: any;
  selectedLaunchButton: any;
  selectedLandingButton: any;
  isLaunchSuccess: boolean;
  isLandingSuccess: boolean;
  queryParamsSelected: any;
  paramsSubscription: Subscription;
  queryParamsObj = {};
  constructor(
    public satelliteService: SatelliteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.paramsSubscription = this.route.queryParams.subscribe(
      (queryParams) => {
        this.queryParamsObj['limitQueryParams'] = queryParams['limit'];
        this.queryParamsObj['launchQueryParams'] =
          queryParams['launch_success'];
        this.queryParamsObj['landingQueryParams'] = queryParams['land_success'];
        this.queryParamsObj['launchYearQueryParam'] =
          queryParams['launch_year'];
        this.setFilters(this.queryParamsObj);
      }
    );
  }

  setFilters(queryParamsObj) {
    let index = this.launchYears.indexOf(
      +queryParamsObj['launchYearQueryParam']
    );
    if (index > -1) {
      this.selectedButtonYear = this.launchYears[index];
    }

    if (this.queryParamsObj['launchQueryParams']) {
      this.selectedLaunchButton = 'True';
    }
    if (this.queryParamsObj['landingQueryParams']) {
      this.selectedLandingButton = 'True';
    }
  }

  loadData() {
    this.fillLaunchYearArray();
  }

  fillLaunchYearArray() {
    var firstYear = 2006;
    var lastYear = new Date().getFullYear();
    for (let i = firstYear; i <= lastYear; i++) {
      this.launchYears.push(i);
    }
  }

  removeQueryParamsFromUrl(key) {
    var snapshot = this.route.snapshot;
    const params = { ...snapshot.queryParams };
    delete params[key];
    this.router.navigate([], { queryParams: params });
  }

  onLaunchYearButtonClick(year): void {
    if (this.selectedButtonYear === year) {
      this.selectedButtonYear = null;
      this.removeQueryParamsFromUrl(`launch_year`);
    } else {
      this.selectedButtonYear = year;
      this.router.navigate(['/launches'], {
        queryParams: {
          launch_year: year,
        },
        queryParamsHandling: 'merge',
      });
    }
  }

  onSuccessLaunchButtonClick(isSuccess) {
    if (this.selectedLaunchButton === isSuccess) {
      this.selectedLaunchButton = null;
      this.isLaunchSuccess = null;
      this.removeQueryParamsFromUrl(`launch_success`);
    } else {
      this.selectedLaunchButton = isSuccess;
      if (isSuccess === 'True') {
        this.isLaunchSuccess = true;
        this.router.navigate(['/launches'], {
          queryParams: {
            launch_success: true,
          },
          queryParamsHandling: 'merge',
        });
      } else if (isSuccess === 'False') {
        this.isLaunchSuccess = false;
        this.removeQueryParamsFromUrl(`launch_success`);
      }
    }
  }

  onSuccessLandingButtonClick(isSuccess) {
    if (this.selectedLandingButton === isSuccess) {
      this.selectedLandingButton = null;
      this.isLandingSuccess = null;
      this.removeQueryParamsFromUrl(`land_success`);
    } else {
      this.selectedLandingButton = isSuccess;
      if (isSuccess === 'True') {
        this.isLandingSuccess = true;
        this.router.navigate(['/launches'], {
          queryParams: {
            land_success: true,
          },
          queryParamsHandling: 'merge',
        });
      } else if (isSuccess === 'False') {
        this.isLandingSuccess = false;
        this.removeQueryParamsFromUrl(`land_success`);
      }
    }
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
