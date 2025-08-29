const Propagation = () => {
    const handleParent = () => {
        alert('parent');
    }
    const handleChild = () => {
        alert('child')
    }
    return (
        <div onClick={handleParent}>
            <button onClick={handleChild}>child</button>
        </div>
    );
}

export default Propagation;