
// var sticky = new Sticky('.sticky');

var elm = document.querySelector('#post-menu');
var ms = new MenuSpy(elm,{
  threshold: 15
});

stickybits('#sticky', {useStickyClasses: true});

var options = {
    valueNames: [ 'post-title', 'post-list-item']
};

var spacesList = new List('help', options);

// Show an element
var show = function (elem) {
	elem.classList.add('is-visible');
};

// Hide an element
var hide = function (elem) {
	elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function (elem) {
	elem.classList.toggle('is-visible');
};

var showForm = document.getElementById('show-form');
var showThanks = document.getElementById('show-thanks');
var form = document.getElementById('feedback-form');
var feedback = document.getElementById('feedback');
var formLabel = document.getElementById('form-label');
var thanks = document.getElementById('thanks');


document.addEventListener("DOMContentLoaded", function() {
  showForm.addEventListener('click', function() {
    form.classList.remove('dn');
    feedback.classList.add('dn');
    formLabel.innerHTML = "Oh no! How can we improve this?"
  });
  showThanks.addEventListener('click', function() {
    feedback.classList.add('dn');
    formLabel.innerHTML = "Thanks for the feedback!"
    thanks.classList.remove('dn');
  });
});

//# sourceMappingURL=index.js.map
