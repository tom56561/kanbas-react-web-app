import * as client from "./client";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };
    const save = async () => {
        console.log(account)
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/kanbas/signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <div>
                        <label className="form-label">Password</label>
                        <input value={account.password}
                            onChange={(e) => setAccount({
                                ...account,
                                password: e.target.value
                            })} />
                    </div>
                    <div>
                        <label className="form-label">firstName</label>
                        <input value={account.firstName}
                            onChange={(e) => setAccount({
                                ...account,
                                firstName: e.target.value
                            })} />
                    </div>
                    <div>
                        <label className="form-label">lastName</label>
                        <input value={account.lastName}
                            onChange={(e) => setAccount({
                                ...account,
                                lastName: e.target.value
                            })} />
                    </div>
                    <div>
                        <label className="form-label">dob</label>
                        <input value={account.dob}
                            onChange={(e) => setAccount({
                                ...account,
                                dob: e.target.value
                            })} />
                    </div>
                    <div>
                        <label className="form-label">email</label>
                        <input value={account.email}
                            onChange={(e) => setAccount({
                                ...account,
                                email: e.target.value
                            })} />
                    </div>
                    <div>
                        <label className="form-label">role</label>
                        <select onChange={(e) => setAccount({
                            ...account,
                            role: e.target.value
                        })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                </div>
            )}
            <button className="btn btn-primary w-100" onClick={save}>
                Save
            </button>
            <button className="btn btn-danger w-100" onClick={signout}>
                Signout
            </button>
            <Link to="/Kanbas/admin/users" className="btn btn-warning w-100">
                Users
            </Link>
        </div>
    );
}
export default Account;

