import { useState } from "react";
export default function CommentsForm() {
    let [formData, setFormData] = useState({
        name: "",
        rating: 5,
        comment: "",
    });

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    let handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="rating">Rating: </label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="comment">Comment: </label>
                <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                />
                <br />
                <br />
                <hr />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
