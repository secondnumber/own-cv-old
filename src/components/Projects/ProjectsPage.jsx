import React from 'react';
import classes from "./ProjectsPage.module.scss";
import ToggleButtons from "../common/ToggleButtons/ToggleButtons";
import Logo from "../../assets/img/logo.png";
import Button from "../common/Button/Button";
import Tag from "./Tag/Tag";
import Project from "./Project/Project";

const ProjectsPage = () =>
    <div className={classes.wrapper}>
        <div className={classes.toggles}>
            <ToggleButtons />
        </div>
        <div className={classes.block}>
            <div className={classes.header}>
                <img src={Logo} alt="Logo"/>
            </div>
                <h1 className={classes.title}>
                    <span className={classes.turquoise}>&#123;</span>
                    &nbsp;My work&nbsp;
                    <span className={classes.turquoise}>&#125;</span>
                </h1>
            <div className={classes.section}>
                <ul className={classes.listTags}>
                    <Tag text={'ALL'}/>
                    <Tag text={'Branding'}/>
                    <Tag text={'Media'}/>
                    <Tag text={'Illustration'}/>
                    <Tag text={'UI Design'}/>
                    <Tag text={'UX Design'}/>
                </ul>
                <ul className={classes.listProjects}>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </ul>
            </div>
            <Button text={'Show more'}/>
        </div>
    </div>;

export default ProjectsPage;
