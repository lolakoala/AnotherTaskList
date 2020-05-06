import React, {useState} from 'react'

const Form = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [notes, setNotes] = useState('')
    
    return (<form>
        <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Enter Task Title"
            required
        />
        {/* category (req)- dd + text input button */}
        <textarea
            type="text"
            value={details}
            onChange={event => setDetails(event.target.value)}
            placeholder="Enter Task Details"
        />
        {/* date due- date picker */}
        <textarea
            type="text"
            value={notes}
            onChange={event => setNotes(event.target.value)}
            placeholder="Enter Task Notes"
        />
        {/* submit button- on submit, date added generated */}
        {/* clear button */}
    </form>)
}

export default Form