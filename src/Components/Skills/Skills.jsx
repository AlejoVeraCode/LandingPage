import { skills } from "../../data/Data";
import '../../App.css'

const Skills = () => {
  return (
    <section id="skills">
      <div className="SkillsContainer">
        <div className="SkillsContainerTitle">
          <h1 className="SkillsLogo">  &lt;/&gt; </h1>
          <h1 className="SkillsTitle"> Habilidades y tecnologias</h1>
          <p className="SkillsTitleP">
          "¡Hola! Me complace presentar mis habilidades y experiencia en el desarrollo web. Soy un apasionado del mundo de la programación y he adquirido sólidos conocimientos en varias tecnologías clave.</p>

        </div>
        <div className="SkillsMap">
          {skills.map((skill) => (
            <div key={skill.id} className="SkillsMapKey">
              <div className="SkillsMapKeyContainer">
                <img src={skill.imgUrl} className="SkillsMapImg" />
                <span className="SkillsMapSpan">{skill.skill}<br/> {skill.description}</span>
              </div>
            </div>
          ))}
        </div><br/>
        <p className="SkillsTitleP">
Estas habilidades y tecnologías me permiten desarrollar aplicaciones web modernas y escalables. Estoy emocionado de aplicar mis conocimientos y colaborar en proyectos desafiantes. Si buscas un desarrollador apasionado, que busca la mejora continua y en constante aprendizaje, ¡no dudes en contactarme!<br/>
          </p>
      </div>
    </section>
  );
};

export default Skills;
