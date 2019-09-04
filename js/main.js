$(document).ready(function () {
    //Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: false,
        });

        //post
        var posts = [
            {
                title: "Según CD Projekt Red Cyberpunk 2077 tendrá multijugador",
                subtitle: "www.eurogamer.es",
                reference: "https://www.eurogamer.es",
                date: 'Publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('Y'),
                content: "CD Projekt ha confirmado finalmente que Cyberpunk 2077 tendrá un apartado multijugador. Tal y como ya explicaron anteriormente, el multijugador no estará disponible para el lanzamiento en abril de 2020. Tras el mismo publicarán contenido para jugar en solitario(DLC de la historia) y luego llegaría el añadido con el modo online. El anuncio se ha realizado esta mañana en Twitter, y el estudio polaco ha aprovechado la ocasión para desvelar que están contratando personal para trabajar en este modo multijugador, del cual no sabemos en qué consistirá.",
                from: "https://www.eurogamer.es/articles/2019-09-04-cyberpunk-2077-tendra-multijugador",
                media: "https://www.youtube.com/embed/FknHjl7eQ6o"
            },
            {
                title: "Astral Chain: el exclusivo de Switch que lleva a Platinum Games en una nueva dirección",
                subtitle: "www.eurogamer.es",
                reference: "https://www.eurogamer.es",
                date: 'Publicado el dia: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del año ' + moment().format('Y'),
                content: "Han pasado más de diez años desde que Platinum Games publicase su primer proyecto, y desde entonces el estudio afincado en Osaka ha definido y redefinido los juegos de acción con brillantes títulos como Bayonetta, Vanquish o Metal Gear Rising: Revengeance. Sin embargo, tenemos la sensación de que la compañía quiere llevar su personal estilo a nuevas direcciones: Nier Automata ofreció brillantes resultados y Astral Chain es el siguiente paso en su evolución. <br> Uniendo su reconocible acción arcade con exploración, investigación, narrativa y rompecabezas, Astral Chain destaca como uno de los proyectos más ambiciosos de Platinum hasta la fecha. También es un juego que resulta difícil describir. Como cabría esperar el combate tiene un papel significativo, pero en esta ocasión el enfoque de la experiencia se ha ampliado. Ha sido descrito como un 'juego de acción sinergética', una terminología que hace referencia a la cadena astral del título, la cual enlaza al personaje del jugador con un ente denominado Legion, una mecánica que tiene influencia en prácticamente todos los aspectos jugables. Desde el combate a la investigación, hasta incluso en el mero hecho de moverse por el mundo, el enlace entre el jugador y su Legion es vital.",
                from: "https://www.eurogamer.es/articles/digitalfoundry-2019-astral-chain",
                media: "https://www.youtube.com/embed/gPT652uw1uM"
            },
        ]
        posts.forEach((item, index) => {
            var post =
                `<article class="post">
            <h2>${item.title}</h2>
            <div class="flex-post">
                    <time datetime="2019-05-08" class="date">${item.date}</time>
                    <p>Noticia por: <a class="links-references" href="${item.reference}" target="_blank">${item.subtitle}</a></p>
                    <p>
                    ${item.content}
                    </p>
                    <div class="flex-more">
                    <a href="${item.from}" class="button-more" target="_blank">Leer más</a>
                    </div>
                    <h3>Video de la noticia:</h3>
                    <div class="media-box">
                    <iframe width="100%" height="100%" src="${item.media}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>
                    <hr>
                    </article>`;
            $('#posts').append(post);
        });
    }
    //SELECTOR DE TEMA
    var theme = $("#theme")
    var greenTheme = $('#to-green').click(function () {
        theme.attr("href", "css/green.css");
    });
    var redTheme = $('#to-red').click(function () {
        theme.attr("href", "css/red.css");
    });
    var blueTheme = $('#to-blue').click(function () {
        theme.attr("href", "css/blue.css");
    });
    //scroll arriba de la web
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    })
    //login falso
    $('#login form').submit(function () {
        var formName = $('#form_name').val();
        localStorage.setItem('form_name', formName);
    });

    var formName = localStorage.getItem('form_name');
    if (formName != null || formName != undefined) {
        var about = $('#about p');
        about.html("<strong>Bienvenido, " + formName + "</strong>");
        about.append("<a href='#' id='logout'>Salir de sesión</a>");
        $('#login').hide();
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion({
            collapsible: true,
            active: false
        });
    }
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }
    //VALIDACION
    if (window.location.href.indexOf('contact') > -1) {
        $("form input[name='date'").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});