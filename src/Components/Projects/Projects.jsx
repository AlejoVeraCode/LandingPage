import { projects } from "../../data/Data";
import '../../App.css'

const Projects = () => {
    return (
        <section id="projects" className="Projects">
            <div className="ProjectsContainer">
                <div className="ProjectsTitle">
                    <h1 className="ProjectsTitleH1">
                        Aplicaciones que he construido
                    </h1>
                    <p className="ProjectsTitleP">
                        Les presento algunas de las apliaciones que he creado,las cuales sigo mejorando y agregandole funcionalidades.
                    </p>
                </div>
                <div className="ProjectsMap">
                    {projects.map((project) => (
                        <a
                         href={project.link}
                        key={project.id} className="ProjectsMapLink">
                        <div className="ProjectsMapContainer">
                            <img alt="Proyectos" className="ProjectsMapImg" src={project.image}/>
                            <div className="ProjectMapSection">
                                <h2 className="ProjectMapSubtitle">{project.subtitle}</h2>
                                <h1 className="ProjectMapTitle"> {project.title} </h1>
                                <p className="ProjectMapDescription">{project.description}</p>
                                </div></div>
                                </a>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects