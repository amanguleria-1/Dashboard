import React from 'react'
import './user.css'
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUserName">Anna Packer</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">anabeck99</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">10/11/1991</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+91 7895212111</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">anabeck99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">Premnagar, Dehradun</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type='text' placeholder='anabeck99' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type='text' placeholder='Anna Packer' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type='text' placeholder='anabeck99@gmail.com' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone No.</label>
                        <input type='text' placeholder='789521211' className='userUpdateInput'/>
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type='text' placeholder='Premnagar, Dehradun' className='userUpdateInput'/>
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img className='userUpdateImg' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        <label htmlFor="file"><FileUploadIcon className='userUpdateIcon'/></label>
                        <input type='file' id="file" style={{display:"none"}}/>
                    </div>
                    <button className='userUpdateButton'>Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}
