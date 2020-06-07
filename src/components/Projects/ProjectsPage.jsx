import React from 'react';
import classes from "./ProjectsPage.module.scss";
import ToggleButtons from "../common/ToggleButtons/ToggleButtons";
import Button from "../common/Button/Button";
import Tag from "./Tag/Tag";
import Project from "./Project/Project";
import Header from "../common/Header/Header";
import Title from "../common/Title/Title";

const ProjectsPage = () =>
    <div className={classes.wrapper}>
        <div className={classes.toggles}>
            <ToggleButtons />
        </div>
        <div className={classes.block}>
            <Header />
                <Title />
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
