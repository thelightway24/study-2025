const List = () => {
    const items = ["Kiwi", "Hello"];
    return (
        <ul>
            {
                items.map((i) => (
                    <li>{i}</li>
                ))
            }
        </ul>
    );
}

export const FilteredList = () => {
    const items = [
    {
        id: 1,
        text: 'learn React',
        completed: true,
    },
    {
        id: 2,
        text: 'Build UI',
        completed: false,
    },
    {
        id: 3,
        text: 'Fetch API',
        completed: false,
    }
    ]

    return <ul>{
        items.filter(i => i.completed===false)
              .map(i => (<li>{i.text}</li>))
    }</ul>
}
export default List;