    document.addEventListener("keypress", (e) => {
        const keyTopp = e.key.toUpperCase();
        if ("AWSEDTFGYHUJ".includes(keyTopp)) {
            let audios = new Audio(`${keyTopp}.mp3`);
            audios.play();
        }
        console.log("there is no such music key")
    });

