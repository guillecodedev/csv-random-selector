'use client';

import { useState } from 'react';
import UploadCSV from '../components/UploadCSV';
import RecordModal from '../components/RecordModal';
import { useTranslation } from 'react-i18next';


const Home: React.FC = () => {
  const { t } = useTranslation('common');
  const [data, setData] = useState<any[]>([]);
  const [modalRecord, setModalRecord] = useState<any | null>(null);
  const [remainingRecords, setRemainingRecords] = useState<any[]>([]);
  const [noMoreRecords, setNoMoreRecords] = useState<boolean>(false);

  const handleRandomRecord = () => {
    if (remainingRecords.length === 0) {
      setNoMoreRecords(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingRecords.length);
    const record = remainingRecords[randomIndex];
    setModalRecord(record);
    setRemainingRecords(remainingRecords.filter((_, i) => i !== randomIndex));
  };

  const handleSetData = (records: any[]) => {
    setData(records);
    setRemainingRecords(records);
    setNoMoreRecords(false);
  };

  const cleanData = () => {
    setData([]);
    setRemainingRecords([]);
    setNoMoreRecords(false);
  }

  return (
    <>
      <div className='container'>
        <UploadCSV setData={handleSetData} cleanData={cleanData} />
        <p className='margin-top'>Registros cargados: {data.length}</p>
        {!noMoreRecords && data.length > 1 && (
          <button className='button button-blue' onClick={handleRandomRecord} disabled={remainingRecords.length === 0}>
            Seleccionar Registro Aleatorio
          </button>
        )}
        {noMoreRecords && <p className='margin-top'>No hay más registros disponibles.</p>}
        {modalRecord && (
          <RecordModal record={modalRecord} onClose={() => setModalRecord(null)} />
        )}
      </div>
    </>
  );
};

export default Home;
