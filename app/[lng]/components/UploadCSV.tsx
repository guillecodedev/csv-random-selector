import React from 'react';
import { useCSVReader } from 'react-papaparse';
import { useTranslation } from '../../i18n/client'

interface UploadCSVProps {
  setData: (data: any[]) => void;
  cleanData: () => void;
  lng: any;
}


const UploadCSV: React.FC<UploadCSVProps> = ({ setData, cleanData, lng }) => {
  const { t } = useTranslation(lng, 'common');
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
            {acceptedFile ? acceptedFile.name : t('btn_upload')}
          </div>

          <ProgressBar  />
          
          {acceptedFile && (
            <div
              {...getRemoveFileProps()}

                
              onMouseDown={(event: Event) => {
                event.preventDefault();
                handleOnRemoveFile();
              }}
            >
              <button className="button button-red">
                {t('btn_clean')}
              </button>
            </div>
          )}
        </>
      )}
    </CSVReader>
  );
};

export default UploadCSV;
