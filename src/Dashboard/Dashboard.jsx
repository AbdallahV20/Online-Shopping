import Navbar from "../Navbar/Navbar"
import SocialLogin from "../SocialLogin/SocialLogin"
import Dashboard_Table from "./Dashboard_Table/Dashboard_Table"
import { Fragment } from "react"
export default function Dashboard() {
    return (
        <Fragment>
            <SocialLogin />
            <Navbar />
            <Dashboard_Table />
        </Fragment>
    )
}