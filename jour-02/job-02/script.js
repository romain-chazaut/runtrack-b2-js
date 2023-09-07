let count = 0;

function myAddCount() {
    count++;
    document.getElementById('count-displayer').textContent = count;
}

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('add-count-btn');
    btn.addEventListener('click', myAddCount);
});
