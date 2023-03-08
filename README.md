# TDD with Mocha & Chai
Lighthous labs Web-flex module 1 w3 lecture on test driven development intro to mocha &amp; chai 

[lecture repo](https://github.com/ermurray/tdd-mocha-chai) | [lecture recording]
# Topics
1. **Manual vs automated testing**
    - [x] what? why? how?

2. **TDD**
    -  [x] what is tdd?
    -  [x] why do we use tdd
    -  [ ] what are "Assertions" and assertion libraries
    -  [ ] testing frameworks 

3. **npm**
    -  [ ] package.json
    -  [ ] basic overview

4. **Mocha & Chai**
    -  [ ] examples & work flow 
    -  [ ] TDD approach to *vowels* kata
    -  [ ] TDD approach to *repeating numbers* kata

# Notes

1. **Manual vs Automated**
    - ways to improve code code qualit?
      - simple  clean easy to maintain
      - refactor
      - linter
      - keep it DRY ("Don't, Repeate, Your Self")
      - rule of three (three times repeated refactor is a must)
      - comments and/or self documenting code
      - simplify branching code
      - bug testing
    - ways to test your code.
      - UAT testing
      - Regression testing
      - function to test
      - manual testing
        - pros: make sure it works, test diff. workflows or use-case, test how app is used
        - cons: slow, in-consistent, human error, not repeatable
        - console.log(), console.assert(), console.error() etc.
        - click through app
        - run some examples check output
        - test for edge cases
      - automated testing
        - pros: speed, repeatable, saves debuging time, force more dry modular code.
        - cons: false positives, setup time
        


2. **TDD**
    - TDD is...
      - Test Driven Development
      - write test to define input and expected outputs of Units prior to writing code to solve problem.
      - 