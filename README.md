# jQuery-Before-Ready
Add a jQuery .ready() handler that will execute before existing .ready() handlers.

jQuery exeutes .ready() functions in source code order.  Sometimes we need to execute a .ready() function early.

<b>Instructions</b>

Load jquery-before-ready.js immediatley after jQuery, as as early as possible.

Use .beforeReady() instead of .ready()

<b>Example</b>

$.beforeReady(function() {
    alert("Ere I am JH")
});
