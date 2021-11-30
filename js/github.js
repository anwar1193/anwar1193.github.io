$(document).ready(function(){

    tampil_github_data();

    function tampil_github_data(){
        $.ajax({
            url: 'https://api.github.com/users/anwar1193',
            type: 'get',
            dataType: 'json',
            success: function(hasil){
                let github_image = hasil.avatar_url;
                let github_username = hasil.login;
                let github_jumlah_repo = hasil.public_repos;
                let github_url = hasil.html_url;

                $('#github_image').append(
                    `
                    <img src="`+github_image+`" alt="github profile" class="img-thumbnail" style="border-radius: 50%;">
                    `
                );

                $('#github_data').append(
                    `
                    <h2>`+github_username+`</h2>
                    <h5>`+github_jumlah_repo+` Repositories</h5>
  
                    <a href="`+github_url+`" class="btn btn-danger btn-sm mt-3" target="_blank">
                      <i class="bi bi-link"></i> Kunjungi Github
                    </a>
                    `
                );
            }
        });
    }

});