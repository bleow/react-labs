import {useState} from "react";

const Song = (props) => {
  return (<li>
    {props.song.title} by {props.song.artist} has {props.song.votes} votes.
    <button onClick={() => props.recordVote(props.id)}>Vote for this song</button>
  </li>);
}

const SongList = () => {

  const initialSongs = [
    {title : 'Last thing on my mind', artist: 'steps', votes : 0},
    {title : 'If you\'re over me', artist: 'Years and years', votes : 0},
    {title : 'Top of the world', artist: 'Carpenters', votes: 0},
    {title: 'Sometimes', artist: 'Erasure', votes : 0}
  ];

  let [showAll, setShowAll] = useState(true);
  let [songs, setSongs] = useState(initialSongs);

  const addVote = (id) => {
    const newSongs = songs.map( (song,idx) => idx == id ? {...song, votes: song.votes + 1} : song);
    setSongs(newSongs);
  }

  const toggleShowAll = () => {
    setShowAll(!showAll);
  }

  return (
    <div>
      <h2>Your favourite songs are:</h2>
      <ul>
        {showAll &&
          songs.map((song, index) =>
            <Song key={index} song={song} recordVote={addVote} id={index}/>)
        }

        {!showAll &&
          songs.filter(song => song.votes >= 2).map((song, index) =>
            <Song key={index} song={song} recordVote={addVote} id={index}/>)
        }

      </ul>
      <h3>Currently showing {showAll ? 'all' : '2 or more rated'} songs</h3>
      <button onClick={toggleShowAll}>Show {showAll ? 'only songs with 2 or more votes' : 'all songs'}</button>
    </div>
  );
};

export default SongList;
