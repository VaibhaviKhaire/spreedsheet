const Grid = () => {
    const rows = 50; 
    const cols = 20; 
  
    return (
      <div className="grid grid-cols-20 gap-1">
        {Array.from({ length: rows * cols }).map((_, index) => (
          <div
            key={index}
            className="border p-2 min-h-[40px]"
            contentEditable
          >
          </div>
        ))}
      </div>
    );
  };
  
  export default Grid;
  