$(document).ready(function(){

    youtube_data();
    youtube_video();

    function youtube_data(){
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/channels',
            type: 'get',
            dataType: 'json',
            data: {
                key: 'AIzaSyBW8vhtSH6I-9V0SWOMl27WRbr84QPhrhY',
                id: 'UCvA-pKFl6XH_vdihSK9nDhw',
                part: 'snippet,statistics'
            },
            success: function(hasil){
                let nama_youtube = ((hasil.items[0]).snippet).title;
                let thumbnail_youtube = ((((hasil.items[0]).snippet).thumbnails).medium).url;
                let jml_subscriber = ((hasil.items[0]).statistics).subscriberCount;

                $('#youtube-data').append(
                    `
                        <h2>`+nama_youtube+`</h2>
                        <h5>`+jml_subscriber+` Subscriber </h5>
                        <a href="https://www.youtube.com/c/SBXperience_Channel" class="btn btn-danger btn-sm mt-3" target="_blank">
                            <i class="bi bi-link"></i> Kunjungi Channel
                        </a>
                    `
                );

                $('#youtube-image').append(
                    `
                        <img src="`+thumbnail_youtube+`" class="img-fluid" alt="" style="border-radius: 50%;">
                    `
                );
            }
        });
    }


    function youtube_video(){
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search',
            type: 'get',
            data: {
                key: 'AIzaSyBW8vhtSH6I-9V0SWOMl27WRbr84QPhrhY',
                part: 'snippet',
                channelId: 'UCvA-pKFl6XH_vdihSK9nDhw',
                maxResults: 1,
                order: 'date'
            },
            dataType: 'json',
            success: function(hasil){
                let id_vidio = ((hasil.items[0]).id).videoId;
                $('#youtube-vidio').append(
                    `
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/`+id_vidio+`?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div>
                    `
                );
            }
        });
    }

});