"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function WorksModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Work Detail</h3>
            <p>AGAMES公式Discordサーバーのモデレーターをしています。<br />
主にルール制定や治安維持等の活動を、スタッフさん方と話し合いながら行なっています。
</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
