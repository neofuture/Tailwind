import {Component, Input, NgModule, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ApplicationModule} from '../../../../../application.module';
import {ContactManagerService} from '../../services/contact-manager.service';
import {WindowService} from '../../../../../services/window.service';
import {LanguageService} from '../../../../../services/language.service';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent implements OnInit {
  @Input() parentComponent;
  @Input() tab;
  private recordSub$: any;
  private record: any;
  recordId: any;
  recordType: any;
  locale;

  private languageSub$: any;

  constructor(
    private contactManagerService: ContactManagerService,
    private windowService: WindowService,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    // need a better way to pass in the sub from the parent record
    // this.recordSub$ = this.contactManagerService.record.subscribe(data => {
    //   this.record = data.record;
    //   this.recordId = data.record.id;
    //   this.recordType = data.record.recordType;
    // });

    this.languageSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.contactManager.contactProfileTab;
    });
  }

}

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ApplicationModule,
  ],
  exports: [
    ContactProfileComponent
  ],
  declarations: [ContactProfileComponent]
})

export class ContactProfileModule {
}
