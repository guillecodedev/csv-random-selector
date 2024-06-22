import React from 'react';
import { useCSVReader } from 'react-papaparse';

interface UploadCSVProps {
  setData: (data: any[]) => void;
}


const UploadCSV: React.FC<UploadCSVProps> = ({ setData }) => {
  const { CSVReader } = useCSVReader();

  const handleOnDrop = (data: any[]) => {
    if (!data || data.length === 0) {
      return;
    }

    const headers = data[0].map((header: string) => header.trim());

    const records = data.slice(1).map(record => {
      const values = record.map((value: string) => value.trim());
      const recordObj: { [key: string]: string } = {};
      headers.forEach((header: any, index: any) => {
        recordObj[header] = values[index] || ''; // Si no hay valor, asignar cadena vacía
        console.log(header, recordObj[header]);
      });
      return recordObj;
    });

    setData(records);
  };

  const handleOnError = (err: any) => {
    console.error(err);
  };

  const handleOnRemoveFile = () => {
    setData([]);
  };

  return (
    <CSVReader
      onUploadAccepted={(results: any) => handleOnDrop(results.data)}
      onError={handleOnError}
      addRemoveButton
      onRemoveFile={handleOnRemoveFile}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }: any) => (
        <>
          <div {...getRootProps()} className="button button-blue">
            {acceptedFile ? acceptedFile.name : 'Arrastra y suelta aquí tu archivo CSV o haz clic para cargarlo.'}
          </div>
          <ProgressBar />
          {acceptedFile && (
            <button {...getRemoveFileProps()} className="button button-red">
              Remover
            </button>
          )}
        </>
      )}
    </CSVReader>
  );
};

export default UploadCSV;
