import { useEffect, useState } from "react";


const Footer =()=>{
    const [year , setYear] = useState('')

   useEffect(()=>{

    const currentYear = new Date().getFullYear();
    setYear(currentYear)
   },[])

    return(

        <div className="container-fluid bg-dark text-white text-center ">
             <footer className="row mt-1 py-4 bg-dark text-white animate__animated animate__fadeInUp animate__delay-3s">
                <div className="col-12 text-center">
                    <p className="mb-0">© {year} Deepesh Giri. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
        
}
export default Footer;