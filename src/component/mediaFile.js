import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { setAudioFiles } from "../reducer/mediaReducer";
import { addMediaFile } from "../slices/mediaSlice";
import FileList from '../component/fileList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';

var a;
const MediaFile = () => {
  const [buttonName, setButtonName] = useState("Play");

  const [audio, setAudio] = useState();

  //video State hooks
  const inputRef = React.useRef();
  const [source, setSource] = React.useState();
  const { width, height } = { width: 100, height: 100 };

  const fileInput = useRef();
  const dispatch = useDispatch();
  const mediaValue = useSelector((state) =>
    state.media.value
  );
  console.log("mediaValue", mediaValue);
  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
      console.log("URL.createObjectURL(e.target.files[0])", URL.createObjectURL(e.target.files[0]))
      dispatch(addMediaFile({
        fileDetails: {
          id: uuid(),
          name: e.target.files[0]?.name,
          type: e.target.files[0]?.type,
          size: e.target.files[0]?.size,
        },
        blobValue: URL.createObjectURL(e.target.files[0])
      })
      )
      //dispatch(setAudioFiles({fileDetails: e.target.files[0], blobValue:URL.createObjectURL(e.target.files[0])}));
    }
  };

  //video

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <React.Fragment>
      <div style={{marginLeft:"35px", marginRight:"35px", marginTop:"35px"}}>
      <Grid container spacing={2} sx={{ marginBottom: "100px" }}>
        <Grid item xs={6}>
          <h2>{"Audio Upload"}</h2>
          <button onClick={handleClick}>{buttonName}</button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => fileInput.current.click()}
          >
            upload file
          </Button>
          <input type="file" ref={fileInput} onChange={addFile} style={{ display: 'none' }} />
        </Grid>
        <Grid item xs={6}>
        <h2>{"Video Upload"}</h2>
          <div className="VideoInput">
            <input
              ref={inputRef}
              className="VideoInput_input"
              type="file"
              onChange={handleFileChange}
              accept=".mov,.mp4"
            />
            {/* {!source && <button onClick={handleChoose}>Choose</button>} */}
            {source && (
              <video
                className="VideoInput_video"
                width="100%"
                height={height}
                controls
                src={source}
              />
            )}
            <div className="VideoInput_footer">{source || "Nothing selectd"}</div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <FileList />
      </Grid>
      </div>
    </React.Fragment>
  );
};

export default MediaFile;
