$(function() {
    function afficherUtilisateurs() {
        fetch('./utilisateur.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status + ' : ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data) || data.length === 0) {
                    $('#utilisateur').html('<p>utilisateur.json vide ou mal formaté.</p>');
                    return;
                }
                let html = '<tr><th>ID</th><th>Nom</th><th>Prénom</th><th>Email</th></tr>';
                data.forEach(user => {
                    html += `<tr>
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    </tr>`;
                });
                $('#utilisateur').html(html);
            })
            .catch((err) => {
                $('#utilisateur').html('<p>Erreur lors du chargement des données : ' + err.message + '</p>');
            });
    }

    // Affiche les utilisateurs au chargement de la page
    afficherUtilisateurs();

    $('#update').on('click', function() {
        afficherUtilisateurs();
    });
});     