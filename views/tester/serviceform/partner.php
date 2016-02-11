<?php
include 'variables.php';
$info['domain'] = $domain;
?>
						<div class="form-partner1" id="partner_step1">
							<div class="row-fluid">
								<div class="span12 text-center">
									
									<h4 class="text-capitalize">
										Partner with <?=ucfirst($info['domain'])?>
									</h4>
									
									<p class="blck-p">
										When you submit your registration, you can quickly partner with <?=ucfirst($info['domain'])?>. This is a great way to build your service and at the same way add value to this asset.
									</p>
									<br>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<form class="" onsubmit="return false;">
										<div class="step text-center">
											<h4>Step 1: <i class="icon-file-alt"></i> Submit Your Partnership Application</h4>
											<p>You'll receive an email when we feel it will be a win-win.</p>
										</div>
										<div class="step text-center">
											<h4>Step 2: <i class="icon-tasks"></i> Join a Team</h4>
											<p>Once your partnership proposal is something we could take on, we will make you part of our team and our partner.</p>
										</div>
										<p></p>
										<div class="group-form">
											<input type="text" class="input-block-level input-s1" id="partner_initialemail" placeholder="Enter Email Address">
										</div>
										<span class="pull-left text-error" id="partner_warning1"></span>
										<button type="submit" id="partner_btn_1" class="btn btn-primary pull-right">
											Apply Today
											<i class="icon-circle-arrow-right"></i>
										</button>
									</form>
								</div>
							</div>
						</div>
						<div class="form-partner2 hideIt" id="partner_step2">
							<form class="" onsubmit="return false;">
								<div class="row-fluid">
									<div class="span12 text-center">
										<h4 class="text-capitalize">
											Partner with <?=ucfirst($info['domain'])?>
										</h4>
										<p class="blck-p">
											When you submit your registration, you can quickly partner with <?=ucfirst($info['domain'])?>. This is a great way to build your service and at the same way add value to this asset.
										</p>
										<br>
									</div>
								</div>
								<div class="row-fluid">
									<div class="span6">
										<div class="group-form">
												<label>
													First Name
													<span class="text-error">*</span>
												</label>
											<input class="input-block-level input-s1" type="text" id="partner_firstname">
										</div>
									</div>
									<div class="span6">
										<div class="group-form">
											<label>
												Last Name
												<span class="text-error">*</span>
											</label>
											<input class="input-block-level input-s1" type="text" id="partner_lastname">
										</div>
									</div>
								</div>
								<div class="row-fluid">
									<div class="span6">
										<div class="group-form">
												<label>
													Email
													<span class="text-error">*</span>
												</label>
											<input class="input-block-level input-s1" type="text" id="partner_email">
										</div>
									</div>
									<div class="span6">
										<div class="group-form">
											<label>
												Website
												<span class="text-error">&nbsp;</span>
											</label>
											<input class="input-block-level input-s1" type="text" id="partner_website">
										</div>
									</div>
								</div>
								<div class="row-fluid">
									<div class="span6">
										<div class="group-form">
											<label>
												Country
												<span class="text-error">*</span>
											</label>
											<select class="input-block-level input-s1" id="partner_country">
												<option value=""></option>									
												<?php for($ci=0;$ci<sizeof($countriesarray);$ci++){ ?>											
												<option value="<?=$countriesarray[$ci]['country_id']?>"><?=$countriesarray[$ci]['name']?></option>
												<?php } ?>
											</select>
										</div>
									</div>
									<div class="span6">
										<div class="group-form">
											<label>
												City
												<span class="text-error">*</span>
											</label>
											<input class="input-block-level input-s1" type="text" id="partner_city">
										</div>
									</div>
								</div>
								<div class="row-fluid">
									<div class="span6">
										<div class="group-form">
												<label>
													Password
													<span class="text-error">*</span>
												</label>
											<input class="input-block-level input-s1" type="password" id="partner_password">
										</div>
									</div>
									<div class="span6">
										<div class="group-form">
											<label>
												Confirm Password
												<span class="text-error">*</span>
											</label>
											<input class="input-block-level input-s1" type="password" id="partner_password2">
										</div>
									</div>
								</div>

								<div class="row-fluid">
									<div class="span6  text-left">
										<div class="requiredFieldError" id="partner_warning2"></div>
									</div>
									<div class="span6  text-right">
										<button type="submit" class="btn btn-primary" id="partner_btn_2">Next <i class="icon-circle-arrow-right"></i></button>
									</div>
								</div>
							</form>
						</div>
						<div class="form-partner3 hideIt" id="partner_step3">
							<form class="" onsubmit="return false;">
								<div class="row-fluid">
									<div class="span12 text-center">
										<h4 class="text-capitalize">
											Partner with <?=ucfirst($info['domain'])?>
										</h4>
										<p class="blck-p">
											When you submit your registration, you can quickly partner with <?=ucfirst($info['domain'])?>. This is a great way to build your service and at the same way add value to this asset.
										</p>
										<br>
									</div>
								</div>
								<div class="row-fluid">
									<div class="span12">
										<div class="group-form">
											<label>
												Partnership Type
												<span class="text-error">*</span>
											</label>
											<select class="input-s1 input-block-level" id="partner_type">
												<option value=""></option>
												<?php foreach ($parnershiptypes as $type){ ?>
												<option value="<?php echo $type;?>"><?php echo $type;?></option>
												<?php } ?>
											</select>
										</div>
										<div class="group-form">
											<label>
												Why we should partner with you
												<span class="text-error">*</span>
											</label>
											<textarea class="input-block-level" rows="3" id="partner_message"></textarea>
										</div>
										<div class="row-fluid">
											<div class="requiredFieldError" id="partner_warning3" style="text-align:center"></div>	
											<button type="submit" class="btn btn-primary pull-right" id="partner_btn_3">
												Next <i class="icon-circle-arrow-right"></i>
											</button>
											<button type="submit" class="btn btn-danger pull-left" id="partner_back_3">
												<i class="icon-circle-arrow-left"></i>
												Back
											</button>
											<input type="hidden" id="partner_domain" value="<?=$info['domain']?>">
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="form-partner4 hideIt" id="partner_step4">
							<form class="" onsubmit="return false;">
								<div class="row-fluid">
									<div class="span12 text-center">
										<h4 class="text-capitalize">
											Partner with <?=ucfirst($info['domain'])?>
										</h4>
										<p class="blck-p">
											When you submit your registration, you can quickly partner with <?=ucfirst($info['domain'])?>. This is a great way to build your service and at the same way add value to this asset.
										</p>
										<br>
									</div>
								</div>
								<div class="row-fluid">
									<div class="span12">
										<div class="group-form">
											<label>
												Company Title
												<span class="text-error">* title/name of your company to promote.</span>
											</label>
											<input type="text" class="input-s1 input-block-level" id="partner_company">
										</div>
										<div class="group-form">
											<label>
												Company Description
												<span class="text-error">* a short summary of your company</span>
											</label>
											<textarea class="input-block-level" rows="3"id="partner_companydescription"></textarea>
										</div>
										<div class="group-form">
											<label>
												Company Image
												<span class="text-error">* URL/link to yourcompany's image or logo.</span>
											</label>
											<input type="text" class="input-s1 input-block-level" id="partner_companyimage">
										</div>
										<div class="group-form">
											<label>
												Company Link
												<span class="text-error">* allow us to promote your company.</span>
											</label>
											<input type="text" class="input-s1 input-block-level" id="partner_companyurl">
										</div>
										<div class="row-fluid">
											<div class="requiredFieldError" id="partner_warning4" style="text-align:center"></div>	
											<button type="submit" class="btn btn-primary pull-right" id="partner_btn_4">
												Next <i class="icon-circle-arrow-right"></i>
											</button>
											<button type="submit" class="btn btn-danger pull-left" id="partner_back_4">
												<i class="icon-circle-arrow-left"></i>
												Back
											</button>
											<input type="hidden" id="partner_domain" value="<?=$info['domain']?>">
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="form-partner5 hideIt" id="partner_final">
							<div class="row-fluid">
								<div class="span12 text-center">
									
									<h4 class="text-capitalize">
										Partner with <?=ucfirst($info['domain'])?>
									</h4>
									<h4 class="blck-p text-error">
										Thank you for your Partnership application.
									</h4>
									<br>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<p class="thnk-p">
										<b>Step 1:</b>
										Please
										<a href="/referral">login</a>
										to get your referral widgets.
									</p>
									<p class="thnk-p">
										<b>Step 2:</b>
										You are now minutes away to joining <?=ucfirst($info['domain'])?> team. All you need to do right now is click the link in the
										<span class="text-info">Verification email</span>
										that we have just sent you. If you still haven�t received it, please check your spam inbox. Your verification link will redirect you to our
										<a target="_blank" href="http://www.contrib.com">Marketpalce hub</a>
										where you can login and check out your application status.
									</p>
									<p class="thnk-p">
										<b>Step 3:</b>
										You can now take part in actually building out an asset by sending proposals, partnering with brands, joining teams.
									</p>
									<br>
									<div id="viewcontriblink">Thank You!</div>
								</div>
							</div>
						</div>
						<?php $this->registerJsFile(Yii::$app->homeUrl.'js/serviceforms/partner.js',['depends' => 'app\assets\AppAsset'] ); ?>
						<!--<script src="/js/serviceforms/partner.js"></script>-->