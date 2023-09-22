import styles from "./EventCard.module.css";
const EventCard = ({ event }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <img className={styles.cardImage} src={event.image} alt="banner" />
      </div>
      <div className={styles.cardTitle}>{event.title}</div>
      {/* 설명 */}
      <ul className={styles.cardDesc}>
        {event.restrictions?.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventCard;
