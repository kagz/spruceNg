import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {
  public id: number;
  public backgroundColor: string;
  constructor(public settingService: SettingsService) {
    this.id = settingService.getsidenavImageIndex() + 1;
    this.backgroundColor = settingService.getsidenavColor();
  }

  ngOnInit() {
    this.settingService.sidenavImageIndexUpdate.subscribe((id: number) => {
      this.id = id + 1;
    });
    this.settingService.sidenavColorUpdate.subscribe((color: string) => {
      this.backgroundColor = color;
    });
  }

  ngOnDestroy() {
    this.settingService.sidenavImageIndexUpdate.unsubscribe();
    this.settingService.sidenavColorUpdate.unsubscribe();
  }
}
