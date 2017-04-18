// Load this script immediatley after jQuery, or as as early as possible.
// Then use .beforeReady instead of .ready(), e.g.
//
//  $.beforeReady(function() {
//    alert("Ere I am JH")
//  });
//

jQuery.beforeReadyPrivateArray = []
jQuery.beforeReady = function (handler) {
    jQuery.beforeReadyPrivateArray.push(handler)
}

$(function () {
    var arrayLength = jQuery.beforeReadyPrivateArray.length;
    for (var i = 0; i < arrayLength; i++) {
        jQuery.beforeReadyPrivateArray[i]()
    }
})
