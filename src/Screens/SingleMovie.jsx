import React, { useState } from "react";
import Layout from "../Layout/layout.jsx";
import { useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import VideoInfo from "../Components/VideoInfo.jsx";
import VideoRates from "../Components/VideoRates";
import ShareVideoModel from "../Components/ShareVideoModel.jsx";

function SingleMovie() {
  const [modelOpen, setModelOpen] = useState(false);
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  return (
    <Layout>
      <ShareVideoModel
        modelOpen={modelOpen}
        setModelOpen={setModelOpen}
        movie={movie}
      />
      <VideoInfo movie={movie}  setModelOpen={setModelOpen}/>
      <div className="container mx-auto min-h-screen px-2 my-6">
        {/* comment */}
        <VideoRates movie={movie} />
      </div>
    </Layout>
  );
}

export default SingleMovie;
