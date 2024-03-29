import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener, KeyValueChanges,
  KeyValueDiffer,
  KeyValueDiffers,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {DesktopService} from '../../../services/desktop.service';
import {LanguageService} from '../../../services/language.service';
import {WindowService} from '../../../services/window.service';
import {UserService} from '../../../services/user.service';
import {ToastService} from '../../../services/toast.service';
import {DialogService} from '../../../services/dialog.service';
import {Subscription} from 'rxjs';
import {RibbonService} from '../../../services/ribbon.service';
import {PanelService} from '../../../services/panel.service';
import {TabbarService} from '../../../services/tabbar.service';
import {SystemService} from '../../../services/system.service';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})

export class DesktopComponent implements OnInit, AfterViewInit, OnDestroy {


  windowList = {};
  panelList = {};
  toastList = {};
  dialogList = {};

  @ViewChild('desktop') desktop: ElementRef;

  objectValues = Object.values;
  locale;

  dimensions: any;
  user = null;
  company: string;
  product: string;
  private ribbonSub$: Subscription;
  private desktopSub$: Subscription;
  private langSub$: Subscription;
  private tabSub$: Subscription;

  ribbonSize: string;
  autoHide: boolean;
  runState = {};
  appState = {};
  loading: any;

  private runStateDiffer: KeyValueDiffer<string, any>;

  @HostListener('window:resize')
  onResize(): void {
    this.resize();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEventDown(event): void {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      this.systemService.set({multiSelect: true});
    }
    if (event.code === 'Tab') {
      event.preventDefault();
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEventUp(event): void {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      this.systemService.set({multiSelect: false});
    }
  }

  constructor(
    private desktopService: DesktopService,
    private languageService: LanguageService,
    private windowService: WindowService,
    private panelService: PanelService,
    private userService: UserService,
    private toastService: ToastService,
    private dialogService: DialogService,
    private ribbonService: RibbonService,
    private tabBarService: TabbarService,
    private systemService: SystemService,
    private differs: KeyValueDiffers,
    private themeService: ThemeService
  ) {
  }

  ngOnInit(): void {
    this.loading = this.desktopService.loading;

    this.runStateDiffer = this.differs.find(this.runState).create();

    this.systemService.runState.subscribe(data => {
      this.runState = data;
      const changes = this.runStateDiffer.diff(this.runState);
      if (changes) {
        this.runStateChanged(changes);
      }
    });

    this.systemService.appState.subscribe(data => {
      this.appState = data;
    });

    this.splash();
    this.desktopSub$ = this.desktopService.dimensions.subscribe(data => {
      this.dimensions = data;
    });

    this.langSub$ = this.languageService.language.subscribe(locale => {
      this.locale = locale.desktop;
      this.company = locale.company;
      this.product = locale.product;
    });

    this.windowList = this.windowService.windowList;
    this.panelList = this.panelService.panelList;
    this.toastList = this.toastService.toastList;
    this.dialogList = this.dialogService.dialogList;


    // settings
    this.ribbonSub$ = this.ribbonService.ribbonSize.subscribe(size => {
      this.ribbonSize = size;
    });
    this.tabSub$ = this.tabBarService.autoHideList.subscribe(data => {
      this.autoHide = data;
    });

    this.themeService.theme.subscribe(
      theme => {
        if (theme === true) {
          this.themeService.setDarkMode();
        } else {
          this.themeService.setLightMode();
        }
      }
    );


    setTimeout(() => {
      this.loadDesktop();
    }, 1000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.desktopService.desktopElement = this.desktop;
      this.desktopService.setSize();
    }, 310);
    setTimeout(() => {
      this.setPlanMode(1);
    });

  }

  ngOnDestroy(): void {
    this.ribbonSub$.unsubscribe();
    this.desktopSub$.unsubscribe();
    this.langSub$.unsubscribe();
  }

  runStateChanged(changes: KeyValueChanges<string, any>): void {
    changes.forEachChangedItem((record) => {
      console.log(record.key + ' = ' + record.currentValue);
    });
  }

  animation(): void {

  }

  loadDesktop(): void {
    this.userService.user.subscribe(token => {
      this.user = token;

      setTimeout(() => {
        this.resize();
        if (token === null) {
          this.loginWindow();
        } else {
          this.loadPlanner();
          // this.contactManager();
          this.openDemo();
        }
      }, 310);

    });
  }

  loadPlanner(): void {
    const windowConfig = {
      icon: 'icon-cog',
      iconLarge: 'icon-cog',
      width: 600,
      height: 400,
      top: 100,
      left: 100,
      component: 'system/planner',
      title: 'planner',
      parentComponent: this
    };
    this.windowService.newWindow(windowConfig);
  }

  contactManager(): void {
    const windowConfig = {
      icon: 'icon-contacts',
      iconLarge: 'icon-contacts_over',
      width: 950,
      height: 850,
      minimumHeight: 734,
      minimumWidth: 750,
      left: 30,
      top: 30,
      component: 'system/contact-manager',
      title: 'contactManager',
      hasStatusBar: true,
      hasRibbon: true,
      ribbonFixedPosition: 'top'
    };
    this.windowService.newWindow(windowConfig);
  }

  private resize(): void {
    this.desktopService.setSize();
    this.windowService.setSize();
  }

  loginWindow(): void {
    const windowConfig = {
      width: 300,
      height: 300,
      resizable: false,
      hasControls: false,
      hasTab: false,
      centered: true,
      component: 'system/user/user-login',
      hasDockMenu: false,
      singleInstance: 'system/user/user-login',
      hasLanguageSelector: true,
      title: 'login',
      icon: 'icon-login',
      alwaysActive: true,
      systemWindow: true
    };

    this.windowService.newWindow(windowConfig);
  }

  splash(): void {
    const windowConfig = {
      width: 500,
      height: 500,
      centered: true,
      resizable: false,
      hasControls: false,
      hasTab: false,
      component: 'system/splash',
      hasDockMenu: false,
      singleInstance: 'system/splash',
      title: 'splash',
      hasTitleBar: false,
      autoClose: 10000,
      alwaysOnTop: true,
      alwaysActive: true,
      systemWindow: true
    };

    this.windowService.newWindow(windowConfig);
  }

  planMode(ribbonItem): void {
    this.setPlanMode(ribbonItem.args);
  }

  setPlanMode(id): void {
    this.systemService.set({planMode: id});
  }

  openDemo(): void {
    const windowConfig = {
      width: 900,
      height: 500,
      component: 'system/demo',
      title: 'demo'
    };

    this.windowService.newWindow(windowConfig);
  }
}
