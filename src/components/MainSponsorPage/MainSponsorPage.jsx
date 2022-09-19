import './MainSponsorPage.css';
import { ReadMoreButton } from "../index";

function MainSponsorPage() {
    return (
        <div id="SponsorPage">
            <div className="LeftContent">
                <div className="LeftContentSubclass">
                    <h1 className="SponsorsTitle">Sponsoren</h1>
                    <p>We hebben altijd sponsoren nodig, verder mag Zar een leuk textje verzinnen, ow en ff kiezen of we sponsors of sponsoren gebruiken</p>
                </div>
            </div>
            <div className="RightContent">
                <ReadMoreButton href="/Sponsors" />
            </div>
        </div>
    )
}

export default MainSponsorPage