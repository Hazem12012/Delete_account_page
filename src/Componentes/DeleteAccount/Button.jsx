export default function Button({
  children,
  className,
  clickEvent,
  buttonName,
  errors,
  style,
}) {
  return (
    <div className="errorContainer">
      {/* Error Message */}
      <p className="errorMessage">{errors}</p>
      <div className="button-container">
        <div className="submit">
          <button
            onClick={clickEvent}
            className={`button ${className}`}
            type="button"
            style={style}
          >
            {children}
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
}
