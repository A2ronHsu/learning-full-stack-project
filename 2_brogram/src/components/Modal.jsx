import ReatDom from "react-dom";


export default function Modal(props){
   const {showExerciseDescription, handleCloseModal } = props;
   console.log(showExerciseDescription);
   const { name, description} = showExerciseDescription

   return ReatDom.createPortal((
      <div className="modal-container">
         <button className="modal-underlay" onClick={handleCloseModal}/>
         <div className="modal-content">
            <div>
               <h6>Name</h6>
               <h2 className="skill-name">{name.replaceAll('-',' ')}</h2>
            </div>
            <div>
               <h6>Descrition</h6>
               <p>{description}</p>
            </div>
         </div>
      </div>
   ),document.getElementById("portal"))
}