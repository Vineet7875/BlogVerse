import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import "./Nav.css";

function Nav(props) {
    const { filterKeyword, setFilterKeyword } = props;
    const [errorMsg, setErrorMsg] = useState("");
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const navigate = useNavigate();
    const handleAboutClick = () => {
        navigate("/About");
    };

    const handleHomeClick = () => {
        navigate("/");
    };
    const handleAllBlogsClick = () => {
        navigate("/AllBlogs");
    };
    const handleLoginButton = () => {
        navigate("./login");
    };
    const handleSignupButton = () => {
        navigate("./signup");
    };

    const auth = getAuth();
    const handleLogoutButton = () => {
        const user = auth.currentUser;
        if (!user) {
            setErrorMsg("Please login first");
            return;
        }

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("Sign-out successful");
                navigate("/");
            })
            .catch((error) => {
                console.log("Error");
                // An error happened.
            });
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, [auth]);

    const [open, setOpen] = useState(true);
    useEffect(() => {
        if (!open) {
            document.getElementById("close-btn").click();
        }
    }, [open]);

    return (
        <div className="app">
            <header>
                <div id="logo1">
                    <img src="logo4.png" alt="Logo" />
                </div>
                <input
                    value={filterKeyword}
                    onChange={(e) => setFilterKeyword(e.target.value)}
                    type="text"
                    placeholder="Search Blog"
                />

                <nav ref={navRef}>
                    <a
                        className="nav-link nav-link-ltr"
                        onClick={() => {
                            handleHomeClick();
                            setOpen(false);
                        }}
                    >
                        Home
                    </a>

                    <a
                        className="nav-link nav-link-ltr"
                        onClick={() => {
                            handleAboutClick();
                            setOpen(false);
                        }}
                    >
                        About
                    </a>

                    <a
                        className="nav-link nav-link-ltr"
                        onClick={() => {
                            handleAllBlogsClick();
                            setOpen(false);
                        }}
                    >
                        Blogs
                    </a>

                    <a className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <img
                            style={{ display: "none" }}
                            src="cross.png"
                            id="close-btn"
                            onClick={() => setOpen(true)}
                            className="hamberimg"
                        />
                    </a>
                    {user ? (
                        <button onClick={() => handleLogoutButton()} className="logout-btn">
                            Logout
                        </button>
                    ) : (
                        <div className="login-signup-btns">
                            <button onClick={() => handleLoginButton()} className="login-btn">
                                Login
                            </button>
                            <button onClick={() => handleSignupButton()} className="signup-btn">
                                SignUp
                            </button>
                        </div>
                    )}
                </nav>
                <a className="nav-btn" onClick={showNavbar}>
                    <img src="menu.png" className="hamberimg" />
                </a>
            </header>
        </div>
    );
}

export default Nav;