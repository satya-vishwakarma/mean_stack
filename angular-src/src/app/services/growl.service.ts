import { Injectable } from '@angular/core';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GrowlService {

  constructor(
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig,
    private router: Router
  ) {
    this.toastyConfig.theme = 'default';
    this.toastyConfig.showClose = true;
    this.toastyConfig.timeout = 5000;
    this.toastyConfig.position = "top-right";
  }

  /**
   * Growl success 
   * @param mst messages 
   * @param title  title
   */
  success(mst, title = 'Success:') {
    var toastOptions: ToastOptions = {
      title: title,
      msg: mst,
    };
    this.toastyService.success(toastOptions);
  }

  /**
   * Growl Error 
   * @param mst messages 
   * @param title  title
   */
  error(mst, title = 'Opps:') {
    var toastOptions: ToastOptions = {
      title: title,
      msg: mst,
    };
    this.toastyService.error(toastOptions);
  }

  /**
   * Redirect url
   * @param url string
   */
  Redirect(url , setTime =1000) {
    setTimeout(() => {
      this.router.navigate([url]);
    }, setTime);

  }

}
