import { Observable } from 'rxjs';

const Observable = new Observable((subscriber) =>{
    subscriber.next('Hello world');
})

Observable.subscribe({
    next: (value) => {
        console.log(value)
    }
})