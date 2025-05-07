export default function Hero() {
   return (
      <>
         <h5>Complete this training program if you want to...</h5>
         <ol className="benefits-list">
            <li>Follow a simple program with garanteed results</li>
            <li>Get fit, healthy, strong and shredded</li>
            <li>Lear more about gym, training and technique</li>
            <li>Become a lifetime gym bro</li>
         </ol>
         <h3>The Rules</h3>
         <p>To complete this program you <b>MUST</b> follow this 3 simple rules</p>
         <ul className="rule-list">
            <div className="rule-item">
               <p><b>Rest</b></p>
               <p>Ensure that you are taking rest days when necessary</p>
            </div>
            <div className="rule-item">
               <p><b>Repetition</b></p>
               <p>Every rep is a pause rep following 
                  <abbr title="2 seconds up 2 seconds pause 2 seconds down">a 2-2-2</abbr>
                  </p>
            </div>
            <div className="rule-item">
               <p><b>Weight*</b></p>
               <p>
                  Select the maximum weight that allows you to comple teh set with good form
               </p>
            </div>
         </ul>
         <small>* The first and second seet shoud be at 75% and 85% of your working weight used for the last two sets*</small>
         <h3>The Training Plan</h3>
         <p>This training plan uses a structure know as the <b>Bro Split</b>, and follows this rotation ⬇️</p>
         <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat; </i></b></p>
         <p>Complete all of the workout below and track your progress along the way ✅</p>
      </>
   )
}