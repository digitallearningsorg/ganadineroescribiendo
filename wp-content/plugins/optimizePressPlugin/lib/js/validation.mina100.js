opjq(document).ready(function(a){function b(b){var c=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;i.submit(function(){h=a(this);var d=!0;return a.each(a(this).find('input[required="required"]'),function(b,e){a(e).attr("name").indexOf("email")>-1&&!1===c.test(a(e).val())?(alert(OPValidation.labels.email),d=!1):0==a(e).val().length&&(alert(OPValidation.labels.text),d=!1)}),b.resolve(d),!1})}function c(b){i.submit(function(){var c=a(this).find("input[name=provider]").val();return"undefined"==typeof c||"infusionsoft"===c?(op_show_loading(),a.ajax({url:OPValidation.ajaxUrl,type:"POST",data:{nonce:OPValidation.nonce,action:"optimizepress_record_optin",provider:c},success:function(a){b.resolve(a)}})):b.resolve(!0),!1})}function d(b){i.submit(function(){var c=a(this).find("input[name=provider]").val();"undefined"!=typeof c&&"infusionsoft"===c&&a(this).find(".op-form-privacy-gdpr-consent-checkbox:checked").prev().remove(),b.resolve(!0)})}function e(b){i.submit(function(){var c=a(this).find("input[name=provider]").val(),d=a(this).find("input[name=opm_level]").val(),e=a(this).find("input[name=opm_packages]").val();return"undefined"!=typeof c&&"infusionsoft"!==c||"undefined"==typeof d&&"undefined"==typeof e?b.resolve(!0):(op_show_loading(),a.ajax({type:"POST",url:OPValidation.ajaxUrl,data:a(this).serialize()+"&action=optimizepress_add_to_opm&nonce="+OPValidation.nonce,success:function(a){b.resolve(a)}})),!1})}function f(b){i.submit(function(){var c=a(this).find("input[name=provider]").val(),d=a(this).find("input[name=gotowebinar]").val(),e=a(this).find("input[type=email]").val();return"undefined"!=typeof c&&"infusionsoft"!==c||"undefined"==typeof d?b.resolve(!0):(a(this).attr("action",a(this).find("input[name=redirect_url]").val()),op_show_loading(),a.ajax({type:"POST",url:OPValidation.ajaxUrl,data:a(this).serialize()+"&action=optimizepress_process_gtw&email="+e+"&webinar="+d+"&nonce="+OPValidation.nonce,success:function(a){b.resolve(a)}})),!1})}function g(){var b=[],c=0,d=OptimizePress._validationDeferreds,e=d.length;for(c=0;e>c;c+=1)b[c]=a.Deferred(),"function"==typeof d[c]?d[c](b[c]):b[c].resolve(!0);a.when.apply(a,b).done(function(){var a=!0,b=0;for(b=0;b<arguments.length;b+=1)arguments[b]===!1?a=!1:"function"==typeof arguments[b]&&arguments[b]()===!1&&(a=!1);i.off(),setTimeout(function(){a?(h||(h=i),h||(h=i),"function"!=typeof h[0].submit?h.find(":submit").trigger("click"):h.submit()):(g(),op_hide_loading())},1)})}var h,i=a("form.op-optin-validation");OptimizePress._validationDeferreds=OptimizePress._validationDeferreds||[],OptimizePress._validationDeferreds.push(b),OptimizePress._validationDeferreds.push(c),OptimizePress._validationDeferreds.push(d),OptimizePress._validationDeferreds.push(e),OptimizePress._validationDeferreds.push(f),g()});