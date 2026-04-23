$(function() {
    $('#trie').on('submit', function(e) {
        e.preventDefault();
        const id = $('#id').val().trim();
        const name = $('#name').val().trim().toLowerCase();
        const type = $('#type').val();

        fetch('./pokemon.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status + ' : ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data) || data.length === 0) {
                    $('#resultat').html('<p>pokemon.json vide ou mal formaté.</p>');
                    return;
                }
                let result = data.filter(pokemon => {
                    let match = true;
                    if (id && String(pokemon.id) !== id) match = false;
                    if (name && !pokemon.name.french.toLowerCase().includes(name)) match = false;
                    if (type && !pokemon.type.includes(type)) match = false;
                    return match;
                });
                afficherResultat(result);
            })
            .catch((err) => {
                $('#resultat').html('<p>Erreur lors du chargement des données : ' + err.message + '</p>');
            });
    });

    function afficherResultat(pokemons) {
        if (pokemons.length === 0) {
            $('#resultat').html('<p>Aucun Pokémon trouvé.</p>');
            return;
        }
        let html = `<p>${pokemons.length} résultat(s) trouvé(s) :</p><ul>`;
        pokemons.forEach(p => {
            html += `<li>#${p.id} - ${p.name.french} (${p.type.join(', ')})</li>`;
        });
        html += '</ul>';
        $('#resultat').html(html);
    }
});