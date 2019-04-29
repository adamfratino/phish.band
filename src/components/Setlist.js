import React from "react";
// import { convertToSeconds } from '../utilities/convertToSeconds'

class Setlist extends React.Component {
  render() {
    const { title } = this.props;
    const songs = Object.keys(this.props)
      .map(k => this.props[k].song)
      .filter(item => item);
    const isSegue = Object.keys(this.props)
      .map(k => this.props[k].segue)
      .filter(item => item);
    const durations = Object.keys(this.props)
      .map(k => this.props[k].duration)
      .filter(item => item);

    return (
      <div className="setlist__set">
        <strong className="setlist__title">{title}</strong>
        <ol>
          {songs.map((song, i) => (
            <li
              key={`song_${i}`}
              className={`setlist__song segue_${isSegue[i]}`}
            >
              <span>
                {song}
                {<small>{durations[i]}</small>}
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
    // const { title, showDuration, showDetails } = this.props
    // const songs = Object.keys(this.props).map((k) => this.props[k].song).filter(item => item)
    // const durations = Object.keys(this.props).map((k) => this.props[k].duration).filter(item => item)
    // const isSegue = Object.keys(this.props).map((k) => this.props[k].segue).filter(item => item)
    // const runtime = durations.map((time, i) => convertToSeconds(time)).reduce((a, b) => a + b)/60
    //
    // return (
    //   <div className="setlist__set">
    //     <strong className="setlist__title">{title}</strong>
    //     <ol>
    //       {songs.map((song, i) =>
    //         <li key={`song_${i}`} className={`setlist__song segue_${isSegue[i]}`}>
    //           <span>
    //             { song }
    //             {showDuration && <small>{durations[i]}</small>}
    //           </span>
    //         </li>
    //       )}
    //     </ol>
    //     {showDetails &&
    //       <React.Fragment>
    //         <strong className="setlist__title set-length">{`${songs.length} songs`}</strong>
    //         <strong className="setlist__title set-runtime">{`${Math.round(runtime)} minutes`}</strong>
    //       </React.Fragment>
    //     }
    //   </div>
    // )
  }
}

export default Setlist;
