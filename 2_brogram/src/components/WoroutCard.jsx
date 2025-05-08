

export default function WorkoutCard(props) {
   const { trainingPlan, woroutIndex, type, dayNum, icon } = props;

   const { warmup, workout } = trainingPlan || {};

   return (
      <div className="workout-container">
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
         </div>
      </div>
   )
}