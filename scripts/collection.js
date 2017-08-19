var buildCollectionItemTemplate = function() {
    var template =
        '<div class="collection-album-container column fourth">'
    +       '<img src="assets/images/album_covers/01.png"/>'
    +       '<div class="collection-album-info caption">'
    +           '<p>'
    +               '<a class="album-name" href="album.html">The Colors</a>'
    +               '<br/>'
    +               '<a href="#">Pablo Picasso</a>'
    +               '<br/>'
    +               'X songs'
    +               '<br/>'
    +           '</p>'
    +       '</div>'
+       '</div>'
;
    return $(template);
};

$(window).load(function() {
    var $collectionContainer = $('.album-covers');
    for(var i = 0; i < 18; i++) {
        var $newThumbnail = buildCollectionItemTemplate();
        $collectionContainer.append($newThumbnail);
    }
});
