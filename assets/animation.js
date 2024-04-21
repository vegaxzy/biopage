document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(event) {
    if (event.keyCode === 123 || isCtrlShiftKey(event, 'I') || isCtrlShiftKey(event, 'J') || 
        isCtrlShiftKey(event, 'C') || (event.ctrlKey && event.keyCode === 'U'.charCodeAt(0))) {
        return false;
    }
};

function isCtrlShiftKey(event, key) {
    return event.ctrlKey && event.shiftKey && event.keyCode === key.charCodeAt(0);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('animate-fadeIn');
            }
        });
    });

    document.querySelectorAll('[animate]').forEach((card) => {
        observer.observe(card);
    });
});