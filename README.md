![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

Node: Self Study
================

Node is JavaScript without the browser. Since you're already familiar with JavaScript, you shouldn't think of learning Node as learning a new language. Instead, you'll be learning a new set of APIs that use JavaScript to get work done outside the browser. That means you won't have access to browser APIs, like manipulating the DOM, but you will still have events and asynchronous capabilities. Additionally, Node provides excellent utilities for working with the file system, making web requests, and processing incoming web requests.

[nodeschool](http://nodeschool.io/) is an excellent free and open-source resource for learning Node. We recommend you complete the following workshops to become familiar with Node:

* [javascripting](https://github.com/sethvincent/javascripting): JavaScript review (optional)
* [learnyounode](https://github.com/workshopper/learnyounode): Introduction to Node
* [how-to-npm](https://github.com/npm/how-to-npm): Introduction to NPM
* [scope-chains-closures](https://github.com/jesstelford/scope-chains-closures): Scope, Chains, and Closures (optional, challenging)
* [stream-adventure](https://github.com/substack/stream-adventure): Introduction to Node streams (optional, challenging)
* [expressworks](https://github.com/azat-co/expressworks): Introduction to Express

Take a moment to browse the [nodeschool](http://nodeschool.io/) site. Make a note of any workshops you might want to take in the future. (Note: The term "workshop" is a bit confusing. "Workshops" at nodeschool are modules you install and run locally on your system. If you want to attend a nodeschool meetup, you'll want to browse "Events".)

When you're ready to begin a workshop, just install it globally with `npm` and start the workshop via the command line. For example, to install [learnyounode](https://github.com/workshopper/learnyounode), use `npm install -g learnyounode`, then begin the workshop with `learnyounode`.

Instructions
------------

1. Install `learnyounode`

    ```
    npm install -g learnyounode
    ```

1. Fork and clone this repository.
1. Edit your fork's README. ([example](https://github.com/jrhorn424/javascripting))
1. Add and commit the README and push changes to your fork.
1. Move to the `learnyounode` directory. You will work here as you complete the workshop.
1. Run `learnyounode` from the command line and follow the instructions.
1. As you work, commit early and often.

Use commit messages as your learning journal, making notes of challenges and what you learned by completing each exercise ([example](https://github.com/jrhorn424/learnyounode/commit/5db673a16d4af82d3c5a80240edeb93b0e4dbd0c)).

Do something similar for the other required workshops. Repeat the last three steps. Do not create another fork or clone; all your work can be done from this repository.

Gotchas
-------

The `learnyounode` workshop suggests you add your code to a single file, `program.js`, that is updated with each exercise. Instead, you should create a new file for exercise and run `learnyounode run` and `learnyounode verify` against the exercise file.

Deliverables
------------

You are required to push your changes frequently, based on the following schedule. Each evening, push your changes and open a new pull request against this repository. Your submissions will be checked for completeness, **not** for accuracy. That's what `learnyounode verify` is for.

| Workshop       | Due (`t + 0 === today`)       |
| -------------- | ----------------------------- |
| `learnyounode` | Exercises 00--06 due `t + 0`  |
| `learnyounode` | Exercises 07--13 due `t + 4`  |
| `how-to-npm`   | Exercises 00--04 due `t + 0`  |
| `how-to-npm`   | Exercises 05--16 due `t + 4`  |
| `expressworks` | Exercises 00--01 due `t + 4`  |
| `expressworks` | Exercises 03--07 due `t + 11` |

Additional Resources
--------------------

* [Mozilla Developer Network: JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node Documentation](https://nodejs.org/api/)
* [NPM Documentation](https://docs.npmjs.com)
* [Art of Node](https://github.com/maxogden/art-of-node)
* [mongodbschool](http://mongodbschool.io)

[License](LICENSE)
------------------

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
