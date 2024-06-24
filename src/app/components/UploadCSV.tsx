import React from 'react';
import { useCSVReader } from 'react-papaparse';

interface UploadCSVProps {
  setData: (data: any[]) => void;
  cleanData: () => void;
}


const UploadCSV: React.FC<UploadCSVProps> = ({ setData, cleanData }) => {
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
        recordObj[header] = values[index] || '';
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
    cleanData();
  };

  return (
    <CSVReader
      onUploadAccepted={(results: any) => handleOnDrop(results.data)}
      onError={handleOnError}
      addRemoveButton
      onRemoveFile={handleOnRemoveFile}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps, Remove }: any) => (
        <>
          <div {...getRootProps()} className="button button-blue">
            {acceptedFile ? acceptedFile.name : 'Arrastra y suelta aquí tu archivo CSV o haz clic para cargarlo.'}
          </div>
          <ProgressBar />
          {acceptedFile && (
            <div
              {...getRemoveFileProps()}

                
              onMouseDown={(event: Event) => {
                event.preventDefault();
                handleOnRemoveFile();
              }}
            >
              <button className="button button-red">
                Remover
              </button>
            </div>
          )}
        </>
      )}
    </CSVReader>
  );
};

export default UploadCSV;
