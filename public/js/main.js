(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 100);
    };
    $(document).ready(function () {
        spinner();
        new WOW().init();
        
    })
    
    
    
})(jQuery);

