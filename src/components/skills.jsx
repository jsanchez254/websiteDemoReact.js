import React, { Component } from 'react';
//IMPORT SEMANTIC UI
import {Divider, Icon, Grid} from "semantic-ui-react";

//IMPORT JS 
import {expand} from "../assets/js/skills.js";

import axios from "axios";

class Skills extends Component {
    state = { 
        test: ""
     }

    handleRequest = () =>{
        console.log("hi");
        axios.get("http://169.236.72.60/on?color=red")
        .then(res =>{
            const test = res.data;
            this.setState({test});
            console.log(res.data);
        })
    }

    render() { 
        return (
            <React.Fragment>
                  <div id = "skills">
                        <center className = "about"><Icon name ="code"/>
                            <br/>
                            Skills
                        </center>
                        <Divider/>
                        <Grid columns = "equal">
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("java")} className = "skill java">
                                    Java
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("javaScript")} className = "skill javaScript">
                                    JavaScript
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("css")} className = "skill css">
                                    CSS
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("html")} className = "skill html">
                                    HTML
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("C++")} className = "skill Cpp">
                                    C++
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("C")} className = "skill C">
                                    C
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("SQL")} className = "skill sql">
                                    SQL
                                </div>
                            </Grid.Column>
                            <Grid.Column width = {2}>
                                <div onClick = {()=>expand("python")} className = "skill python">
                                    Python
                                </div>
                            </Grid.Column>
                        </Grid>
                        <br/>
                        <div id = "contenedor">
                            <div id = "skillBox">
                                0%
                            </div>
                        </div>   
                        <br/>
                        <br/>
                        <button onClick = {() => this.handleRequest()} >Hi</button>
                        <h1>1{this.state.test}</h1>
                        <h1>{this.props.global}</h1>
                  </div>
            </React.Fragment>
          );
    }
}
 
export default Skills;