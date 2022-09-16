import "./ReadMoreButton.css"

function ReadMoreButton(props) {
    return (
        <a href={props.href} className="ReadMoreButton">Read More</a>
    )
}

export default ReadMoreButton