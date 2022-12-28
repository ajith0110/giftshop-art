import { four, fourSix, ten, tenFive, twel } from "./assets";
import { ItemType } from "./components/ItemCard";

const priceDetails: ItemType[] = [
    {
        title: "6 x 8 Inches",
        subTitle: "Wood Frame",
        url: fourSix.src,
        personOne: "2500",
        personTwo: "4500",
        additional: "600",
        whatsApp:
            "https://api.whatsapp.com/send?phone=774031528&text=https://wa.me/p/5821324514592095/94774031528",
    },
    {
        title: "8 x 10 Inches",
        subTitle: "Wood Frame",
        url: ten.src,
        personOne: "2800",
        personTwo: "2500",
        additional: "600",
        whatsApp:
            "https://api.whatsapp.com/send?phone=774031528&text=https://wa.me/p/5879241992096791/94774031528",
    },

    {
        title: "12 x 8 Inches",
        subTitle: "Wood Frame",
        url: twel.src,
        personOne: "3500",
        personTwo: "6500",
        additional: "600",
        whatsApp:
            "https://api.whatsapp.com/send?phone=774031528&text=https://wa.me/p/5992983677430952/94774031528",
    },
    {
        title: "10 x15 Inches",
        subTitle: "Wood Frame",
        url: tenFive.src,
        personOne: "4500",
        personTwo: "7500",
        additional: "600",
        whatsApp:
            "https://api.whatsapp.com/send?phone=774031528&text=https://wa.me/p/8468555759883946/94774031528",
    },
];

export { priceDetails };
