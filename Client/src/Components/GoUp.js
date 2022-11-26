import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GoUp.css';
import { Button } from "react-bootstrap";

import { ReactComponent as ToTop } from '../Media/hand-point-up-solid.svg';

function GoUp() {
    return (
        <>
            <div className="to-top">
                <Button href="#home" className="go-up-btn">
                    <ToTop className="go-to-top" height="60px" />
                </Button>
            </div>
        </>
    );
}

export default GoUp;