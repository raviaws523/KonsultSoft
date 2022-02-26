< script data - cfasync = "false"
src = "/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js" > < /script><script>
    //AJAX_POINTER
var ajaxNoty;
var ajaxError = 'Error while processing your request.'

//NOTIFY:
function myNotify(text, type, timeout) {
    timeout = (!timeout) ? false : timeout * 1000;
    return noty({
        text: text,
        type: type,
        dismissQueue: true,
        layout: 'bottomRight',
        theme: 'default',
        timeout: timeout,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: { height: 'toggle' },
            close: { height: 'toggle' },
            easing: 'swing',
            speed: 0 // opening & closing animation speed
        }
    });
}

function confirmAction(text) {
    return noty({
        text: text,
        type: "confirm",
        dismissQueue: true,
        layout: 'center',
        theme: 'default',
        timeout: 0,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        buttons: [{
                addClass: 'btn btn-primary',
                text: 'Ok',
                onClick: function($noty) {
                    return true;

                }
            },
            {
                addClass: 'btn btn-danger',
                text: 'Cancel',
                onClick: function($noty) {
                    return false;
                }
            }
        ]
    });
} <
/script>


<
script type = "text/javascript"
src = "/assets/7a29a53c/js/bootstrap.js" > < /script> <
script type = "text/javascript" > < /script>


/*<![CDATA[*/
jQuery('body').popover({ 'selector': 'a\x5Brel\x3Dpopover\x5D' });
jQuery('body').tooltip({ 'selector': 'a\x5Brel\x3Dtooltip\x5D' });
jQuery(function($) {

    jQuery(document).on('click', '#yw1', function() {
        jQuery.ajax({
            url: "\/usercp\/auth\/captcha?refresh=1",
            dataType: 'json',
            cache: false,
            success: function(data) {
                jQuery('#yw1').attr('src', data['url']);
                jQuery('body').data('captcha.hash', [data['hash1'], data['hash2']]);
            }
        });
        return false;
    });

});
/*]]>*/
<
/script>

<
script async src = '/cdn-cgi/challenge-platform/h/g/scripts/invisible.js' > < /script>

<
script type = "text/javascript" > (function() { window['__CF$cv$params'] = { r: '6e2bb18dfcf6068e', m: 'tnU81LD04soS0Fxa_eq17lPK5r5m3Ngvg1YMMSDRIw0-1645737163-0-AYEwWRrmoPG+y85jAlRYPA3sdl+0Tud0KWjIUUTITz3e4OQZZ2B/q8Rm9apaYkXAnx8c9GBcgaVgQ991uL8RfppUb+nNXHzYOB7+hceJCc3hddDIc06Y5fchpTpXZf7zPP+kDfFYCOwSjJNx9ufF1m4=', s: [0x16093924d8, 0x50d117c08e], u: '/cdn-cgi/challenge-platform/h/g' } })(); < /script>

<
script > $(function() {
    $('#captcha').insertAfter('#inputCaptcha');
}); < /script>

<
script type = "text/javascript"
src = "/assets/d9dc8d4e/jquery.min.js" > < /script> <
script type = "text/javascript"
src = "/css/cyborg/bootstrap.bundle.min.js" > < /script> <
script type = "text/javascript"
src = "/js/jquery-ui/js/jquery-ui-1.10.0.custom.min.js" > < /script> <
script type = "text/javascript"
src = "/js/noty/jquery.noty.js" > < /script> <
script type = "text/javascript"
src = "/js/noty/layouts/center.js" > < /script> <
script type = "text/javascript"
src = "/js/noty/layouts/bottomRight.js" > < /script> <
script type = "text/javascript"
src = "/js/noty/themes/default.js" > < /script> <
script type = "text/javascript"
src = "/js/core.js" > < /script> <
script type = "text/javascript"
src = "/js/datepicker/js/bootstrap-datepicker.js" > < /script>



<script type="text/javascript" src="/assets/d9dc8d4e/jquery.min.js"></script>
<script type="text/javascript" src="/assets/d9dc8d4e/jquery.ba-bbq.min.js"></script>
<script type="text/javascript" src="/css/cyborg/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui/js/jquery-ui-1.10.0.custom.min.js"></script>
<script type="text/javascript" src="/js/noty/jquery.noty.js"></script>
<script type="text/javascript" src="/js/noty/layouts/center.js"></script>
<script type="text/javascript" src="/js/noty/layouts/bottomRight.js"></script>
<script type="text/javascript" src="/js/noty/themes/default.js"></script>
<script type="text/javascript" src="/js/core.js"></script>
<script type="text/javascript" src="/js/datepicker/js/bootstrap-datepicker.js"></script>

