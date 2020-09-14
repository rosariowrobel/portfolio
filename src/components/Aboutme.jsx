import React from "react";
//import myImage from "../img/myImage.png";

class Aboutme extends React.Component {
  constructor() {
    super();
    this.state = {
      

      skills: [        
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "70%",
          value: "90"
        },        
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "60%",
          value: "80"
        },
        {
          id: "Node_skill",
          content: "Node.js",
          porcentage: "60%",
          value: "75"
        },        
        {
          id: "GitHub_skill",
          content: "GitHub",
          porcentage: "70%",
          value: "80"
        },
        {
          id: "Git_skill",
          content: "Git",
          porcentage: "70%",
          value: "80"
        },
        {
          id: "Firebase_skill",
          content: "Firebase",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Trello_skill",
          content: "Trello",
          porcentage: "90%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hola, soy Rosario Wrobel y.. ¡me encanta que estes aquí! ."
        },
        {
          id: "second-p-about",
          content:
            "Soy Desarrolladora Web Front End egresada del Bootcamp de Laboratoria. Me apasiona la creación de aplicaciones web. Me preocupa constantemente cómo mejorar personalmente y como profesional, para adquirir nuevas habilidades. Buscando siempre la colaboración y la amistad en el equipo de trabajo, esforzándome por ser parte activa."
        },
        {
          id: "third-p-about",
          content:
            "Así que les dejo un poco de mi trabajo y una parte de mi."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Acerca de mi</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutme;
