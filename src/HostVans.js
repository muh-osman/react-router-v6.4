import { useNavigate } from "react-router-dom";

export default function HostVans() {

  const navigate = useNavigate()

  return (
    <>
    <h1>Your listed vans</h1>
    <button onClick={() => navigate(-1)}> Back </button>
    </>
  )
}