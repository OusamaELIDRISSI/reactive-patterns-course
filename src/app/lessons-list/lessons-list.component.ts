import { Component } from '@angular/core';
import { store, Observer } from "../event-bus-experiments/app-data";
import { Lesson } from "../shared/model/lesson";
import * as _ from 'lodash';

@Component({
	selector: 'lessons-list',
	templateUrl: './lessons-list.component.html',
	styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

	lessons: Lesson[] = [];

	constructor() {
		console.log('lesson list component is registered as observer ..');
		
		store.subscribe(this);
	}

	next(data: Lesson[]) {
		console.log('Lessons list component received data ..');
		this.lessons = data;
	}

	toggleLessonViewed(lesson: Lesson) {
		console.log('toggling lesson ...');
		store.toggleLessonViewed(lesson);
	}

	delete(deleted: Lesson) {
		store.deleteLesson(deleted);
	}

}
