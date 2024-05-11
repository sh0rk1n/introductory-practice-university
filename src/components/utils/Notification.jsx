import {motion} from "framer-motion";
export const Notification = ({isMessageVisible}) => {
  return (
    <>
      {isMessageVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed top-10 right-10 text-2xl bg-green-600 rounded-2xl px-16 py-5"
        >
          Успех
        </motion.div>
      )}
    </>
  );
};

