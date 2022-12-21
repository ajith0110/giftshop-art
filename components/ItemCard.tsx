import styles from "../styles/Home.module.css";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

export type ItemType = {
    url?: string;
    title?: string;
    subTitle?: string;
    personOne?: string;
    personTwo?: string;
    additional?: string;
    whatsApp?: string;
};

interface ItemCardProps {
    item: ItemType;
}

export default function ItemCard(props: ItemCardProps) {
    const { item } = props;
    const { title, url, additional, personOne, personTwo, whatsApp, subTitle } =
        item;
    console.log(url);

    return (
        <div className={styles.card}>
            <img src={url} className={styles.image} />

            <div className={styles.bottomSection}>
                <span className={styles.cardTitle}>{title}</span>
                <br></br>
                <span className={styles.cardSubTitle}>{subTitle}</span>

                <button type="button" className={styles.callNowBtn}>
                    <span className={styles.btnIcon}>
                        <ImWhatsapp />
                    </span>
                    <a target="blank" href={`${whatsApp}`}>
                        Order now
                    </a>
                </button>
            </div>
        </div>
    );
}
