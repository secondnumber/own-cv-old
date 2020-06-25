import React from 'react';
import classes from './ContactsPage.module.scss';
import Button from '../common/Button/Button';
import Social from './Social/Social';
import Title from '../common/Title/Title';
import ToggleButtonsContainer from '../common/ToggleButtons/ToggleButtonsContainer';
import MenuContainer from '../common/Menu/MenuContainer';
import Form from './Form/Form';

const ContactsPage = (props) => {
  let socialList = props.social.socialItems.map((el) => (
    <Social key={el.id} name={el.name} link={el.link} image={el.imageColor} />
  ));
  return (
    <div className={classes.wrapper}>
      <div className={classes.toggles}>
        <ToggleButtonsContainer />
      </div>
      <div className={classes.block}>
        <MenuContainer />
        <Title text={props.contacts.title} />
        <p className={classes.legend}>{props.contacts.caption}</p>
        <div className={classes.section}>
          <div className={classes.form}>
            <Form />
          </div>
          <div className={classes.info}>
            <section className={classes.paragraph}>
              <h2 className={classes.caption}>Postal Address</h2>
              <p>{props.contacts.address}</p>
            </section>
            <section className={classes.paragraph}>
              <h2 className={classes.caption}>Conect with me</h2>
              <p>{props.contacts.phone}</p>
              <p>{props.contacts.email}</p>
              <p>{props.contacts.site}</p>
            </section>
            <section className={classes.paragraph}>
              <h2 className={classes.caption}>Social Networks</h2>
              <ul className={classes.list}>{socialList}</ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
