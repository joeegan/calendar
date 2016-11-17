* Fill in the tests and gain a decent level of coverage.
* Increase extensibility, allow multiple calendar days to be more obviously achievable, i.e ES6 classes.
* Reduce complexity of functions.
* Reduce the size of app.dist.js with some webpack config, no need for it's current file size.
* Ensure a wide range of event data can be accepted, e.g. 3 colliding dates.
* Adjust CSS to become more responsive and remove CSS concerns from Javascript.
* Consider a time library or rewrite the `getHours` function to get help from native Date class.
* Remove hardcoding of hour range, so start and end of day could be controlled on instantiation.
* Remove `JSON.stringify` and `JSON.parse` from `processEvents` - this was a quick route to memoisation.
