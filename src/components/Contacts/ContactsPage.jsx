import React from 'react';
import classes from "./ContactsPage.module.scss";
import ToggleButtons from "../common/ToggleButtons/ToggleButtons";
import Logo from "../../assets/img/logo.png";
import Button from "../common/Button/Button";
import Social from "./Social/Social";

const ContactsPage = () =>
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
                &nbsp;Contact me&nbsp;
                <span className={classes.turquoise}>&#125;</span>
            </h1>
            <p className={classes.legend}>
                Get in touch with me
            </p>
            <div className={classes.section}>
                <div className={classes.form}>
                    <form action="">
                        <input className={classes.input} type="text" placeholder='_Name'/>
                        <input className={classes.input} type="text" placeholder='_EMail'/>
                        <textarea className={classes.textarea}
                        name="message" id="message" placeholder='_Message' cols="30" rows="10"></textarea>
                        <Button text={'Submit mail'}/>
                    </form>
                </div>
                <div className={classes.info}>
                    <section className={classes.paragraph}>
                        <h2 className={classes.caption}>Postal Address</h2>
                        <p>PO Box 13359 Genslerstraße 84, Berlin Wedding</p>
                    </section>
                    <section className={classes.paragraph}>
                        <h2 className={classes.caption}>Conect with me</h2>
                        <p>+030  98 29 05</p>
                        <p>anadoe@domain.com</p>
                        <p>www.envato.com</p>
                    </section>
                    <section className={classes.paragraph}>
                        <h2 className={classes.caption}>Social Networks</h2>
                        <ul className={classes.list}>
                            <Social />
                            <Social />
                            <Social />
                            <Social />
                            <Social />
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div>;

export default ContactsPage;
