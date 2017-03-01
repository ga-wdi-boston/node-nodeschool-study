[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Node & Express Self Study

Node is JavaScript without the browser. Since you're already familiar with
JavaScript, you shouldn't think of learning Node as learning a new language.
Instead, you'll be learning a new set of APIs that use JavaScript to get work
done outside the browser. That means you won't have access to browser APIs, like
manipulating the DOM, but you will still have events and asynchronous
capabilities. Additionally, Node provides excellent utilities for working with
the file system, making web requests, and processing incoming web requests.

[nodeschool](http://nodeschool.io/) is an excellent free and open-source
resource for learning Node. You must complete the following workshops to become
familiar with Node:

-   [learnyounode](https://github.com/workshopper/learnyounode): Introduction to
    Node
-   [how-to-npm](https://github.com/npm/how-to-npm): Introduction to NPM
-   [expressworks](https://github.com/azat-co/expressworks): Introduction to
    Express

The following workshops are optional:

-   [javascripting](https://github.com/sethvincent/javascripting): JavaScript
    review (optional)
-   [scope-chains-closures](https://github.com/jesstelford/scope-chains-closures):
    Scope, Chains, and Closures (optional, challenging)
-   [stream-adventure](https://github.com/substack/stream-adventure):
    Introduction to Node streams (optional, challenging)

Take a moment to browse the [nodeschool](http://nodeschool.io/) site. Make a
note of any workshops you might want to take in the future. (Note: The term
"workshop" is a bit confusing. "Workshops" at nodeschool are modules you install
and run locally on your system. If you want to attend a nodeschool meetup,
you'll want to browse "Events".)

When you're ready to begin a workshop, just install it globally with `npm` and
start the workshop via the command line. For example, to install
[learnyounode](https://github.com/workshopper/learnyounode), use `npm install -g
learnyounode`, then begin the workshop with `learnyounode`.

## Instructions

1.  Install `learnyounode`

    ```sh
    npm install -g learnyounode
    ```

1.  Fork and clone this repository.
1.  Edit your fork's README. ([example](https://github.com/jrhorn424/javascripting))
1.  Add and commit the README and push changes to your fork.
1.  Move to the `learnyounode` directory. You will work here as you complete the
    workshop.
1.  Run `learnyounode` from the command line and follow the instructions.
1.  As you work, commit early and often.

Use commit messages as your learning journal, making notes of challenges and
what you learned by completing each exercise
([example](https://github.com/jrhorn424/learnyounode/commit/5db673a16d4af82d3c5a80240edeb93b0e4dbd0c)).

Do something similar for the other required workshops. Repeat the last three
steps. Do not create another fork or clone; all your work can be done from your
original fork.

## Gotchas

The `learnyounode` workshop suggests you add your code to a single file,
`program.js`, that is updated with each exercise. Instead, you should create a
new file for exercise and run `learnyounode run` and `learnyounode verify`
against the exercise file.

You will need to create your own file structure in all directories except
`learnyounode`. Each exercise should have its own file.

## Deliverables

You are required to push your changes every day, based on the following
schedule. Open a new pull request if you worked on a different branch. If you
worked on the same branch, reopen your pull request if it was closed. Your
submissions will be checked for completeness, **not** for accuracy. That's what
`learnyounode verify` is for.

Some exercises will not result in changes inside the repository. If you complete
a series of exercises and they do not result in a dirty working directory, no
pull request is required.

Certain exercises may have open issues as `node`, `npm`, and `express` change
very rapidly. If you run into trouble, search workshop issues first. You can get
a link to the workshop GitHub repositories from the nodeschool website.

| Workshop       | Exercises                  | Due     |
|----------------|----------------------------|---------|
| `learnyounode` | Exercises 00–05            | `t + 0` |
| `learnyounode` | Exercises 06–09            | `t + 1` |
| `how-to-npm`   | Exercises 00–05            | `t + 0` |
| `expressworks` | Exercises 00–01, 03, 05–07 | `t + 2` |

Ranges are inclusive. Due dates are read as follows:

-   `t + 0` means "today".
-   `t + 1` means one business day from today.
-   A "business day" is a day on which we meet as a cohort.

Any additional exercises in each workshop without a listed due date in the above
table are optional. You will not be assessed on any optional exercises, but you
may have to complete them to continue on to other required exercises.

## Additional Resources

-   [Mozilla Developer Network: JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Node Documentation](https://nodejs.org/api/)
-   [NPM Documentation](https://docs.npmjs.com)
-   [Art of Node](https://github.com/maxogden/art-of-node)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
alternative licensing, please contact legal@ga.co.
