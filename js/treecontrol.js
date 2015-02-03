$(document).ready(function(){
// return;
	var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter" }});

	//how trees behave parallax section
	var interfaceBg = new ScrollScene({triggerElement: "#interface",duration: $(window).height()*2})
					.setTween(TweenMax.fromTo(".interface", 1, {"background-position": "0 200px", ease: Linear.easeNone},{"background-position": "0 -400px", ease: Linear.easeNone}))
					.addTo(controller);
				// .addIndicators({zindex: 1, suffix: "1"});

	//how trees behave big title
	var interfaceText = new ScrollScene({triggerElement: "#interface",duration: $(window).height()*2})
						.setTween(TweenMax.fromTo(".interface > h2", 1, {y:400, ease: Linear.easeNone},{y:-800, ease: Linear.easeNone}))
						.addTo(controller);

	//iphones fade and pin
	var iphone_sapling = new ScrollScene({triggerElement:"#app",duration:4000,offset:650})
						.setPin(".iphone_sapling",{pushFollowers:false})
						.addTo(controller)
				
	var iphone_sapling_tween = new ScrollScene({triggerElement:".then",duration:200,offset:150})
	 						   .setTween(TweenMax.to(".iphone_sapling",0.5,{autoAlpha:0}))
	 						   .addTo(controller)
	 						   // .addIndicators({zindex:1});

	var iphone_littletree = new ScrollScene({triggerElement:"#app",duration:2000,offset:650})
						.setPin(".iphone_littletree",{pushFollowers:false})		
						.addTo(controller);

	var iphone_littletree_tween = new ScrollScene({triggerElement:".final",duration:200, offset:150})
							   .setTween(TweenMax.to(".iphone_littletree",0.5,{autoAlpha:0}))
							   .addTo(controller);

	var iphone_bigtree = new ScrollScene({triggerElement:"#app",duration:2000,offset:650})
						.setPin(".iphone_bigtree",{pushFollowers:false})		
						.addTo(controller);

	var iphone_bigtree_tween = new ScrollScene({triggerElement:".daytime",duration:200, offset:150})
							   .setTween(TweenMax.to(".iphone_bigtree",0.05,{autoAlpha:0}))
							   .addTo(controller);

	var iphone_night = new ScrollScene({triggerElement:"#app",duration:3000,offset:650})
						.setPin(".iphone_night",{pushFollowers:false})		
						.addTo(controller);

	var iphone_night_tween = new ScrollScene({triggerElement:".weather",duration:200, offset:150})
	 						   .setTween(TweenMax.to(".iphone_night",0.05,{autoAlpha:0}))
							   .addTo(controller);

	var iphone_rain = new ScrollScene({triggerElement:"#app",duration:3000,offset:650})
						.setPin(".iphone_rain",{pushFollowers:false})		
						.addTo(controller);

	var iphone_rain_tween = new ScrollScene({triggerElement:".textbox",duration:200, offset:150})
							   .setTween(TweenMax.to(".iphone_rain",0.05,{autoAlpha:0}))
	 						   .addTo(controller);

	var iphone_textbox = new ScrollScene({triggerElement:"#app",duration:2280,offset:650})
						.setPin(".iphone_textbox",{pushFollowers:false})		
						.addTo(controller);

	var iphone_shadow = new ScrollScene({triggerElement:"#app",duration:2280,offset:650})
						.setPin(".shadow",{pushFollowers:false})		
						.addTo(controller);

	// download parallax section

	var downloadBg = new ScrollScene({triggerElement:"#download",duration:$(window).height()})
					.setTween(TweenMax.fromTo("#download", 1, {"background-position": "0 120px", ease: Linear.easeNone},{"background-position": "0 -130px", ease: Linear.easeNone}))
					.addTo(controller);
					//.addIndicators({zindex:1});

	//small animations

	var home_iphone = new ScrollScene({duration: 0})
					  .setTween(TweenMax.from(".phoneImage", 1, {autoAlpha: 0, y:30}))
					  .addTo(controller);

	var intro_text = new ScrollScene({triggerElement:"#intro",duration:200,offset:500})
					.setTween(TweenMax.from("#intro .introText", 1,{autoAlpha: 0, y:150}))
					.addTo(controller);

	 var tree_grow = new ScrollScene({triggerElement:"#rule",duration:200,offset:500})
	 				.setTween(TweenMax.from("#rule img", 1,{autoAlpha:0, y:40}))
	 				.addTo(controller);

	 var begin = new ScrollScene({triggerElement:".begin",duration:300,offset:150})
	 				.setTween(TweenMax.from(".begin", 2,{autoAlpha:0, scale:0.8,x:-20}))
	 				.addTo(controller);

	 var then = new ScrollScene({triggerElement:".then",duration:300,offset:150})
	 				.setTween(TweenMax.from(".then", 2,{autoAlpha:0, scale:0.8,x:-20}))
	 				.addTo(controller);

	 var final_move = new ScrollScene({triggerElement:".final",duration:300,offset:150})
	 				.setTween(TweenMax.from(".final", 2,{autoAlpha:0, scale:0.8,x:-20}))
	 				.addTo(controller);

	 var daytime = new ScrollScene({triggerElement:".daytime",duration:300,offset:150})
	 				.setTween(TweenMax.from(".daytime", 2,{autoAlpha:0, scale:0.8,x:-20}))
	 				.addTo(controller);

	 var weather = new ScrollScene({triggerElement:".weather",duration:300,offset:150})
	 				.setTween(TweenMax.from(".weather", 2,{autoAlpha:0, scale:0.8,x:-20}))
	 				.addTo(controller);

	 var textbox = new ScrollScene({triggerElement:".textbox",duration:300,offset:150})
	 				.setTween(TweenMax.from(".textbox", 2,{autoAlpha:0, scale:0.8,x:-20}))
	 				.addTo(controller);

	var footer_img = new ScrollScene({triggerElement:"#footer",duration:300})
					.setTween(TweenMax.from("#footer img", 1,{autoAlpha:0,y:-150}))
					.addTo(controller);





		// change behaviour of controller to animate scroll instead of jump
});