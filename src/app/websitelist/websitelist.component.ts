import { Component, OnInit } from '@angular/core';
import WebsiteService from '../services/WebsiteService'

@Component({
  selector: 'app-websitelist',
  templateUrl: './websitelist.component.html',
  styleUrls: ['./websitelist.component.css']
})
export class WebsitelistComponent implements OnInit {

  constructor(private service: WebsiteService) { }

  websites = [];
  editing = false;

  ngOnInit() {
    this.service.findAllWebsites()
      .then(websites => this.websites = websites);
  }

  createWebsite() {
    this.service
      .createWebsite({title: 'New Website'})
      .then(website => this.websites.push(website));
  }

  setEditing = (website, editing) => {
    website.editing = editing;
    if (editing === false) {
      this.service.updateWebsite(website._id, website)
        .then(status => console.log(status));
    }
  };

  deleteWebsite(website) {
    this.service.deleteWebsite(website._id)
      .then(status => {
        if (status.deletedCount === 1) {
          console.log("found one");
          const websiteIndex = this.websites.indexOf(website);
          console.log("website in questions found at index" + websiteIndex);
          this.websites.splice(websiteIndex, 1)
        }
        else {
          console.log("bgrewijgbirtugw " + status.deletedCount);
        }

      });
  }
}
