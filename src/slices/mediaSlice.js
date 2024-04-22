import { createSlice } from "@reduxjs/toolkit";

const initialStateArr ={
    mediaFiles:[]
}
// const initialStateArr ={
//     mediaFiles:[{
//         fileDetails:{
//             name:"",
//             type:"",
//             size:""
//         },
//         blobValue:""
//     }]
// }
export const mediaSlice = createSlice({
    name: "media",
    initialState: {value: initialStateArr.mediaFiles},
    reducers:{
        addMediaFile:(state, action)=>{
            state.value.push(action.payload)
        },
        updateFileName: (state, action) => {
            const { id, title, author } = action.payload;
            const isBookExist = state.value.filter((file) => file.id === id);
      
            if (isBookExist) {
              isBookExist[0].title = title;
              isBookExist[0].author = author;
            }
          },
    }
})

export default mediaSlice.reducer;
export const {addMediaFile}= mediaSlice.actions;