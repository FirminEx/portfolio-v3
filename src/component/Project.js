import {Card} from "react-bootstrap";
import Logo from "./Logo";

function Project(props) {
    return (
        <Card style={{width: '25vw', borderRadius: '20px'}} border="success">
            <Card.Img variant="top" src={props.projectImg} />
            <Card.Body>
                <Card.Title style={{marginBottom: '15px'}}>{props.title}</Card.Title>
                <Card.Text style={{marginBottom: '30px'}}>{props.desc}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="logo-list" style={{marginBottom: '30px'}}>{props.languages ? props.languages.map((e, index) => <Logo src={e} key={index}/>) : ""}</div>
                <a href={props.gitHub} target="_blank" rel="noreferrer">Checkout the GitHub</a>
            </Card.Footer>
        </Card>
    );
}

export default Project;