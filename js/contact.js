$(document).ready(function () {

    (function ($) {
        "use strict";


        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    username: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                    }
                },
                messages: {
                    username: {
                        required: "Please enter your email",
                    },
                    password: {
                        required: "Please enter your password",
                    }
                },
                submitHandler: function (form) {
                    $(form).submit();
                }
            })
        })

    })(jQuery)
})