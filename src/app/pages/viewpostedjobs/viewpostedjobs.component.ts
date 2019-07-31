
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Staffs } from 'src/app/model/staffs.model';
import { Logger } from 'src/app/services/logger.service';

@Component({
  selector: 'app-viewpostedjobs',
  templateUrl: './viewpostedjobs.component.html',
  styleUrls: ['./viewpostedjobs.component.css']
})
export class ViewPostedJobsComponent implements OnInit {
  public displayedColumns = ['jobname', 'clientname','staffsnumber', 'startdate', 'editjob'];
  public dataSource = new MatTableDataSource<Staffs>(); 
  screenHeight: any;
  screenWidth: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
  this.screenHeight = window.innerHeight;
  this.screenWidth = window.innerWidth;
 this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
  this.setDisplayedColumns();
}

  constructor(private logger: Logger) { 

    this.screenHeight = window.screen.height;
    this.screenWidth = window.screen.width;
    this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
}    setDisplayedColumns() {
  if (this.screenWidth < 420) {
      this.displayedColumns = ['jobname', 'clientname', 'staffsnumber','startdate', 'editjob'];
  }
  else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
      this.displayedColumns = ['jobname', 'clientname','staffsnumber', 'startdate', 'editjob'];
  }
  else {
      this.displayedColumns =['jobname', 'clientname','staffsnumber', 'startdate', 'editjob'];
  }
}
}