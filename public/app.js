
$(document).ready(function () {

    const ffmpeg = require("ffmpeg.js");
    let stdout = "";
    let stderr = "";
    // Print FFmpeg's version.
    ffmpeg({
        arguments: ["-version"],
        print: function (data) { stdout += data + "\n"; },
        printErr: function (data) { stderr += data + "\n"; },
        onExit: function (code) {
            console.log("Process exited with code " + code);
            console.log(stdout);
            console.log(stderr);
        },
    });


    $('#file').change((event) => {
        const src = URL.createObjectURL(event.target.files[0]);

        $('video').css('visibility', 'visible');
        $('video').attr('src', src);

        //$('#spinner').css('visibility', 'visible');
    })


    $('#upload').click(() => {
        const ref = firebase.storage().ref();
        const file = $("#file")[0].files[0];
        const name = +new Date() + "-" + file.name;

        const metadata = {
            contentType: file.type
        };

        const task = ref.child(name).put(file, metadata);

        task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log(url);
                $('video').attr('src', url).css('border', "solid 2px green");
            })
            .catch(console.error);
    });


});

