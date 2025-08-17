function SpacingVertical({ size, children }) {
  const style = { height: size };

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default SpacingVertical;
