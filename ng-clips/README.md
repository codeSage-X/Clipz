# NgClips

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


CLIP COURSE:

# MVC 
# Model = data (services).
# View = HTML.
# Controller = component.ts

Service

# A service in angular is a class used to store data, data that can be shared through out the application.
# Do you know that if you are not making use of services in angular are not subscribing to the MVC Architecture? data stored in your component.ts file cannot be used every where in your angular application.

# Services where created to reduce the work load of the controller file so that it can fully focus on its sole job to give directives. 
# Services are not be confused with statemanagement.

Dependency injection:
# In angular a logic can be created in a component and then shared with another component through the help of dependency injection. In a sercive file you will see where injectable is declared and provided in root is imported inside it. 
# This means that the class can be imported into any component, mounted in the constructor and it is considered a dependency because for that component to fully function it has to interact with it's dependency. 

# DI lets angular create object instances of a class and then inject it into other components who needs it.


# Injectable: This is the process of making a class injectable to other classes.

Ways to make a class injectable.
# * Import Injectable and state it provided in root: this way it is available through out the application.

# * Import the class into a module that needs it and add the providers array []. providers is an array of services: this way it is available in a specific module.
# * Import the class into a component.ts file and declare the providers array. it is available only in a component

# A singleton is when one instance of a class exists in an application
Component interaction 

Shared modal
# Create modal service, create 4 methods, register, unregister, close and toggle modal. then create an interface and pass an id. 

# The id property is used to distinguish which modal is initialized based onclick.
# next the modal component and write the model content inside the next tag.
For refrence: src/app/user/auth-modal

Memory Leak
# A memory leak is a type of resource leak caused by poor management of memory allocation in a way that is not cleared from the memory when is not needed anymore. The memory leak is one of the worst problems developers could have since it is very difficult to debug and catch.

# Ways to handle memory leaks:
# Async pipe, OnDestroy

For more info look up:
# https://www.amplifyre.com/articles/2-best-ways-prevent-memory-leaks-in-angular

Content projection:
# is a pattern in which you insert, or project, the content you want to use inside another component. For example, you could have a Card component that accepts content provided by another component.

For more info look up:

https://angular.io/guide/content-projection


Resourceful links

Regex
https://regexr.com/

#Firebase

https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md


https://firebase.google.com/docs/reference/js/auth#createuserwithemailandpassword


https://firebase.google.com/docs/reference/rules/rules.firestore.Request#auth


https://angular.io/api/router/Route


