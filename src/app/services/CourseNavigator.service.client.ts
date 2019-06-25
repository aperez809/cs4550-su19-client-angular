import { Injectable } from '@angular/core';
@Injectable()
export class CourseNavigatorServiceClient {
  findAllCourses = () =>
    fetch
    ('http://localhost:3001/api/courses')
      .then(response => response.json());
}
