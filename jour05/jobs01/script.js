$(document).ready(function() {


    async function validatePrenom(prenom) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (!prenom) {
            return "Veuillez entrer votre prénom.";
        } else if (prenom.length < 2) {
            return "Le prénom doit contenir au moins 2 caractères.";
        }
        return "";
    }

    async function validateNom(nom) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (!nom) {
            return "Veuillez entrer votre nom.";
        } else if (nom.length < 2) {
            return "Le nom doit contenir au moins 2 caractères.";
        }
        return "";
    }

    async function validateEmail(email) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (!email) {
            return "Veuillez entrer votre email.";
        } else if (!email.includes('@') || !email.includes('.')) {
            return "Veuillez entrer une adresse email valide.";
        }
        return "";
    }

    async function validateAddress(address) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (!address) {
            return "Veuillez entrer votre adresse.";
        } else if (address.length < 5) {
            return "L'adresse doit contenir au moins 5 caractères.";
        }
        return "";
    }

    async function validatePostal(postal) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (!postal) {
            return "Veuillez entrer votre code postal.";
        } else if (!/^\d{5}$/.test(postal)) {
            return "Le code postal doit contenir exactement 5 chiffres.";
        }
        return "";
    }

    async function validatePassword(password) {
        await new Promise(resolve => setTimeout(resolve, 100));
        if (!password) {
            return "Veuillez entrer votre mot de passe.";
        } else if (password.length < 8) {
            return "Le mot de passe doit contenir au moins 8 caractères.";
        }
        return "";
    }


    $("#form-inscription").on("submit", async function(e) {
        e.preventDefault();
        $(".error-message").text("");

        const nom = $("#name").val().trim();
        const prenom = $("#firstname").val().trim();
        const email = $("#email").val().trim();
        const address = $("#address").val().trim();
        const postal = $("#postal").val().trim();
        const password = $("#password").val();

        let valid = true;

        const [prenomError, nomError, emailError, addressError, postalError, passwordError] = await Promise.all([
            validatePrenom(prenom),
            validateNom(nom),
            validateEmail(email),
            validateAddress(address),
            validatePostal(postal),
            validatePassword(password)
        ]);

        if (prenomError) {
            $("#error-prenom").text(prenomError);
            valid = false;
        }
        if (nomError) {
            $("#error-nom").text(nomError);
            valid = false;
        }
        if (emailError) {
            $("#error-email").text(emailError);
            valid = false;
        }
        if (addressError) {
            $("#error-address").text(addressError);
            valid = false;
        }
        if (postalError) {
            $("#error-postal").text(postalError);
            valid = false;
        }
        if (passwordError) {
            $("#error-password").text(passwordError);
            valid = false;
        }

        if (valid) {
            alert("Inscription réussie !");
            // this.submit();
        }
    });

    $
});