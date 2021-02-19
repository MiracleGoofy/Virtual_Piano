function playSe (a) {
    let audio = document.createElement("audio");
    audio.src = a;
    audio.play();
}
document.addEventListener("keydown", function (e) {
    if (e.key == "a")
        playSe("a.mp3");
    else if (e.key == "s")
        playSe("s.mp3");
    else if (e.key == "d")
        playSe("d.mp3");
    else if (e.key == "f")
        playSe("f.mp3");
    else if (e.key == "g")
        playSe("g.mp3");
    else if (e.key == "h")
        playSe("h.mp3");
    else if (e.key == "j")
        playSe("j.mp3");
    else
        console.log("there is no such music key")
})
