import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    rate: number = 0;
    movieGroup = new FormGroup(
        {
            titre: new FormControl<string>('',
                {
                    nonNullable: true,
                    validators: [Validators.required, Validators.minLength(4)]
                }
            ),
            note: new FormControl<number>(5,
                {
                    nonNullable: true,
                    validators: [Validators.required, Validators.min(1), Validators.max(5)]
                }
            ),
        }
    )


    movies: any[] = []

    constructor() {
    }

    ngOnInit(): void {
    }

    submitForm() {
        this.movies.push(this.movieGroup.value);
        this.movieGroup.reset()
    }

}
