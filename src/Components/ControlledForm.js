
import {useState} from "react"

function ControlledForm(props) {
    const [formData, setFormData]= useState({
            randomQestion : ""
        })

const handleChange = (event)=>{
    const newformData = {...formData}
    newformData[event.target.name]= event.target.value
    setFormData(newformData)
}

const fetchQuestion = async (randomQestion) => {
    const url = `http://jservice.io/api/random`;
    const response = await fetch (url)
    const data = await response.json()
    props.setQuestion(data)
    
}
const handleSubmit = (event)=> {
    event.preventDefault()
    fetchQuestion(formData.randomQestion)
    setFormData({randomQestion:""})

}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          name="randomQuestion"
          value="Get Question"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ControlledForm;
