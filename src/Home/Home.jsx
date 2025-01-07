import { useEffect, useState } from "react";
import { addToLocalStorage, getStoredSubject } from "../utility/localStorage";

const Home = () => {
    const [subjects, setSubjects] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
    })
    useEffect(() => {
        if(subjects.length){
            const getStored = getStoredSubject();
            console.log(getStored);
            const savedSubject = [];
            for(const id of getStored){
                const sub = subjects.map(subject => subject._id === id);
                if(sub){    
                    savedSubject.push(sub)
                }
            }
            setCart(savedSubject);
        }
       
    },[subjects]);
    const handleAddToSubject = subject =>{
        console.log(subject);
        const newCart = [...cart, subject];
        setCart(newCart);
        addToLocalStorage(subject._id);
    }
    return (
        <div>
            <h1>{subjects.length}</h1>
            <h1>Added Subject : <span className="font-bold text-red-700">{cart.length}</span></h1>
            <body className="mt-32 flex justify-center items-center">
                <div id="main-container" className="p-4">
                    <div id="table-container" className="overflow-x-auto">
                        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Course ID</th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">Course Name</th>
                                    <th className="border border-gray-300 px-2 py-2 text-center w-20">Credits</th>
                                    <th className="border border-gray-300 px-2 py-2 text-center w-20">Mandatory?</th>
                                    <th className="border border-gray-300 px-2 py-2 text-center w-20">Taken</th>
                                </tr>
                            </thead>
                            <tbody id="table-body">
                                {subjects.map((subject) => (
                                    <tr key={subject.course_id}>
                                        <th className="border border-gray-300 px-4 py-2">{subject.course_id}</th>
                                        <td className="border border-gray-300 px-8 py-2">{subject.course_name}</td>
                                        <td className="border border-gray-300 px-2 py-2 text-center">{subject.credits}</td>
                                        <td className="border border-gray-300 px-2 py-2 text-center">
                                            {subject.mandatory ? "Yes" : "No"}
                                        </td>
                                        <td className="border border-gray-300 px-2 py-2 text-center">
                                            <label className="swap swap-rotate inline-flex items-center cursor-pointer">
                                                <input type="checkbox" className="hidden peer" />
                                                <div className="swap-on hidden peer-checked:block">
                                                    <img className="w-5 h-5" src={subject.taken_right} alt="Checked" />
                                                </div>
                                                <div className="swap-off block peer-checked:hidden">
                                                    <img onClick={() => handleAddToSubject(subject)}
                                                        className="w-4 h-4"
                                                        src={subject.taken_close}
                                                        alt="Unchecked"
                                                    />
                                                </div>
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

                <script>

                </script>
            </body>

        </div>
    );
};

export default Home;