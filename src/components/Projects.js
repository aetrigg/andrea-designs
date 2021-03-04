import React, { Component } from 'react';
import smiley from '../assets/black-smiley.svg';
import GAListener from 'react-ga';

const RadioButton = (props) => {
    return(
        <div className="RadioButton">
            <label className={props.specialClassName + " radio-button"}>
                <span className="radio__input" value={props.value} id={props.tagColor}>
                    <input type="radio" name="radio" id={props.id} onChange={props.changed} value={props.value} checked={props.isSelected} />
                    <span className="radio__control"></span>
                </span>
                <span className="radio__label">{props.label}</span>
            </label>
        </div>
    )
}

class Projects extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: "all",
            checked: "false"
        }
    }

    radioChangeHandler = (event) => {
        console.log("changing state...");
        this.setState({name: event.target.value}, () => { console.log("something's changing" + this.state.name) });
        this.setState({checked: "true"}, () => { console.log("set state to true") })
    }

    render(){
        let projectItems;

        //if user clicks web design, state will change and show only projects tagged web design
        if(this.state.name === "web-design"){
            GAListener.event({
                category: 'Portfolio',
                action: 'Web Design radio button clicked'
            })
            
            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} >
                        {data.tags.filter((tag) => tag.tagName === "Web Design").map(filteredTag => {
                            return(
                                <div className="individual-project-container">
                                    <div className="projects-header" style={{backgroundColor:"#CD99EB"}} >
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>
                                        <p className="item-b projects">{filteredTag.name}</p>
                                    </div>
                                    
                                    <div className="image-cover">
                                        <img className="image-image" src={filteredTag.image} />
                                    </div>

                                    <div className="margins">

                                        <p className="description">{filteredTag.description}</p>

                                        <div className="project-buttons">
                                            {data.buttons.map(button =>
                                                <GAListener.OutboundLink eventLabel={button.eventLabel} className="project-button" target="_blank">
                                                    <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                                        backgroundColor: `${filteredTag.buttonColor}`
                                                    }}>{button.buttonName}</a>
                                                </GAListener.OutboundLink>
                                            )}
                                        </div>

                                        <div className="project-tags">
                                            <h4 className="h4-tag">TAGS:</h4>
                                            {data.tags.map(tag =>
                                                <div className="project-tag" style={{
                                                    backgroundColor: `${tag.tagColor}`
                                                }} >
                                                    {tag.tagName}
                                                </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }
        
        //if user clicks brand identity, state will change and show only projects tagged brand identity
        else if(this.state.name === "brand-identity"){
            //console.log("you clicked brand identity");
            GAListener.event({
                category: 'Portfolio',
                action: 'Brand Identity radio button clicked'
            })

            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} >
                        {data.tags.filter((tag) => tag.tagName === "Brand Identity").map(filteredTag => {
                            return(
                                <div className="individual-project-container">
                                    <div className="projects-header" style={{backgroundColor:"#FFCB46"}} >
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>
                                        <p className="item-b projects">{filteredTag.name}</p>
                                    </div>
                                    
                                    <div className="image-cover">
                                        <img className="image-image" src={filteredTag.image} />
                                    </div>

                                    <div className="margins">

                                        <p className="description">{filteredTag.description}</p>

                                        <div className="project-buttons">
                                            {data.buttons.map(button =>
                                                <GAListener.OutboundLink eventLabel={button.eventLabel} to={button.buttonHref} target="_blank">
                                                    <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                                        backgroundColor: `${filteredTag.buttonColor}`
                                                    }}>{button.buttonName}</a>
                                                </GAListener.OutboundLink>
                                            )}
                                        </div>

                                        <div className="project-tags">
                                            <h4 className="h4-tag">TAGS:</h4>
                                            {data.tags.map(tag =>
                                                <div className="project-tag" style={{
                                                    backgroundColor: `${tag.tagColor}`
                                                }} >
                                                    {tag.tagName}
                                                </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }
        

        //if user clicks graphic design, state will change and show only projects tagged graphic design
        else if(this.state.name === "graphic-design"){
            //console.log("you clicked graphic design");
            GAListener.event({
                category: 'Portfolio',
                action: 'Graphic Design radio button clicked'
            })

            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} >
                        {data.tags.filter((tag) => tag.tagName === "Graphic Design").map(filteredTag => {
                            return(
                                <div className="individual-project-container">
                                    <div className="projects-header" style={{backgroundColor:"#FF99B0"}} >
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>
                                        <p className="item-b projects">{filteredTag.name}</p>
                                    </div>
                                    
                                    <div className="image-cover">
                                        <img className="image-image" src={filteredTag.image} />
                                    </div>

                                    <div className="margins">

                                        <p className="description">{filteredTag.description}</p>

                                        <div className="project-buttons">
                                            {data.buttons.map(button =>
                                                <GAListener.OutboundLink eventLabel={button.eventLabel} to={button.buttonHref} target="_blank">
                                                    <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                                        backgroundColor: `${filteredTag.buttonColor}`
                                                    }}>{button.buttonName}</a>
                                                </GAListener.OutboundLink>
                                            )}
                                        </div>

                                        <div className="project-tags">
                                            <h4 className="h4-tag">TAGS:</h4>
                                            {data.tags.map(tag =>
                                                <div className="project-tag" style={{
                                                    backgroundColor: `${tag.tagColor}`
                                                }} >
                                                    {tag.tagName}
                                                </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }

        //if user clicks mobile app, state will change and show only projects tagged mobile app
        else if(this.state.name === "mobile-app"){
            //console.log("you clicked mobile app");
            GAListener.event({
                category: 'Portfolio',
                action: 'Mobile App radio button clicked'
            })

            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} >
                        {data.tags.filter((tag) => tag.tagName === "Mobile App").map(filteredTag => {
                            return(
                                <div className="individual-project-container">
                                    <div className="projects-header" style={{backgroundColor:"#CD99EB"}} >
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>
                                        <p className="item-b projects">{filteredTag.name}</p>
                                    </div>
                                    
                                    <div className="image-cover">
                                        <img className="image-image" src={filteredTag.image} />
                                    </div>

                                    <div className="margins">

                                        <p className="description">{filteredTag.description}</p>

                                        <div className="project-buttons">
                                            {data.buttons.map(button =>
                                                <GAListener.OutboundLink eventLabel={button.eventLabel} to={button.buttonHref} target="_blank">
                                                    <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                                        backgroundColor: `${filteredTag.buttonColor}`
                                                    }}>{button.buttonName}</a>
                                                </GAListener.OutboundLink>
                                            )}
                                        </div>

                                        <div className="project-tags">
                                            <h4 className="h4-tag">TAGS:</h4>
                                            {data.tags.map(tag =>
                                                <div className="project-tag" style={{
                                                    backgroundColor: `${tag.tagColor}`
                                                }} >
                                                    {tag.tagName}
                                                </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }


        //if user clicks social media, state will change and show only projects tagged social media
        else if(this.state.name === "social-media"){
            //console.log("you clicked mobile app");
            GAListener.event({
                category: 'Portfolio',
                action: 'Social Media radio button clicked'
            })

            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} >
                        {data.tags.filter((tag) => tag.tagName === "Social Media").map(filteredTag => {
                            return(
                                <div className="individual-project-container">
                                    <div className="projects-header" style={{backgroundColor:"#FFCB46"}} >
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>
                                        <p className="item-b projects">{filteredTag.name}</p>
                                    </div>
                                    
                                    <div className="image-cover">
                                        <img className="image-image" src={filteredTag.image} />
                                    </div>

                                    <div className="margins">

                                        <p className="description">{filteredTag.description}</p>

                                        <div className="project-buttons">
                                            {data.buttons.map(button =>
                                                <GAListener.OutboundLink eventLabel={button.eventLabel} to={button.buttonHref} target="_blank">
                                                    <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                                        backgroundColor: `${filteredTag.buttonColor}`
                                                    }}>{button.buttonName}</a>
                                                </GAListener.OutboundLink>
                                            )}
                                        </div>

                                        <div className="project-tags">
                                            <h4 className="h4-tag">TAGS:</h4>
                                            {data.tags.map(tag =>
                                                <div className="project-tag" style={{
                                                    backgroundColor: `${tag.tagColor}`
                                                }} >
                                                    {tag.tagName}
                                                </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }


        //if user clicks front end, state will change and show only projects tagged front end
        else if(this.state.name === "front-end"){
            //console.log("you clicked mobile app");
            GAListener.event({
                category: 'Portfolio',
                action: 'Front End radio button clicked'
            })

            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} >
                        {data.tags.filter((tag) => tag.tagName === "Front-End Development").map(filteredTag => {
                            return(
                                <div className="individual-project-container">
                                    <div className="projects-header" style={{backgroundColor:"#FF99B0"}} >
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>
                                        <p className="item-b projects">{filteredTag.name}</p>
                                    </div>
                                    
                                    <div className="image-cover">
                                        <img className="image-image" src={filteredTag.image} />
                                    </div>

                                    <div className="margins">

                                        <p className="description">{filteredTag.description}</p>

                                        <div className="project-buttons">
                                            {data.buttons.map(button =>
                                                <GAListener.OutboundLink eventLabel={button.eventLabel} to={button.buttonHref} target="_blank">
                                                    <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                                        backgroundColor: `${filteredTag.buttonColor}`
                                                    }}>{button.buttonName}</a>
                                                </GAListener.OutboundLink>
                                            )}
                                        </div>

                                        <div className="project-tags">
                                            <h4 className="h4-tag">TAGS:</h4>
                                            {data.tags.map(tag =>
                                                <div className="project-tag" style={{
                                                    backgroundColor: `${tag.tagColor}`
                                                }} >
                                                    {tag.tagName}
                                                </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }

        //if user clicks back end, state will change and show only projects tagged back end
        else if(this.state.name === "back-end"){
            //console.log("you clicked back end");
            GAListener.event({
                category: 'Portfolio',
                action: 'Back End radio button clicked'
            })

            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} >
                        {data.tags.filter((tag) => tag.tagName === "Back-End Development").map(filteredTag => {
                            return(
                                <div className="individual-project-container">
                                    <div className="projects-header" style={{backgroundColor:"#CD99EB"}} >
                                        <div className="smileys item-a">
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                            <img src={smiley} className="smiley" alt="smiley" />
                                        </div>
                                        <p className="item-b projects">{filteredTag.name}</p>
                                    </div>
                                    
                                    <div className="image-cover">
                                        <img className="image-image" src={filteredTag.image} />
                                    </div>

                                    <div className="margins">

                                        <p className="description">{filteredTag.description}</p>

                                        <div className="project-buttons">
                                            {data.buttons.map(button =>
                                                <GAListener.OutboundLink eventLabel={button.eventLabel} to={button.buttonHref} target="_blank">
                                                    <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                                        backgroundColor: `${filteredTag.buttonColor}`
                                                    }}>{button.buttonName}</a>
                                                </GAListener.OutboundLink>
                                            )}
                                        </div>

                                        <div className="project-tags">
                                            <h4 className="h4-tag">TAGS:</h4>
                                            {data.tags.map(tag =>
                                                <div className="project-tag" style={{
                                                    backgroundColor: `${tag.tagColor}`
                                                }} >
                                                    {tag.tagName}
                                                </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })
        }
        
        //show when user clicks all, and is default setting for page
        else{
            GAListener.event({
                category: 'Portfolio',
                action: 'All radio button clicked'
            })

            projectItems = this.props.myArrays.map((data) => {
                return(
                    <div key={data.id} className="individual-project-container">
                        <div className="projects-header" style={{backgroundColor: data.color}}>
                            <div className="smileys item-a">
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                                <img src={smiley} className="smiley" alt="smiley" />
                            </div>

                            <p className="item-b projects">{data.name}</p>
                        </div>

                        <div className="image-cover">
                            <img className="image-image" src={data.image} />
                        </div>

                        <div className="margins">

                            <p className="description">{data.description}</p>


                            <div className="project-buttons">
                                {data.buttons.map(button =>
                                    <GAListener.OutboundLink eventLabel={button.eventLabel} to={button.buttonHref} target="_blank">
                                        <a href={button.buttonHref} target="_blank" className="project-button" style={{
                                            backgroundColor: `${button.buttonColor}`
                                        }}>{button.buttonName}</a>
                                    </GAListener.OutboundLink>
                                )}
                            </div>

                            <div className="project-tags">
                                <h4 className="h4-tag">TAGS:</h4>
                                {data.tags.map(tag => 
                                    <div className="project-tag" style={{
                                        backgroundColor: `${tag.tagColor}`
                                    }}>
                                        {tag.tagName}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return(
            <div className="projects-container">
                <h4 className="h4-filter">FILTER BY TAG</h4>
                <div className="radio-button-group">
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'web-design'} label="Web Design" value="web-design" tagColor="purpleTag" specialClassName="" />
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'brand-identity'} label="Brand Identity" value="brand-identity" tagColor="yellowTag" specialClassName="" />
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'graphic-design'} label="Graphic Design" value="graphic-design" tagColor="pinkTag" specialClassName="" />
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'mobile-app'} label="Mobile App" value="mobile-app" tagColor="purpleTag" specialClassName="" />
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'social-media'} label="Social Media" value="social-media" tagColor="yellowTag" specialClassName="margin-top" />
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'front-end'} label="Front-End" value="front-end" tagColor="pinkTag" specialClassName="margin-top" />
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'back-end'} label="Back-End" value="back-end" tagColor="purpleTag" specialClassName="margin-top" />
                    <RadioButton changed={this.radioChangeHandler} isSelected={this.state.name === 'all'} label="All" value="all" tagColor="yellowTag" specialClassName="margin-top" />
                </div>
                <div className="individual-projects-container">{projectItems}</div>
            </div>
        )
    }
}

export default Projects;