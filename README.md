![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)

Node: Self Study
================

Node is JavaScript without the browser. Since you're already familiar with JavaScript, you shouldn't think of learning Node as learning a new language. Instead, you'll be learning a new set of APIs that use JavaScript to get work done outside the browser. That means you won't have access to browser APIs, like manipulating the DOM, but you will still have events and asynchronous capabilities. Additionally, Node provides excellent utilities for working with the file system, making web requests, and processing incoming web requests.

[nodeschool](http://nodeschool.io/) is an excellent free and open-source resource for learning Node. This weekend, we recommend you complete the following workshops to become familiar with Node:

* [javascripting](https://github.com/sethvincent/javascripting): JavaScript review (optional)
* [learnyounode](https://github.com/workshopper/learnyounode): Introduction to Node
* [how-to-npm](https://github.com/npm/how-to-npm): Introduction to NPM
* [learnyoumongo](https://github.com/evanlucas/learnyoumongo): Introduction to MongoDB
* [scope-chains-closures](https://github.com/jesstelford/scope-chains-closures): Scope, Chains, and Closures (optional, challenging)
* [stream-adventure](https://github.com/substack/stream-adventure): Introduction to Node streams (optional, challenging)

If you're constrained for time this weekend or just want to spend it relaxing, forgo the optional exercises and focus on getting the basics down. Next weekend, plan on spending a little time with [expressworks](https://github.com/azat-co/expressworks).

Take a moment to browse the [nodeschool](http://nodeschool.io/) site. Make a note of any workshops you might want to take in the future. (Note: The term "workshop" is a bit confusing. "Workshops" at nodeschool are modules you install and run locally on your system. If you want to attend a nodeschool meetup, you'll want to browse "Events".)

When you're ready to begin a workshop, just install it globally with `npm` and start the workshop via the command line. For example, to install [learnyounode](https://github.com/workshopper/learnyounode), use `npm install -g learnyounode`, then begin the workshop with `learnyounode`. We recommend keeping your work in a directory named after the workshop.

For extra-super-bonus points, initialize a git repository in your working folder and commit early and often. Use commit messages as your learning journal, making notes of challenges and what you learned by completing each exercise ([example](https://github.com/jrhorn424/learnyounode/commit/5db673a16d4af82d3c5a80240edeb93b0e4dbd0c)). Then, push the repository to GitHub so future employers can get an idea of your learning process (not to mention your tenacity!).

To install all the recommended courses:

```
npm install -g learnyounode how-to-npm learnyoumongo
```

To install the recommended and optional courses:

```
npm install -g learnyounode how-to-npm learnyoumongo javascripting scope-chains-closures stream-adventure
```

Additional Resources
--------------------

* [Mozilla Developer Network: JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node Documentation](https://nodejs.org/api/)
* [NPM Documentation](https://docs.npmjs.com)
* [Art of Node](https://github.com/maxogden/art-of-node)
* [mongodbschool](http://mongodbschool.io)
