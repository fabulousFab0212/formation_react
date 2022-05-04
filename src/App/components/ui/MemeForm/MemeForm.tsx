import React from "react";

import styles from "./MemeForm.module.css";
import PropTypes from "prop-types";
import { IImage,IMeme } from "orsys-tjs-meme/dist/interfaces/common";

interface IMemeFormProps{
  images:Array<IImage>,
  meme:IMeme,
  onFormChange:Function
}

// class CMemeFormProps{
//   constructor(){ 
//     this.images=[]
//   }
//   images:Array<IImage>
// }

const MemeForm:React.FunctionComponent<IMemeFormProps> = (props) => {

  function onTextChange(evt:React.ChangeEvent<HTMLInputElement>){
    const assembledResult={};
    assembledResult[evt.target.name]=evt.target.value;
    props.onFormChange(assembledResult);
  }

  function onNumberChange(evt:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>){
      const assembledResult={};
      assembledResult[evt.target.name]=Number(evt.target.value);
      props.onFormChange(assembledResult);
  }

  function onCheckedChange(evt:React.ChangeEvent<HTMLInputElement>){
    const assembledResult={};
    assembledResult[evt.target.name]=evt.target.checked;
    props.onFormChange(assembledResult);
}

  return (
       <div data-testid="MemeForm" className={styles.MemeForm}>
        <form >
          <h1>Titre</h1>
          <input
            type="text"
            id="f_titre"
            name="titre"
            placeholder="saisir titre"
            value={props.meme.titre}
            onChange={onTextChange} //version via fonction
             />
          <hr />
          <h2>Image</h2>
          <select
           value={props.meme.imageId}
           name="imageId"
           onChange={onNumberChange}
          >
            <option value="-1">Aucune</option>
            {
              props.images.map((e:IImage,i:number)=>{return <option key={`opt-${i}`} value={e.id}>{e.name}</option>})
            }
           
          </select>
          <hr />
          <h2>text</h2>
          <input
            type="text"
            name="text"
            value={props.meme.text}
            onChange={(evt)=>{
              console.log(evt);
              props.onFormChange({text:evt.target.value}) //version "manuelle"
            }}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                type="number"
                name="x"
                className={styles.smallInput}
                value={props.meme.x}
                onChange={(evt)=>{
                  console.log(evt);
                  props.onFormChange({x:evt.target.value})
                }}
              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                type="number"
                name="y"
                className={styles.smallInput}
                value={props.meme.y}
                onChange={(evt)=>{
                  console.log(evt);
                  props.onFormChange({y:evt.target.value})
                }}
              />
            </div>
          </div>
          <hr />
          <label htmlFor="f_color">Couleur</label>
          <input
            type="color"
            id="f_color"
            name="color"
            value={props.meme.color}
            onChange={onTextChange}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                type="number"
                name="fontSize"
                className={styles.smallInput}
                min={0}
                value={props.meme.fontSize}
                onChange={(evt)=>{
                  console.log(evt);
                  props.onFormChange({fontSize:evt.target.value})
                }}
              />
            </div>
            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                type="number"
                name="fontWeight"
                className={styles.smallInput}
                min="100"
                step="100"
                max="900"
                value={props.meme.fontWeight}
                onChange={(evt)=>{
                  console.log(evt);
                  props.onFormChange({fontWeight:evt.target.value}) //version "manuelle"
                }}
              />
            </div>
          </div>
          <div className={styles.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                id="f_underline"
                name="underline"
                type="checkbox"
                checked={props.meme.underline}
                onChange={(evt)=>{
                  console.log(evt);
                  props.onFormChange({underline:evt.target.checked}) //version "manuelle"
                }}
              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input
                id="f_italic"
                name="italic"
                type="checkbox"
                checked={props.meme.italic}
                onChange={onCheckedChange} //version via fonction
              />
            </div>
          </div>
          <div className={styles.half}>
           
          </div>
        </form>
      </div>
  );
};

export default MemeForm;