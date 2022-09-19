import Project from "./Project";
import JO from "../img/jo.png"
import Java from "../img/java.png"
import SocialNetwork from "../img/social_network.png"
import React from "../img/React.png"
import Node from "../img/node.png"
import Mongoose from "../img/mongoose.jpg"
import Struct from "../img/struct.png"
import C from "../img/C.png"
import Packet from "../img/reseau.png"
import Ecosystem from "../img/ecosystem.png"

function Projects() {
    return (
        <section id="projectslist">
                <div className="project-row">

                    <Project
                        title="Social network"
                        desc="This was the final project for the web development course I took during my 3rd year at Sorbonne Université. I had to code a social network, the backend and the frontend."
                        projectImg={SocialNetwork}
                        languages={[React, Node, Mongoose]}
                        gitHub="https://github.com/FirminEx/web_project"
                    />

                    <Project
                        title="Data structure performance comparison"
                        desc="The goal here was to recreate a virtual network, representing an electrical grid of a city. I had to study 3 different types of data structure, and compare the time they take to execute the same task. I made this project in C, during the “data structure” course I took in my 2nd year at Sorbonne Université."
                        projectImg={Struct}
                        languages={[C]}
                        gitHub="https://github.com/FirminEx/data_struct"
                    />
                </div>


                <div className="project-row">
                    <Project
                        title="Packet analyzer"
                        desc="The goal of this project was to create an offline version of WireShark, a packet analyzer. This project was realized during the course “Réseaux” during my 3rd year at Sorbonne Université with another student. The subject asked us to only focus on 5 protocols: Ethernet, IP, UDP, DNS and DHCP. The program had to take text files as input and output an analysis of the packet."
                        projectImg={Packet}
                        languages={[Java]}
                        gitHub="https://github.com/FirminEx/packet-analyzer"
                    />


                    <Project
                        title="Random olympic games"
                        desc="This was the final project for the java course I took during my 2nd year at Sorbonne Université. I had to code a program around sports with a few technical constraints, in order to show my OOP skills. For example, I had to implement a singleton pattern, a 3 level inheritance, static and abstract classes, an exception, etc. I decided to make an Olympic Game simulation with randomness."
                        projectImg={JO}
                        languages={[Java]}
                        gitHub="https://github.com/FirminEx/jo"
                    />
                </div>

                <Project
                    title="Dynamic system evolution"
                    desc="This project had to simulate a simple dynamic system. There are 3 actors : the grass, the preys and the predators. All of them live in a limited space, a 2D plane. In the end we were able to play around with the macros values in order to see different population variations over time. I made this project during a small course of advanced C during my 2nd year at Sorbonne Université."
                    projectImg={Ecosystem}
                    languages={[C]}
                    gitHub="https://github.com/FirminEx/dynamic_system"
                />
        </section>
    );
}

export default Projects;