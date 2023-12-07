import {Container, RowList} from "./AppStyle";
import {useEffect, useState} from "react";
import {allAlarm} from "./api/AlarmApi";
import Room from "./room/Room";
import {GlobalStyle} from "./GlobalStyle";

function App() {

    const [roomList, setRoomList] = useState([]);
    const [reload, setReload] = useState(0);


    useEffect(() => {
        setInterval(() => {

            allAlarm()
                .then(res => {
                    setRoomList(res.data);
                    // console.log(res.data/)
                    setReload(i => i + 1);
                })
                .catch(e => console.log(e));
        }, 3000);
    }, []);

    return (
        <Container>
            <GlobalStyle/>
            <RowList>
                {roomList.map(room => <Room reload={reload} room={room}/>)}
            </RowList>
        </Container>
    );
}


export default App;

