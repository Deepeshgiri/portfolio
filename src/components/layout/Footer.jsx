import { useEffect, useState } from "react";


const Footer =()=>{
    const [year , setYear] = useState('')

   useEffect(()=>{

    const currentYear = new Date().getFullYear();
    setYear(currentYear)
   },[])

    return(

        <div className="container-fluid text-center" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', borderTop: '1px solid var(--border-color)' }}>
             <footer className="row mt-1 py-4 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="col-12 text-center">
                    <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>© {year} Deepesh Giri. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
        
}
export default Footer;