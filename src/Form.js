import React, {useState} from 'react'

const Form = () => {
    const [title, setTitle] = useState('')
    
    return (<form>
        <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            placeholder="Enter Task Title"
            required
        />
        {/* category (req)- dd + text input button */}
        {/* description- textarea */}
        {/* date due- date picker */}
        {/* notes- textarea */}
        {/* submit button- on submit, date added generated */}
        {/* clear button */}
    </form>)
}

export default Form