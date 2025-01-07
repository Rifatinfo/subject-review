
const AddToSubject = ({cart}) => {
    return (
        <div>
            <h1>Added Subject : <span className="font-bold text-red-700">{cart.length}</span></h1>
        </div>
    );
};

export default AddToSubject;