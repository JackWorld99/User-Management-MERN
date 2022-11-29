import { FaStickyNote } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom"

const Index = ({ note }) => {
  const navigate = useNavigate()

  return (
    <div className="col-lg-3" onClick={() => navigate(`/note/view/${note._id}`, {replace: true})}>
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          {/* <p className="card-text">Tag</p> */}
          <Link to="/note"><button className="btn btn-primary"><FaStickyNote/></button></Link>
        </div>
      </div>
    </div>
  )
}

export default Index