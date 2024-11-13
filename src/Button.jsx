function Button({ styles, onClick, children }) {
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
