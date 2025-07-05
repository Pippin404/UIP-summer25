import '../../App.css';

function login(){

    return (
        <div className="login container mt-5">
            <h2 className="mb-4">Login</h2>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" name="username" className="form-control" required />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" name="password" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );


}

export default login;