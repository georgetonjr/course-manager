import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})


export class CourseListComponent  implements OnInit{
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Angular forms",
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'December, 30, 2013',
      },

      {
        id: 1,
        name: "Angular: HTTP",
        imageUrl: '/assets/images/http.png',
        price: 45.99,
        code: 'lkS-8816',
        duration: 80,
        rating: 4,
        releaseDate: 'November, 14, 2003',
      }
    ]
  }
}