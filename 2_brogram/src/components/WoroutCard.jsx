import React from "react";
import Modal from "./Modal";

export default function WorkoutCard(props) {
   const { trainingPlan, woroutIndex, type, dayNum, icon } = props;

   const { warmup, workout } = trainingPlan || {};

   const showExerciseDescription = {name: "test name", description:"test description"};

   return (
      <div className="workout-container">
         <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={() => {}}/>
         <div className="workout-card card">
            <div className="plan-card-header">
               <p>Day {dayNum}</p>
               {icon}
            </div>
            <div className="plan-card-header">
               <h2><b>{type} Workout</b></h2>
            </div>
         </div>

         <div className="workout-div">
            <div className="execise-name">
               <h4>Warmup</h4>
            </div>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 className="weight-input">Max Weight</h6>
            {warmup.map((warmupExercise, warmupIndex)=>{
               return(
                  <React.Fragment key={warmupIndex}>
                     <div className="execise-name">
                        <p>{warmupIndex+1}. {warmupExercise.name}</p>
                        <button className="help-icon">
                           <i className="fa-regular fa-circle-question"></i>
                        </button>
                     </div>
                     <p className="exercise-info">{warmupExercise.sets}</p>
                     <p className="exercise-info">{warmupExercise.reps}</p>
                     <input className="weight-input"  type="text" placeholder="N/A" disabled/>

                  </React.Fragment>
               )
            })}
         </div>

         <div className="workout-div">
            <div className="execise-name">
               <h4>Workout</h4>
            </div>
            <h6>Sets</h6>
            <h6>Reps</h6>
            <h6 className="weight-input">Max Weight</h6>
            {workout.map((workoutExercise, warmupIndex)=>{
               return(
                  <React.Fragment key={warmupIndex}>
                     <div className="execise-name">
                        <p>{warmupIndex+1}. {workoutExercise.name}</p>
                        <button className="help-icon">
                           <i className="fa-regular fa-circle-question"></i>
                        </button>
                     </div>
                     <p className="exercise-info">{workoutExercise.sets}</p>
                     <p className="exercise-info">{workoutExercise.reps}</p>
                     <input className="weight-input"  type="text" placeholder="14" />

                  </React.Fragment>
               )
            })}
         </div>

         <div className="workout-buttons">
            <button>Save & Exit</button>
            <button disabled={true}>Complete</button>
         </div>

      </div>
   )
}