'use client';

import Head from 'next/head';
import { useState } from 'react';
import UploadCSV from './components/UploadCSV';
import RecordModal from './components/RecordModal';
import  './styles/style.css';

const Home: React.FC = () => {
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
      <Head>
        <title>CSV Random Selector</title>
        <meta name="description" content="This application allows you to upload a CSV file, select random records, and display the information of each record in a modal." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Upload CSV File - Your App" />
        <meta property="og:description" content="This application allows you to upload a CSV file, select random records, and display the information of each record in a modal." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://csv-random-selector.vercel.app/" />
      </Head>
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
