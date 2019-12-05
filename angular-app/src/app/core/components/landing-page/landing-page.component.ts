import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DownloadService } from '../../services/download/download.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private downloadService: DownloadService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../../../assets/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../../../assets/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `pinterest`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../../../assets/twitter.svg')
    );
  }

  ngOnInit() {
  }

  onCV() {
    this.downloadService.downloadCV()
      .then((res) => {
        if (!res) {
          alert('Erreur de téléchargement');
        } else {
          saveAs(res, 'CV.pdf');
        }
      });
  }

  onSocialNetwork(url: string) {
    window.open(url, '_blank');
  }
}
