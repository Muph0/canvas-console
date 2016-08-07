window.int = Math.floor;

var resize_adjust = function() {
    var winW = $(window).width(), winH = $(window).height();

    var canvas = $("canvas").first();
    var aspect_ration = canvas.width() / canvas.height();

    if (winW / winH <= aspect_ration)
    {
        canvas.css("margin-left", 0);

        canvas.css("width", "100%");
        canvas.css("margin-top", (winH - canvas.height()) / 2 + "px");
    }
    else
    {
        canvas.css("margin-top", 0);

        canvas.css("width", winH * aspect_ration);
        canvas.css("margin-left", (winW - canvas.width()) / 2 + "px");
    }
};

$(window).resize(resize_adjust);


dictionary = "Carib super noncoperator paramo nonfloating cabinetwork institution unfathomable horridly wallaba avengeful avoset gouvernante soli pharsalian suctional kennebec convening harmonization registerer misled overdaintiness impressment syntagm botony outissued gutturalize piton fiesta Rethicken metion russet flagrant unimportuned swindle autocatalytic factionalist philomela variegate circumfusion nondeceptive moderation variformly preobserve manioc sixpences hillbilly academia purï¿¥ï¾½eing lifelike blast dissimilate rhenium cytoarchitectural unsensitizing exclusionary bureaucratized musty Defibrillator confusedly poultry criticisingly uninterposing dressler avizandum graphitizing ensepulchre poor creviced secunda copying nickelize konstantin dogbane flexitime helmholtz fluent organicismal chemokinesis broche gimbals buckjumper hellespontine uncolonised femininely presecure rooted Churidars gobian interjectory athetoid subordinative neal refix dermatographia rearticulate ciborium edibleness preconsumption smooch vigorous cincturing matsys codeless erewhile njord weakish zoï¿¥ï¾¡chore nonflyable saxon heterophyte goldwater bushie dendrochronological fastener dysphoric Testudinate premandibular reanalyzing overmatch gelatinise ratisbon debruised branting sukkoth retrieved remarrying coincidentally interdiffused longomontanus cringingness terpenic sequestrate elias traumatic unpeevish triangle noisy unblacked pipping taffeta streetwalking acetaldehyde semiovate briquetted".split(' ');

words = [
    ["Ahoj", [0, 200, 255], 1]
];

function rng_word(name) {
    if (typeof name === 'undefined')
        name = dictionary[int(Math.random() * dictionary.length)];

    var R = int(Math.random() * 255);
    var G = int(Math.random() * 255);
    var B = int(Math.random() * 255);

    var speed = Math.pow(Math.random() * 2, 2) * (Math.random()*2-1);

    words.push([name, [R, G, B], speed]);
}

function set_words(n) {
    words = [];
    for (var i = 0; i < n; i++) {
        rng_word();
    }
}

Game = {
    start: function() {
        resize_adjust();
        requestAnimationFrame(Game.update);
    },

    update: function(time) {

        Console.Clear();
        Console.CursorSet(0,0);
        Console.Foreground = [255, 0, 0];
        Console.Write('Total: ' + words.length);

        Console.CursorSet(0,21);
        Console.Foreground = [60,60,60];
        Console.Write('Call:\nrng_word()\nrng_word(string)\nset_words(int)');

        Console.Foreground = [255, 200, 0];
        var x = int(40 + Math.sin(time * 0.005) * 10);
        Console.CursorSet(x,13);
        Console.Write("X");



        for (var i = 0; i < words.length; i++) {
            var c = words[i];
            Game.clock(time+10000, c[0], c[1], c[2]);
        }

        requestAnimationFrame(Game.update);
    },

    clock: function(time, text, color, speed) {
        var x = int(31 + Math.sin(time * 0.0004 * speed) * 30);
        var y = int(13 + Math.cos(time * 0.0004 * speed) * 11);

        Console.CursorSet(x,y);
        Console.Foreground = color;
        Console.Write(text);
    }
}


