import { useParams } from "react-router-dom"

function SinglePRoducts() {
    const {id} = useParams()
    console.log(id);
  return (
    <div>SinglePRoducts</div>
  )
}

export default SinglePRoducts