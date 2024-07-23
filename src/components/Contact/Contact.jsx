import css from "./Contact.module.css"

const Contact = ({contact: {id, name, number}, onRemove}) => {
  return <div className={css.container}>
  <div><p>{name}</p>
  <p>{number}</p></div>
  <button className={css.button} onClick={() => onRemove(id)}>Delete</button>
  </div>
};

export default Contact;
