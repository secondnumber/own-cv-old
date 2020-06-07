import React from 'react';
import classes from './Title.module.scss';

const Title = (props) =>
            <h1 className={classes.title}>
                <span className={classes.turquoise}>&#123;</span>
                &nbsp;ANNA DOE&nbsp;
                <span className={classes.turquoise}>&#125;</span>
            </h1>

export default Title;
