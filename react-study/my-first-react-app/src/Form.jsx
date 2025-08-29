const Form = () => {
    const handleSubmit = (event) => {
        //기본 동작 막기
        event.preventDefault();
        const text = event.target.elements.user.value;
        alert(text);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="user" />
            <button>Submit</button>
        </form>
    );
}

export default Form;