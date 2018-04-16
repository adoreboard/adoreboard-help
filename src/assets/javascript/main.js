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
