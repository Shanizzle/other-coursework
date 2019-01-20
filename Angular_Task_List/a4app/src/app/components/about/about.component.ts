import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit {
	hobbies: string[];

	constructor() {}

	ngOnInit() {
		this.hobbies = [ 'Write code', 'Watch movies', 'Listen to music' ];
	}

	onClick() {
		this.hobbies.push('New Hobby');
	}

	resetform() {
		(<HTMLInputElement>document.getElementById('hobby')).value = '';
	}

	addHobby(hobby) {
		console.log(hobby);
		this.hobbies.push(hobby);
		this.resetform();
		return false;
	}

	deleteHobby(hobby) {
		for (let i = 0; i < this.hobbies.length; i++) {
			if (this.hobbies[i] === hobby) {
				this.hobbies.splice(i, 1);
			}
		}
	}
}
