import React, { Component } from 'react';
import '../App.css';
/*import Firebase from 'firebase';*/

class ComponentToPrint extends Component{
    constructor(props){
        super(props);

        this.state = {
            projectData: [],
        };
    };

    componentDidMount(){
        /*const projectRef = Firebase.database().ref('projectData');
        projectRef.on('value', (snapshot) => {
            let projects = snapshot.val();
            let newState = [];

            for(let project in projects){
                newState.push({
                    id: projects[project].id,
                    name: projects[project].name,
                    description: projects[project].description,
                    image: projects[project].image
                });
            }

            this.setState({
                projectData: newState
            });
        });*/
    };

    render(){
        return(
            <div className="body">
                {this.state.projectData.map((project) => {
                    return(
                        <div>
                            <p>{project.id}</p>
                            <p>{project.name}</p>
                            <p>{project.description}</p>
                            <img src={project.image} /><br/>
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default ComponentToPrint;