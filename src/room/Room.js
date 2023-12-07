import {AlarmList, Container, TitleContainer} from "./RoomStyle";
import Alarm from "../alarm/Alarm";
import {Body, Title} from "../GlobalStyle";
import {useEffect, useRef} from "react";

export default function Room({room, reload}) {
    const roomRef = useRef(null);

    useEffect(() => {
        // roomRef.current.scrollIntoView({behavior: 'smooth'});
        roomRef.current.scrollTop = roomRef.current.scrollHeight;
    }, [reload]);

    return (
        <Container ref={roomRef}>
            <TitleContainer>
                <Title>{room.roomName}</Title>
            </TitleContainer>
            <div style={{marginTop: '3rem'}}></div>
            <AlarmList>
                {room.alarmList.map((alarm, idx) => {
                        var isSame = idx !== 0 && room.alarmList[idx].title === room.alarmList[idx - 1].title
                        if (!isSame) {
                            return (
                                <>
                                    <Body>{alarm.title}</Body><Alarm roomName={room.roomName} alarm={alarm}/>
                                </>
                            )
                        }
                        return <Alarm roomName={room.roomName} alarm={alarm}/>
                    }
                )}
            </AlarmList>

        </Container>
    );
}
