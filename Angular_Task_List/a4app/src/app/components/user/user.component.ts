import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit {
	name: string;
	age: number;
	email: string;
	address: Address;
	hello: any;
	posts: any;
	isEdit: boolean;

	constructor(private dataService: DataService) {
		console.log('constructor ran..');
	}

	ngOnInit() {
		this.name = 'Jane Doe';
		this.email = 'test@test.com';
		this.age = 30;
		this.address = {
			street: '50 Main St',
			city: 'Boston',
			state: 'MA'
		};
		this.hello = 'hello';

		this.dataService.getPosts().subscribe((posts) => {
			// console.log(posts);
			this.posts = posts;
		});
	}

	onClick() {
		this.name = 'Shannen Reese';
	}

	toggleEdit() {
		this.isEdit = !this.isEdit;
	}
}

interface Address {
	street: string;
	city: string;
	state: string;
}

interface Post {
	id: number;
	title: string;
	body: string;
	userid: number;
}
