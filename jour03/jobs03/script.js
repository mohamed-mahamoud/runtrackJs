$(function () {
    const COLONNES = 3;

    function indexDe(idPiece) {
        return $('#taquin .piece').index($('#' + idPiece));
    }

    function estVoisine(indexA, indexB) {
        const ligneA = Math.floor(indexA / COLONNES);
        const colA = indexA % COLONNES;
        const ligneB = Math.floor(indexB / COLONNES);
        const colB = indexB % COLONNES;

        return Math.abs(ligneA - ligneB) + Math.abs(colA - colB) === 1;
    }

    function echangerPieces($pieceA, $pieceB) {
        const $placeholder = $('<span></span>');

        $pieceA.before($placeholder);
        $pieceB.before($pieceA);
        $placeholder.replaceWith($pieceB);
    }

    function voisinsDeCaseVide() {
        const indexVide = indexDe('empty');
        const voisins = [];
        const total = $('#taquin .piece').length;

        const candidats = [
            indexVide - COLONNES,
            indexVide + COLONNES,
            indexVide - 1,
            indexVide + 1
        ];

        candidats.forEach((index) => {
            if (index < 0 || index >= total) {
                return;
            }

            if (estVoisine(index, indexVide)) {
                voisins.push(index);
            }
        });

        return voisins;
    }

    function deplacerPiece(idPiece) {
        const indexPiece = indexDe(idPiece);
        const indexVide = indexDe('empty');

        if (!estVoisine(indexPiece, indexVide)) {
            return false;
        }

        echangerPieces($('#' + idPiece), $('#empty'));
        verifierSolution();
        return true;
    }

    function melangerPieces() {
        for (let i = 0; i < 200; i++) {
            const voisins = voisinsDeCaseVide();
            const indexChoisi = voisins[Math.floor(Math.random() * voisins.length)];
            const idPiece = $('#taquin .piece').eq(indexChoisi).attr('id');
            echangerPieces($('#' + idPiece), $('#empty'));
        }

        $('#resultat').text('');
    }

    function verifierSolution() {
        const pieces = $('#taquin .piece').toArray();
        const correctOrder = ['piece1', 'piece4', 'piece7', 'piece2', 'piece5', 'piece8', 'piece3', 'piece6', 'empty'];

        if (pieces.length !== correctOrder.length) {
            return false;
        }

        for (let i = 0; i < pieces.length; i++) {
            if (pieces[i].id !== correctOrder[i]) {
                $('#resultat')
                    .text('Mauvaise solution, essayez à nouveau !')
                    .css('color', 'red');
                return false;
            }
        }
        $('#resultat')
            .text('Félicitations, vous avez résolu le puzzle !')
            .css('color', 'green');
        return true;
    }

    $('#taquin').on('click', '.piece:not(#empty)', function () {
        deplacerPiece(this.id);
    });

    melangerPieces();
    $('#shuffle').on('click', melangerPieces);
});