import {Injectable} from '@angular/core';

@Injectable()
export default class PageService {
  PAGES_URL = 'http://localhost:3001/api/websites/WID/pages';

  createPage = (wid, page) =>
    fetch(this.PAGES_URL.replace('WID', wid), {
      method: 'post',
      body: JSON.stringify(page),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());

  findPagesForWebsite = wid =>
    fetch(this.PAGES_URL.replace('WID', wid))
      .then(response => response.json());

  findPageById = (wid, pid) =>
    fetch(this.PAGES_URL.replace('WID', wid) + '/' + pid)
      .then(response => response.json());

  updatePage(websiteId: string, pageId: string, page: { _id: string; title: string; rows: any[] }) {
    fetch(this.PAGES_URL.replace('WID', websiteId) + '/' + pageId, {
      method: 'PUT',
      body: JSON.stringify(page),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
