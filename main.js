// creo un dizionario con tutti i possibili valori da cercare
let possibleItemsToSearch = 
[
    {
        titolo : "10cosecheodiodite", 
        path: "images/imgfilm/10cosecheodiodite.jpg",
        spotifyLink:"https://open.spotify.com/playlist/0HnU2wzVBl96IJOJbZFrg7?si=15a0b86d05794fc1",
    },
    {
        titolo : "albergospagnolo", 
        path: "images/imgfilm/albergospagnolo.jpg",
        spotifyLink:"https://open.spotify.com/playlist/53q0UmZ0Ka10UgDMDT7mSm?si=9dc0eee75d844add"
    }

    // insert here all the other items (film, anime, musical & tv series)
    // separated by a comma
    // pay attention when put the image path. You can copy it from the other html pages without the .. 
    // follow the example upside
];

// quando il documento finisce di caricarsi...
$(document).ready(function(){

    //quando clicco sul pulsante di ricerca...
    $(".btn-info").on('click',function()
    {
        var toSearch = $('.form-control').val();
        
        // devo ciclare su tutti gli elementi del dizionario
        for (let index = 0; index < possibleItemsToSearch.length; index ++)
        {
            if (toSearch.replace(' ', '') === possibleItemsToSearch[index].titolo)
            {
                console.log('found');

                $('#search-box .find-result').html(
                    '<a href="'+possibleItemsToSearch[index].spotifyLink+' target="_blank" rel="noopener noreferrer">' + 
                    '<img class="locandina" src="'+possibleItemsToSearch[index].path+'"/>' +
                    '</a'
                );
                break;
            }
            else
            {
                $('#search-box .find-result').html("Nessun risultato provato");
            }
        }
    });
});