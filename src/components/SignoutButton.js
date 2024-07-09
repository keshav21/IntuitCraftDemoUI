import '../css/SignoutButton.css';

const SignoutButton = ({ onSignout }) => (
    <button onClick={onSignout} className="signout-button">
      Sign Out
    </button>
  );
  
  export default SignoutButton;