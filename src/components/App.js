import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {

  return (
    <div className="ui container grid mt-4">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
