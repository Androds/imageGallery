export const SELECT_ALBUM = 'SELECT_ALBUM';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';

// export function selectAlbum(albumId: number) {
//   return {
//     type: SELECT_ALBUM,
//     albumId
//   };
// }

export function loadAlbums() {
    return {
        type: LOAD_ALBUMS
    }
}