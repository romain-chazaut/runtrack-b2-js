document.addEventListener('DOMContentLoaded', function() {
    // Récupération des éléments
    const textDisplayer = document.getElementById('text-displayer');
    const inputText = document.getElementById('input-text');
    const btnBold = document.getElementById('turn-text-bold');
    const btnItalic = document.getElementById('turn-text-italic');
    const btnClear = document.getElementById('clear-text');

    // Fonctions
    function myDisplayText() {
        textDisplayer.textContent = inputText.value;
    }

    function myTurnBold() {
        textDisplayer.style.fontWeight = 'bold';
    }

    function myTurnItalic() {
        textDisplayer.style.fontStyle = 'italic';
    }

    function myClearText() {
        textDisplayer.style.fontWeight = 'normal';
        textDisplayer.style.fontStyle = 'normal';
    }

    // Écouteurs d'événements
    inputText.addEventListener('input', myDisplayText);
    btnBold.addEventListener('click', myTurnBold);
    btnItalic.addEventListener('click', myTurnItalic);
    btnClear.addEventListener('click', myClearText);
});
