import "./Sponsor.css";

function Sponsor(props) {
    if (props.img) {
        return (
            <img src={props.img} alt="" className="Sponsor"/>
        )
    }
    return (
        <div className="Sponsor"><h1>{props.children}</h1></div>
    )
}

export default Sponsor