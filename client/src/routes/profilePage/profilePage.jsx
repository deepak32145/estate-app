import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
        console.log("Logout attempt finished");
    }
  };
  return (
    <div className="profilePage">
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
