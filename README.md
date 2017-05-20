# jQuery-Before-Ready
Add a jQuery .ready() handler that will execute before existing .ready() handlers.

jQuery exeutes .ready() functions in source code order.  Sometimes we need to execute a .ready() function early.

<b>Instructions</b>

Load jquery-before-ready.js immediatley after jQuery, or as as early as possible.

Use .beforeReady() instead of .ready().  You should still use .ready() as normal for scripts that do not need early execution.

<b>Example</b>

```javascript
$.beforeReady(function() {
    alert("Ere I am JH")
});
```
