$(function(){
    async function recupQuote() {
        await fetch('./expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.createElement("p");
            element.textContent = data;
            document.body.appendChild(element);

            
        })
        .catch((error) => {
            alert(`Erreur lors du chargement de l'expression: ${error.message}`);
        });
    }

    $('#button').on('click', recupQuote);

});