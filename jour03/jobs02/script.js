$(function () {
    function melangerPieces() {
        const pieces = $('#puzzle .piece').toArray();

        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }

        $('#puzzle').append(pieces);
        $('#resultat').text('');
    }

    $('#puzzle .piece').draggable({
        revert: 'invalid'
    });

    $('#dropZone').droppable({
        accept: '.piece',
        drop: function (event, ui) {
            $(ui.draggable)
                .css({ top: '', left: '', position: '' })
                .appendTo('#dropZone');
            verifierSolution();
        }
    });

    function verifierSolution() {
        const pieces = $('#dropZone .piece').toArray();
        const correctOrder = ['piece1', 'piece2', 'piece3', 'piece4', 'piece5', 'piece6'];

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

    melangerPieces();
    $('#shuffle').on('click', melangerPieces);
});