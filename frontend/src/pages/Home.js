import { Link } from 'react-router-dom'
import { ROLES } from '../config/roles'
import { usePathContext } from '../context/path'
import { useAuthContext } from '../context/auth'
import { useUserContext } from '../context/user'
import { FaUserFriends, FaTasks, FaStickyNote, FaUserCog } from 'react-icons/fa'
import { GiNightSleep } from 'react-icons/gi'

const Home = () => {
    const { auth } = useAuthContext()
    const { setLink } = usePathContext()
    const { setTargetUser } = useUserContext()
    const accessRight = (auth?.roles == ROLES.Admin) || (auth?.roles == ROLES.Root)

    const handleClick = (title) => {
        setLink(title)
        setTargetUser()
    }
    
    return (
        <>
            <div className="row">
                {/* <div className="col-lg-3">
                    <div className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">Account Management</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/account" onClick={() => handleClick("/account")}><button className="btn btn-primary"><FaUserCog/></button></Link>
                        </div>
                    </div>
                </div> */}
                {accessRight && (<div className="col-lg-3">
                    <div className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">User Management</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/user" onClick={() => handleClick("/user")}><button className="btn btn-primary"><FaUserFriends/></button></Link>
                        </div>
                    </div>
                </div>)}
                <div className="col-lg-3">
                    <div className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">{accessRight ? "Task Management" : "Tasks"}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/task" onClick={() => handleClick("/task")}><button className="btn btn-primary"><FaTasks/></button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">Note</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/note" onClick={() => handleClick("/note")}><button className="btn btn-primary"><FaStickyNote/></button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card my-2">
                        <div className="card-body">
                            <h5 className="card-title">Record Sleep Hour</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/sleep" onClick={() => handleClick("/sleep")}><button className="btn btn-primary"><GiNightSleep/></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home