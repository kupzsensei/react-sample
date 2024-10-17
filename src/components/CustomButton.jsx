export default function CustomButton(props) {
  return (
    <button onClick={props.onClick} className={`${props.variant === 'danger' ? 'bg-red-400' : props.variant === 'warning' ? 'bg-yellow-400' : props.variant === 'success' ? 'bg-green-400' : 'bg-blue-400' } px-3 py-2 font-medium text-white border border-black rounded-md`}>
      {props.children}
    </button>
  );
}
