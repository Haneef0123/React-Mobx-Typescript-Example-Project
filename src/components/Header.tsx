import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

function Header() {
  const {
    rootStore: { loginStore,cartStore },
  } = useStore();
  const navigate = useNavigate();
  const onLogout = () => {
    loginStore.logout();
    navigate("/login");
  };
  return (
    <div className="container bg-dark text-white">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
        <Link
          to="/products"
          className="text-white d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          React Project with MobX
        </Link>

        <div className="col-md-3 text-end">
          {!loginStore.getUserToken && (
            <>
              <Link to="/login" className="btn btn-outline-primary me-2">
                Login
              </Link>
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
              <Link to="/checkout" className="btn btn-primary me-2">
                {`Cart (${cartStore.getCartCount || 0})`}
              </Link>
            </>
          )}
          {loginStore.getUserDetails?.username && (
            <>
              <span>Welcome back {loginStore.userDetails?.username}</span>
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default observer(Header);
