$('.search-bottom').click(function(){
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=dca61bcc&s='+$('.keyword-search').val(),
        success: result => {
            const movies = result.Search; 
            let cards = '';
            movies.forEach(v => {
                cards += `<div class="col-md-4 my-5">
                            <div class="card" style="width: 18rem;">
                                <img src="${v.Poster}" class="card-img-top">
                                <div class="card-body">
                                <h5 class="card-title">${v.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${v.Year}</h6>
                                <a href="#" class="btn btn-primary videoDetail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-imdbid="${v.imdbID}">Show Detail</a>
                                </div>
                            </div>
                        </div>`;
            });       
            $('.cards').html(cards);
            $(".videoDetail").click(function(){
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=dca61bcc&i="+$(this).data('imdbid'), 
                    success: m => { 
                        console.log(m);
                       let detailVideo = `
                       <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3">
                                    <img src="${m.Poster}" class="img-fluid">
                                </div>
                                <div class="col-md">
                                    <ul class="list-group">
                                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                        <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                                        <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                                        <li class="list-group-item"><strong>Write: </strong>${m.Writer}</li>
                                        <li class="list-group-item"><strong>Plot: </strong><br />${m.Plot}</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                                `;
                        $('.modalDetail').html(detailVideo);
                    },
                    error:(e) => {
                        console.log(e.responseText);
                    }
                });            
            });        
        },
        error:(e) => {
            console.log(e.responseText);
        }
    });
});


