import '../images/dog_logo/vecteezy_dog-face-logo_6720668.jpg'

const ProfilePage = () => {
    return (
        <div className="profile-page container card w-50 m-7 mt-2 shadow-lg">
            <div className=" header d-flex justify-content-between ">
                <button className="btn btn-outline-success m-5">
                    Save changes
                </button>
                <button className="btn btn-outline-warning m-5">Logout</button>
            </div>
            <div className='pet-data card-body  '>
                <p className="text-center h2"> My Pet Profile </p>
                    <button className='btn'> 
                        <img 
                            className='rounded-circle shadow-4-strong h-25 w-25' 
                            src={require('../images/dog_logo/vecteezy_dog-face-logo_6720668.jpg')}
                            alt="profile_picture" 
                        />
                </button>
                <div className='pet-name d-flex justify-content-center m-1 p-1 '>
                    <input
                        className="form-control form-control-lg text-center w-50"
                        type='text'
                        placeholder='{pet name}'
                        value=''
                    />
                </div>
                <div className='pet-username d-flex justify-content-center  m-1 p-1 '>
                    <input
                        className="form-control form-control-lg text-center w-50"
                        type='text'
                        placeholder='{username}'
                        value=''
                    />
                </div>
                <div className='pet-pw d-flex justify-content-center  m-1 p-1 '>
                    <input
                        className="form-control form-control-lg text-center w-50"
                        type='password'
                        placeholder='{password}'
                        value=''
                    />
                </div>
                <div className='date-created d-flex justify-content-center  m-1 p-1 '>
                    <p> Date created : {'insert value'} </p>
                </div>
            </div>
            <div className="action-button card-body align-self-center">
                <button className="btn btn-outline-info m-1">
                    Change password
                </button>
                <button className="btn btn-outline-danger m-1"> Delete Account </button>
            </div>
            <div className='footer'>
                this is footer/nav buttons
            </div>
        </div>
    );
};
export default ProfilePage;
