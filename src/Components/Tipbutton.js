const Tipbutton = (props) => {
  return (
    <button
      type="button"
      onClick={() => {
        props.handleClick(props.percentage);
      }}
      className="btn btn-lg text-center btn-dark col-md-2 custom-button-style"
    >
      {props.percentage+"%"}
    </button>
  );
};

export default Tipbutton;
