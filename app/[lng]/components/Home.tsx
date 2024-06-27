'use client';

import { useState } from 'react';
import UploadCSV from './UploadCSV';
import RecordModal from './RecordModal';
import { useTranslation } from '../../i18n/client'


interface HomeProps {
  lng: any;
}


const Home: React.FC<HomeProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'common')

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
        <UploadCSV setData={handleSetData} cleanData={cleanData} lng={lng} />
        <p className='margin-top'>{t('loaded_records')} {data.length}</p>
        {!noMoreRecords && data.length > 1 && (
          <button className='button button-blue' onClick={handleRandomRecord} disabled={remainingRecords.length === 0}>
            {t('select_random_record')}
          </button>
        )}
        {noMoreRecords && <p className='margin-top'>{t('no_more_records')}.</p>}
        {modalRecord && (
          <RecordModal record={modalRecord} onClose={() => setModalRecord(null)} lng={lng} />
        )}
      </div>
    </>
  );
};

export default Home;