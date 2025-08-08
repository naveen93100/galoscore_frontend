import { useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { updateStudentProfile } from '../../../services/studentApi';
import { useForm } from 'react-hook-form';

const StudentProfile = () => {

  const { user: { name, email, phone }, token } = useSelector(state => state.auth);
  const { register, formState: { errors }, handleSubmit, setValue, getValues } = useForm()
  const [skills, setSkills] = useState([]);
  const [loading,setLoading]=useState(false);


  const onSubmit = async (data) => {
    let formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('education', data.education);
    if(skills.length>0){
      for(let i=0;i<skills.length;i++){
        formData.append('skills', skills[i]);
      }
    }
    formData.append('bio', data.bio);
    formData.append('resume', data.resume[0])

    setLoading(true);
    let res = await updateStudentProfile(formData, token);
    console.log(res);
    
    if(res?.data?.success){
      setLoading(false);
    }
    else{
      setLoading(false);
    }
  };

  const handleAddSkills = () => {
    //  if(skills.length==0) return ;
    let skill = getValues('skills')
    if(!skill) return ;
    setSkills((prev) => [...prev, skill])
    setValue('skills', '');
  }


  useEffect(() => {
    setValue('name', name)
    setValue('email', email)
    setValue('phone', phone)
  }, []);

  return (
    <div className="w-full  max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        encType='multipart/form-data'
        className="bg-slate-900 p-6 rounded-lg shadow-md space-y-6"
      >

        <div className="w-full">
          <label className="block text-sm font-medium mb-1 text-white">Name</label>
          <input
            type="text"
            name="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-3 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Name"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>


        <div className="w-full">
          <label className="block text-sm font-medium mb-1 text-white">Email</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-3border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>


        <div className="w-full">
          <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
          <input
            type="tel"
            name="phone"
            {...register('phone', { required: 'Phone no. is required' })}

            className="w-full p-3 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="+91"
          />
          {errors.phone && (
            <span className="text-sm text-red-500">{errors.phone.message}</span>
          )}
        </div>


        <div className="w-full">
          <label className="block text-sm font-medium mb-1 text-white">Education</label>
          <input
            type="text"
            name="education"
            {...register('education', { required: 'education is required' })}

            className="w-full p-3 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Your current degree or course"
          />
          {errors.education && (
            <span className="text-sm text-red-500">{errors.education.message}</span>
          )}
        </div>


        <div className="w-full">
          <label className="block text-sm font-medium mb-1 text-white">Skills</label>
          <input
            type="text"
            name="skills"
            {...register('skills')}

            className="w-full p-3 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {/* {errors.skills && (
            <span className="text-sm text-red-500">{errors.skills.message}</span>
          )} */}
          <div className='mt-2 space-x-1'>
            {skills.length > 0 && skills.map((item, index) => (
              <span key={index} className='bg-gray-400 text-white rounded-2xl p-2'>{item}
               <span onClick={()=>setSkills((prev)=>prev.filter((_,idx)=>idx!==index))} className="cursor-pointer text-white text-xl">×</span>
              </span>
            ))}
          </div>
          <button onClick={handleAddSkills} type='button' className='rounded bg-yellow-500 p-2 mt-3'>Add Skills</button>
        </div>


        <div className="w-full">
          <label className="block text-sm font-medium mb-1 text-white">Short Bio</label>
          <textarea
            name="bio"
            rows={6}
            {...register('bio')}
            className="w-full p-3 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">Upload Resume</label>
          <div
            className='border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-300 border-gray-300 bg-gray-800'

          >
            {/* <input type='file' /> */}
            <div className="flex flex-col items-center space-y-2 text-gray-600">
              <FaUpload className="text-2xl" />
              <input name='resume' type="file" accept='.pdf'  {...register('resume')} />
              <span className="text-sm">Drag & drop your resume here</span>
              <p className="text-xs text-gray-400">(PDF, DOC, DOCX accepted)</p>
            </div>
          </div>
        </div>


        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md text-lg hover:bg-yellow-600 transition"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;


