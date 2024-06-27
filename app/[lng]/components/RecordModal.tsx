import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n/client'

interface RecordModalProps {
  record: any;
  onClose: () => void;
  lng: any;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 }
};

const RecordModal: React.FC<RecordModalProps> = ({ record, onClose, lng }) => {
  const { t } = useTranslation(lng, 'common');

  return (
    <motion.div
      className='modal'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={modalVariants}
    >
      <div className='modal-content'>
        
        {Object.entries(record).map(([field, value], index) => (
          <div key={index} className='record-field'>
            <strong>{field}:</strong>
            <span>{String(value)}</span>
          </div>
        ))}
        <button className='button button-red' onClick={onClose}>{t('btn_close')}</button>
      </div>
    </motion.div>
  );
};

export default RecordModal;
