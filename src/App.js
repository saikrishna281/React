
import './App.css';
import {Grid} from "@material-ui/core"
import Youtube from './Api/Youtube';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import VideoDetails from './Components/VideoDetails';
import VideoList from './Components/VideoList';
function App() {
const [videos,setVideos]=useState([]);
const [selectedVideo,setSelectedVideos]=useState({ id:{},snippet:{}})

  async function handleSubmit(searchTerm){
    const {data:{items:videos}} = await Youtube.get("search",{
      params:{
        part:'snippet',
        maxResults:5,
        key:"AIzaSyA6VNEycZyovFvcv4mwj9HYhDOlRNNPt_c",
        q:searchTerm,
      }
    })
    setVideos(videos)
    setSelectedVideos(videos[0])
  }
  return (
    <Grid style={{justifyContent:"center"}} container spacing={10}>
    <Grid item xs={11}>
       <Grid container spacing={10}>
        <Grid item xs={12}>
       <SearchBar onSubmit={handleSubmit}/>
        </Grid>
         <Grid item xs={8}>
          <VideoDetails video={selectedVideo}/>
         </Grid>
         <Grid item xs={4}>
         <VideoList videos={videos} onVideoSelect={setSelectedVideos}/>
         </Grid>
       </Grid>
    </Grid>
    </Grid>
  );

  
}

export default App;
