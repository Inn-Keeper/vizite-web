import { useTranslations } from "next-intl";
import Faq from "./Faq";

export default function Support() {
    const t = useTranslations();
    return (
        <div>
            <h1>{t('support.title', { defaultMessage: 'Support' })}</h1>
            <p>{t('support.description', { defaultMessage: 'Support' })}</p>
            <Faq />
        </div>
    );
}