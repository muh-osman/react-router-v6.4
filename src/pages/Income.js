import { useReducer } from "react"

export default function Income() {


  const initState = {
    count: 0
  }

  const reduser = (state, action) => {
    switch (action.type) {
      case "up":
        return {count: state.count + 1}
      case "down":
        return {count: state.count - 1}

    }
  }

  const [state, dispatch] = useReducer(reduser, initState)


  const handleSubmit =(e) => {
    e.preventDefault()
  }

  return (
    <>
      <div>{state.count}</div>

      <button onClick={()=> dispatch({type: "up"})}>UP</button>
      <button onClick={()=> dispatch({type: "down"})}>Down</button>

      <form onSubmit={handleSubmit}>
        <input type="text"  required/>
        <button type="submit">submit</button>
      </form>
    
    </>
  )
}