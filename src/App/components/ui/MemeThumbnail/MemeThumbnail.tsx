//import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeThumbnail.module.css";
 import { IImage,IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { MemeSVGViewer } from "orsys-tjs-meme";
// import { IImage,IMeme} from '../../../interfaces/common';
import {connect} from "react-redux";

const memeThumbnailInitialState = {};

/*interface IMemeThumbnailProps{
  images:Array<IImage>,
  memes:Array<IMeme>
}*/

const MemeThumbnail:React.FunctionComponent<{images:Array<IImage>,memes:Array<IMeme>}> = (props) => {
// const MemeThumbnail = (props) => {
//   const [state, setstate] = useState(memeThumbnailInitialState);
//   useEffect(() => {}, []);

  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((e: IMeme, i: number) => (
        <MemeSVGViewer
          key={"thumb-" + i}
          meme={e}
          image={props.images.find((img: IImage) => img.id === e.imageId)}
        />
      ))}
    </div>
);
};
 MemeThumbnail.propTypes = {
   memes:PropTypes.array.isRequired,
   images:PropTypes.array.isRequired
 };
// MemeThumbnail.defaultProps = {};

function mapStateToProps(state:any,ownprops:any){
  return {
    ...ownprops,
    memes:state.ressources.memes,
    images:state.ressources.images
  }
}

function mapDispatchtoProps(dispatch){
  return {}
}

export const ConnectdedMemeThumbnail=connect(mapStateToProps,mapDispatchtoProps)(MemeThumbnail);
export default MemeThumbnail;