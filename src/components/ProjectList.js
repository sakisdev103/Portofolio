import React, { useState } from 'react';
import { projects } from '../data';
import ModalContent from './ModalContent';

const ProjectList = () => {

    //Show more projects

    const [toggle, setToggle] = useState(false);  
    const showMore = () =>{
    setToggle(!toggle);
    }  

    //Modal Functionallity

    const [modal, setModal] = useState({show: false, data: null});

    const modalFunction = (id, name, description) =>{
        setModal({show: true, data: {id, name, description}});
    }

    const handleClose = () => {
    setModal({show: false, data: null});
}

  return (
    <>
        <div className="projects">
            {
                toggle === false 
                ?
                projects.slice(0,5).map((item)=>{
                    return(
                        <div className="project-card" key={item.id}>
                            <h5>{item.name}</h5>
                            <img src={item.img} alt=""/>
                            <p>
                                {item.description.slice(0, 20) +  `...`}
                                <button className='paragraph-show' onClick={()=>modalFunction(item.id, item.name, item.description)}>read more</button>
                            </p>
                            <p>
                                {
                                    item.technologies.map((item)=>{
                                        return item + ` `;
                                    })
                                }
                            </p>
                            <a href={item.link}>View Project</a>
                        </div>
                    )
                })
                :
                projects.slice(0,projects.length).map((item)=>{
                    return(
                        <div className="project-card" key={item.id}>
                            <h5>{item.name}</h5>
                            <img src={item.img} alt=""/>
                            <p>
                                {item.description.slice(0, 20) +  `...`}
                                <button className='paragraph-show' onClick={()=>modalFunction(item.id, item.name, item.description)}>read more</button>
                            </p>
                            <p>
                                {
                                    item.technologies.map((item)=>{
                                        return item + ` `;
                                    })
                                }
                            </p>
                            <a href={item.link}>View Project</a>
                        </div>
                    )
                })
            }
            {(modal.show && modal.data) && <ModalContent close={handleClose} data={modal.data}/>}
        </div>
        <div className="center">
            <button onClick={showMore} className='show-more'>{toggle === true ? `Show Less` : `Show More`}</button>
        </div>
    </>
  )
}

export default ProjectList