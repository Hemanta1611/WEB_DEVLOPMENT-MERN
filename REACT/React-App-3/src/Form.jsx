function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
};

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <label>
                Name:
                <input type="text" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};