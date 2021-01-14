import React from 'react';
import { Link } from 'react-router-dom';
function Home() {

    return(
    <div>
        <div className= "px-20">
         <div>
          <section>
           <div>
             <div className= 'mt-12'>
                 <h1 className="text-gray-700 text-5xl font-semibold ">The <span className="text-green-700 text-7xl pb-10px font-bold mt-">Shoppies</span></h1>
             </div>
                <h4 className="text-gray-700 text-4xl mt-6">Nominate your favorite movies</h4>
                <h4 className="text-gray-700 text-4xl">for the presitigious <span>Shoppies Awards</span></h4>
            </div>
           <div>
               <img></img>
           </div>
         </section> 


            <div className="flex">
                
                <div className="mt-4 mb-10 p-4">
                    <Link to='/nominate'><span>Nominate</span></Link></div>
                </div>
         </div>
         </div>
         <div>
            
         </div>      
        </div>
        
    );
}

export default Home;