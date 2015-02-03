$(document).ready(function(){

	//logo image animation
	var logo = document.getElementById('logo');
	var parallax = new Parallax(logo);

	//magic scroll controller
	var controller = new ScrollMagic();

	// //tree talk animation
	// var treeTween = new TweenMax.from("#treeTalk", 1, {autoAlpha:0,y:20});

	// var treeScene = new ScrollScene({triggerElement:"#treeTalk",offset:80})
	// 				.setTween(treeTween)
	// 				.addTo(controller);


	// //Petrouchka animation
	// var petrouchkaTween = new TweenMax.from("#petrouchka", 1, {autoAlpha:0,y:20});

	// var petrouchkacene = new ScrollScene({triggerElement:"#petrouchka",offset:80})
	// 				.setTween(petrouchkaTween)
	// 				.addTo(controller);


	// //breathing animation
	// var breathingTween = new TweenMax.from("#breathing", 1, {autoAlpha:0,y:20});

	// var breathingcene = new ScrollScene({triggerElement:"#breathing",offset:80})
	// 				.setTween(petrouchkaTween)
	// 				.addTo(controller);


	// //package animation
	// var packageTween = new TweenMax.from("#package", 1, {autoAlpha:0,y:20});

	// var packagecene = new ScrollScene({triggerElement:"#package",offset:80})
	// 				.setTween(petrouchkaTween)
	// 				.addTo(controller);


	// //healthKeeping animation
	// var healthKeepingTween = new TweenMax.from("#healthKeeping", 1, {autoAlpha:0,y:20});

	// var healthKeepingcene = new ScrollScene({triggerElement:"#healthKeeping",offset:80})
	// 				.setTween(petrouchkaTween)
	// 				.addTo(controller);



	// //Jiajia animation
	// var JiajiaTween = new TweenMax.from("#Jiajia", 1, {autoAlpha:0,y:20});

	// var Jiajiacene = new ScrollScene({triggerElement:"#Jiajia",offset:80})
	// 				.setTween(petrouchkaTween)
	// 				.addTo(controller);



	// //artCommunity animation
	// var artCommunityTween = new TweenMax.from("#artCommunity", 1, {autoAlpha:0,y:20});

	// var artCommunitycene = new ScrollScene({triggerElement:"#artCommunity",offset:80})
	// 				.setTween(petrouchkaTween)
	// 				.addTo(controller);



	// //selfPortrait animation
	// var selfPortraitTween = new TweenMax.from("#selfPortrait", 1, {autoAlpha:0,y:20});

	// var selfPortraitcene = new ScrollScene({triggerElement:"#selfPortrait",offset:80})
	// 				.setTween(petrouchkaTween)
	// 				.addTo(controller);



	//nutritionist animation
	

	// var nutriTween = new TweenMax.from("#nutritionist", 1, {autoAlpha:0,y:20});

	// var nutriScene = new ScrollScene({triggerElement:"#nutritionist",offset:80})
	// 				.setTween(nutriTween)
	// 				.addTo(controller);

	var watchTween1 = new TweenMax.from("#watch2", 0.5, {autoAlpha:0});

	var watchTween2 = new TweenMax.from("#watch3", 1, {autoAlpha:0, x:5});

	var watchScene1 = new ScrollScene({triggerElement:"#watch1",offset:80})
					.setTween(watchTween1)
					.addTo(controller);

	var watchScene2 = new ScrollScene({triggerElement:"#watch1",offset:200})
					.setTween(watchTween2)
					.addTo(controller);


	var fridgeTween1 = new TweenMax.from("#fridge2", 0.5, {autoAlpha:0});

	var fridgeTween2 = new TweenMax.from("#fridge3", 1, {autoAlpha:0, x:10, y:-10});

	var fridgeScene1 = new ScrollScene({triggerElement:"#fridge1",offset:80})
					.setTween(fridgeTween1)
					.addTo(controller);

	var fridgeScene2 = new ScrollScene({triggerElement:"#fridge1",offset:200})
					.setTween(fridgeTween2)
					.addTo(controller);


	var counterTween1 = new TweenMax.from("#counter2", 0.5, {autoAlpha:0});

	var counterTween2 = new TweenMax.from("#counter3", 1, {autoAlpha:0, y:20});

	var counterScene1 = new ScrollScene({triggerElement:"#counter1",offset:80})
					.setTween(counterTween1)
					.addTo(controller);

	var counterScene2 = new ScrollScene({triggerElement:"#counter1",offset:200})
					.setTween(counterTween2)
					.addTo(controller);


})