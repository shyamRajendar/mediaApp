const initialState ={
    mediaFiles:{
        fileDetails:{
            name:"",
            type:"",
            size:""
        },
        blobValue:""
    }
}

export const setAudioFiles =(mediaFiles)=>({
type: "setMediaFiles",
payload:mediaFiles
})

export const mediaReducer =(state=initialState, action)=>{
    const statedup={...state};
    switch(action.type){
        case "setAudioFiles":
            statedup.audioFiles= action.payload.audioFiles;
            return statedup;
        case "setMediaFiles":
            statedup.mediaFiles.fileDetails.name= action.payload.fileDetails.name;
            statedup.mediaFiles.fileDetails.size= action.payload.fileDetails.size;
            statedup.mediaFiles.fileDetails.type= action.payload.fileDetails.type;
            statedup.mediaFiles.blobValue= action.payload.blobValue;
            //const updatedState= [...statedup.mediaFiles, action.payload];
            return statedup;
        default:
            return statedup;
    }
}