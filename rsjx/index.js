import { Observable } from 'rxjs';

const Observable = new Observable((subscriber) =>{
    // subscriber.next('Hello world');
    // subscriber.next('test');
    // subscriber.next('test');

    // subscribe.complete()
    // subscriber.next('test')

    //Pushing Asynchronous values
    subscriber.next('before')
    subscriber.next('test')

})

Observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('complete called!')
    },
    error: (err) => {
        console.error(err)
    }
})