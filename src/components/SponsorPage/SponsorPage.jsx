import './SponsorPage.css';
import { ReadMoreButton } from "../index";

function SponsorPage() {
    return (
        <div id="SponsorPage">
            <div className="LeftContent">
                <h1>Sponsoren</h1>
                <p>We hebben altijd sponsoren nodig, verder mag zar een leuk tekstje hier vezinnen</p>
            </div>
            <div className="RightContent">
                <ReadMoreButton href="/Sponsoren" />
            </div>
        </div>
    )
}

export default SponsorPage