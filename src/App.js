
import './App.css';
import {React, useState} from "react"

function App() {
const [firstName, setFirstName]=useState("");
const [lastName, setLastName]=useState("");
const [email, setEmail]=useState("");
const [contact, setcontact]=useState("");
const [gender, setGender]=useState("");
const [subjects, setSubjects]=useState({
  english: true,
  maths: false,
  physics:false,
  chemistry: true,
});
  const [resume, setResume]=useState("");
  const [url, setUrl]=useState("")
  const [slectedOption, setSelectedOption]=useState("");
  const [about, setAbout]=useState("");

const handlesubmit =(e)=>{
  e.preventDefault();
}

const handlesubjectChange =(sub)=>{
  setSubjects((prev) =>({
    ...prev,
    [sub]: !prev[sub],
  }));
}

const handleReset =()=>{
  setFirstName("");
  setLastName("");
    setEmail("");
    setcontact("");
    setGender("");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
      chemistry: true,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
}

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <fieldset>
        <form action='#' method='get'>
          <label for="firstName">
            First Name*
          </label>
          <input 
          type='text'
          name='firstName'
          id='firstName'
          value={firstName}
          onChange={(e)=>
            setFirstName(e.target.value)
          }
          placeholder='Enter First Name'
          required
          />
          <label for="lastName">Last Name*</label>
          <input
          type='text'
          name='lastName'
          id='lastName'
          value={lastName}
          onChange={(e)=>
            setLastName(e.target.value)
          }
          placeholder='Enter Last Name'
          required
          />
          <label for="email">Email*</label>
          <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
          placeholder='Enter email'
          required
          />
          <label for="tel">Contact*</label>
          <input
          type='tel'
          name='contact'
          id='contact'
          value={contact}
          onChange={(e)=>
            setcontact(e.target.value)
          }
          placeholder='Enter Mobile Number'
          required
          />
          <label for="gender">Gender</label>
          <input
          type='radio'
          name='gender'
          id='male'
          value="male"
          checked={gender==="male"}
          onChange={(e)=>
            setGender(e.target.value)
          }
          />Male
           <input
           type='radio'
           name='gender'
           value="female"
           id='female'
           checked={gender==="female"}
           onChange={(e)=>
            setGender(e.target.value)
           }
           />Female
           <input
           type='radio'
           name='gender'
           value="other"
           id='other'
           checked={gender==="other"}
           onChange={(e)=>
            setGender(e.target.value)
           }
           />Other
           <label for="lang">Your Best Subject</label>
           <input
           type='checkbox'
           name='lang'
           id='english'
           checked={subjects.english===true}
           onChange={(e)=>
            handlesubjectChange("english")
           }
           />English
           <input
           type='checkbox'
           name='lang'
           id='maths'
           checked={subjects.maths===true}
           onChange={(e)=>
            handlesubjectChange("maths")
           }
           />Maths
           <input
           type='checkbox'
           name='lang'
           id='physics'
           checked={subjects.physics===true}
           onChange={(e)=>
            handlesubjectChange("physics")
           }
           />Physics
           <input
           type='checkbox'
           name='lang'
           id='chemistry'
           checked={subjects.chemistry===true}
           onChange={(e)=>
            handlesubjectChange("chemistry")
           }
           />Chemistry
           <label for="file">Upload Resume*</label>
           <input
           type='file'
           name='file'
           id='file'
           value={resume}
           onChange={(e)=>
              setResume(e.target.value)
            
           }
           placeholder='Upload Your Resume'
           required
           />
           <label for="url">Enter URL*</label>
           <input
           type='url'
           name='url'
           id='url'
           value={url}
           onChange={(e)=>
            setUrl(e.target.value)
           }
           placeholder='Entefr Your URL'
           required
           />
           <label for="#">Select Your Choice</label>
           <select 
           name='select'
           id='select'
           value={slectedOption}
           onChange={(e)=>
            setSelectedOption(e.target.value)
           }
           >
             <option
             value=""
             disabled
             selected={slectedOption===""}
             >Select your Ans</option>
            <optgroup label="Beginers">
              <option value='1'>HTML</option>
              <option value='2'>CSS</option>
              <option value='3'>JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value='1'>React</option>
              <option value='2'>Node</option>
              <option value='3'>Express</option>
              <option value='t'>MongoDB</option>
            </optgroup>
           </select>
           <label for="about">About</label>
           <textarea
           name='about'
           id='about'
           cols="30"
           rows="10"
           value={about}
           onChange={(e)=>
            setAbout(e.target.value)
           }
           placeholder='About your self'
           required
           />
           <button
           type='reset'
           value="reset"
           onClick={()=>handleReset}
           >Reset
           </button>
           <button
           type='submit'
           value="Submit"
           onClick={(e)=>handlesubmit}
           >Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
