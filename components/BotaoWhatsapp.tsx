import Link from "next/link";
import { Whatsapp } from "react-bootstrap-icons";
import styles from '../src/styles/BtnWhatsapp.module.css';

function BotaoWhatsapp() {
    return (

        <Link href="https://api.whatsapp.com/send?phone=5511952813000" target="_blank">
            <Whatsapp className={styles.iconeWPP}></Whatsapp>
        </Link>

    );
}

export default BotaoWhatsapp;