const Destination = ({place = '기본 장소', description = '기본 값을 이런 식으로 줄 수 있다.'}) => {
    return (
        <div>
            <h2>{place}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Destination;