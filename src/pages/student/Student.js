import Table from '../../components/ListningTable'
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Student = () => {
    const navigate = useNavigate();
    const students = [
        {
            id:1,
            roll_number:'102',
            photo:'',
            name:'Aniket',
            gender:'Male',
            father_name:'Anurudth',
            mother_name:'Sadhna',
            dob:'12/08/1999',
            class:'M.C.A.',
            section:'B',
            mobile:'7878787878780',
            email:'anitke@gmail.cpm',
            address:'kadiput sultanpur'   
        },
        {
            id:2,
            roll_number:'102',
            photo:'',
            name:'Anil',
            gender:'Male',
            father_name:'Anurudth',
            mother_name:'Sadhna',
            dob:'12/08/1999',
            class:'M.C.A.',
            section:'B',
            mobile:'7878787878780',
            email:'anitke@gmail.cpm',
            address:'kadiput sultanpur'   
        },
        {
            id:3,
            roll_number:'102',
            photo:'',
            name:'Saurabh',
            gender:'Male',
            father_name:'Anurudth',
            mother_name:'Sadhna',
            dob:'12/08/1999',
            class:'M.C.A.',
            section:'B',
            mobile:'7878787878780',
            email:'anitke@gmail.cpm',
            address:'kadiput sultanpur',
            subject:['Math','Science','English']   
        },
        {
            id:4,
            roll_number:'102',
            photo:'',
            name:'Saurabh',
            gender:'Male',
            father_name:'Anurudth',
            mother_name:'Sadhna',
            dob:'12/08/1999',
            class:'M.C.A.',
            section:'B',
            mobile:'7878787878780',
            email:'anitke@gmail.cpm',
            address:'kadiput sultanpur',
            subject:['Math','Science','English']   
        }
    ];
    const thead = [
        {
            name:'checkbox',
            key:'checkbox',
        },
        {
            name:'Roll No',
            key:'roll_number',
            width:'80px'
        },
        {
            name:'Image',
            key:'photo',
            width:'80px'
        },
        {
            name:'Name',
            key:'name',
        },
        {
            name:'Gender',
            key:'gender',
        },
        {
            name:'Father Name',
            key:'father_name',
        },
        {
            name:'Mother Name',
            key:'mother_name',
        },
        {
            name:'DOB',
            key:'dob',
        },
        {
            name:'Class',
            key:'class',
        },
        {
            name:'Subject',
            key:'subject',
            width:'180px'
        },
        {
            name:'Section',
            key:'section',
        },
        {
            name:'Mobile',
            key:'mobile',
        },
        {
            name:'Email',
            key:'email',
        },
        {
            name:'Address',
            key:'address',
            width:'200px'
        },
        {
            name:'Action',
            key:'action',
        },
    ]
    const createStudent = () => {
        navigate('/student/create')
    }
    return(
        <>
            <div className="topbar-title">
                <h3 className='my-auto text-primary'>Student</h3>
                <div>
                    <button onClick={() => navigate(-1)} className="btn btn-primary btn-sm"><ArrowBackIcon style={{height:20}}/></button>
                    <button onClick={() => createStudent()} className="btn btn-primary btn-sm ms-2">Create</button>
                </div>
            </div>
            <Table 
                data={students} 
                thead={thead}
            />
        </>
    )
}
export default Student;