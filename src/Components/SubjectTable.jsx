

const SubjectTable = ({ subject }) => {
    const { course_id, course_name, credits, mandatory, taken_right, taken_close } = subject;
    return (
        <div>
            <div>
                <tr key={course_id}>
                    <th className="border border-gray-300 px-4 py-2">{course_id}</th>
                    <td className="border border-gray-300 px-8 py-2">{course_name}</td>
                    <td className="border border-gray-300 px-2 py-2 text-center">{credits}</td>
                    <td className="border border-gray-300 px-2 py-2 text-center">
                        {mandatory ? "Yes" : "No"}
                    </td>
                    <td className="border border-gray-300 px-2 py-2 text-center">
                        <label className="swap swap-rotate inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="hidden peer" />
                            <div className="swap-on hidden peer-checked:block">
                                <img className="w-5 h-5" src={taken_right} alt="Checked" />
                            </div>
                            <div className="swap-off block peer-checked:hidden">
                                <img
                                    className="w-4 h-4"
                                    src={taken_close}
                                    alt="Unchecked"
                                />
                            </div>
                        </label>
                    </td>
                </tr>
            </div>
        </div>
    );
};

export default SubjectTable;