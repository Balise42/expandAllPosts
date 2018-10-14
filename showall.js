
function showAll() {
        var collapsed = document.getElementsByClassName('collapsible');
        for (var i = 0; i < collapsed.length; i++) {
                if (collapsed[i].classList.contains('collapsed')) {
                        collapsed[i].classList.remove('collapsed')
                        collapsed[i].classList.add('opened')
                        collapsed[i].style.height = 'auto'
                }
        }

        var expanders = document.getElementsByClassName('expander')
        for (var i = 0; i<expanders.length; i++) {
                expanders[i].parentNode.removeChild(expanders[i])
        }
}

var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		showAll();
	});
});

var config = {childList:true, subtree:true};
target = document.getElementsByTagName("body")[0];
observer.observe(target, config);
