import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";

import popIn from "../../utils/transitions/pop.module.css";
import slideIn from "../../utils/transitions/slide.module.css";
import styles from "./ContactList.module.css";
import {
  asyncDeleteContact,
  asyncSetContactList,
} from "../../redux/withToolkit/actions/contactList";
import {
  contactsSelector,
  loaderSelector,
  errorSelector,
  filteredContacts,
} from "../../redux/selectors";

import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => contactsSelector(state));
  const loader = useSelector((state) => loaderSelector(state));
  const error = useSelector((state) => errorSelector(state));
  const filteredContactList = useSelector((state) => filteredContacts(state));

  const onDelete = (id) => {
    dispatch(asyncDeleteContact(id));
  };

  useEffect(() => {
    dispatch(asyncSetContactList());
  }, [dispatch]);

  return (
    <>
      {loader && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {error && (
        <Modal>
          <Error />
        </Modal>
      )}
      <CSSTransition
        in={!contactList.length}
        timeout={250}
        classNames={slideIn}
        mountOnEnter
        unmountOnExit
      >
        <p>Phonebook is empty</p>
      </CSSTransition>

      <TransitionGroup component="ul" className={styles.contactList}>
        {filteredContactList.map((contact) => (
          <CSSTransition key={contact.id} classNames={popIn} timeout={250}>
            <li className={styles.contactListItem}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.number}>{contact.number}</span>
              <button type="button" onClick={() => onDelete(contact.id)}>
                &#215;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default ContactList;
