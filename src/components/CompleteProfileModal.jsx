import { useNavigate } from "react-router-dom";
import { googleSignup } from "../services/authApi";
import { setLoginUserData, setToken } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const CompleteProfileModal = ({ setOpen, userSignupinfo, setUserSignupinfo }) => {

    const navigate = useNavigate();
    const dispatch=useDispatch();

    const handleGoogleSignup = async (e) => {
        e.preventDefault();

        let res = await googleSignup(userSignupinfo);
        console.log(res);

        if (res?.data?.success) {
            if (res?.data?.userData?.role === 'student') {
                localStorage.setItem('userData', JSON.stringify(res.data.userData));
                localStorage.setItem('token', res.data.token);
                dispatch(setLoginUserData(res.data.userData));
                dispatch(setToken(res.data.token));
                toast.success("Welcome");
                navigate('/student');
            }
        }
        else {
            console.log(res.message);
        }
    }

    return (
        <div className="w-full h-full absolute top-0 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="w-96  rounded-2xl bg-black text-white relative p-6 shadow-lg flex flex-col justify-between">

                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
                >
                    &times;
                </button>

                <form
                    onSubmit={handleGoogleSignup}
                    className="flex flex-col justify-between h-full"
                >
                    <div className="space-y-4 mt-6 overflow-y-auto pr-1">
                        <h2 className="text-2xl font-semibold text-center mb-2">Complete Your Profile</h2>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Name</label>
                            <input
                                type="text"
                                value={userSignupinfo?.name}
                                className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md outline-none"
                                placeholder="Your name"
                                readOnly

                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Email</label>
                            <input
                                type="email"
                                value={userSignupinfo?.email}
                                readOnly
                                className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md outline-none cursor-not-allowed"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Role</label>
                            <select
                                value={userSignupinfo?.role}
                                onChange={(e) => setUserSignupinfo((prev) => ({ ...prev, role: e.target.value }))}
                                className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
                                required
                            >
                                <option value="">Select a role</option>
                                <option value="student">Student</option>
                                <option value="corporate">Corporate</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm mb-1">Phone</label>
                            <input
                                type="tel"
                                onChange={(e) => setUserSignupinfo((prev) => ({ ...prev, phone: e.target.value }))}
                                value={userSignupinfo?.phone ? userSignupinfo?.phone : ''}
                                className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
                                placeholder="Your phone number"
                                required
                            />
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-md transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CompleteProfileModal