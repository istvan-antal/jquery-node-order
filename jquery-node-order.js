/*!
 * jQuery Node Order Plugin v0.1
 * http://www.istvan-antal.ro/jquery-node-order.html
 *
 * Copyright 2011, Antal István Miklós
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.istvan-antal.ro/open-source.html
 *
 */

"use strict";
/*global jQuery*/
(function ($) {
    $.extend($.fn, {
        forward: function () {
            var elem = this[0],
                found = false;
            
            this.parent().children().each(function () {
                if (this === elem) {
                    found = true;
                } else {
                    if (found) {
                        $(this).after(elem);
                        found = false;
                        return false;
                    }
                }
            });
        },
        backward: function () {
            var elem = this[0],
                prev;
            
            this.parent().children().each(function () {
                if (this === elem) {
                    if (prev) {
                        $(prev).before(elem);
                    }
                    return false;
                }
                prev = this;
            });
        },
        order: function () {
            var n = -1, elem = this[0];
            
            this.parent().children().each(function (i) {
                if (this === elem) {
                    n = i;
                    return false;
                }
            });
            
            return n;
        }
    });
}(jQuery));