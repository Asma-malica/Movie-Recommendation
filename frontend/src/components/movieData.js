
const moviesData = [
    {
          id: 1,
          title: 'Baahubali',
          director: 'S.S. Rajamouli',
          language: 'Tamil',
          genre: 'Action, Drama',
          year: 2015,
          rating: 8.1,
          image: 'https://static.hollywoodreporter.com/sites/default/files/2015/07/bahubali_warrior_poster_p_15.jpg'
        },
        {
          id: 2,
          title: 'Vikram Vedha',
          director: 'Pushkar-Gayathri',
          language: 'Tamil',
          genre: 'Action, Crime, Thriller',
          year: 2017,
          rating: 8.5,
          image: 'http://moviegalleri.net/wp-content/uploads/2017/02/Madhavan-Vijay-Sethupathi-Vikram-Veda-Movie-First-Look-Poster.jpg'
        },
        {
          id: 3,
          title: 'Asuran',
          director: 'Vetrimaaran',
          language: 'Tamil',
          genre: 'Action, Drama',
          year: 2019,
          rating: 8.5,
          image: 'https://fr.web.img5.acsta.net/r_1280_720/pictures/19/09/30/10/52/0631736.jpg'
        },
        {
          id: 4,
          title: 'Pokkiri',
          director: 'PrabhuDeva',
          language: 'Tamil',
          genre: 'Action, Drama',
          year: 2007,
          rating: 8.8,
          image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/981d46201b9ef67d751c41631d7f676f6e89da69d7f2962ecb8641502864661a._RI_TTW_.jpg'
        },
        {
          id: 5,
          title: 'Pariyerum Perumal',
          director: 'Mari Selvaraj',
          language: 'Tamil',
          genre: 'Drama',
          year: 2018,
          rating: 8.4,
          image: 'https://flxt.tmsimg.com/assets/p15996849_p_v10_ab.jpg'
        },
        {
          id: 6,
          title: 'Kabali',
          director: 'Pa. Ranjith',
          language: 'Tamil',
          genre: 'Action, Crime, Drama',
          year: 2016,
          rating: 6.2,
          image: 'https://images.justwatch.com/poster/242843440/s718/kabali.%7Bformat%7D'
        },
        {
          id: 7,
          title: 'Kaala',
          director: 'Pa. Ranjith',
          language: 'Tamil',
          genre: 'Action, Drama',
          year: 2018,
          rating: 6.8,
          image: 'https://static.moviecrow.com/gallery/20180224/131802-kaala%20po%203.jpg'
        },
        {
          id: 8,
          title: 'Thani Oruvan',
          director: 'Mohan Raja',
          language: 'Tamil',
          genre: 'Action, Crime, Thriller',
          year: 2015,
          rating: 8.5,
          image: 'https://imgsrc.cineserie.com/2018/01/1943291.jpg?ver=1'
        },
        {
          id: 9,
          title: 'Aruvi',
          director: 'Arun Prabhu Purushothaman',
          language: 'Tamil',
          genre: 'Drama',
          year: 2017,
          rating: 8.4,
          image: 'https://fr.web.img3.acsta.net/pictures/18/01/03/10/13/1866596.jpg'
        },
        {
          id: 10,
          title: 'Soodhu Kavvum',
          director: 'Nalan Kumarasamy',
          language: 'Tamil',
          genre: 'Comedy, Crime, Thriller',
          year: 2013,
          rating: 8.3,
          image: 'https://1.bp.blogspot.com/-a9PhVGGNI4E/UVZrAWkRQlI/AAAAAAAANJg/xn2U7utau1A/s1600/Soodhu+Kavvum+Movie+Posters+(1).jpg'
        },
        {
          id: 11,
          title: 'Sillunu Oru Kaadhal',
          director: 'Krishna',
          language: 'Tamil',
          genre: 'Drama,Romance',
          year: 2006,
          rating: 8.9,
          image: 'https://wallpapercave.com/wp/wp7061022.jpg'
        },
        {
          id: 12,
          title: '96',
          director: 'C. Prem Kumar',
          language: 'Tamil',
          genre: 'Drama, Romance',
          year: 2018,
          rating: 8.6,
          image: 'http://fr.web.img2.acsta.net/pictures/18/09/24/10/22/4543094.jpg'
        },
        {
          id: 13,
          title: 'Alaipayuthey',
          director: 'Manirathnam',
          language: 'Tamil',
          genre: 'Drama , Romance',
          year: 2000,
          rating: 8.9,
          image: 'https://m.media-amazon.com/images/I/81Vq1Kp13iL._AC_UL480_FMwebp_QL65_.jpg'
        },
        {
          id: 14,
          title: 'Vinnai thandi varuvaya',
          director: 'Gautham Vasudev Menon',
          language: 'Tamil',
          genre: 'Drama,Love',
          year: 2010,
          rating: 8.6,
          image: 'https://wallpaperaccess.com/full/3805219.jpg',
        },
        {
          id: 15,
          title: 'Sachein',
          director: 'John',
          language: 'Tamil',
          genre: 'Drama , Love',
          year: 2005,
          rating: 8.9,
          image: 'https://e1.pxfuel.com/desktop-wallpaper/149/288/desktop-wallpaper-sachien-vijay-genelia-d-souza-bipasha-basu-vadivelu-sachin-movie.jpg'
        },
        {
          id: 16,
          title: 'Mersal',
          director: 'Atlee Kumar',
          language: 'Tamil',
          genre: 'Action, Drama, Thriller',
          year: 2017,
          rating: 7.7,
          image: 'https://3.bp.blogspot.com/-u5OuvAZFoJI/WVxnbWL4hoI/AAAAAAAAj-k/O0iBcxLjShMyn67MwxGMJuDBB34wjaKuwCLcBGAs/s1600/Mersal-poster-1.jpg'
        },
        {
          id: 17,
          title: 'Irudhi Suttru',
          director: 'Sudha Kongara',
          language: 'Tamil',
          genre: 'Drama, Sport',
          year: 2016,
          rating: 7.7,
          image: 'https://moviegalleri.net/wp-content/gallery/irudhi-suttru-audio-release-posters/irudhi_suttru_movie_audio_release_posters_1ef289d.jpg'
        },
        {
          id: 18,
          title: 'Vada Chennai',
          director: 'Vetrimaaran',
          language: 'Tamil',
          genre: 'Action, Crime, Drama',
          year: 2018,
          rating: 8.4,
          image: 'https://a.ltrbxd.com/resized/film-poster/3/4/4/5/2/0/344520-vada-chennai-0-460-0-690-crop.jpg?k=06125039cf'
        },
        {
          id: 19,
          title: 'Thuppakki',
          director: 'A.R. Murugadoss',
          language: 'Tamil',
          genre: 'Action,Crime, Thriller',
          year: 2012,
          rating: 7.8,
          image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thuppakki-et00010412-1655889794.jpg'
        },
        {
          id: 20,
          title: 'Indian2',
          director: 'S. Shankar',
          language: 'Tamil',
          genre: 'Drama, Action, Thriller',
          year: 2024,
          rating: 8.1,
          image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/201901/Indian_2_-_1_IT_1547788035006.jpg?VersionId=ZTbFvpSSbbRlhcopCMXan5k68bvl5q6G&size=686:*'
        },
        { id: 28,
          title: "Vikram",
          director: "Lokesh Kanagaraj", 
          language: "Tamil", 
          genre: "Action, Crime, Thriller", 
          year: 2022, 
          rating: 8.8, 
          image: "https://fr.web.img2.acsta.net/pictures/22/05/04/09/42/2589693.jpg" 
        },
      
        { id: 29,
          title: "Kaithi", 
          director: "Lokesh Kanagaraj", 
          language: "Tamil", 
          genre: "Action, Crime,Thriller", 
          year: 2019, 
          rating: 8.5, 
          image: "https://m.media-amazon.com/images/M/MV5BMzNjMDhmYzEtM2YxOC00NzZjLThkODctZjI4M2UyOWIyOTZmXkEyXkFqcGdeQXVyNzcxMzI4Njk@._V1_FMjpg_UX1000_.jpg" 
        },
      
        { id: 30, 
          title: "Maanagaram", 
          director: "Lokesh Kanagaraj", 
          language: "Tamil", 
          genre: "Action, Crime, Thriller", 
          year: 2017, 
          rating: 8.1, 
          image: "https://fr.web.img6.acsta.net/pictures/20/05/08/20/43/3400430.jpg" 
        },
        {
          id: 31,
          title: "Soorarai Pottru",
          director: "Sudha Kongara",
          language: "Tamil",
          genre: "Drama, sport",
          year: 2020,
          rating: 9.1,
          image:"https://m.media-amazon.com/images/M/MV5BOThkNjFiMzMtNGY5Yi00MDAxLTgxYjItMTZiN2RiMGNiOTA4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_FMjpg_UX1000_.jpg"
        },
        {
          id: 32,
          title: "Deiva Thirumagal",
          director: "A. L. Vijay",
          language: "Tamil",
          genre: "Drama, Family",
          year: 2011,
          rating: 8.1,
          image: "https://img.seriebox.com/films/102/102058/affich_102058_1.jpg"
      },
        
      
        // English Movies
        {
          id: 21,
          title: 'The Shawshank Redemption',
          director: 'Frank Darabont',
          language: 'English',
          genre: 'Drama',
          year: 1994,
          rating: 9.3,
          image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
        },
        {
          id: 22,
          title: 'The Godfather',
          director: 'Francis Ford Coppola',
          language: 'English',
          genre: 'Crime',
          year: 1972,
          rating: 9.2,
          image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
        },
        {
          id: 23,
          title: 'The Dark Knight',
          director: 'Christopher Nolan',
          language: 'English',
          genre: 'Action',
          year: 2008,
          rating: 9.0,
          image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
        },
        {
          id: 24,
          title: 'Pulp Fiction',
          director: 'Quentin Tarantino',
          language: 'English',
          genre: 'Crime',
          year: 1994,
          rating: 8.9,
          image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
        },
        {
          id: 25,
          title: 'Forrest Gump',
          director: 'Robert Zemeckis',
          language: 'English',
          genre: 'Drama',
          year: 1994,
          rating: 8.8,
          image: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg'
        },
      
        // Malayalam Movies
        {
          id: 26,
          title: 'Drishyam',
          director: 'Jeethu Joseph',
          language: 'Malayalam',
          genre: 'Crime, Drama, Thriller',
          year: 2013,
          rating: 8.7,
          image: 'http://static.moviecrow.com/marquee/drishyam-new-poster/67289_thumb_665.jpg'
        },
        {
          id: 27,
          title: 'Premam',
          director: 'Alphonse Puthren',
          language: 'Malayalam',
          genre: 'Comedy, Drama, Romance',
          year: 2015,
          rating: 8.3,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71uDxcc9O+L._SX600_.jpg'
        },
        {
          id: 33,
          title: "Hridayam",
          director: "Vineeth Sreenivasan",
          language: "Malayalam",
          genre: "Drama, Romance",
          year: 2022,
          rating: 8.2,
          image: "https://m.media-amazon.com/images/M/MV5BMTkzM2I3YzQtNjQ0Ni00OTY2LWJjNDUtMDAxMWExYTlkZGQxXkEyXkFqcGdeQXVyNTA2MzMwMjA@._V1_FMjpg_UX1000_.jpg"
        },
        {
          id: 34,
          title: "2018",
          director: "Jude Anthany Joseph",
          language: "Malayalam",
          genre: "Drama, Thriller",
          year: 2023,
          rating: 8.4,
          image: "https://static1.showtimes.com/poster/660x980/2018-malayalam-169502.jpg"
      },
      {
        id: 35,
        title: "Bangalore Days",
        director: "Anjali Menon",
        language: "Malayalam",
        genre: "Comedy, Drama, Romance",
        year: 2014,
        rating: 8.3,
        image: "https://i.pinimg.com/originals/a9/88/a8/a988a84fb459fdc2c7883e8290afd52b.jpg"
      },
        // Hindi Movies
        {
          id: 36,
          title: 'Dilwale Dulhania Le Jayenge',
          director: 'Aditya Chopra',
          language: 'Hindi',
          genre: 'Drama, Romance',
          year: 1995,
          rating: 8.1,
          image: 'https://image3.mouthshut.com/images/imagesp/925747623s.jpg'
        },
        {
          id: 37,
          title: '3 Idiots',
          director: 'Rajkumar Hirani',
          language: 'Hindi',
          genre: 'Comedy, Drama',
          year: 2009,
          rating: 8.4,
          image: 'https://m.media-amazon.com/images/M/MV5BMTY4NTc2NTYzMl5BMl5BanBnXkFtZTcwNDk2MzkwMw@@._V1_FMjpg_UX1000_.jpg'
        },
        {
          id: 38,
          title: "Aashiqui 2",
          director: "Mohit Suri",
          language: "Hindi",
          genre: "Drama, Music, Romance",
          year: 2013,
          rating: 7.0,
          image: "https://cdn.moviescore.com/posters/22205.jpg"
      },
      {
          id: 39,
          title: "Goliyon Ki Raasleela Ram-Leela",
          director: "Sanjay Leela Bhansali",
          language: "Hindi",
          genre: "Drama, Romance",
          year: 2013,
          rating: 6.4,
          image: "https://cdn.movietalkies.com/wp-content/uploads/media/posters/bollywood/movies/2013/ramleela/ramleela-1b.jpg"
      },
      {
          id: 40,
          title: "Chennai Express",
          director: "Rohit Shetty",
          language: "Hindi",
          genre: "Action, Comedy, Drama",
          year: 2013,
          rating: 6.1,
          image: "http://2.bp.blogspot.com/-l9HC8EyqPp0/UhCbs7CtdaI/AAAAAAAAAHs/UNQYBFFQmDI/s1600/bollywood-chennai-express-poster-1.jpg"
      }
          
  ];

  export default moviesData;