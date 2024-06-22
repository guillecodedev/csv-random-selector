import { motion } from 'framer-motion';

interface RecordModalProps {
  record: any;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 }
};

const RecordModal: React.FC<RecordModalProps> = ({ record, onClose }) => {
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
            <span>{value}</span>
          </div>
        ))}
        <button className='button button-red' onClick={onClose}>Cerrar</button>
      </div>
    </motion.div>
  );
};

export default RecordModal;
