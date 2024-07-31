import {useState} from "react";

const Song = (props) => {
  return (<li>
    {props.song.title} by {props.song.artist} has {props.song.votes} votes.
    <button onClick={() => props.recordVote()}>Vote for this song</button>
  </li>);
}

const SongList = () => {

  let [song1, setSong1] = useState({title : 'Last thing on my mind', artist: 'Steps', votes: 0});
  let [song2, setSong2] = useState({title : 'If you\'re over me', artist: 'Years and years', votes: 0});

  const changeSong = () => {
    setSong1({...song1, title : 'Something in your eyes'});
    setSong2({...song2, title : 'King' })
  }

  const addVote1 = () => {
    setSong1({...song1, votes: song1.votes+1});
  }
  const addVote2 = () => {
    setSong2({...song2, votes: song2.votes+1});
  }

  return (
    <div>
      <ul>
        <Song song={song1} recordVote={addVote1}/>
        <Song song={song2} recordVote={addVote2} />
      </ul>
      <button onClick={changeSong}>Change songs</button>
    </div>
  );
};

export default SongList;
