const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = function (date) {
    console.log("fetchAPI called with:", date, "Type:", typeof date); // ✅ Debug

    //J'ai modifié cette fonction pour retourner une Promise sinon je ne pouvais pas utiliser .then
    return new Promise((resolve, reject) => {
        if (!(date instanceof Date)) {
            reject(new Error("Invalid date object"));
            return;
        }

        let result = [];
        let random = seededRandom(date.getDate());

        for (let i = 17; i <= 23; i++) {
            if (random() < 0.5) {
                result.push(i + ':00');
            }
            if (random() < 0.5) {
                result.push(i + ':30');
            }
        }

        resolve(result); // ✅ Maintenant ça retourne une Promise
    });
};

export const submitAPI = function (formData) {
    return new Promise((resolve) => {
        console.log("Submitting form data:", formData);
        setTimeout(() => resolve(true), 1000); // Simule un délai de traitement
    });
};