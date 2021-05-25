import { motion } from "framer-motion";

export const Basic = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
);
