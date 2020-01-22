const defaultState = {
albums: [],
images: []
}

export default function albums(state = defaultState, action: any) {
    switch(action.type) {
        // case 'ALBUM_SELECTED':
        //     return {...state, albumId: action.albumId, images: action.images};
        case 'ALBUMS_LOADED':
          return {...state, albums: action.albums, images: action.images};
        default:
            return state;
         }    
  }