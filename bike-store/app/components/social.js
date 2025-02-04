// SocialShare.js
const Social = ({ dispatch }) => {
    return (
        <div className="modal-overlay" onClick={() => dispatch({ type: 'TOGGLE_SHARE_MODAL' })}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Share options</h2>
                <p>Get your ass a great new bike!</p>
            </div>
        </div>
    );
};

export default Social;