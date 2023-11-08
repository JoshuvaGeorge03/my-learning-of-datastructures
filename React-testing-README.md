# Testing

## what is test?

+ asseriting our expectation with actual output.

## Why we need to do testing?

+ It helps with designing of our code and helps use foolow design principles of the code.
+ It helps with finding bling spots and edeg cases we missed to handle.
+ It helps with maintaineance of our code, because when we do bug fixing, adding feature or refactoring our code, test ensure, we don't break our intention of the code when we write it.
+ It also helps with automation of tests.
+ + also act as documentation of our code intention.

## how to test?

+ don't test the implementation details, only test the functionality.
+ test should be written in a way that our user uses our application.
+ code coverage is not indication of good test, because it don't indicate, is all usecases are covered? and which usecases are important than others

We use jest and react testing library to test our react component

By default, jsdom will be used as mock testing environment, which replicate browser Api's

## Types of Test

+ Unit test - testing component or units in isolation
+ Integration test - ensuring every components work together and work together correctly in mock test environment
+ end-to-end test - simulating real user flows and ensuring everything works well.

## structure of test

+ Arrange - render the component
+ Act - take the component by query similar to how the user will do it, and do some interaction
+ Assert - assert your expectation with actual output.