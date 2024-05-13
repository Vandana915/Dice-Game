import styled from "styled-components";
import { Button } from "../styled/Button";

const Container = styled.div`
max-width:100vw;
height: 100vh;
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
}
.content{
    h1{
        font-size: 90px;
        white-space: nowrap;
        color: white;
        text-align: center;
    }
}
`;
const Startgame = ({toggle}) => {
    return (
        <Container className="con">
            <div><img src="/Images/Diess.png" ></img></div>
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
};
export default Startgame;