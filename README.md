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


## Additional Resources

-   [Mozilla Developer Network: JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [Node Documentation](https://nodejs.org/api/)
-   [NPM Documentation](https://docs.npmjs.com)
-   [Art of Node](https://github.com/maxogden/art-of-node)
