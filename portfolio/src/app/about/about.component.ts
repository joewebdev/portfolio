import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    skills = [
        {
            name: 'HTML/CSS',
            level: 100,
            sort:0
        },
        {
            name: 'Javascript ES5',
            level: 90,
            sort:1
        },
        {
            name: 'Javascript ES6',
            level: 40,
            sort: 2
        },
        {
            name: 'AngularJS',
            level: 90,
            sort: 3
        },
        {
            name: 'Angular 7/8',
            level: 15,
            sort: 4
        },
        {
            name: 'Performance Optimization',
            level: 90,
            sort: 5
        },
        {
            name: 'Search Engine Optimization',
            level: 90,
            sort: 6
        },
        {
            name: 'VueJS',
            level: 10,
            sort: 7
        },
        {
            name: 'React',
            level: 10,
            sort: 8
        }
    ]
    softSkills = [
        {
            name: 'Team management',
            level: 90,
            sort: 1
        },
        {
            name: 'Technical Leadership',
            level: 90,
            sort: 1
        },
        {
            name: 'HTML/CSS',
            level: 100,
            sort: 1
        }
    ]
  constructor() { }

  ngOnInit() {
  }

}
