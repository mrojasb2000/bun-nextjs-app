import styles from "../styles/Header.module.css";

export default function Header(){
    return (
        <div className={styles.HeaderWrapper}>
            <div className={styles.title}>
                Community Feed
            </div>
        </div>
    )
}