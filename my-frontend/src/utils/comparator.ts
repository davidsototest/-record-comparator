export const comparator = async (
  dataArchivo1: string[], 
  dataArchivo2: string[],
  setRegisterDataArchivo1: React.Dispatch<React.SetStateAction<string[]>>,
  setRegisterDataArchivo2: React.Dispatch<React.SetStateAction<string[]>>,
  setProgress: React.Dispatch<React.SetStateAction<number>>,
  setBuffer: React.Dispatch<React.SetStateAction<number>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setFinishedProcess: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);

  const totalRecords1 = dataArchivo1.length;
  const totalRecords2 = dataArchivo2.length;
  const totalSumate = totalRecords1 + totalRecords2;
  const totalDivider = totalSumate / 20;

  let totalActual = totalDivider;
  const timeOut = 3;
  let i = 0;
  let l = 0;

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const compareNextLine1 = async () => {
    while (i < dataArchivo1.length) {
      const line = dataArchivo1[i].trim();
      if (line !== "") {
        if (!dataArchivo2.map((l) => l.trim()).includes(line)) {
          setRegisterDataArchivo1(prev => [...prev, line]);
        }
      }
      if (i === totalActual) {
        totalActual += totalDivider;
        setProgress(prev => prev + 5);
        setBuffer(prev => prev + (5 + Math.random()));
      }
      i++;
      await delay(timeOut);
    }
    compareNextLine2();
  };

  const compareNextLine2 = async () => {
    while (l < dataArchivo2.length) {
      const line = dataArchivo2[l].trim();
      if (line !== "") {
        if (!dataArchivo1.map((l) => l.trim()).includes(line)) {
          setRegisterDataArchivo2(prev => [...prev, line]);
        }
      }
      if (i === totalActual) {
        totalActual += totalDivider;
        setProgress(prev => prev + 5);
        setBuffer(prev => prev + (5 + Math.random()));
      }
      l++;
      i++;
      await delay(timeOut);
    }
    setIsLoading(false);
    setFinishedProcess(true);
  };

  await compareNextLine1();
};
