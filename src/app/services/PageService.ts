import {Injectable} from '@angular/core';
import Page from "../../models/Page";

@Injectable()
export default class PageService {
  PAGES_URL = 'http://localhost:3001/api/websites/WID/pages';

  createPage = (wid: string, page: Page) =>
    fetch(this.PAGES_URL.replace('WID', wid), {
      method: 'post',
      body: JSON.stringify(page),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());

  findAllPagesForWebsite(wid: string) {
    return fetch(this.PAGES_URL.replace('WID', wid))
      .then(response => response.json());
  }

  findPageById(wid: string, pid: string) {
    return fetch(this.PAGES_URL.replace('WID', wid) + '/' + pid)
      .then(response => response.json());
  }
  updatePage(websiteId: string, pageId: string, page: { _id: string; title: string; rows: any[] }) {
    return fetch(this.PAGES_URL.replace('WID', websiteId) + '/' + pageId, {
      method: 'PUT',
      body: JSON.stringify(page),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deletePage(websiteId: string, pageId: string) {
    return fetch(this.PAGES_URL.replace('WID', websiteId) + '/' + pageId, {
      method: 'DELETE',
      body: JSON.stringify(page),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
