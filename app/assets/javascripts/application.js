// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require turbolinks
//= require jput.min
//= require bootstrap
//= require_tree .




// CUSTOM


  var showText = function(){
       var fullName = document.getElementById('guest_fullname');
       var fullNameShow = document.getElementById('guest_fullname_show');

       if (fullName && fullNameShow){
            fullNameShow.innerHTML = fullName.value;
       }

       var dnI = document.getElementById('guest_dni');
       var dniShow = document.getElementById('guest_dni_show');

       if (dnI && dniShow){
            dniShow.innerHTML = dnI.value;
       }

       var idCar = document.getElementById('guest_idcar');
       var idCarShow = document.getElementById('guest_idcar_show');

       if (idCar && idCarShow){
            idCarShow.innerHTML = idCar.value;
       }
       var idCar2 = document.getElementById('guest_idcar');
       var idCarShow2 = document.getElementById('guest_idcar_show_2');

       if (idCar2 && idCarShow2){
            idCarShow2.innerHTML = idCar2.value;
       }


       var fullName2 = document.getElementById('guest_fullname');
       var fullNameShow2 = document.getElementById('guest_fullname_show2');

       if (fullName2 && fullNameShow2){
            fullNameShow2.innerHTML = fullName2.value;
       }



       var guestCar = $('#guest_car:checkbox:checked').length > 0;
       if (guestCar = true) {
         $('#guest_car_show').prop('checked', true);
       } 

       var guestCar = $('#guest_fewdays:checkbox:checked').length > 0;
       if (guestCar = true) {
         $('#guest_fewdays_show').prop('checked', true);
       } 

  };
  $(document).ready(function(){
      $("#guest_car").click(function(){
          $("#ifcar").toggleClass("d-none");
      });
      $("#guest_fewdays").click(function(){
          $("#iffewdays").toggleClass("d-none");
      });
      $("#guest_kindcard_checkedtrue_classwith-gap_namekindcard_valueautomovil").click(function(){
          $("#if_carro").addClass("d-block");
          $("#if_moto").addClass("d-none");
          $("#if_bike").addClass("d-none");
          $("#if_moto").removeClass("d-block");
          $("#if_bike").removeClass("d-block");
      });
      $("#guest_kindcard_classwith-gap_namekindcard_valuemotocicleta").click(function(){
          $("#if_carro").addClass("d-none");
          $("#if_carro").removeClass("d-block");
          $("#if_moto").addClass("d-block");
          $("#if_bike").addClass("d-none");
          $("#if_bike").removeClass("d-block");
      });
      $("#guest_kindcard_classwith-gap_namekindcard_valuebicicleta").click(function(){
          $("#if_carro").addClass("d-none");
          $("#if_moto").addClass("d-none");
          $("#if_carro").removeClass("d-block");
          $("#if_moto").removeClass("d-block");
          $("#if_bike").addClass("d-block");
      });

  });

// DATEPICKER
$( function() {
$( ".datepicker" ).datepicker();
} );


/* Fundraising Grader
*
* Generic Copyright, yadda yadd yadda
*
* Plug-ins: jQuery Validate, jQuery 
* Easing
*/

$(document).ready(function() {
    var current_fs, next_fs, previous_fs;
    var left, opacity, scale;
    var animating;
    $(".new_guest").validate({
        errorClass: 'invalid',
        errorElement: 'span',
        errorPlacement: function(error, element) {
            error.insertAfter(element.next('span').children());
        },
        highlight: function(element) {
            $(element).next('span').show();
        },
        unhighlight: function(element) {
            $(element).next('span').hide();
        }
    });
    $(".next").click(function() {
        $(".new_guest").validate({
            errorClass: 'invalid',
            errorElement: 'span',
            errorPlacement: function(error, element) {
                error.insertAfter(element.next('span').children());
            },
            highlight: function(element) {
                $(element).next('span').show();
            },
            unhighlight: function(element) {
                $(element).next('span').hide();
            }
        });
        if ((!$('.new_guest').valid())) {
            return true;
        }
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutExpo'
        });
    });
    $(".submit").click(function() {
        $(".new_guest").validate({
            errorClass: 'invalid',
            errorElement: 'span',
            errorPlacement: function(error, element) {
                error.insertAfter(element.next('span').children());
            },
            highlight: function(element) {
                $(element).next('span').show();
            },
            unhighlight: function(element) {
                $(element).next('span').hide();
            }
        });
        if ((!$('.new_guest').valid())) {
            return false;
        }
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutExpo'
        });
    });
    $(".previous").click(function() {
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        previous_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1 - now) * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'left': left
                });
                previous_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutExpo'
        });
    });
});



// Radio and Checkbox focus class
let radio_checkbox = 'input[type=radio], input[type=checkbox]';
$(document).on('keyup', radio_checkbox, function(e) {
  // TAB, check if tabbing to radio or checkbox.
  if (e.which === M.keys.TAB) {
    $(this).addClass('tabbed');
    let $this = $(this);
    $this.one('blur', function(e) {
      $(this).removeClass('tabbed');
    });
    return;
  }
});

let text_area_selector = '.materialize-textarea';
$(text_area_selector).each(function() {
  let $textarea = $(this);
  /**
   * Resize textarea on document load after storing
   * the original height and the original length
   */
  $textarea.data('original-height', $textarea.height());
  $textarea.data('previous-length', this.value.length);
  M.textareaAutoResize($textarea);
});

$(document).on('keyup', text_area_selector, function() {
  M.textareaAutoResize($(this));
});
$(document).on('keydown', text_area_selector, function() {
  M.textareaAutoResize($(this));
});