function getID(e){return jQuery(document.getElementById(e))}function showRecoverPasswordForm(){recoverForm.parent().show();loginForm.parent().hide()}function hideRecoverPasswordForm(){recoverForm.parent().hide();loginForm.parent().show()}$(".thumbnail").click(function(){var e=$(this).attr("data-main-image");$("#main").fadeOut(400,function(){$("div.loader").fadeIn(100);$(this).attr("src",e).load(function(){$("div.loader").fadeOut(100);$(this).fadeIn()})})});var modalForm=getID("signinModal");modalForm.on("submit","form",function(e){var t=$(this),n=[],r=!0;t.find("input").each(function(){var e=$(this);if(e.attr("name")){if(e.val()===""){r=!1;e.closest(".form-group").addClass("has-error").append('<p class="help-block">Field can\'t be blank.</p>')}n.push(e.attr("name")+"="+e.val())}});var i=n.join("&");r&&$.ajax({type:"POST",url:$(this).attr("action"),data:i,success:function(e){var n=$(e).find("form .alert");n.length>0?t.prepend('<div class="alert alert-danger">'+n.html()+"</div>"):window.location.reload()},error:function(e){console.log("Form post error:");console.log(e)}});e.preventDefault()});var recoverForm=getID("customer-recover-password-form"),loginForm=getID("customer-login-form");$(".hide-recover-password-form").on("click",function(e){hideRecoverPasswordForm();e.preventDefault()});$(".show-recover-password-form").on("click",function(e){showRecoverPasswordForm();e.preventDefault()});recoverForm===null&&(getID("forgotten-password-link").style.display="none");loginForm===null&&(getID("recover-password-link").style.display="none");hideRecoverPasswordForm();window.location.hash==="#recover"&&showRecoverPasswordForm();