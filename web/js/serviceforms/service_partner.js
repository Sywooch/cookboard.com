$(function(){		$('#partner2_initialemail').focus();		$('#partner2_btn_1').click(function(){            var initial_email = $('#partner2_initialemail').val();			var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;						$('#partner2_warning1').html('');			            if (initial_email == ""){                $('#partner2_warning1').html('* Please enter email*');                $('#partner2_initialemail').focus();			}else if(!emailfilter.test(initial_email)){                $('#partner2_warning1').html('* Invalid Email *');                $('#partner2_initialemail').focus();            }else {				$("#partner2_btn_1").attr('disabled', true);                 $.post('http://www.api.contrib.com/forms/fullcontactdetails',                       {initial_email:initial_email}                       ,function(data){                           $('#partner2_firstname').val(data.fname);                           $('#partner2_lastname').val(data.lname);                           $('#partner2_email').val(initial_email);                           $('#partner2_step1').hide();                           $('#partner2_step2').show();                       }				);            }			});		$('#partner2_btn_2').click(function(){                        var firstname = $('#partner2_firstname').val();	            var lastname = $('#partner2_lastname').val();	            var email = $('#partner2_email').val();		            var country_id = $('#partner2_country').val();			var country = $("#partner2_country option:selected").text();            var city = $('#partner2_city').val();	            var password = $('#partner2_password').val();	            var password2 = $('#partner2_password2').val();	            			var website = $('#partner2_website').val();		            var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;            var letters = /^[a-zA-Z ]+$/;            var alphanumeric = /^[0-9a-zA-Z ]+$/;            						            $('#partner2_warning2').html('');			            if(firstname==''){                $('#partner2_firstname').focus();				$('#partner2_warning2').html('* First name is required *');                            }else if(!letters.test(firstname)){                $('#partner2_firstname').focus();                $('#partner2_warning2').html('* Accepts letters only *');                           }else if(firstname.length > 25){                $('#partner2_firstname').focus();                $('#partner2_warning2').html('* Name should have 3 to 25 characters *');                            }else if(firstname.length < 3 ){			                $('#partner2_firstname').focus();                $('#partner2_warning2').html('* Name should have 3 to 25 characters *');                            }else if(lastname==''){                $('#partner2_lastname').focus();				$('#partner2_warning2').html('* Last name is required *');                            }else if(!letters.test(lastname)){                $('#partner2_lastname').focus();                $('#partner2_warning2').html('* Accepts letters only *');                	            }else if(lastname.length > 25){                $('#partner2_lastname').focus();                $('#partner2_warning2').html('* Name should have 3 to 25 characters *');                            }else if(lastname.length < 3 ){			                $('#partner2_lastname').focus();                $('#partner2_warning2').html('* Name should have 3 to 25 characters *');                            }else if(email==''){                $('#partner2_email').focus();				$('#partner2_warning2').html('* Email is required *');                            }else if(!emailfilter.test(email)){                $('#partner2_email').focus();                $('#partner2_warning2').html('* Invalid email *');   			}else if(website != '' && validateURL(website)===false) {                $('#partner2_website').focus();                $('#partner2_warning2').html('* Enter a valid link for website*');            }else if(country_id==''){                $('#partner2_country').focus();				$('#partner2_warning2').html('* Country is required *');                            }else if(city==''){                $('#partner2_city').focus();				$('#partner2_warning2').html('* City is required *');                            }else if(!alphanumeric.test(city)){                $('#partner2_city').focus();                $('#partner2_warning2').html('* Alphanumeric only *');                            }else if(password==''){                $('#partner2_password').focus();				$('#partner2_warning2').html('* Password is required *');                            }else if (password.length < 5){                $('#partner2_password').focus();                $('#partner2_warning2').html('* Password should have atleast 5 characters *');                            }else if(password2==''){                $('#partner2_password2').focus();				$('#partner2_warning2').html('* Please confirm password *');                            }else if(password!=password2){                $('#partner2_password2').focus();                $('#partner2_warning2').html('* Password not match *');                            }else{ 				$("#partner2_btn_2").attr('disabled', true);				$('#partner2_step2').hide();				$('#partner2_step3').show();			}           	});					$('#partner2_back_3').click(function(){                        $('#partner2_step3').hide();			$('#partner2_step2').show();			$("#partner2_btn_2").attr('disabled', false);						$('#partner2_warning3').html('');	});    		$('#partner2_btn_3').click(function(){		var message = $('#partner2_message').val();		var partnertype = $('#partner2_type').val();								if(partnertype == ""){			$('#partner2_warning3').html('* Please choose partnership type *');		}else if(message == ""){			$('#partner2_warning3').html('* Why we should partner with you? *');		}else{			$('#partner2_step4').show();			$('#partner2_step3').hide();		}	});		$('#partner2_back_4').click(function(){		$('#partner2_step3').show();		$('#partner2_step4').hide();	});        	$('#partner2_btn_4').click(function(){		 			var domain = $('#partner2_domain').val();				var firstname = $('#partner2_firstname').val();	            var lastname = $('#partner2_lastname').val();	            var email = $('#partner2_email').val();		            var country_id = $('#partner2_country').val();	            var country = $("#partner2_country option:selected").text();            var city = $('#partner2_city').val();	            var password = $('#partner2_password').val();	            var password2 = $('#partner2_password2').val();	            			var website = $('#partner2_website').val();			var companyurl = $('#partner2_companyurl').val();		            var partnertype = $('#partner2_type').val();			            var message = $('#partner2_message').val();						var companytitle = $('#partner2_company').val();            var companydesc = $('#partner2_companydescription').val();            var companyimage = $('#partner2_companyimage').val();            var companyurl = $('#partner2_companyurl').val();			            var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;            var letters = /^[a-zA-Z ]+$/;            var alphanumeric = /^[0-9a-zA-Z ]+$/;                      			           			            if(companytitle==''){					$('#partner2_company').focus();				$('#partner2_warning4').html('* Company name is required *');			}else if(!alphanumeric.test(companytitle)){				$('#partner2_company').focus();				$('#partner2_warning4').html('* Alphanumeric only *');			}else if(companydesc==''){					$('#partner2_companydescription').focus();				$('#partner2_warning4').html('* Company description is required *'); 			}else if(companyimage==''){					$('#partner2_companyimage').focus();				$('#partner2_warning4').html('* Company image/logo is required *');			}else if(validateURL(companyimage)===false){				$('#partner2_companyimage').focus();				$('#partner2_warning4').html('* Invalid URL/link for company image *'); 			}else if(companyurl==''){					$('#partner2_companyurl').focus();				$('#partner2_warning4').html('* Company link is required *'); 			}else if(validateURL(companyurl)===false){				$('#partner2_companyurl').focus();				$('#partner2_warning4').html('* Invalid company link *'); 			}else{				$("#partner2_btn_4").attr('disabled', true);				$("#partner2_back_4").attr('disabled', true);							                $.post("http://www.api.contrib.com/forms/checkexist",{'field':'EmailAddress','value':email},function(data){					$('#partner2_warning4').html('* Please wait. Checking in progress. * ');									if (data.status == 0){						$('#partner2_warning4').html('* Please wait. Checking in progress. * ');							  						$.post('http://www.contrib.com/forms/save_partner',						   {								domain:domain,								firstname:firstname,								lastname:lastname,								email:email,								country_id:country_id,								country:country,								city:city,								password:password,								website:website,								companyurl:companyurl,								partnertype:partnertype,								message:message,								company:companytitle,								companydesc:companydesc,								companyimage:companyimage,								companyurl:companyurl														   }						   ,function(data){								if(data.success===true){									$('div#viewcontriblink').text('Thank you!');									$('div#viewcontriblink').html('<a href="http://www.contrib.com/account/autologinforms?email='+data.email+'&form=partnership"><button class="btn btn-success btn-lg">View your Contrib.com account now!</button></a>');									$('#partner2_step4').hide();									$('#partner2_final').show();								}else{									$('#partner2_warning4').html('* '+data.result+' * ');									$("#partner2_btn_4").attr('disabled', false);									$("#partner2_back_4").attr('disabled', false);																	}						   }						);												                                              $.post("http://www.manage.vnoc.com/salesforce/addlead",                               {                                   'firstName':firstname,                                   'lastName':lastname,                                   'title':'',                                   'email':email,                                   'phone':'',                                   'street':'',                                   'city':city,                                   'country':country,                                   'state':'',                                   'zip':'',                                   'domain':domain,                                   'partner2_type':partnertype,                                   'message':message,                                   'form_type':'VNOC Partnership'                               }                               ,function(data2){                                   //_gaq.push(['_trackEvent', 'Partnership', domain, 'Form Submission']);                                  // _gaq.push(['_trackEvent', 'Domains', 'Signup', domain]);                               }                              );	                                            }else{                        $('#partner2_warning4').html('* Email already have an account. * <a href="http://www.contrib.com" target="_top">Please LOGIN here.</a>');						$("#partner2_btn_4").attr('disabled', false);						$("#partner2_back_4").attr('disabled', false);                    }                });				            }		 	});	});function validateURL(url){	return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);}