import {Container, TimeSpan} from "./AlarmStyle";

export default function Alarm({alarm}) {

    const currentDate = new Date();
    const time = new Date(alarm.createdAt);
    const differenceInSeconds = Math.floor((currentDate - time) / 1000);

    const timeText = getTimeText(differenceInSeconds);
    const isNew = !isAfterHour(differenceInSeconds)

    return (
        <Container
            style={{
                color: isNew
                    ? 'yellow'
                    : 'gray',
                fontWeight: isNew
                    ? 'underline'
                    : 'none',
            }}>{alarm.text} - <TimeSpan>{timeText}</TimeSpan></Container>
    );
}

function getTimeText(differenceInSeconds) {
    if (differenceInSeconds < 60) {
        return `${differenceInSeconds}초 전`;
    } else if (differenceInSeconds < 3600) {
        const minutes = Math.floor(differenceInSeconds / 60);
        return `${minutes}분 전`;

    } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600);
        return `${hours}시 전`;
    } else {
        const days = Math.floor(differenceInSeconds / 86400);
        return `${days}일 전`;
    }
}

function isAfterHour(time) {
    console.log(time);
    return time >= 659;
}