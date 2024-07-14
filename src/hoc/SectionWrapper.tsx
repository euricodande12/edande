import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
import { ComponentType } from "react";

type PropsWithChildrenFallback<P> = P & { children?: React.ReactNode };

// Define a generic type for the Component parameter
const SectionWrapper = <P extends object>(
  Component: ComponentType<PropsWithChildrenFallback<P>>, idName: string
) =>
  function HOC(props: PropsWithChildrenFallback<P>) {
    return (
      <motion.section
      variants={staggerContainer("p", 1)}
      initial="hidden"
      whileInView={"show"}
      viewport={
        { once: true, amount: 0.25}
      }
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>

        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
