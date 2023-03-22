import React from 'react';

const Navbar = () => {
    
    //Setting up expand navbar for mobile
    const handleToggle = () =>{
        const linksContainer = document.querySelector('.links');
        linksContainer.classList.toggle('show-links');
    }

  return (
    <>
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/null/external-developer-web-development-flaticons-lineal-color-flat-icons-2.png" className="logo" alt="logo"/>
                    <button className="nav-toggle" onClick={handleToggle}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="links">
                    <li>
                        <a href="/"><span>01.</span> Home</a>
                    </li>
                    <li>
                        <a href="#about"><span>02.</span> About</a>
                    </li>
                    <li>
                        <a href="#work"><span>03.</span> Work</a>
                    </li>
                    <li>
                        <a href="#contact"><span>04.</span> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar