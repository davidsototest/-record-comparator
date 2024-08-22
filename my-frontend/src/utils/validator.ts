export const validator = (
    file: File,
    archivo: number,
    setDataArchivo1: React.Dispatch<React.SetStateAction<string[]>>,
    setDataArchivo2: React.Dispatch<React.SetStateAction<string[]>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): boolean => {
    setIsLoading(true);
  
    if (file.type === "text/csv" || file.type === "text/plain") {
      const reader = new FileReader();
  
      reader.onload = () => {
        const content = reader.result as string;
        const lines = content
          .split("\n")
          .map((line) => line.trim())
          .filter((line) => line.length > 0);
          
        if (archivo === 1) {
          setDataArchivo1(lines);
        } else {
          setDataArchivo2(lines);
        }
      };
  
      reader.onerror = () => {
        console.error("Error al leer el archivo");
      };
  
      reader.readAsText(file);
  
      setIsLoading(false);
      return true;
    } else {
      setIsLoading(false);
      return false;
    }
  };
  