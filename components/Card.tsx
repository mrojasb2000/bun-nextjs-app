import styles from "../styles/Card.module.css";

export default function Card({ title, views, answers }){
    return (
        <div className={styles.CardWrapper}>
            <h2 className={styles.Title}>
                {title}
            </h2>
            <span className={styles.Count}>
                {`Views: ${views} | Answers: ${answers}`}
            </span>
        </div>
    )
}