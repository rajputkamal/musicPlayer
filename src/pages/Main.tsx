import Audioplayer from "../components/Audioplayer";
import Song from "../components/Song";
import "../styles/App.scss";

const Main = () => {

  const songList = [
    {
      id: 1,
      // image: require("../assets/images/logo.png"),
      image: 'https://i.ibb.co/6PyXrHD/1674235.png',
      url: require('../assets/audio/01.mp3'),
      title:"we are not getting back together",
      listeners: Math.round(Date.now() / 1000000),
      time: "03:40",
      yearOfAlbum: "1998"
    }
  ];

  console.log(songList)
  return (
    <div className="main">
      <div className="banner">
        <img src={require("../assets/images/mainbanner.png")} />
      </div>

      <ol className="main_section_songList" type="1">
        <div className="song-list-header">
          <h1>Popular</h1>
          <p>
            <a href="#">See All</a>
          </p>
        </div>

        {/* <div className='song-list'> */}
        <Song
          image={songList[0].image}
          title={songList[0].title}
          playing={songList[0].listeners}
          duration={songList[0].time}
          year={songList[0].yearOfAlbum}
        />
        {/* <div>#</div>
          <div>img</div>
          <div>title</div>
          <div>playing</div>
          <div>time</div>
          <div>album</div>
        </div>
        <div className='song-list'>
          <div>#</div>
          <div>img</div>
          <div>title</div>
          <div>playing</div>
          <div>time</div>
          <div>album</div>
        </div>
        <div className='song-list'>
          <div>#</div>
          <div>img</div>
          <div>title</div>
          <div>playing</div>
          <div>time</div>
          <div>album</div>
        </div>
        <div className='song-list'>
          <div>#</div>
          <div>img</div>
          <div>title</div>
          <div>playing</div>
          <div>time</div>
          <div>album</div>
        </div>
        <div className='song-list'>
          <div>#</div>
          <div>img</div>
          <div>title</div>
          <div>playing</div>
          <div>time</div>
          <div>album</div>
        </div> */}
      </ol>
      <Audioplayer />
    </div>
  );
};

export default Main;
