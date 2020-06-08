import React from 'react';
import classes from './ContactsPage.module.scss';
import ToggleButtons from '../common/ToggleButtons/ToggleButtons';
import Button from '../common/Button/Button';
import Social from './Social/Social';
import Header from '../common/Header/Header';
import Title from '../common/Title/Title';

const ContactsPage = () => (
  <div className={classes.wrapper}>
    <div className={classes.toggles}>
      <ToggleButtons />
    </div>
    <div className={classes.block}>
      <Header />
      <Title />
      <p className={classes.legend}>Get in touch with me</p>
      <div className={classes.section}>
        <div className={classes.form}>
          <form action="">
            <input className={classes.input} type="text" placeholder="_Name" />
            <input className={classes.input} type="text" placeholder="_EMail" />
            <textarea
              className={classes.textarea}
              name="message"
              id="message"
              placeholder="_Message"
              cols="30"
              rows="10"
            ></textarea>
            <Button text={'Submit mail'} />
          </form>
        </div>
        <div className={classes.info}>
          <section className={classes.paragraph}>
            <h2 className={classes.caption}>Postal Address</h2>
            <p>PO Box 13359 Genslerstraße 84, Berlin Wedding</p>
          </section>
          <section className={classes.paragraph}>
            <h2 className={classes.caption}>Conect with me</h2>
            <p>+030 98 29 05</p>
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
  </div>
);

export default ContactsPage;
