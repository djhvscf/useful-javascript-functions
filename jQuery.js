/**
* Extends the functionality of the jQuery object. This function allows only numbers in the input controls.
*
*/
var allowFloatNumbers = $.fn.AllowFloatNumbers =
function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var pos = 0;
            var el = $(this).get(0);

            if (document.selection) { // IE Support
                el.focus();
                var Sel = document.selection.createRange();
                var SelLength = document.selection.createRange().text.length;
                Sel.moveStart('character', -el.value.length);
                pos = Sel.text.length - SelLength;
            } else if (el.selectionStart || el.selectionStart == '0') { // Firefox support
                pos = el.selectionStart;
            }

            var key = e.charCode || e.keyCode || 0;
            var currentText = $(e.currentTarget).val() || $(e.currentTarget).text();

            return (
                key == 8 ||
                key == 16 ||
                key == 36 ||
                key == 13 ||
                key == 9 ||
                key == 46 ||
                ((key == 109 || key === 189) && currentText.indexOf("-") == -1 && pos == 0) ||
                (key == $.ui.keyCode.PERIOD && currentText.indexOf(".") == -1) ||
                (key == $.ui.keyCode.NUMPAD_DECIMAL && currentText.indexOf(".") == -1) ||
                (key >= 37 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
        $(this).keypress(function (e) {
            if (e.shiftKey) {
                e.preventDefault();
            }
        });
    });
};