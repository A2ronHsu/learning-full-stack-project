export default function Layout(props) {
   const { children } = props;

   const header = (
      <header>
         <h1 className="text-grandient">The Brogram</h1>
         <p><strong>The 30 Simple Workouts Program</strong></p>
      </header>
   )

   const footer = (
      <footer>
         <p>Built by 
            <a href="https://github.com/A2ronHsu" target="blank"> A2ron</a>
            <br /> 
            styled with  
            <a href="https://github.com/jamezmca/fantacss/blob/main/fanta.css"> fantacss</a>
         </p>
      </footer>
   )

   return (
      <>
         {header}
         {children}
         {footer}
      </>
   )
}