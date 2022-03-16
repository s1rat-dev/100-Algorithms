const proCategorization = (pros,preferences) => {
    let prosPreferences = {};
    let proPrefs = [];

    for (let i = 0; i < pros.length; i++) {
        for( let j = 0; j < preferences[i].length; j++) {
            if (prosPreferences.hasOwnProperty(preferences[i][j])) {
                prosPreferences[preferences[i][j]].push(pros[i]);
            }
            else {
                prosPreferences[preferences[i][j]] = [pros[i]];
            }

        }
    }

    for (const prop in prosPreferences) {
        proPrefs.push([[prop], [...prosPreferences[prop]]]);
    }

    proPrefs = proPrefs.sort((pref1, pref2) => {
        const pref1Lower = pref1[0][0].toLowerCase();
        const pref2Lower = pref2[0][0].toLowerCase();

        if (pref1Lower > pref2Lower)
            return 1
        if (pref1Lower < pref2Lower)
            return -1

        return 0

    })

    return proPrefs
}


console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));