<script>$(document).ready(function () {
        $('.invite-button, .invite-href').click(function () {
            $('.form-popupI').modal({show: true,});
        });
    }); </script>


<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>$(document).ready(function () {
        $('.support-button').click(function () {
            $('.form-popupS').modal({show: true,});
        });
    }); </script>

<script>$("#scriptMessageId").hide();
            $("#messageId").show();</script>

            <script>
    function QrCode(type, address){
        let csrf = [];
        csrf[0] = 'YII_CSRF_TOKEN';
        csrf[1] = 'Z3ZRNH5JQmtlN29Fa0FfcVNJV3ZtRHBGU1JDUzFDYnXFmluf_1cxD3zNmZxRebfxTt4yhWGcslxNeXLf3n7dKg==';
        $.ajax({
            url: location.protocol+"//"+location.host+"/operations/topup/generateQrCode",
            type: 'POST',
            async: true,
            response: 'text',
            data:{[csrf[0]] : csrf[1], 'type': type, 'address': address},
            success: function(data){
                $('#qr-'+type).html('');
                $('#qr-'+type).html('<img id="qr-code-'+type+'" style="width: 100%">');
                $('#qr-code-'+type).attr('src', data);
            },
            error: function () {
                $('#qr-'+type).children().find('i').remove();
                return false;
            }
        });
    }
    $(document).ready(function (){
        let btcAddress = $('#btc-address').text();
        let xmrAddress = $('#xmr-address').text();
        QrCode('bitcoin', btcAddress);
        QrCode('monero', xmrAddress);
    })
</script>


<script>
    //AJAX_POINTER
    var ajaxNoty;
    var ajaxError = 'Error while processing your request.'

    //NOTIFY:
    function myNotify(text, type, timeout) {
        timeout = (!timeout) ? false : timeout * 1000;
        return noty({
            text: text,
            type: type,
            dismissQueue: true,
            layout: 'bottomRight',
            theme: 'default',
            timeout: timeout,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            animation: {
                open: {height: 'toggle'},
                close: {height: 'toggle'},
                easing: 'swing',
                speed: 0 // opening & closing animation speed
            }
        });
    }

    function confirmAction(text) {
        return noty({
            text: text,
            type: "confirm",
            dismissQueue: true,
            layout: 'center',
            theme: 'default',
            timeout: 0,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            buttons: [
                {
                    addClass: 'btn btn-primary', text: 'Ok', onClick: function ($noty) {
                        return true;

                    }
                },
                {
                    addClass: 'btn btn-danger', text: 'Cancel', onClick: function ($noty) {
                        return false;
                    }
                }
            ]
        });
    }
</script>

<script>$(function () {
                                $('#captcha').insertAfter('#inputCaptcha');
                            });</script>

<script>
    //AJAX_POINTER
    var ajaxNoty;
    var ajaxError = 'Error while processing your request.'

    //NOTIFY:
    function myNotify(text, type, timeout) {
        timeout = (!timeout) ? false : timeout * 1000;
        return noty({
            text: text,
            type: type,
            dismissQueue: true,
            layout: 'bottomRight',
            theme: 'default',
            timeout: timeout,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            animation: {
                open: {height: 'toggle'},
                close: {height: 'toggle'},
                easing: 'swing',
                speed: 0 // opening & closing animation speed
            }
        });
    }

    function confirmAction(text) {
        return noty({
            text: text,
            type: "confirm",
            dismissQueue: true,
            layout: 'center',
            theme: 'default',
            timeout: 0,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            buttons: [
                {
                    addClass: 'btn btn-primary', text: 'Ok', onClick: function ($noty) {
                        return true;

                    }
                },
                {
                    addClass: 'btn btn-danger', text: 'Cancel', onClick: function ($noty) {
                        return false;
                    }
                }
            ]
        });
    }
</script>
<script type="text/javascript">
/*<![CDATA[*/
jQuery(function($) {

jQuery(document).on('click', '#yw1', function(){
	jQuery.ajax({
		url: "\/usercp\/auth\/captcha?refresh=1",
		dataType: 'json',
		cache: false,
		success: function(data) {
			jQuery('#yw1').attr('src', data['url']);
			jQuery('body').data('captcha.hash', [data['hash1'], data['hash2']]);
		}
	});
	return false;
});

});
/*]]>*/
</script>

