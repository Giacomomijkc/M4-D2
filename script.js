const fetchMusic = (id, section) => {
const myArtist = document.getElementById(id);
const artistSection = document.getElementById(section);

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((raw) => {
        return raw.json()
    })
    .then((res) => {
        let music = res.data;
        myArtist.classList.remove("d-none");
        for (let i = 0; i < music.slice(0, 4).length; i++){
            const element = music[i];
            artistSection.innerHTML += "<div class='col col-3'> <img class='w-100' src='" + element.album.cover_xl + "'/> <span>" + "Titolo:" + element.title + "</span> <span>" + "Tipologia:" + element.type + "</span> <span>" + "Durata:" + element.duration + "</span></div>";
            let myModal = document.getElementById("list");
            myModal.innerText += "ALBUM" + " " + element.album.title + " ";
        }
    })
    .catch((err) => console.log(err))
}

const fetchMusic2 = (id, section) => {
    const myArtist = document.getElementById(id);
    const artistSection = document.getElementById(section);
    
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
        .then((raw) => {
            return raw.json()
        })
        .then((res) => {
            let music = res.data;
            myArtist.classList.remove("d-none");
            for (let i = 0; i < music.slice(0, 4).length; i++){
                const element = music[i];
                artistSection.innerHTML += "<div class='col col-3'> <img class='w-100' src='" + element.album.cover_xl + "'/> <span>" + "Titolo:" + element.title + "</span> <span>" + "Tipologia:" + element.type + "</span> <span>" + "Durata:" + element.duration + "</span></div>";
                let myModal = document.getElementById("list");
                myModal.innerText += "ALBUM" + " " + element.album.title + " ";
            }
        })
        .catch((err) => console.log(err))
    }

    
const fetchMusic3 = (id, section) => {
    const myArtist = document.getElementById(id);
    const artistSection = document.getElementById(section);
        
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
        .then((raw) => {
            return raw.json()
        })
        .then((res) => {
            let music = res.data;
            myArtist.classList.remove("d-none");
            for (let i = 0; i < music.slice(0, 4).length; i++){
                const element = music[i];
                artistSection.innerHTML += "<div class='col col-3'> <img class='w-100' src='" + element.album.cover_xl + "'/> <span>" + "Titolo:" + element.title + "</span> <span>" + "Tipologia:" + element.type + "</span> <span>" + "Durata:" + element.duration + "</span></div>";
                let myModal = document.getElementById("list");
                myModal.innerText += "ALBUM" + " " + element.album.title + " ";
            }
        })
        .catch((err) => console.log(err))
    }


window.onload = () => {
    fetchMusic("eminem", "eminemSection");
    fetchMusic2("metallica", "metallicaSection");
    fetchMusic3("queen", "queenSection");
}
