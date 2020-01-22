import {put, takeLatest, take, fork, call} from 'redux-saga/effects';
const ALBUMS_API_ENDPOINT = `https://jsonplaceholder.typicode.com/albums`;


const fetchAlbums = () => {
  return fetch(ALBUMS_API_ENDPOINT).then((response) => {      
    return response.json().then((json) => { 
      console.log(json);       
      return json;
    })
  })
}

const fetchImages = (albumId: any) => {
  let IMAGES_API_ENDPOINT = `https://jsonplaceholder.typicode.com/photos?albumId=1`;
  if(albumId)
  IMAGES_API_ENDPOINT = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
  return fetch(IMAGES_API_ENDPOINT).then((response) => {      
    return response.json().then((json) => {  
      return json.map((img: any) => ({title: img.title, url: img.thumbnailUrl}));
    })
  })
}

export function* watchForLoadAlbums() {    
  yield take('LOAD_ALBUMS'); 
  //yield takeLatest('LOAD_ALBUMS', loadAlbums);     
  yield fork(loadAlbums);   
}

// export function* watchForSelectAlbums() {
//   yield takeLatest('SELECT_ALBUM', selectAlbum);
// }

export function* loadAlbums() {
  console.log('load');
  const albums = yield fetchAlbums();  
  const images = yield fetchImages(1);
  yield put({type: 'ALBUMS_LOADED', albums: albums, images: images})
}

// export function* selectAlbum(action: any) {
//   const images = yield fetchImages(action.albumId);
//   yield put({type: 'ALBUM_SELECTED', images: images, albumId: action.albumId})
// }