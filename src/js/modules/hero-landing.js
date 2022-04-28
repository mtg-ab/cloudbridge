jQuery( document ).ready(function() {
    if(jQuery("section").hasClass("hero-landing")){
        
        window.addEventListener('message', function (event) {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {

                if (event.data.id === jQuery(".ms-form-section form").data("form-id")) {
                    var formid = "#multi-step-form";
                    jQuery(formid + ' .hs-richtext').parent().addClass('wrapper-point');


                    jQuery(document).on("keypress", formid + " form", function (event) {
                        return event.keyCode != 13;
                    });

                    jQuery(formid + ' .wrapper-point').each(function (index) {
                        var dataStep = "step" + (index + 1);
                        var step = index + 1;

                        jQuery(this).nextUntil(".wrapper-point").addBack().wrapAll('<div data-filter=".' + dataStep + '" class="form-step-content ' + dataStep + '"  />');
                        jQuery(formid + ' .ms-form-steps').append('<div class="from-step-outer ' + dataStep + '"><div class="from-step" data-filter="' + dataStep + '">{{ module.theme_settings.step_label }} ' + step + '</div></div>');
                    });

                    jQuery(formid + ' .form-step-content').each(function () {
                        if (!jQuery(this).find('.hs-button.primary').length > 0) {
                            //jQuery(this).append('<a class="hs-button primary prev-btn btn p-0 m-0">Étape Précédente {{ module.theme_settings.previous_button_text }} </a>  <a class="hs-button disable next-btn btn r-arrow arrow-white">{{ module.theme_settings.next_button_text }}Suivant </a>');
                            jQuery(this).append("<a class='hs-button disable next-btn btn'>{{ module.theme_settings.next_button_text }}Next step</a >");
                        }
                        else {
                            //jQuery(this).find('.actions').prepend('<a class="hs-button btn primary prev-btn m-0 p-0">Étape Précédente {{ module.theme_settings.previous_button_text }} </a> <a class="hs-button  primary next-btn btn submit_btn m-0">Envoyer</a>');
                            jQuery(this).find('.actions').prepend('<a class="hs-button  primary next-btn btn submit_btn m-0">Envoyer</a>');
                        }
                    });

                    jQuery(formid + ' .form-step-content.step1,.ms-form-steps .from-step-outer:first-child').addClass('active');
                    var validity = false;
                    jQuery(document).on('click', formid + '.ms-survey-from .next-btn', function () {
                        var el = jQuery(this);
                        var element = jQuery(this).closest('.form-step-content').find('[required]');
                        var elementtwo = jQuery(this).closest('.form-step-content').find('ul[required]');
                        var file = jQuery(this).closest('.form-step-content').find('input[type="file"]');
                        var elcount = 0;

                        var getRel = jQuery(this).closest('.form-step-content').attr('data-filter');
                        if (!element.hasClass('invalid')) {
                            validity = true;
                        }
                        else {
                            validity = false;
                        }


                        element.each(function () {
                            var elnew = jQuery(this);
                            jQuery(this).focus();
                            jQuery(this).blur();

                            setTimeout(function () {
                                elnew.blur();
                                if (elnew.hasClass('invalid')) {
                                    validity = false;
                                }

                            }, 300);



                        });

                        elementtwo.each(function () {
                            var elnew = jQuery(this).find('input');



                            elnew.each(function () {
                                var el = jQuery(this);


                                if (el.is(':checked')) {
                                    elcount = elcount + 1;
                                }
                            });

                            console.log(elcount);
                            if (elcount < 1) {
                                validity = false;
                                jQuery(this).after('<ul class="no-list hs-error-msgs inputs-list" ><li><label >Sélectionnez au moins une option.</label></li></ul>')


                            }
                            else {
                                jQuery(this).next('.hs-error-msgs').remove();
                            }

                            elcount = 0;


                        });

                        file.each(function () {
                            var getid = jQuery(this).attr('id');

                            if (jQuery(this).get(0).files.length === 0) {
                                validity = false;
                                jQuery(this).closest('.hs-form-field').after('<ul class="no-list hs-error-msgs inputs-list" ><li><label >Sélectionnez au moins une option.</label></li></ul>');
                            }
                            else {
                                jQuery(this).closest('.hs-form-field').next('.hs-error-msgs').remove();

                            }
                        });


                        jQuery(formid).click()

                        setTimeout(function () {
                            if (validity) {


                                jQuery(formid + ' .from-step-outer' + getRel).removeClass('active').addClass('completed');
                                jQuery(formid + ' .from-step-outer' + getRel).next().addClass('active');
                                el.closest('.form-step-content').removeClass('active invalid').fadeOut('500', function () {
                                    el.closest('.form-step-content').next().addClass('active').fadeIn(500);
                                    validity = false;
                                });


                                if (el.hasClass('submit_btn')) {

                                    //jQuery(this).next('input[type="submit"]').click();
                                    jQuery(formid + ' input[type="submit"]').click();

                                }
                            } else {
                                el.closest('.form-step-content').addClass('invalid');
                            }
                            elcount = 0


                        }, 500);




                    });

                    jQuery(document).on('click', formid + '.ms-survey-from input[type="checkbox"] , ' + formid + '.ms-survey-from input[type="radio"]', function () {
                        var el = jQuery(this);
                        if (el.is(':checked')) {
                            el.closest('ul').next('.hs-error-msgs').remove();
                        }


                    });


                    jQuery(document).on('change', formid + '.ms-survey-from input[type="file"]', function () {
                        jQuery(this).closest('.hs-form-field').next('.hs-error-msgs').remove();
                    });


                    var btnval = jQuery(formid + ' .submit_btn').next('input[type="submit"]').val();
                    jQuery(formid + ' .submit_btn').text(btnval);

                    jQuery(formid + '.ms-survey-from').on('click', '.prev-btn', function () {
                        var el = jQuery(this);
                        var getRel = jQuery(this).closest(formid + ' .form-step-content').attr('data-filter');
                        jQuery(formid + ' .from-step-outer' + getRel).removeClass('active').removeClass('completed');
                        jQuery(formid + ' .from-step-outer' + getRel).prev().addClass('active').removeClass('completed');;
                        el.closest(formid + ' .form-step-content').removeClass('active').fadeOut('500', function () {
                            el.closest(formid + ' .form-step-content').prev().addClass('active').fadeIn();
                        });
                    });
                }
            };
        });
        document.onreadystatechange = function () {
            if (document.readyState !== "complete") {
                document.querySelector(
                    "#multi-step-form").style.display = "none";
                document.querySelector(
                    "#loader").style.visibility = "visible";
            } else {
                document.querySelector(
                    "#loader").style.display = "none";
                document.querySelector(
                    "#multi-step-form").style.display = "block";
            }
        };

    }
})