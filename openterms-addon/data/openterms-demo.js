
// ui ux demo without plugin 

var html = '<section class="ot-container">'
			+ '<section class="ot-content" >'
				+ '<h1><span>Skype</span> can change their terms without telling you.</h1>'
				+ '<p>Their last switcheroo was on March 25, 2014.<br>View the changes on <a href="#">tosback.org</a>.</p>'
			+ '</section>'
			+ '<nav>'
				+ '<a href="#" class="ot-prev" >&#171;</a>'
				+ '<a href="#" class="ot-next" >&#187;</a>'
			+ '</nav>'
			+ '<hr>'
		+ '</section>';

var notices = [
	'<h1><span>Skype</span> can change their terms without telling you.</h1><p>Their last switcheroo was on March 25, 2014.<br>View the changes on <a href="#">tosback.org</a>.</p>',
	'<h1><span>Netflix</span> can share your personal info without telling you.</h1><p>Don\'t like that? Let them know. </p>',
	'<h1>Do you really agree?</h1><p><input type="checkbox" > I can\'t read all these terms and conditions.<br><input type="checkbox"> I agree because I feel like I don\'t have much choice.</p><p><button>Submit</button></p>',
	'<h1><span>Spotify</span> has a perpetual license on anything you publish.</h1><p>Why? Because they said so. Learn about <a href="#">what else they say</a>.  </p>',
	'<h1><span>Behance</span> got a poor grade for their terms of service.</h1><p>Luckily, they\'re not the only game in town. Browse options on <a href="#">alterativeto.net</a></p>',
	'<h1>You have agreed to 242,280 words in legal terms.</h1><p>View and manage your Open Terms.  </p>',
	'<h1>Is this sign up page missing a link to the legal terms?</h1><p><button>Yes</button> <button>No</button></p>',
	'<h1>What? You don\'t like scrolling through 600 lines of legalese while on the go?</h1><p>Ask <span>Twitter</span> to join Common Terms</p><p><button>Open the Web</button></p>',
	'<h1>pur&middot;su&middot;ant</h1> <p>adverb</p> <p>1.   in accordance with (a law or a legal document or resolution).</p> <p><button>Open the Web</button></p>',
	'<h1><span>Skype</span> can change their terms without telling you.</h1><p>Their last switcheroo was on March 25, 2014.<br>View the changes on <a href="#">tosback.org</a>.</p>',
	'<h1><span>Skype</span> can change their terms without telling you.</h1><p>Their last switcheroo was on March 25, 2014.<br>View the changes on <a href="#">tosback.org</a>.</p>',
];

var sites = [
	'skype.com',
	'plus.google.com',
	'Twitter.com',
	'skype.com',
	'flickr.com',
	'netflix.com',
	'linkedin.com',
	'facebook.com',
	'msn.com',
	'skype.com',
	'skype.com',
]


$('body').append(html);

function getNotice () {
	var r = Math.round(Math.random() * 10);
	$('.ot-content').html(notices[r]);
};

function getSite () {
	var r = Math.round(Math.random() * 10);
	var site = sites[r];
	// site = site.slice(0,-4);
	site = site.replace('.com','');
	$('.ot-content span').html(site);
};

$('.ot-container').slideDown(1000);
$('body').animate({
	'padding-top' : '12em',
},1000);

$('.ot-container nav').on('click','a', function (event) {
    event.preventDefault();
	getNotice();
	getSite();
});
