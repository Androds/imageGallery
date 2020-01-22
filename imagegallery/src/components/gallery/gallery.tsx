import React, { Component } from 'react';
import {connect} from 'react-redux';
import './gallery.css'
import {bindActionCreators, compose} from 'redux';
import  * as GalleryActions from '../../actions';
import { Carousel } from '../carousel/carousel';

export class Gallery extends React.Component<any> {
  constructor(props: any){
    super( props );
  }

    componentDidMount() {
        this.props.loadAlbums();        
    }

    render() {    
      const {albums, selectAlbum} = this.props;
      return (
        <div >
          <div>
            <div className="image-scroller">              
                <Carousel images = {(this.props.images || [])} />
            </div>
          </div>
          <div>  
          <ul>            
          {(this.props.albums || []).map((album: any, index: number) => (              
            <li key={index} onClick={() => {
                selectAlbum(album.id);
            }
                }>
                {album.title}
              </li>
            ))}
            </ul>            
          </div>
        </div>
      )
    }
  }

  function mapStateToProps(state: any) {
  return {
    albums: state.albums,
    images: state.images,
    selectedAlbum: state.selectedAlbum
  }  
}

function mapActionCreatorsToProps(dispatch: any) {
    return bindActionCreators(GalleryActions.loadAlbums, dispatch);
}

export default compose(connect(mapStateToProps, mapActionCreatorsToProps)(Gallery))