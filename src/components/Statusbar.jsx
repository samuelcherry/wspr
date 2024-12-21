const StatusBar = ({ className }) => {
  return (
    <statusBar className={className}>
      <label htmlFor="status">Status Update</label>
      <input
        id="status"
        name="status"
        type="text"
        placeholder="What's on your mind?"
      ></input>
      <button>Post</button>
    </statusBar>
  );
};

export default StatusBar;
