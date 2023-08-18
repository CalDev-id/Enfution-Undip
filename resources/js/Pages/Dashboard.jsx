import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import SemnasAdmin from "./Admin/SemnasAdmin";
import DetailSemnas from "./Admin/DetailSemnas";
import MainDashboard from "./Admin/MainDashboard";
import SubscriberAdmin from "./Admin/SubscriberAdmin";
import NewsLetter from "./Admin/NewsLetter";
import DBCCAdmin from "./Admin/DBCCAdmin";
import DetailDBCC from "./Admin/DetailDBCC";
import CSAdmin from "./Admin/CSAdmin";
import DetailCS from "./Admin/DetailCS";
import CCAdmin from "./Admin/CCAdmin";
import DetailCC from "./Admin/DetailCC";

export default function Dashboard(props) {
    
    const views = [
        <MainDashboard
            semnas={props.semnas}
            dbcc={props.dbcc}
            cs={props.cs}
            cc={props.cc}
            subs={props.subs}
        />,
        <SemnasAdmin
            trx={props.transactions}
            refcodes={props.referral_codes}
            filter={props.filter}
            search={props.search}
            info={props.info ?? ""}
            status={props.status ?? ""}
        />,
        <DetailSemnas
            data_peserta={props.data_diri}
            page={props.page}
            event={props.event}
            status={props.status ?? ""}
        />,
        <SubscriberAdmin trx={props.subscribers} search={props.search} />,
        <NewsLetter />,
        <DBCCAdmin
            trx={props.transactions}
            refcodes={props.referral_codes}
            filter={props.filter}
            search={props.search}
            info={props.info ?? ""}
            status={props.status ?? ""}
        />,
        <DetailDBCC
            team={props.team}
            data_peserta={props.participants}
            page={props.page}
            periode={props.periode}
            status={props.status ?? ""}
        />,
        <CSAdmin
            trx={props.transactions}
            filter={props.filter}
            search={props.search}
            info={props.info ?? ""}
            status={props.status ?? ""}
        />,
        <DetailCS
            team={props.team}
            data_peserta={props.participants}
            page={props.page}
            periode={props.periode}
            status={props.status ?? ""}
        />,
        <CCAdmin
            trx={props.transactions}
            filter={props.filter}
            search={props.search}
            info={props.info ?? ""}
            status={props.status ?? ""}
        />,
        <DetailCC
            data_peserta={props.participants}
            page={props.page}
            periode={props.periode}
            status={props.status ?? ""}
        />,
    ];

    return (
        <>
            <Head title={props.title} />
            <AdminLayout
                children={views[props.selectedTable]}
                title={props.sectionTitle}
                index={props.active}
            ></AdminLayout>
        </>
    );
}