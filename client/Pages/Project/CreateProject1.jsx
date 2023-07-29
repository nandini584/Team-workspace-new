import React, {useState} from 'react'
import UserSidebar from '../../Components/Dashboard/UserSidebar/UserSidebar'
import Backarrow from '../../assets/MainDashboard/back.svg'
import {Link, useNavigation} from 'react-router-dom'
const CreateProject1 = () => {
  const [formInputData, setformInputData] = useState(
    {
      projectname: '',
      projectdescription: '',
     }
  )
  const history = useNavigation();
  const handleChange=(e)=>{  
    const newInput = (data)=>({...data, [e.target.name]:e.target.value})
   setformInputData(newInput)
}
  const handleSubmit= (e) =>{
    e.preventDefault();
    history.push('/api/v1/projectdashboard/:userid', { formData: formInputData });
    const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
    if(checkEmptyInput)
    {
     const newData = (data)=>([...data, formInputData])
     setTableData(newData);
     const emptyInput= {projectname: '',
     projectdescription: ''}
     setformInputData(emptyInput)
    }
}  
  return (
    <div className='flex flex-row bg-[#F8F8F8] sticky'>
        <UserSidebar></UserSidebar>
          <form action="" >
        <div className="px-14 py-24 flex flex-col">
          <div>
          <h1 className='font-jost font-bold text-2xl'>Create Project</h1>
          <h1 className='font-jost font-regular text-sm'>Use AI tool to generate project description.</h1>
          </div>
          <div className='flex flex-row justify-center items-center'>
            
          <div className='ml-40 mt-16'>
              
            <h1 className='font-jost font-medium text-base mb-3'>What cool project are you working on?</h1>
            <input type="text" name='Name' placeholder='Add Projectname' onChange={handleChange} className='border-2 py-4 rounded-lg font-inter font-regular text-sm border-[#54535342] w-[40rem] pl-5 mb-10'/>
            <h1 className='font-jost font-medium text-base mb-3'>Tell us more about your Project.........</h1>
            <input type="text" name='Name' placeholder='Add some keywords about your Project' onChange={handleChange} className='border-2 rounded-lg font-inter font-regular text-sm border-[#54535342] pl-5 pt-4 w-full pb-[14rem]'/>
          </div>
          <div>
          <Link to="/api/v1/createproject2/:projectid"><img src={Backarrow} alt="createprojectimg" className='ml-20'  onSubmit={handleSubmit}/></Link>
          </div>

          </div>

          

        </div>
              </form>
    </div>
  )
}

export default CreateProject1