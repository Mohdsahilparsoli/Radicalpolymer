/* Slider Revolution init - home page hero slider (#rev_slider_2_1) */
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider21"] = {once: RS_MODULES.modules["revslider21"]!==undefined ? RS_MODULES.modules["revslider21"].once : undefined, init:function() {
		window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
		if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
		window.revapi2 = jQuery(window.revapi2);
		if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
		revapi2.revolutionInit({
				revapi:"revapi2",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1230,1024,778,480",
				gridheight:"790,670,580,400",
				perspective:600,
				perspectiveType:"global",
				editorheight:"790,670,580,400",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:"767px",
						left: {
							h_align:"right",
							v_align:"bottom",
							h_offset:60
						},
						right: {
							v_align:"bottom",
							h_offset:0
						}
					}
				},
				viewPort: {
					global:false,
					globalDist:"-200px",
					enable:false
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

