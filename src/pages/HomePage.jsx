import { P1Header } from "../components/P1Header";
import { P1LeftContent } from "../components/P1LeftContent";
import { P1RightImage } from "../components/P1RightImage";
import "./Homepage.css"
export const HomePage=()=>{
    return(
        <>
        <div class="page">
        <P1Header/>
        <P1LeftContent/>
        <P1RightImage/>
        </div>
        </>
    )
}