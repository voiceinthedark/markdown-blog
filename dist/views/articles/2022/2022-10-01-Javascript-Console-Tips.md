---
title: Javascript Console Tips
published_at: '2022-10-01T15:14:34.925Z'
updated_at: 2023-08-05T00:24:32.955Z
type: article
description: Javascript console tips and tricks you should use when debugging
link: /2022/Javascript-Console-Tips
image: /images/2023-07-31-04-22-45.png
tags:
  - javascript
  - console
---

## Tips

### Table in console
To format data into a nicely formatted table, use the console.table() method. Using `console.table()` on an array of objects will populate the data into a formatted table.

```javascript 
 console.table([{id: 1, name: 'jim'}, {id: 2, name: 'sim'}]);
```

### Timers
To use a timer in the console we use the `console.time('timer-name')` 
    and then close it with `console.timeEnd('timer-name')`
     when operation is done.

```javascript  
     console.time('fetchdata'); //[tl! highlight]
     fetch('url')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetchdata'); //[tl! highlight]
            console.log(data);
        })
```

### Styling

By superceding the log message with `%c` we can apply styles to the log.

```js
console.log('%c This is a styled message', 'color: blue;');
```
### Grouping
To group data during iteration we use the `console.group()` method.

```javascript
dogs.forEach(dog => {
    console.group(`${dog.name}`); // [tl! highlight]
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old!`);
    console.groupEnd(`${dog.name}`); //[tl! highlight]
});
```

See you next time
