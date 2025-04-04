import { useState } from 'react';

const Registration = () => {
    const [user, setUser] = useState({
        event: "",
        teamName: "",
        teamLeaderName: "",
        email: "",
        mobile: "",
        gender: "",
        college: "",
        course: "",
        year: "",
        rollno: "",
        clg_id: null,
        aadhar: "",
        teamSize: "",
        aadharImage: null,
        registrationId: "",
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setUser(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            setUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);
    
        if (!user.event || !user.teamName || !user.teamLeaderName || !user.email) {
            setError('Please fill all required fields');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        Object.keys(user).forEach(key => {
            if (user[key]) {
                formData.append(key, user[key]);
            }
        });
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'; // Fallback
    const url = `${baseUrl}/api/register`;
    console.log('Raw VITE_BACKEND_URL:', import.meta.env.VITE_BACKEND_URL);
    console.log('Using URL:', url);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        

        const data = await response.json();
        if (response.ok) {
            setSuccess('Registration successful!');
            setUser({
                event: "",
                teamName: "",
                teamLeaderName: "",
                email: "",
                mobile: "",
                gender: "",
                college: "",
                course: "",
                year: "",
                rollno: "",
                clg_id: null,
                aadhar: "",
                teamSize: "",
                aadharImage: null,
                registrationId: "",
            });
        } else {
            setError(data.message || 'Registration failed');
        }
    } catch (err) {
        setError('Something went wrong. Please try again.');
        console.error('Fetch error:', err);
    } finally {
        setLoading(false);
    }
};

    return (
        <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <style>
            {`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg) scale(1); }
                    50% { transform: translateY(-30px) rotate(10deg) scale(1.1); }
                    100% { transform: translateY(0px) rotate(0deg) scale(1); }
                }
                @keyframes gradientShift {
                    0% { background-position: 0% 0%; }
                    50% { background-position: 100% 100%; }
                    100% { background-position: 0% 0%; }
                }
                @keyframes glowPulse {
                    0% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
                    100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
                }
                @keyframes ringPulse {
                    0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
                }
                .animate-glow-pulse {
                    animation: glowPulse 2s infinite;
                }
                .animate-ring-pulse {
                    animation: ringPulse 2s infinite;
                }
            `}
        </style>
    
        {/* Darker Enhanced 3D Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-80 h-80 bg-gradient-to-br from-indigo-800 to-purple-800 rounded-full blur-3xl animate-float top-0 left-0 opacity-40"></div>
            <div className="absolute w-96 h-96 bg-gradient-to-br from-pink-800 to-purple-800 rounded-full blur-3xl animate-float bottom-0 right-0 opacity-40 animation-delay-2000"></div>
            <div className="absolute w-72 h-72 bg-gradient-to-br from-cyan-700 to-indigo-700 rounded-full blur-3xl animate-float top-1/3 left-1/2 opacity-40 animation-delay-4000"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-black/90 to-gray-950 opacity-80"></div>
        </div>
    
        <div className="max-w-3xl mx-auto relative z-0">
            <h1 className="py-20 text-5xl md:text-7xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 animate-[gradientShift_5s_ease_infinite] drop-shadow-[0_4px_20px_rgba(99,102,241,0.7)]">
                Event Registration
            </h1>
    
            {error && (
                <div className="mb-6 p-4 bg-red-950/70 border-2 border-red-600 text-red-100 rounded-xl backdrop-blur-md transform transition-all hover:scale-105 hover:border-red-500 animate-glow-pulse">
                    {error}
                </div>
            )}
            {success && (
                <div className="mb-6 p-4 bg-green-950/70 border-2 border-green-600 text-green-100 rounded-xl backdrop-blur-md transform transition-all hover:scale-105 hover:border-green-500 animate-glow-pulse">
                    {success}
                </div>
            )}
    
        <form 
            onSubmit={handleSubmit} 
            className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(99,102,241,0.4)] rounded-2xl p-8 space-y-8 border-2 border-indigo-600/40 transform transition-all duration-500 hover:-translate-y-3 hover:border-indigo-600/80 hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] animate-ring-pulse"
        >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                    { label: "Event", name: "event", type: "select", options: [
                        { value: "", label: "Select your Event" },
                        { value: "robo-race", label: "ROBO RACE" },
                        { value: "project-exhibition", label: "PROJECT EXHIBITION" },
                        { value: "cultural", label: "CULTURAL EVENT" },
                        { value: "dance", label: "DANCE COMPETITION" },
                        { value: "code", label: "CODE PUZZLE" },
                        { value: "nukad", label: "NUKKAD NATAK" },
                        { value: "singing", label: "SINGING COMPETITION" },
                        { value: "admad", label: "AD-MAD SHOW" },
                    ]},
                    { label: "Team Name", name: "teamName", type: "text", placeholder: "Enter team name" },
                    { label: "Team Leader Name", name: "teamLeaderName", type: "text", placeholder: "Enter team leader name" },
                    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
                    { label: "Mobile Number", name: "mobile", type: "tel", placeholder: "Enter mobile number" },
                    { label: "Gender", name: "gender", type: "select", options: [
                        { value: "", label: "Select gender" },
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                    ]},
                    { label: "College", name: "college", type: "select", options: [
                        { value: "", label: "Select your College" },
                        { value: "ABESIT", label: "ABESIT,Ghaziabad" },
                        { value: "ims", label: "IMS Engineering College,Ghaziabad" },
                        { value: "abesec", label: "ABES Engineering College,Ghaziabad" },
                        { value: "akg", label: "AKGEC,Ghaziabad" },
                        { value: "jss", label: "JSS Noida" },
                        { value: "rkgit", label: "RKGIT,Ghaziabad" },
                        { value: "gl", label: "GL Bajaj,Noida" },
                        { value: "HIET  ", label: "HI-TECH INSTITUTE OF ENGINEERING AND TECHNOLOGY GHAZIABAD" },
                        { value: "niet", label: "NIET" },
                        { value: "gniot", label: "GNIOT" },
                        { value: "galgotiacollege", label: "GALGOTIAS UNIVERSITY" },
                        { value: "galgotia", label: "GALGOTIAS COLLEGE" },
                        { value: "kiet", label: "KIET" },
                        { value: "bg", label: "Bhagwati Institute of Technology" },
                        { value: "hr", label: "H.R. Group of Institutions" },
                        { value: "inm", label: "INMANTEC Institutions" },
                        { value: "dps", label: "Delhi Public School (DPS), Ghaziabad" },
                        { value: "kend", label: "Kendriya Vidyalaya, Ghaziabad" },
                        { value: "other", label: "OTHER" },
                    ]},
                    { label: "Course", name: "course", type: "select", options: [
                        { value: "", label: "Select your Course" },
                        { value: "btech", label: "B.Tech" },
                        { value: "bca", label: "BCA" },
                        { value: "bba", label: "BBA" },
                        { value: "bpharma", label: "B.PHARMA" },
                        { value: "mtech", label: "M.TECH" },
                        { value: "mca", label: "MCA" },
                        { value: "mba", label: "MBA" },
                        { value: "inter", label: "INTERMEDIATE" },
                        { value: "high", label: "HIGH SCHOOL" },
                        { value: "other", label: "OTHER" },
                    ]},
                    { label: "Year", name: "year", type: "select", options: [
                        { value: "", label: "Select year" },
                        { value: "1", label: "1" },
                        { value: "2", label: "2" },
                        { value: "3", label: "3" },
                        { value: "4", label: "4" },
                    ]},
                    { label: "Team Size", name: "teamSize", type: "number", placeholder: "Enter team size" },
                    { label: "University Roll No", name: "rollno", type: "text", placeholder: "Enter roll number" },
                    { label: "Aadhar Number", name: "aadhar", type: "text", placeholder: "Enter 12-digit Aadhar number" },
                ].map((field, index) => (
                    <div 
                        key={field.name}
                        className="group transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 relative"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors drop-shadow-[0_2px_4px_rgba(6,182,212,0.5)]">
                            {field.label}
                        </label>
                        {field.type === "select" ? (
                            <select
                                name={field.name}
                                value={user[field.name]}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-xl bg-gradient-to-r from-gray-900 to-black border-2 border-indigo-600/50 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-600/30 transition-all duration-300 hover:bg-gray-900/80 hover:border-indigo-600/80 hover:ring-4 hover:ring-indigo-600/20 animate-ring-pulse"
                            >
                                {field.options.map(opt => (
                                    <option key={opt.value} value={opt.value} className="bg-gray-950 text-white">
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type}
                                name={field.name}
                                value={user[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className="mt-1 block w-full rounded-xl bg-gradient-to-r from-gray-900 to-black border-2 border-indigo-600/50 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-600/30 transition-all duration-300 hover:bg-gray-900/80 hover:border-indigo-600/80 hover:ring-4 hover:ring-indigo-600/20 animate-ring-pulse"
                            />
                        )}
                    </div>
                ))}
            </div>
    
            <div className="space-y-6">
                {[
                    { label: "Aadhar Card (Max 300KB)", name: "aadharImage" },
                    { label: "College ID (Max 300KB)", name: "clg_id" },
                ].map((field) => (
                    <div 
                        key={field.name}
                        className="group transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 relative"
                    >
                        <label className="block text-sm font-medium text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors drop-shadow-[0_2px_4px_rgba(6,182,212,0.5)]">
                            {field.label}
                        </label>
                        <input
                            type="file"
                            name={field.name}
                            onChange={handleChange}
                            accept="image/jpeg,image/jpg,image/png,application/pdf"
                            className="mt-1 block w-full text-sm text-gray-300 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-indigo-700 file:to-purple-700 file:text-white hover:file:from-indigo-600 hover:file:to-purple-600 transition-all duration-300 animate-ring-pulse"
                        />
                    </div>
                ))}
            </div>
    
            <div className="text-center">
                <button
                    type="submit"
                    disabled={loading}
                    className={`relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white rounded-xl font-bold overflow-hidden group ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-2 hover:scale-105 animate-glow-pulse animate-ring-pulse'}`}
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></span>
                    <span className="relative z-0 flex items-center justify-center text-lg tracking-wide">
                        {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Registering...
                            </>
                        ) : (
                            'Register Now'
                        )}
                    </span>
                </button>
            </div>
        </form>
        </div>
    </div>
    );
};

export default Registration;