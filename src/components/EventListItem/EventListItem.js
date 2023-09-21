import styles from "./EventListItem.module.css";

const EventListItem = ({ title, text }) => {
  return (
    <div className={styles.eventInfo}>
      <div className={styles.infoTitle}>{title}</div>
      <div className={styles.infoText}>
        {text}
      </div>
    </div>
  )
}

export default EventListItem;