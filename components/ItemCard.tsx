import styles from "../styles/Home.module.css";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

export type ItemType = {
    url?: string;
    title?: string;
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
    const { title, url, additional, personOne, personTwo, whatsApp } = item;
    return (
        <div className={styles.card}>
            <div
                style={{
                    backgroundImage: `url("${url}")`,
                }}
                className={styles.cardleftcol}
            ></div>
            <div className={styles.cardrighttcol}>
                <div className={styles.cardrighttcolContentWrap}>
                    <div className={styles.cardTitleArea}>
                        <AiOutlineBorderlessTable
                            className={styles.titleIcon}
                        />
                        <span className={styles.cardTitle}>{title}</span>
                    </div>
                    <div className={styles.bulletListArea}>
                        <div className={styles.bulletListItem}>
                            <BsFillCheckCircleFill
                                className={styles.listIcon}
                            />
                            <span className={styles.listText}>
                                Free Delivery
                            </span>
                        </div>

                        <div className={styles.bulletListItem}>
                            <BsFillCheckCircleFill
                                className={styles.listIcon}
                            />
                            <span className={styles.listText}>
                                Rs.{additional}/- Per Each Additional Person
                            </span>
                        </div>

                        <div className={styles.bulletListItem}>
                            <BsFillCheckCircleFill
                                className={styles.listIcon}
                            />
                            <span className={styles.listText}>
                                With Matte Laminated Frame
                            </span>
                        </div>
                    </div>
                    <div className={styles.priceTagArea}>
                        <div className={styles.priceTag}>
                            <span> 01 Person - {personOne} LKR</span>
                        </div>
                        <div className={styles.priceTag}>
                            <span> 02 Person - {personTwo} LKR</span>
                        </div>
                    </div>
                  
                </div>
                <div className={styles.btnArea}>
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
        </div>
    );
}
