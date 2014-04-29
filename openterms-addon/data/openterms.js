
var site;
var ot = {};



ot.html = '<section class="ot-container">'
			+ '<section class="ot-content" >'
				+ '<h1><span>Sites</span> can change their terms without telling you.</h1>'
				+ '<p>Their last switcheroo was on March 25, 2014.<br>View the changes on <a href="#">tosback.org</a>.</p>'
			+ '</section>'
			+ '<nav>'
				+ '<a href="#" class="ot-prev" >&#171;</a>'
				+ '<a href="#" class="ot-next" >&#187;</a>'
			+ '</nav>'
			+ '<hr>'
		+ '</section>';

ot.notices = [
	'<h1><span>SITENAME</span> can change their terms without telling you.</h1><p>Their last switcheroo was on March 25, 2014.<br>View the changes on <a href="http://tosback.org">tosback.org</a>.</p>',
	'<h1><span>SITENAME</span> can share your personal info without telling you.</h1><p>Don\'t like that? <a class="showForm" href="#">Let them know</a>.<form class="hidden"><textarea></textarea><br><button>Send comment</button></form> </p>',
	'<h1>Do you really agree?</h1><p><input type="checkbox" > I can\'t read all these terms and conditions.<br><input type="checkbox"> I agree because I feel like I don\'t have much choice.</p><p><button>Submit</button></p>',
	'<h1><span>SITENAME</span> has a perpetual license on anything you publish.</h1><p>Why? Because they said so. Learn about <a href="http://tosdr.org/#SITENAME">what else they say</a>.</p>',
	'<h1><span>SITENAME</span> got a poor grade for their terms of service.</h1><p>Luckily, they\'re not the only game in town. Browse options on <a href="http://alternativeto.net/software/SITENAME/">alterativeto.net</a></p>',
	'<h1>You have agreed to 242,280 words in legal terms.</h1><p>View and <a href="#">manage your Open Terms</a>.  </p>',
	'<h1>Is this sign up page missing a link to the legal terms?</h1><p><button>Yes</button> <button>No</button></p>',
	'<h1>What? You don\'t like scrolling through 600 lines of legalese while on the go?</h1><p>Ask <span>SITENAME</span> to join <a href="http://www.commonterms.net/">Common Terms</a></p><p><button>Open the Web</button></p>',
	'<h1>pur&middot;su&middot;ant</h1> <p>adverb</p> <p>1. in accordance with (a law or a legal document or resolution).</p><p>Bleh. Ask SITENAME to use <a href="http://www.commonterms.net/">Common Terms</a>.</p> <p><button>Open the Web</button></p>',
];

ot.getNotice = function (xyz) {

	switch (xyz) {
		case 'random':
			ot.id = Math.round(Math.random() * 10);
		  	if (ot.id >= ot.notices.length) { ot.id = 0; }
			break;
		case 'next':
		  	ot.id = ot.id + 1;
		  	if (ot.id === ot.notices.length) { ot.id = 0; }
			break;
		case 'prev':
		  	ot.id = ot.id - 1;
		  	if (ot.id < 0) { ot.id = ot.notices.length - 1; }
			break;
		default:
		  	console.log('something is wrong');
	}
	
	return ot.notices[ot.id].replace(/SITENAME/g,site.name); 

};


ot.nav = function () {
	$('.ot-container nav').on('click','a', function (event) {
	    event.preventDefault();
	    var nav = $(this);
	    // var newNotice; 

	    if (nav.hasClass('ot-prev')) { 
	    	ot.notice = ot.getNotice('prev'); 
	    } else if (nav.hasClass('ot-next')) {
	    	ot.notice = ot.getNotice('next');
	    } else { 
	    	ot.notice = ot.getNotice('random'); 
		};
		
		$('.ot-content').html(ot.notice);
		// $('.ot-container span').text(site.name);
	});	
}


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


self.port.on('openterms', function(data) {

	if (data.host === 'www.google.com') { return false; } // @todo - remove duct tape

	// set sitename
	site = data;
	site.name = site.hostname.replace(/(.com|.org|.net)$/,''); // @todo - make this smart
	site.name = site.name.slice(site.name.indexOf(".") + 1).capitalize();

	// add notice
	$('body').prepend(ot.html);
	$('.ot-container').hide();

	ot.notice = ot.getNotice('random');
	$('.ot-content').html(ot.notice);

	$('.ot-container').slideDown(1000);
	$('body').animate({
		'padding-top' : '14em',
	},1000);

	// nav listener
	ot.nav();

});

