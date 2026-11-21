
function Button({ variant, studentId, onDelete }) {
    if (variant === "save") {
        return (
            <button className="button" type="submit">
                Save student
            </button>
        );
    }

    if (variant === "delete") {
        return (
            <button
                className="text-button delete-button"
                onClick={() => onDelete(studentId)}
            >
                Delete
            </button>
        );
    }
}

export default Button;
