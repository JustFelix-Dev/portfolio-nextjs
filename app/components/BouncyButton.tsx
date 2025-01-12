import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const BouncyButton = () => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className=" rounded-sm border-none flex gap-2 items-center py-4 px-12 relative radial-gradient"
    >
      <span className="text-2xl text-[#18181b] font-bold tracking-wide  h-full w-full block relative linear-mask">
        You wanna do this! Let&apos;s go
      </span>
      <Rocket/>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default BouncyButton;